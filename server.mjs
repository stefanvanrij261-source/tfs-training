import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { statSync } from "node:fs";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { networkInterfaces } from "node:os";

const port = Number(process.env.PORT || 8000);
const root = process.cwd();
const dataPath = join(root, "data.json");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};
const emptyState = {
  youthGroups: [],
  trainingPlans: [],
  trainingTemplates: [],
  updatedAt: 0,
};

function cleanState(state = {}, fallbackUpdatedAt = Date.now()) {
  return {
    youthGroups: Array.isArray(state.youthGroups) ? state.youthGroups : [],
    trainingPlans: Array.isArray(state.trainingPlans) ? state.trainingPlans : [],
    trainingTemplates: Array.isArray(state.trainingTemplates) ? state.trainingTemplates : [],
    updatedAt: Number(state.updatedAt || fallbackUpdatedAt || Date.now()),
  };
}

async function readState() {
  if (!existsSync(dataPath)) {
    await writeFile(dataPath, JSON.stringify(emptyState, null, 2));
    return emptyState;
  }

  try {
    return cleanState(JSON.parse(await readFile(dataPath, "utf8")), statSync(dataPath).mtimeMs);
  } catch {
    return emptyState;
  }
}

async function writeState(request, response) {
  let body = "";

  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", async () => {
    try {
      const state = JSON.parse(body || "{}");
      const nextState = cleanState(state);

      await writeFile(dataPath, JSON.stringify(nextState, null, 2));
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ ok: true }));
    } catch {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ ok: false }));
    }
  });
}

function getLocalAddresses() {
  return Object.values(networkInterfaces())
    .flat()
    .filter((entry) => entry && entry.family === "IPv4" && !entry.internal)
    .map((entry) => entry.address);
}

createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/api/state" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(await readState()));
    return;
  }

  if (url.pathname === "/api/state" && request.method === "POST") {
    await writeState(request, response);
    return;
  }

  try {
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = normalize(join(root, pathname));

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const body = await readFile(filePath);
    response.writeHead(200, { "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`TFS app draait op http://localhost:${port}`);
  getLocalAddresses().forEach((address) => {
    console.log(`Telefoon/laptop in hetzelfde wifi-netwerk: http://${address}:${port}`);
  });
});
