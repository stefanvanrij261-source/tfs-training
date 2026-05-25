import { get, put } from "@vercel/blob";

const STATE_PATH = "tfs-jeugdtraining/state.json";
const emptyState = {
  youthGroups: [],
  trainingPlans: [],
  trainingTemplates: [],
};

function cleanState(state = {}) {
  return {
    youthGroups: Array.isArray(state.youthGroups) ? state.youthGroups : [],
    trainingPlans: Array.isArray(state.trainingPlans) ? state.trainingPlans : [],
    trainingTemplates: Array.isArray(state.trainingTemplates) ? state.trainingTemplates : [],
  };
}

async function streamToText(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let text = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    text += decoder.decode(value, { stream: true });
  }

  text += decoder.decode();
  return text;
}

async function readState() {
  try {
    const blob = await get(STATE_PATH, {
      access: "private",
    });

    if (!blob?.stream) {
      return emptyState;
    }

    return cleanState(JSON.parse(await streamToText(blob.stream)));
  } catch {
    return emptyState;
  }
}

async function writeState(state) {
  await put(STATE_PATH, JSON.stringify(cleanState(state), null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function parseBody(request) {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body || "{}");
  }

  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    response.status(503).json({
      ok: false,
      message: "Vercel Blob is nog niet gekoppeld aan dit project.",
    });
    return;
  }

  if (request.method === "GET") {
    response.status(200).json(await readState());
    return;
  }

  if (request.method === "POST") {
    try {
      await writeState(await parseBody(request));
      response.status(200).json({ ok: true });
    } catch {
      response.status(400).json({ ok: false });
    }
    return;
  }

  response.setHeader("Allow", "GET, POST");
  response.status(405).json({ ok: false });
}
