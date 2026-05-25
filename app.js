const sections = {
  opties: {
    title: "Opties",
    kicker: "Snel instellen",
    heading: "Kies wat je wilt beheren",
    action: "Instelling toevoegen",
    items: [
      {
        title: "App-instellingen",
        text: "Beheer meldingen, privacy en algemene voorkeuren.",
        color: "green",
        icon: "settings",
      },
      {
        title: "Gebruikersrechten",
        text: "Geef trainers, beheerders en leden de juiste toegang.",
        color: "blue",
        icon: "shield",
      },
      {
        title: "Planning",
        text: "Zet standaarddagen, tijden en aanmeldregels klaar.",
        color: "amber",
        icon: "calendar",
      },
    ],
  },
  groepen: {
    title: "Groepen",
    kicker: "Jeugdgroepen",
    heading: "Nog geen jeugdgroepen",
    action: "Maak nieuwe groep aan",
    empty: true,
  },
  groepenMaken: {
    title: "Groepen maken",
    kicker: "Automatisch indelen",
    heading: "Maak trainingsgroepen",
    action: "Groepen maken",
  },
  niveaus: {
    title: "Niveaus",
    kicker: "Voortgang",
    heading: "Niveaus en doelen",
    action: "Bekijk evaluatie",
  },
  evaluatie: {
    title: "Evaluatie",
    kicker: "Klaar voor volgende kleur",
    heading: "Kinderen voor evaluatie",
    action: "Naar groepen",
  },
  trainingen: {
    title: "Trainingen",
    kicker: "Programma",
    heading: "Trainingen plannen",
    action: "Nieuwe training",
  },
  kalender: {
    title: "Kalender",
    kicker: "Weekplanning",
    heading: "Trainingen per dag",
    action: "Nieuwe training",
  },
  nieuws: {
    title: "Nieuws",
    kicker: "Laatste updates",
    heading: "Nieuws voor leden",
    action: "Bericht plaatsen",
    items: [
      {
        title: "Seizoensstart",
        text: "Nieuwe planning staat straks klaar voor alle jeugdgroepen.",
        color: "green",
        icon: "newspaper",
      },
      {
        title: "Materiaal",
        text: "Extra trainingsmateriaal beschikbaar vanaf vrijdag.",
        color: "blue",
        icon: "newspaper",
      },
      {
        title: "Evaluaties",
        text: "Niveaugesprekken openen volgende week.",
        color: "rose",
        icon: "newspaper",
      },
    ],
  },
};

const icons = {
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 0 1-4 0V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 0 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8a2 2 0 0 1 0-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 0 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V2.8a2 2 0 0 1 4 0V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 0 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2a2 2 0 0 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  calendar: '<path d="M8 2v4M16 2v4M3 10h18"/><path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  bar: '<path d="M4 19V5M4 19h16M8 17V9M12 17V6M16 17v-4"/>',
  activity: '<path d="M22 12h-4l-3 8-6-16-3 8H2"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
  newspaper: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h7"/>',
};

const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#scrim");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menuItems = document.querySelectorAll(".menu-item");
const pageTitle = document.querySelector("#pageTitle");
const sectionKicker = document.querySelector("#sectionKicker");
const sectionHeading = document.querySelector("#sectionHeading");
const sectionContent = document.querySelector("#sectionContent");
const primaryAction = document.querySelector("#primaryAction");
const groupCount = document.querySelector("#groupCount");
const groupSummary = document.querySelector("#groupSummary");
const trainingCount = document.querySelector("#trainingCount");
const trainingSummary = document.querySelector("#trainingSummary");
const GROUP_STORAGE_KEY = "clubstart-jeugdgroepen";
const TRAINING_STORAGE_KEY = "clubstart-trainingen";
const TRAINING_TEMPLATE_STORAGE_KEY = "clubstart-training-sjablonen";
const exerciseNames = [
  "Service laag",
  "Service hoog",
  "Lift statisch",
  "Lift met splitstep",
  "Korte netbal statisch",
  "Korte netbal met splitstep",
  "Dropshot statisch",
  "Dropshot met splitstep",
];
const exerciseSides = ["Forehand", "Backhand"];
const levelOrder = ["blauw", "geel", "rood"];
const levelDefinitions = {
  blauw: {
    label: "Blauw",
    className: "level-blue",
    skills: [
      { id: "racket-vasthouden", label: "Correct vasthouden racket" },
      { id: "grip-wisselen", label: "Wisselen van grip op basis van kant" },
      { id: "voet-uitstappen", label: "Goede voet uitstappen" },
      { id: "splitstep-maken", label: "Maken van splitstep" },
      { id: "regels-dubbelspel", label: "Begrijpen regels dubbelspel" },
    ],
  },
  geel: {
    label: "Geel",
    className: "level-yellow",
    skills: [
      { id: "racket-vasthouden", label: "Correct vasthouden racket" },
      { id: "grip-wisselen", label: "Wisselen van grip op basis van kant" },
      { id: "voet-uitstappen", label: "Goede voet uitstappen" },
      { id: "splitstep-maken", label: "Maken van splitstep" },
      { id: "regels-dubbelspel", label: "Begrijpen regels dubbelspel" },
      { id: "timing-splitstep", label: "Correcte timing splitstep" },
      { id: "consistent-net", label: "Consistent over het net kunnen slaan" },
      { id: "backhand-service", label: "Backhand service consistent over het net" },
      { id: "regels-enkelspel", label: "Begrijpen regels enkelspel" },
    ],
  },
  rood: {
    label: "Rood",
    className: "level-red",
    skills: [
      { id: "racket-vasthouden", label: "Correct vasthouden racket" },
      { id: "grip-wisselen", label: "Wisselen van grip op basis van kant" },
      { id: "voet-uitstappen", label: "Goede voet uitstappen" },
      { id: "splitstep-maken", label: "Maken van splitstep" },
      { id: "regels-dubbelspel", label: "Begrijpen regels dubbelspel" },
      { id: "timing-splitstep", label: "Correcte timing splitstep" },
      { id: "consistent-net", label: "Consistent over het net kunnen slaan" },
      { id: "backhand-service", label: "Backhand service consistent over het net" },
      { id: "regels-enkelspel", label: "Begrijpen regels enkelspel" },
      { id: "dropshot-consistent", label: "Consistente dropshot" },
      { id: "voetenwerk-vier-hoeken", label: "Voetenwerk 4 hoeken" },
      { id: "hoge-service", label: "Consistent hoge service" },
    ],
  },
};
const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];
const weekDayLabels = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];
let youthGroups = loadGroups();
let trainingPlans = loadTrainingPlans();
let trainingTemplates = loadTrainingTemplates();
let selectedCalendarYear = new Date().getFullYear();
let selectedCalendarMonth = new Date().getMonth();
let selectedBuilderGroupId = "";
let pendingTrainingDraft = null;
let isChoosingTrainingDate = false;

function renderSection(sectionName) {
  const section = sections[sectionName];

  pageTitle.textContent = section.title;
  sectionKicker.textContent = section.kicker;
  sectionHeading.textContent = section.heading;
  primaryAction.textContent = section.action;

  if (sectionName === "groepen") {
    renderGroups();
    return;
  }

  if (sectionName === "groepenMaken") {
    renderGroupBuilder();
    return;
  }

  if (sectionName === "niveaus") {
    renderLevels();
    return;
  }

  if (sectionName === "evaluatie") {
    renderEvaluation();
    return;
  }

  if (sectionName === "trainingen") {
    renderTrainingPlans();
    return;
  }

  if (sectionName === "kalender") {
    renderCalendar();
    return;
  }

  sectionContent.innerHTML = section.items
    .map(
      (item) => `
        <article class="item-card">
          <span class="item-icon ${item.color}" aria-hidden="true">
            <svg viewBox="0 0 24 24">${icons[item.icon]}</svg>
          </span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTrainingPlans() {
  updateTrainingSummary();
  sectionHeading.textContent = trainingPlans.length ? "Trainingen" : "Nog geen trainingen";
  primaryAction.textContent = "Nieuwe training";

  if (!trainingPlans.length) {
    sectionContent.innerHTML = `
      <div class="empty-state">
        <span class="item-icon blue" aria-hidden="true">
          <svg viewBox="0 0 24 24">${icons.activity}</svg>
        </span>
        <div>
          <h3>Training maken</h3>
          <p>Bouw je training als tijdlijn met trainingsblokken, pauzes en partijen.</p>
        </div>
        <button class="secondary-action" type="button" id="createTrainingButton">Nieuwe training</button>
      </div>
    `;
    document.querySelector("#createTrainingButton").addEventListener("click", () => renderTrainingForm());
    return;
  }

  sectionContent.innerHTML = `
    <div class="training-list">
      ${trainingPlans.map(trainingCardTemplate).join("")}
    </div>
  `;

  bindTrainingCardButtons();
}

function renderLevels() {
  sectionHeading.textContent = "Niveaus en vaardigheden";
  primaryAction.textContent = "Bekijk evaluatie";
  sectionContent.innerHTML = `
    <div class="level-grid">
      ${levelOrder.map((level) => levelCardTemplate(level)).join("")}
    </div>
  `;
}

function levelCardTemplate(level) {
  const definition = levelDefinitions[level];

  return `
    <article class="level-card ${definition.className}">
      <div class="level-card-heading">
        <span class="level-dot"></span>
        <h3>${definition.label}</h3>
      </div>
      <ul class="level-skill-list">
        ${definition.skills.map((skill) => `<li>${skill.label}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderEvaluation() {
  const readyChildren = getEvaluationCandidates();

  sectionHeading.textContent = readyChildren.length ? "Kinderen voor evaluatie" : "Geen kinderen klaar";
  primaryAction.textContent = "Naar groepen";

  if (!readyChildren.length) {
    sectionContent.innerHTML = `
      <div class="empty-state">
        <span class="item-icon blue" aria-hidden="true">
          <svg viewBox="0 0 24 24">${icons.bar}</svg>
        </span>
        <div>
          <h3>Nog niemand klaar voor evaluatie</h3>
          <p>Kinderen verschijnen hier zodra alle vaardigheden van hun huidige kleur zijn afgevinkt.</p>
        </div>
      </div>
    `;
    return;
  }

  sectionContent.innerHTML = `
    <div class="evaluation-list">
      ${readyChildren.map(evaluationCardTemplate).join("")}
    </div>
  `;

  document.querySelectorAll(".promote-child-button").forEach((button) => {
    button.addEventListener("click", () => promoteChild(button.dataset.groupId, button.dataset.childId));
  });
}

function evaluationCardTemplate(candidate) {
  const currentLevel = getChildLevel(candidate.child);
  const nextLevel = getNextLevel(currentLevel);
  const currentDefinition = levelDefinitions[currentLevel];

  return `
    <article class="item-card evaluation-card">
      <span class="level-badge ${currentDefinition.className}">${currentDefinition.label}</span>
      <div>
        <h3>${escapeHtml(candidate.child.name)}</h3>
        <p>${escapeHtml(candidate.group.name)} - alle ${currentDefinition.skills.length} vaardigheden afgevinkt.</p>
      </div>
      ${
        nextLevel
          ? `<button class="primary-action promote-child-button" type="button" data-group-id="${candidate.group.id}" data-child-id="${candidate.child.id}">
              Naar ${levelDefinitions[nextLevel].label}
            </button>`
          : `<span class="level-complete">Hoogste kleur bereikt</span>`
      }
    </article>
  `;
}

function trainingCardTemplate(training) {
  const timeline = getTrainingTimeline(training);
  const totalMinutes = getTimelineMinutes(timeline);
  const dateLabel = getTrainingDateLabel(training);
  const groupName = getGroupName(training.groupId);

  return `
    <article class="item-card training-card">
      <span class="item-icon blue" aria-hidden="true">
        <svg viewBox="0 0 24 24">${icons.activity}</svg>
      </span>
      <div>
        <h3>${escapeHtml(training.name)}</h3>
        <ul class="training-meta">
          <li>${dateLabel}</li>
          <li>${escapeHtml(groupName)}</li>
          <li>${totalMinutes} minuten</li>
          <li>${timeline.length} ${timeline.length === 1 ? "blok" : "blokken"}</li>
        </ul>
      </div>
      <div class="card-actions">
        <button class="secondary-action compact edit-training-button" type="button" data-training-id="${training.id}">
          Aanpassen
        </button>
        <button class="danger-action compact delete-training-button" type="button" data-training-id="${training.id}">
          Verwijder
        </button>
      </div>
      <ol class="timeline-preview">
        ${timeline.map(timelinePreviewItemTemplate).join("")}
      </ol>
    </article>
  `;
}

function renderTrainingForm(trainingId = "") {
  const training = trainingPlans.find((item) => item.id === trainingId);
  const draft = pendingTrainingDraft && pendingTrainingDraft.id === trainingId ? pendingTrainingDraft : null;
  const formTraining = draft || training;
  const isEditing = Boolean(trainingId);
  const timeline = getTrainingTimeline(formTraining);

  sectionHeading.textContent = isEditing ? "Training aanpassen" : "Nieuwe training";
  primaryAction.textContent = isEditing ? "Wijzigingen opslaan" : "Training opslaan";
  sectionContent.innerHTML = `
    <form class="training-form" id="trainingForm" data-training-id="${formTraining?.id ?? ""}">
      <div class="form-grid">
        <label class="field">
          <span>Naam training</span>
          <input type="text" name="trainingName" placeholder="Bijvoorbeeld Techniek jeugd" value="${escapeHtml(formTraining?.name ?? "")}" required />
        </label>
        <div class="field date-choice-field">
          <span>Datum</span>
          <input type="hidden" name="trainingDate" id="trainingDate" value="${escapeHtml(formTraining?.date ?? "")}" required />
          <button class="secondary-action" type="button" id="chooseDateButton">
            ${formTraining?.date ? formatDisplayDate(formTraining.date) : "Kies datum in kalender"}
          </button>
        </div>
        <label class="field">
          <span>Groep</span>
          <select name="trainingGroupId">
            <option value="">Geen groep gekozen</option>
            ${youthGroups
              .map(
                (group) =>
                  `<option value="${group.id}" ${formTraining?.groupId === group.id ? "selected" : ""}>${escapeHtml(group.name)}</option>`,
              )
              .join("")}
          </select>
        </label>
        <label class="field">
          <span>Totale duur</span>
          <input type="text" id="timelineTotal" value="${getTimelineMinutes(timeline)} minuten" readonly />
        </label>
      </div>

      <div class="training-tools">
        <button class="secondary-action" type="button" id="loadTrainingTemplateButton">Laad training</button>
        <div class="template-menu">
          <button class="secondary-action icon-text-button" type="button" id="templateMenuButton" aria-expanded="false">
            ...
          </button>
          <div class="template-menu-panel" id="templateMenuPanel" hidden>
            <button class="secondary-action" type="button" id="saveTrainingTemplateButton">
              Training opslaan
            </button>
          </div>
        </div>
      </div>
      <div class="template-loader" id="templateLoader" hidden>
        ${
          trainingTemplates.length
            ? trainingTemplates.map(trainingTemplateButtonTemplate).join("")
            : `<p class="muted-text">Nog geen opgeslagen trainingen.</p>`
        }
      </div>

      <div class="training-row-header">
        <h3>Tijdlijn</h3>
        <button class="secondary-action compact" type="button" id="addTimelineBlockButton">Blok toevoegen</button>
      </div>
      <div class="timeline-builder" id="timelineList">
        ${(timeline.length ? timeline : [createDefaultTimelineBlock()])
          .map((block, index) => timelineRowTemplate(index + 1, block))
          .join("")}
      </div>

      <div class="form-actions">
        <button class="secondary-action" type="button" id="cancelTrainingButton">Annuleren</button>
        <div class="submit-actions">
          <button class="primary-action" type="submit" name="submitAction" value="save">${isEditing ? "Wijzigingen opslaan" : "Training opslaan"}</button>
        </div>
      </div>
    </form>
  `;

  document.querySelector("#addTimelineBlockButton").addEventListener("click", addTimelineBlock);
  document.querySelector("#cancelTrainingButton").addEventListener("click", cancelTrainingForm);
  document.querySelector("#trainingForm").addEventListener("submit", saveTrainingPlan);
  document.querySelector("#chooseDateButton").addEventListener("click", openCalendarDatePicker);
  document.querySelector("#templateMenuButton").addEventListener("click", toggleTemplateMenu);
  document.querySelector("#saveTrainingTemplateButton").addEventListener("click", saveCurrentTrainingTemplate);
  document.querySelector("#loadTrainingTemplateButton").addEventListener("click", toggleTemplateLoader);
  document.querySelectorAll(".load-template-button").forEach((button) => {
    button.addEventListener("click", () => loadTrainingTemplate(button.dataset.templateId));
  });
  bindTimelineRows();
  updateTimelineTotal();
}

function trainingTemplateButtonTemplate(template) {
  return `
    <button class="template-load-card load-template-button" type="button" data-template-id="${template.id}">
      <strong>${escapeHtml(template.templateName)}</strong>
      <span>${getTimelineMinutes(getTrainingTimeline(template))} minuten</span>
    </button>
  `;
}

function timelineRowTemplate(number, block = {}) {
  const type = block.type || "training";
  const side = block.side || "Forehand";
  const exercise = block.exercise || exerciseNames[0];

  return `
    <div class="timeline-row" data-type="${type}">
      <div class="timeline-index">${number}</div>
      <label class="field">
        <span>Soort</span>
        <select name="timelineType" class="timeline-type">
          <option value="training" ${type === "training" ? "selected" : ""}>Training</option>
          <option value="pauze" ${type === "pauze" ? "selected" : ""}>Pauze</option>
          <option value="partij" ${type === "partij" ? "selected" : ""}>Partijen</option>
        </select>
      </label>
      <label class="field training-only">
        <span>Kant</span>
        <select name="timelineSide">
          ${exerciseSides.map((item) => `<option value="${item}" ${side === item ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label class="field training-only">
        <span>Oefening</span>
        <select name="timelineExercise">
          ${exerciseNames.map((item) => `<option value="${item}" ${exercise === item ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label class="field pause-party-only">
        <span>Omschrijving</span>
        <input type="text" name="timelineLabel" placeholder="Bijvoorbeeld drinkpauze" value="${escapeHtml(block.label ?? "")}" />
      </label>
      <label class="field">
        <span>Minuten</span>
        <input type="number" name="timelineMinutes" min="1" max="120" placeholder="10" value="${escapeHtml(block.minutes ?? "")}" required />
      </label>
      <button class="secondary-action compact remove-timeline-button" type="button">Verwijder</button>
    </div>
  `;
}

function timelinePreviewItemTemplate(block) {
  const label = getTimelineBlockLabel(block);
  const typeLabel = getTimelineTypeLabel(block.type);

  return `
    <li>
      <span>${typeLabel}</span>
      <strong>${escapeHtml(label)}</strong>
      <small>${escapeHtml(block.minutes || 0)} min</small>
    </li>
  `;
}

function addTimelineBlock() {
  const timelineList = document.querySelector("#timelineList");
  const nextNumber = timelineList.querySelectorAll(".timeline-row").length + 1;
  timelineList.insertAdjacentHTML("beforeend", timelineRowTemplate(nextNumber, createDefaultTimelineBlock()));
  bindTimelineRows();
  updateTimelineTotal();
}

function bindTimelineRows() {
  document.querySelectorAll(".timeline-row").forEach((row) => {
    const typeSelect = row.querySelector(".timeline-type");
    const removeButton = row.querySelector(".remove-timeline-button");
    const minuteInput = row.querySelector('input[name="timelineMinutes"]');

    row.dataset.type = typeSelect.value;
    typeSelect.onchange = () => {
      row.dataset.type = typeSelect.value;
    };
    minuteInput.oninput = updateTimelineTotal;
    removeButton.onclick = () => {
      if (document.querySelectorAll(".timeline-row").length === 1) {
        return;
      }

      row.remove();
      renumberTimelineRows();
      updateTimelineTotal();
    };
  });
}

function renumberTimelineRows() {
  document.querySelectorAll(".timeline-row").forEach((row, index) => {
    row.querySelector(".timeline-index").textContent = index + 1;
  });
}

function updateTimelineTotal() {
  const totalField = document.querySelector("#timelineTotal");

  if (!totalField) {
    return;
  }

  const total = Array.from(document.querySelectorAll('input[name="timelineMinutes"]')).reduce(
    (sum, input) => sum + Number(input.value || 0),
    0,
  );
  totalField.value = `${total} minuten`;
}

function saveTrainingPlan(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const trainingId = event.currentTarget.dataset.trainingId;
  const selectedDate = String(formData.get("trainingDate")).trim();

  if (!selectedDate) {
    openCalendarDatePicker();
    return;
  }

  const types = formData.getAll("timelineType").map((value) => String(value).trim());
  const sides = formData.getAll("timelineSide").map((value) => String(value).trim());
  const exercises = formData.getAll("timelineExercise").map((value) => String(value).trim());
  const labels = formData.getAll("timelineLabel").map((value) => String(value).trim());
  const minutes = formData.getAll("timelineMinutes").map((value) => String(value).trim());
  const timeline = types
    .map((type, index) => {
      const block = {
        type,
        minutes: minutes[index],
      };

      if (type === "training") {
        block.side = sides[index];
        block.exercise = exercises[index];
      } else {
        block.label = labels[index] || getTimelineTypeLabel(type);
      }

      return block;
    })
    .filter((block) => block.type && block.minutes);
  const nextTraining = {
    id: trainingId || createId(),
    name: String(formData.get("trainingName")).trim(),
    date: selectedDate,
    groupId: String(formData.get("trainingGroupId") || ""),
    timeline,
  };

  if (trainingId) {
    trainingPlans = trainingPlans.map((training) =>
      training.id === trainingId ? nextTraining : training,
    );
  } else {
    trainingPlans = [...trainingPlans, nextTraining];
  }

  saveTrainingPlans();
  pendingTrainingDraft = null;
  isChoosingTrainingDate = false;
  renderActiveTrainingOverview();
}

function openCalendarDatePicker() {
  const trainingForm = document.querySelector("#trainingForm");

  if (!trainingForm) {
    return;
  }

  pendingTrainingDraft = collectTrainingDraft(trainingForm);
  isChoosingTrainingDate = true;
  selectedCalendarYear = pendingTrainingDraft.date
    ? Number(pendingTrainingDraft.date.slice(0, 4))
    : selectedCalendarYear;
  selectedCalendarMonth = pendingTrainingDraft.date
    ? Number(pendingTrainingDraft.date.slice(5, 7)) - 1
    : selectedCalendarMonth;
  activateMenuItem("kalender");
  renderCalendar();
}

function collectTrainingDraft(form) {
  const formData = new FormData(form);
  const types = formData.getAll("timelineType").map((value) => String(value).trim());
  const sides = formData.getAll("timelineSide").map((value) => String(value).trim());
  const exercises = formData.getAll("timelineExercise").map((value) => String(value).trim());
  const labels = formData.getAll("timelineLabel").map((value) => String(value).trim());
  const minutes = formData.getAll("timelineMinutes").map((value) => String(value).trim());

  return {
    id: form.dataset.trainingId || "",
    name: String(formData.get("trainingName") || "").trim(),
    date: String(formData.get("trainingDate") || "").trim(),
    groupId: String(formData.get("trainingGroupId") || ""),
    timeline: types.map((type, index) => {
      if (type === "training") {
        return {
          type,
          side: sides[index],
          exercise: exercises[index],
          minutes: minutes[index],
        };
      }

      return {
        type,
        label: labels[index],
        minutes: minutes[index],
      };
    }),
  };
}

function toggleTemplateMenu() {
  const menuButton = document.querySelector("#templateMenuButton");
  const panel = document.querySelector("#templateMenuPanel");
  const willOpen = panel.hidden;

  panel.hidden = !willOpen;
  menuButton.setAttribute("aria-expanded", String(willOpen));
}

function toggleTemplateLoader() {
  const loader = document.querySelector("#templateLoader");

  loader.hidden = !loader.hidden;
}

function saveCurrentTrainingTemplate() {
  const trainingForm = document.querySelector("#trainingForm");

  if (!trainingForm) {
    return;
  }

  const templateName = window.prompt("Naam voor deze opgeslagen training:");

  if (!templateName?.trim()) {
    return;
  }

  const draft = collectTrainingDraft(trainingForm);
  const template = {
    ...draft,
    id: createId(),
    templateName: templateName.trim(),
    date: "",
  };

  trainingTemplates = [template, ...trainingTemplates];
  saveTrainingTemplates();
  renderTrainingForm(draft.id || "");
}

function loadTrainingTemplate(templateId) {
  const template = trainingTemplates.find((item) => item.id === templateId);
  const trainingForm = document.querySelector("#trainingForm");

  if (!template || !trainingForm) {
    return;
  }

  const currentDraft = collectTrainingDraft(trainingForm);
  pendingTrainingDraft = {
    ...template,
    id: currentDraft.id,
    date: currentDraft.date,
    name: template.name || template.templateName,
  };
  renderTrainingForm(currentDraft.id || "");
}

function renderActiveTrainingOverview() {
  const activeSection = document.querySelector(".menu-item.active")?.dataset.section;

  if (activeSection === "kalender") {
    renderCalendar();
    return;
  }

  renderTrainingPlans();
}

function cancelTrainingForm() {
  pendingTrainingDraft = null;
  isChoosingTrainingDate = false;
  renderActiveTrainingOverview();
}

function renderCalendar() {
  updateTrainingSummary();
  sectionHeading.textContent = isChoosingTrainingDate ? "Kies een trainingsdatum" : "Kalender";
  primaryAction.textContent = "Nieuwe training";

  sectionContent.innerHTML = `
    <div class="year-calendar">
      <div class="calendar-toolbar">
        <button class="secondary-action compact" type="button" id="previousMonthButton">Vorige maand</button>
        <div class="calendar-current-controls">
          <label class="field">
            <span>Maand</span>
            <select id="calendarMonthSelect">
              ${monthNames
                .map(
                  (month, index) =>
                    `<option value="${index}" ${selectedCalendarMonth === index ? "selected" : ""}>${month}</option>`,
                )
                .join("")}
            </select>
          </label>
          <label class="field year-field">
            <span>Jaar</span>
            <input type="number" id="calendarYearInput" min="2020" max="2100" value="${selectedCalendarYear}" />
          </label>
        </div>
        <button class="secondary-action compact" type="button" id="nextMonthButton">Volgende maand</button>
      </div>
      ${
        isChoosingTrainingDate
          ? `<p class="calendar-helper">Kies een woensdag of zaterdag voor deze training.</p>`
          : ""
      }
      <div class="month-grid">
        ${calendarMonthTemplate(selectedCalendarMonth, monthNames[selectedCalendarMonth])}
      </div>
    </div>
  `;

  document.querySelector("#previousMonthButton").addEventListener("click", () => {
    selectedCalendarMonth -= 1;
    if (selectedCalendarMonth < 0) {
      selectedCalendarMonth = 11;
      selectedCalendarYear -= 1;
    }
    renderCalendar();
  });
  document.querySelector("#nextMonthButton").addEventListener("click", () => {
    selectedCalendarMonth += 1;
    if (selectedCalendarMonth > 11) {
      selectedCalendarMonth = 0;
      selectedCalendarYear += 1;
    }
    renderCalendar();
  });
  document.querySelector("#calendarMonthSelect").addEventListener("change", (event) => {
    selectedCalendarMonth = Number(event.target.value);
    renderCalendar();
  });
  document.querySelector("#calendarYearInput").addEventListener("change", (event) => {
    selectedCalendarYear = Number(event.target.value) || new Date().getFullYear();
    renderCalendar();
  });
  document.querySelectorAll(".calendar-date-button").forEach((button) => {
    button.addEventListener("click", () => handleCalendarDateClick(button.dataset.date));
  });
  bindTrainingCardButtons();
}

function calendarMonthTemplate(monthIndex, monthName) {
  const firstDay = new Date(selectedCalendarYear, monthIndex, 1);
  const daysInMonth = new Date(selectedCalendarYear, monthIndex + 1, 0).getDate();
  const leadingEmptyDays = (firstDay.getDay() + 6) % 7;
  const emptyCells = Array.from({ length: leadingEmptyDays }, () => `<span class="calendar-empty"></span>`);
  const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(selectedCalendarYear, monthIndex, index + 1);
    return calendarDateTemplate(date);
  });

  return `
    <section class="calendar-month">
      <h3>${monthName}</h3>
      <div class="weekday-row">
        ${weekDayLabels.map((day) => `<span>${day}</span>`).join("")}
      </div>
      <div class="month-days">
        ${emptyCells.join("")}${dayCells.join("")}
      </div>
    </section>
  `;
}

function calendarDateTemplate(date) {
  const isoDate = toISODate(date);
  const trainings = getTrainingsForDate(isoDate);
  const isSelectable = isTrainingDateAllowed(date);
  const isSelected = pendingTrainingDraft?.date === isoDate;
  const title = trainings.map((training) => training.name).join(", ");

  return `
    <button
      class="calendar-date-button ${isSelectable ? "selectable" : ""} ${trainings.length ? "has-training" : ""} ${isSelected ? "selected" : ""}"
      type="button"
      data-date="${isoDate}"
      ${isChoosingTrainingDate && !isSelectable ? "disabled" : ""}
      title="${escapeHtml(title)}"
    >
      <span>${date.getDate()}</span>
      ${trainings.length ? `<small>${trainings.length}</small>` : ""}
    </button>
  `;
}

function handleCalendarDateClick(isoDate) {
  if (isChoosingTrainingDate) {
    pendingTrainingDraft = {
      ...(pendingTrainingDraft || {}),
      date: isoDate,
    };
    isChoosingTrainingDate = false;
    activateMenuItem("trainingen");
    renderTrainingForm(pendingTrainingDraft.id || "");
    return;
  }

  const trainings = getTrainingsForDate(isoDate);

  if (!trainings.length) {
    return;
  }

  sectionHeading.textContent = formatDisplayDate(isoDate);
  sectionContent.innerHTML = `
    <div class="training-list">
      ${trainings.map(trainingCardTemplate).join("")}
    </div>
  `;
  bindTrainingCardButtons();
}

function bindTrainingCardButtons() {
  document.querySelectorAll(".edit-training-button").forEach((button) => {
    button.addEventListener("click", () => renderTrainingForm(button.dataset.trainingId));
  });
  document.querySelectorAll(".delete-training-button").forEach((button) => {
    button.addEventListener("click", () => deleteTrainingPlan(button.dataset.trainingId));
  });
}

function deleteTrainingPlan(trainingId) {
  const training = trainingPlans.find((item) => item.id === trainingId);

  if (!training) {
    return;
  }

  const shouldDelete = window.confirm(`Training "${training.name}" verwijderen?`);

  if (!shouldDelete) {
    return;
  }

  trainingPlans = trainingPlans.filter((item) => item.id !== trainingId);
  saveTrainingPlans();
  renderActiveTrainingOverview();
}

function getTrainingTimeline(training) {
  if (!training) {
    return [];
  }

  if (Array.isArray(training.timeline)) {
    return training.timeline;
  }

  const timeline = [];

  if (Array.isArray(training.exercises)) {
    training.exercises.forEach((exercise) => {
      timeline.push({
        type: "training",
        side: exercise.side,
        exercise: exercise.name,
        minutes: exercise.minutes,
      });
    });
  }

  if (Array.isArray(training.pauses)) {
    training.pauses.forEach((pause) => {
      timeline.push({
        type: "pauze",
        label: pause.name || "Pauze",
        minutes: pause.minutes || "",
      });
    });
  }

  if (training.matchTime) {
    timeline.push({
      type: "partij",
      label: "Partijen",
      minutes: training.matchTime,
    });
  }

  return timeline;
}

function getTimelineMinutes(timeline) {
  return timeline.reduce((sum, block) => sum + Number(block.minutes || 0), 0);
}

function createDefaultTimelineBlock() {
  return {
    type: "training",
    side: "Forehand",
    exercise: exerciseNames[0],
    minutes: "",
  };
}

function getTimelineTypeLabel(type) {
  const labels = {
    training: "Training",
    pauze: "Pauze",
    partij: "Partijen",
  };

  return labels[type] || "Blok";
}

function getTimelineBlockLabel(block) {
  if (block.type === "training") {
    return `${block.side || "Forehand"} - ${block.exercise || exerciseNames[0]}`;
  }

  return block.label || getTimelineTypeLabel(block.type);
}

function getTrainingDayLabel(day) {
  if (day === "zaterdag") {
    return "Zaterdag";
  }

  return "Woensdag";
}

function getTrainingDateLabel(training) {
  if (training?.date) {
    return formatDisplayDate(training.date);
  }

  return getTrainingDayLabel(training?.day);
}

function getGroupName(groupId) {
  const group = youthGroups.find((item) => item.id === groupId);

  return group?.name || "Geen groep";
}

function getTrainingsForDate(isoDate) {
  return trainingPlans.filter((training) => training.date === isoDate);
}

function isTrainingDateAllowed(date) {
  const day = date.getDay();
  return day === 3 || day === 6;
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDisplayDate(isoDate) {
  if (!isoDate) {
    return "Geen datum gekozen";
  }

  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const dayName = date.toLocaleDateString("nl-NL", { weekday: "long" });
  const monthName = date.toLocaleDateString("nl-NL", { month: "long" });

  return `${capitalize(dayName)} ${day} ${monthName} ${year}`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderGroups() {
  updateGroupSummary();
  sectionHeading.textContent = youthGroups.length ? "Jeugdgroepen" : "Nog geen jeugdgroepen";
  primaryAction.textContent = "Maak nieuwe groep aan";

  if (!youthGroups.length) {
    sectionContent.innerHTML = `
      <div class="empty-state">
        <span class="item-icon blue" aria-hidden="true">
          <svg viewBox="0 0 24 24">${icons.users}</svg>
        </span>
        <div>
          <h3>Jeugdgroep aanmaken</h3>
          <p>Maak een nieuwe groep aan en voeg per kind de naam en leeftijd toe.</p>
        </div>
        <button class="secondary-action" type="button" id="createGroupButton">Maak nieuwe groep aan</button>
      </div>
    `;
    document.querySelector("#createGroupButton").addEventListener("click", () => renderGroupForm());
    return;
  }

  sectionContent.innerHTML = youthGroups
    .map(
      (group) => `
        <article class="item-card group-card">
          <span class="item-icon green" aria-hidden="true">
            <svg viewBox="0 0 24 24">${icons.users}</svg>
          </span>
          <div>
            <h3>${escapeHtml(group.name)}</h3>
            <p>${group.children.length} ${group.children.length === 1 ? "kind" : "kinderen"} toegevoegd.</p>
          </div>
          <ul class="child-summary">
            ${group.children.map((child) => childSummaryTemplate(child, group)).join("")}
          </ul>
          <button class="secondary-action compact edit-group-button" type="button" data-group-id="${group.id}">
            Aanpassen
          </button>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".edit-group-button").forEach((button) => {
    button.addEventListener("click", () => renderGroupForm(button.dataset.groupId));
  });
  document.querySelectorAll(".child-summary-button").forEach((button) => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.getAttribute("aria-controls"));
      const willOpen = details.hidden;

      details.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });
}

function renderGroupForm(groupId = "") {
  const group = youthGroups.find((item) => item.id === groupId);
  const isEditing = Boolean(group);

  sectionHeading.textContent = isEditing ? "Jeugdgroep aanpassen" : "Nieuwe jeugdgroep";
  primaryAction.textContent = isEditing ? "Wijzigingen opslaan" : "Groep opslaan";
  sectionContent.innerHTML = `
    <form class="group-form" id="groupForm" data-group-id="${group?.id ?? ""}">
      <label class="field">
        <span>Groepsnaam</span>
        <input
          type="text"
          name="groupName"
          placeholder="Bijvoorbeeld Jeugd 8-10 jaar"
          value="${escapeHtml(group?.name ?? "")}"
          required
        />
      </label>

      <div class="children-header">
        <h3>Kinderen</h3>
        <button class="secondary-action compact" type="button" id="addChildButton">Kind toevoegen</button>
      </div>

      <div class="children-list" id="childrenList">
        ${(group?.children?.length ? group.children : [{}])
          .map((child, index) => childRowTemplate(index + 1, child, group?.children ?? []))
          .join("")}
      </div>

      <div class="form-actions">
        <button class="secondary-action" type="button" id="cancelGroupButton">Annuleren</button>
        <button class="primary-action" type="submit">${isEditing ? "Wijzigingen opslaan" : "Groep opslaan"}</button>
      </div>
    </form>
  `;

  document.querySelector("#addChildButton").addEventListener("click", addChildRow);
  document.querySelector("#cancelGroupButton").addEventListener("click", () => renderSection("groepen"));
  document.querySelector("#groupForm").addEventListener("submit", saveGroup);
  bindChildRows();
}

function childRowTemplate(number, child = {}, groupChildren = []) {
  const childId = child.id || createId();
  const level = getChildLevel(child);
  const definition = levelDefinitions[level];
  const detailsId = `child-row-details-${childId}`;
  const isOpen = !child.name;
  return `
    <div class="child-row" data-child-number="${number}" data-child-id="${escapeHtml(childId)}">
      <input type="hidden" name="childId" value="${escapeHtml(childId)}" />
      <div class="child-row-summary">
        <label class="field child-name-field">
          <span>Naam kind ${number}</span>
          <input type="text" name="childName" placeholder="Naam" value="${escapeHtml(child.name ?? "")}" required />
        </label>
        <span class="level-badge child-row-level-badge ${definition.className}">${definition.label}</span>
        <button class="secondary-action compact child-toggle-button" type="button" aria-expanded="${isOpen}" aria-controls="${escapeHtml(detailsId)}">
          ${isOpen ? "Inklappen" : "Uitklappen"}
        </button>
      </div>
      <div class="child-row-details" id="${escapeHtml(detailsId)}" ${isOpen ? "" : "hidden"}>
      <div class="child-detail-grid">
        <label class="field small-field">
          <span>Leeftijd</span>
          <input type="number" name="childAge" min="3" max="18" placeholder="8" value="${escapeHtml(child.age ?? "")}" required />
        </label>
        <label class="field">
          <span>Kleur</span>
          <select name="childLevel" class="child-level-select">
            ${levelOrder
              .map(
                (levelName) =>
                  `<option value="${levelName}" ${level === levelName ? "selected" : ""}>${levelDefinitions[levelName].label}</option>`,
              )
            .join("")}
          </select>
        </label>
      </div>
        <div class="relation-panel">
          ${relationBlockTemplate("friends", "Vrienden", "Vriend toevoegen", childId, groupChildren, child.friends)}
          ${relationBlockTemplate("noGos", "No-go's", "No-go toevoegen", childId, groupChildren, child.noGos)}
          <p class="relation-note">Een kind kan niet tegelijk vriend en no-go zijn.</p>
        </div>
        <div class="child-skills">
          ${childSkillChecklistTemplate(level, child.completedSkills)}
        </div>
      </div>
    </div>
  `;
}

function addChildRow() {
  const childrenList = document.querySelector("#childrenList");
  const nextNumber = childrenList.querySelectorAll(".child-row").length + 1;
  childrenList.insertAdjacentHTML("beforeend", childRowTemplate(nextNumber));
  bindChildRows();
}

function relationBlockTemplate(type, title, buttonLabel, childId, groupChildren = [], selectedIds = []) {
  const inputName = type === "friends" ? "childFriends" : "childNoGos";

  return `
    <div class="relation-block" data-relation-type="${type}">
      <input type="hidden" name="${inputName}" value="${escapeHtml((Array.isArray(selectedIds) ? selectedIds : []).join(","))}" />
      <div class="relation-heading">
        <strong>${title}</strong>
        <button class="secondary-action compact add-relation-button" type="button" data-relation-type="${type}">
          ${buttonLabel}
        </button>
      </div>
      <div class="relation-chip-list"></div>
      <div class="relation-add-row" hidden>
        <select class="relation-add-select">
          ${childRelationOptionsTemplate(childId, groupChildren, selectedIds)}
        </select>
        <button class="primary-action compact confirm-relation-button" type="button">Toevoegen</button>
      </div>
    </div>
  `;
}

function childRelationOptionsTemplate(childId, groupChildren = [], selectedIds = []) {
  const selectedSet = new Set(Array.isArray(selectedIds) ? selectedIds : []);

  const options = groupChildren
    .filter((child) => child.id && child.id !== childId)
    .filter((child) => !selectedSet.has(child.id))
    .map(
      (child) =>
        `<option value="${escapeHtml(child.id)}">${escapeHtml(child.name || "Naamloos kind")}</option>`,
    )
    .join("");

  return `<option value="">Kies een kind</option>${options}`;
}

function childSkillChecklistTemplate(level, completedSkills = []) {
  const selectedSkills = Array.isArray(completedSkills) ? completedSkills : [];

  return `
    <div class="skill-checklist" data-level="${level}">
      ${levelDefinitions[level].skills
        .map(
          (skill) => `
            <label class="skill-check">
              <input type="checkbox" name="completedSkill" value="${skill.id}" ${selectedSkills.includes(skill.id) ? "checked" : ""} />
              <span>${skill.label}</span>
            </label>
          `,
        )
        .join("")}
    </div>
  `;
}

function bindChildRows() {
  document.querySelectorAll(".child-toggle-button").forEach((button) => {
    button.onclick = () => {
      const details = document.getElementById(button.getAttribute("aria-controls"));
      const willOpen = details.hidden;

      details.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.textContent = willOpen ? "Inklappen" : "Uitklappen";
    };
  });
  document.querySelectorAll(".child-level-select").forEach((select) => {
    select.onchange = () => {
      const row = select.closest(".child-row");
      updateChildRowLevelBadge(row, select.value);
      row.querySelector(".child-skills").innerHTML = childSkillChecklistTemplate(select.value, []);
    };
  });
  document.querySelectorAll(".add-relation-button").forEach((button) => {
    button.onclick = () => {
      const row = button.closest(".child-row");
      const block = button.closest(".relation-block");
      const addRow = block.querySelector(".relation-add-row");
      const willOpen = addRow.hidden;

      refreshChildRelationOptions();
      addRow.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    };
  });
  document.querySelectorAll(".confirm-relation-button").forEach((button) => {
    button.onclick = () => {
      const row = button.closest(".child-row");
      const block = button.closest(".relation-block");
      const type = block.dataset.relationType;
      const select = block.querySelector(".relation-add-select");
      const selectedId = select.value;

      if (!selectedId) {
        return;
      }

      addRelationValue(row, type, selectedId);
      block.querySelector(".relation-add-row").hidden = true;
      refreshChildRelationOptions();
    };
  });
  document.querySelectorAll('input[name="childName"]').forEach((input) => {
    input.oninput = refreshChildRelationOptions;
  });
  document.querySelectorAll(".relation-chip-remove").forEach((button) => {
    button.onclick = () => {
      const row = button.closest(".child-row");
      const block = button.closest(".relation-block");

      removeRelationValue(row, block.dataset.relationType, button.dataset.childId);
      refreshChildRelationOptions();
    };
  });
  refreshChildRelationOptions();
}

function updateChildRowLevelBadge(row, level) {
  const badge = row.querySelector(".child-row-level-badge");
  const definition = levelDefinitions[level] || levelDefinitions.blauw;

  badge.className = `level-badge child-row-level-badge ${definition.className}`;
  badge.textContent = definition.label;
}

function refreshChildRelationOptions() {
  const rows = Array.from(document.querySelectorAll(".child-row"));
  const children = rows.map((row, index) => ({
    id: row.querySelector('input[name="childId"]').value,
    name: row.querySelector('input[name="childName"]').value.trim() || `Kind ${index + 1}`,
  }));

  rows.forEach((row) => {
    const childId = row.querySelector('input[name="childId"]').value;
    const friendIds = getRelationValues(row, "friends");
    const noGoIds = getRelationValues(row, "noGos");
    const cleanFriends = friendIds.filter((id) => id !== childId && children.some((child) => child.id === id));
    const cleanNoGos = noGoIds.filter(
      (id) => id !== childId && !cleanFriends.includes(id) && children.some((child) => child.id === id),
    );

    setRelationValues(row, "friends", cleanFriends);
    setRelationValues(row, "noGos", cleanNoGos);
    renderRelationBlock(row, "friends", children);
    renderRelationBlock(row, "noGos", children);
  });

  document.querySelectorAll(".relation-chip-remove").forEach((button) => {
    button.onclick = () => {
      const row = button.closest(".child-row");
      const block = button.closest(".relation-block");

      removeRelationValue(row, block.dataset.relationType, button.dataset.childId);
      refreshChildRelationOptions();
    };
  });
}

function renderRelationBlock(row, type, children) {
  const childId = row.querySelector('input[name="childId"]').value;
  const block = row.querySelector(`.relation-block[data-relation-type="${type}"]`);
  const selectedIds = getRelationValues(row, type);
  const otherType = type === "friends" ? "noGos" : "friends";
  const blockedIds = new Set([...selectedIds, ...getRelationValues(row, otherType), childId]);
  const selectableChildren = children.filter((child) => !blockedIds.has(child.id));

  block.querySelector(".relation-chip-list").innerHTML = selectedIds.length
    ? selectedIds.map((id) => relationChipTemplate(id, children)).join("")
    : `<span class="relation-empty">${type === "friends" ? "Nog geen vrienden" : "Nog geen no-go's"}</span>`;
  block.querySelector(".relation-add-select").innerHTML =
    `<option value="">Kies een kind</option>` +
    selectableChildren
      .map((child) => `<option value="${escapeHtml(child.id)}">${escapeHtml(child.name)}</option>`)
      .join("");
}

function relationChipTemplate(childId, children) {
  const child = children.find((item) => item.id === childId);

  return `
    <span class="relation-chip">
      ${escapeHtml(child?.name || "Onbekend kind")}
      <button class="relation-chip-remove" type="button" data-child-id="${escapeHtml(childId)}" aria-label="Relatie verwijderen">x</button>
    </span>
  `;
}

function addRelationValue(row, type, childId) {
  const values = new Set(getRelationValues(row, type));
  const otherType = type === "friends" ? "noGos" : "friends";
  const otherValues = new Set(getRelationValues(row, otherType));

  otherValues.delete(childId);
  values.add(childId);
  setRelationValues(row, otherType, otherValues);
  setRelationValues(row, type, values);
}

function removeRelationValue(row, type, childId) {
  const values = new Set(getRelationValues(row, type));

  values.delete(childId);
  setRelationValues(row, type, values);
}

function getRelationValues(row, type) {
  const inputName = type === "friends" ? "childFriends" : "childNoGos";
  const input = row.querySelector(`input[name="${inputName}"]`);

  if (!input?.value) {
    return [];
  }

  return input.value.split(",").filter(Boolean);
}

function setRelationValues(row, type, selectedIds) {
  const inputName = type === "friends" ? "childFriends" : "childNoGos";
  const input = row.querySelector(`input[name="${inputName}"]`);
  const values = Array.from(selectedIds instanceof Set ? selectedIds : new Set(selectedIds));

  input.value = values.join(",");
}

function getSelectedValues(select) {
  if (!select) {
    return [];
  }

  return Array.from(select.selectedOptions).map((option) => option.value);
}

function childSummaryTemplate(child, group) {
  const level = getChildLevel(child);
  const definition = levelDefinitions[level];
  const progress = getChildProgress(child);
  const detailsId = `child-details-${child.id}`;
  const friendNames = getRelationNames(child.friends, group.children);
  const noGoNames = getRelationNames(child.noGos, group.children);

  return `
    <li>
      <button class="child-summary-button" type="button" aria-expanded="false" aria-controls="${escapeHtml(detailsId)}">
        ${escapeHtml(child.name)}
      </button>
      <span class="level-badge ${definition.className}">${definition.label}</span>
      <div class="child-details" id="${escapeHtml(detailsId)}" hidden>
        <span><strong>Leeftijd:</strong> ${escapeHtml(child.age)} jaar</span>
        <span><strong>Vaardigheden:</strong> ${progress.done}/${progress.total}</span>
        <span><strong>Vrienden:</strong> ${friendNames.length ? escapeHtml(friendNames.join(", ")) : "Geen"}</span>
        <span><strong>No-go's:</strong> ${noGoNames.length ? escapeHtml(noGoNames.join(", ")) : "Geen"}</span>
      </div>
    </li>
  `;
}

function getRelationNames(relationIds = [], children = []) {
  const ids = new Set(Array.isArray(relationIds) ? relationIds : []);
  return children.filter((child) => ids.has(child.id)).map((child) => child.name);
}

function getChildLevel(child) {
  return levelDefinitions[child?.level] ? child.level : "blauw";
}

function getChildProgress(child) {
  const level = getChildLevel(child);
  const skills = levelDefinitions[level].skills;
  const completedSkills = Array.isArray(child.completedSkills) ? child.completedSkills : [];
  const done = skills.filter((skill) => completedSkills.includes(skill.id)).length;

  return {
    done,
    total: skills.length,
  };
}

function isChildReadyForEvaluation(child) {
  const progress = getChildProgress(child);
  return progress.total > 0 && progress.done === progress.total;
}

function getEvaluationCandidates() {
  return youthGroups.flatMap((group) =>
    group.children
      .filter((child) => isChildReadyForEvaluation(child))
      .map((child) => ({
        group,
        child,
      })),
  );
}

function getNextLevel(level) {
  const index = levelOrder.indexOf(level);

  if (index < 0 || index === levelOrder.length - 1) {
    return "";
  }

  return levelOrder[index + 1];
}

function promoteChild(groupId, childId) {
  youthGroups = youthGroups.map((group) => {
    if (group.id !== groupId) {
      return group;
    }

    return {
      ...group,
      children: group.children.map((child) => {
        if (child.id !== childId) {
          return child;
        }

        const nextLevel = getNextLevel(getChildLevel(child));

        if (!nextLevel) {
          return child;
        }

        return {
          ...child,
          level: nextLevel,
          completedSkills: [],
        };
      }),
    };
  });
  saveGroups();
  renderEvaluation();
}

function saveGroup(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const groupId = event.currentTarget.dataset.groupId;
  const groupName = String(formData.get("groupName")).trim();
  const children = Array.from(event.currentTarget.querySelectorAll(".child-row"))
    .map((row) => ({
      id: row.querySelector('input[name="childId"]').value || createId(),
      name: row.querySelector('input[name="childName"]').value.trim(),
      age: row.querySelector('input[name="childAge"]').value.trim(),
      level: row.querySelector('select[name="childLevel"]').value,
      friends: getRelationValues(row, "friends"),
      noGos: getRelationValues(row, "noGos"),
      completedSkills: Array.from(row.querySelectorAll('input[name="completedSkill"]:checked')).map(
        (checkbox) => checkbox.value,
      ),
    }))
    .filter((child) => child.name && child.age);
  const nextGroup = normalizeGroupRelationships({
    id: groupId || createId(),
    name: groupName,
    children,
  });

  if (groupId) {
    youthGroups = youthGroups.map((group) => (group.id === groupId ? nextGroup : group));
  } else {
    youthGroups = [...youthGroups, nextGroup];
  }

  saveGroups();
  renderGroups();
}

function normalizeGroupRelationships(group) {
  const childIds = new Set(group.children.map((child) => child.id));
  const friendPairs = new Set();
  const noGoPairs = new Set();
  const pairKey = (firstId, secondId) => [firstId, secondId].sort().join("::");

  group.children.forEach((child) => {
    (Array.isArray(child.friends) ? child.friends : []).forEach((friendId) => {
      if (childIds.has(friendId) && friendId !== child.id) {
        friendPairs.add(pairKey(child.id, friendId));
      }
    });
  });

  group.children.forEach((child) => {
    (Array.isArray(child.noGos) ? child.noGos : []).forEach((noGoId) => {
      const key = pairKey(child.id, noGoId);

      if (childIds.has(noGoId) && noGoId !== child.id && !friendPairs.has(key)) {
        noGoPairs.add(key);
      }
    });
  });

  const children = group.children.map((child) => ({
    ...child,
    friends: [],
    noGos: [],
  }));
  const childById = new Map(children.map((child) => [child.id, child]));

  friendPairs.forEach((key) => {
    const [firstId, secondId] = key.split("::");
    childById.get(firstId).friends.push(secondId);
    childById.get(secondId).friends.push(firstId);
  });
  noGoPairs.forEach((key) => {
    const [firstId, secondId] = key.split("::");
    childById.get(firstId).noGos.push(secondId);
    childById.get(secondId).noGos.push(firstId);
  });

  return {
    ...group,
    children,
  };
}

function renderGroupBuilder(result = null) {
  updateGroupSummary();
  primaryAction.textContent = "Groepen maken";

  if (!youthGroups.length) {
    sectionHeading.textContent = "Eerst een jeugdgroep nodig";
    sectionContent.innerHTML = `
      <div class="empty-state">
        <span class="item-icon blue" aria-hidden="true">
          <svg viewBox="0 0 24 24">${icons.users}</svg>
        </span>
        <div>
          <h3>Nog geen kinderen om in te delen</h3>
          <p>Maak eerst bij Groepen een jeugdgroep aan met kinderen en niveaus.</p>
        </div>
      </div>
    `;
    return;
  }

  selectedBuilderGroupId = selectedBuilderGroupId || youthGroups[0].id;
  const selectedGroup = youthGroups.find((group) => group.id === selectedBuilderGroupId) || youthGroups[0];
  selectedBuilderGroupId = selectedGroup.id;
  sectionHeading.textContent = "Automatische groepen maken";

  sectionContent.innerHTML = `
    <form class="group-builder-form" id="groupBuilderForm">
      <div class="form-grid builder-settings">
        <label class="field">
          <span>Bron groep</span>
          <select name="sourceGroupId" id="sourceGroupSelect">
            ${youthGroups
              .map(
                (group) =>
                  `<option value="${group.id}" ${group.id === selectedGroup.id ? "selected" : ""}>${escapeHtml(group.name)}</option>`,
              )
              .join("")}
          </select>
        </label>
        <label class="field">
          <span>Grootte per groep</span>
          <input type="number" name="groupSize" min="1" max="${Math.max(selectedGroup.children.length, 1)}" value="${Math.min(4, Math.max(selectedGroup.children.length, 1))}" required />
        </label>
      </div>

      <div class="attendance-panel">
        <div class="children-header">
          <h3>Aanwezig</h3>
          <button class="secondary-action compact" type="button" id="selectAllPresentButton">Iedereen aanwezig</button>
        </div>
        <div class="attendance-grid">
          ${selectedGroup.children.map(attendanceOptionTemplate).join("")}
        </div>
      </div>

      <div class="form-actions">
        <button class="primary-action" type="submit">Groepen maken</button>
      </div>
    </form>
    ${result ? groupBuilderResultTemplate(result) : ""}
  `;

  document.querySelector("#sourceGroupSelect").addEventListener("change", (event) => {
    selectedBuilderGroupId = event.target.value;
    renderGroupBuilder();
  });
  document.querySelector("#selectAllPresentButton").addEventListener("click", () => {
    document.querySelectorAll('input[name="presentChild"]').forEach((checkbox) => {
      checkbox.checked = true;
    });
  });
  document.querySelector("#groupBuilderForm").addEventListener("submit", handleGroupBuilderSubmit);
}

function attendanceOptionTemplate(child) {
  const level = getChildLevel(child);
  const definition = levelDefinitions[level];

  return `
    <label class="attendance-option">
      <input type="checkbox" name="presentChild" value="${escapeHtml(child.id)}" checked />
      <span>
        <strong>${escapeHtml(child.name)}</strong>
        <small>${escapeHtml(child.age)} jaar</small>
      </span>
      <span class="level-badge ${definition.className}">${definition.label}</span>
    </label>
  `;
}

function handleGroupBuilderSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const sourceGroupId = form.querySelector('select[name="sourceGroupId"]').value;
  const groupSize = Math.max(1, Number(form.querySelector('input[name="groupSize"]').value || 1));
  const presentIds = new Set(
    Array.from(form.querySelectorAll('input[name="presentChild"]:checked')).map((checkbox) => checkbox.value),
  );
  const sourceGroup = youthGroups.find((group) => group.id === sourceGroupId);

  if (!sourceGroup) {
    return;
  }

  const presentChildren = sourceGroup.children.filter((child) => presentIds.has(child.id));
  const result = createBalancedGroups(presentChildren, groupSize);
  renderGroupBuilder(result);
}

function createBalancedGroups(children, targetSize) {
  const warnings = [];

  if (!children.length) {
    return {
      groups: [],
      warnings: ["Selecteer minimaal een aanwezig kind."],
    };
  }

  const childById = new Map(children.map((child) => [child.id, child]));
  const friendComponents = buildFriendComponents(children);
  const averageLevel = children.reduce((sum, child) => sum + getLevelValue(child), 0) / children.length;
  const averageAge = children.reduce((sum, child) => sum + getAgeValue(child), 0) / children.length;
  const buckets = Array.from({ length: Math.max(1, Math.ceil(children.length / targetSize)) }, () => ({
    components: [],
    members: [],
    levelSum: 0,
    ageSum: 0,
  }));

  friendComponents.forEach((component) => {
    const hasInternalNoGo = component.members.some((child) =>
      component.members.some((otherChild) => child.id !== otherChild.id && getNoGoIds(child).includes(otherChild.id)),
    );

    if (hasInternalNoGo) {
      warnings.push(`${component.members.map((child) => child.name).join(", ")} heeft een vriend/no-go conflict.`);
    }
  });

  friendComponents
    .sort(
      (first, second) =>
        second.levelAverage - first.levelAverage ||
        second.members.length - first.members.length ||
        first.ageAverage - second.ageAverage,
    )
    .forEach((component) => {
      const fittingBuckets = buckets.filter((bucket) => canPlaceComponent(bucket, component, targetSize));
      const candidates = fittingBuckets;

      if (!candidates.length) {
        if (component.members.length > targetSize) {
          warnings.push(
            `${component.members.map((child) => child.name).join(", ")} blijft samen als vriendengroep en is groter dan de ingestelde groepsgrootte.`,
          );
        }

        buckets.push({
          components: [component],
          members: [...component.members],
          levelSum: component.levelSum,
          ageSum: component.ageSum,
        });
        return;
      }

      candidates.sort(
        (first, second) =>
          getBucketScore(first, component, targetSize, averageLevel, averageAge, candidates) -
          getBucketScore(second, component, targetSize, averageLevel, averageAge, candidates),
      );
      placeComponentInBucket(candidates[0], component);
    });

  compactUnderfilledBuckets(buckets, targetSize);

  return {
    groups: buckets
      .filter((bucket) => bucket.members.length)
      .map((bucket) => ({
        ...bucket,
        members: bucket.members.sort((first, second) => getLevelValue(second) - getLevelValue(first)),
      })),
    warnings,
    childById,
  };
}

function placeComponentInBucket(bucket, component) {
  bucket.components.push(component);
  bucket.members.push(...component.members);
  bucket.levelSum += component.levelSum;
  bucket.ageSum += component.ageSum;
}

function removeComponentFromBucket(bucket, component) {
  const componentIndex = bucket.components.indexOf(component);

  if (componentIndex >= 0) {
    bucket.components.splice(componentIndex, 1);
  }

  component.members.forEach((member) => {
    const memberIndex = bucket.members.findIndex((bucketMember) => bucketMember.id === member.id);

    if (memberIndex >= 0) {
      bucket.members.splice(memberIndex, 1);
    }
  });
  bucket.levelSum -= component.levelSum;
  bucket.ageSum -= component.ageSum;
}

function compactUnderfilledBuckets(buckets, targetSize) {
  let moved = true;

  while (moved) {
    moved = false;
    const underfilledBuckets = buckets
      .filter((bucket) => bucket.members.length && bucket.members.length < targetSize)
      .sort((first, second) => first.members.length - second.members.length);

    if (underfilledBuckets.length <= 1) {
      return;
    }

    const sourceBucket = underfilledBuckets[0];

    for (const component of [...sourceBucket.components]) {
      const targetBucket = buckets
        .filter((bucket) => bucket !== sourceBucket && canPlaceComponent(bucket, component, targetSize))
        .sort((first, second) => second.members.length - first.members.length)[0];

      if (targetBucket) {
        removeComponentFromBucket(sourceBucket, component);
        placeComponentInBucket(targetBucket, component);
        moved = true;
        break;
      }
    }
  }
}

function buildFriendComponents(children) {
  const parent = new Map(children.map((child) => [child.id, child.id]));
  const find = (id) => {
    if (parent.get(id) !== id) {
      parent.set(id, find(parent.get(id)));
    }

    return parent.get(id);
  };
  const union = (firstId, secondId) => {
    const firstRoot = find(firstId);
    const secondRoot = find(secondId);

    if (firstRoot !== secondRoot) {
      parent.set(secondRoot, firstRoot);
    }
  };
  const childIds = new Set(children.map((child) => child.id));

  children.forEach((child) => {
    getFriendIds(child).forEach((friendId) => {
      if (childIds.has(friendId)) {
        union(child.id, friendId);
      }
    });
  });

  const componentMap = new Map();
  children.forEach((child) => {
    const root = find(child.id);
    const members = componentMap.get(root) || [];
    members.push(child);
    componentMap.set(root, members);
  });

  return Array.from(componentMap.values()).map((members) => {
    const levelSum = members.reduce((sum, child) => sum + getLevelValue(child), 0);
    const ageSum = members.reduce((sum, child) => sum + getAgeValue(child), 0);

    return {
      members,
      levelSum,
      ageSum,
      levelAverage: levelSum / members.length,
      ageAverage: ageSum / members.length,
    };
  });
}

function canPlaceComponent(bucket, component, maxSize) {
  if (bucket.members.length + component.members.length > maxSize) {
    return false;
  }

  return !component.members.some((child) =>
    bucket.members.some((bucketChild) => getNoGoIds(child).includes(bucketChild.id) || getNoGoIds(bucketChild).includes(child.id)),
  );
}

function getBucketScore(bucket, component, targetSize, averageLevel, averageAge, candidates) {
  const nonEmptyCandidateExists = candidates.some((candidate) => candidate.members.length);

  if (!bucket.members.length) {
    return nonEmptyCandidateExists ? 18 : 0;
  }

  const nextSize = bucket.members.length + component.members.length;
  const nextLevelAverage = (bucket.levelSum + component.levelSum) / nextSize;
  const nextAgeAverage = (bucket.ageSum + component.ageSum) / nextSize;
  const levelPenalty = Math.abs(nextLevelAverage - averageLevel) * 9;
  const agePenalty = Math.abs(nextAgeAverage - averageAge) * 0.35;
  const fillPenalty = (targetSize - nextSize) * 2;

  return levelPenalty + agePenalty + fillPenalty;
}

function groupBuilderResultTemplate(result) {
  if (!result.groups.length) {
    return `
      <div class="builder-result">
        <p class="muted-text">${escapeHtml(result.warnings[0] || "Geen indeling gemaakt.")}</p>
      </div>
    `;
  }

  return `
    <div class="builder-result">
      ${
        result.warnings.length
          ? `<div class="builder-warnings">${result.warnings.map((warning) => `<p>${escapeHtml(warning)}</p>`).join("")}</div>`
          : ""
      }
      <div class="generated-group-grid">
        ${result.groups.map((group, index) => generatedGroupTemplate(group, index + 1)).join("")}
      </div>
    </div>
  `;
}

function generatedGroupTemplate(group, number) {
  const average = group.levelSum / group.members.length;
  const ageAverage = group.ageSum / group.members.length;

  return `
    <article class="generated-group-card">
      <div class="generated-group-heading">
        <h3>Groep ${number}</h3>
        <span>${group.members.length} ${group.members.length === 1 ? "kind" : "kinderen"}</span>
      </div>
      <p>Gemiddeld niveau: ${average.toFixed(1)} - gemiddelde leeftijd: ${ageAverage.toFixed(1)}</p>
      <ul>
        ${group.members
          .map((child) => {
            const level = getChildLevel(child);
            return `
              <li>
                <span>${escapeHtml(child.name)} <small>${escapeHtml(child.age || "?")} jaar</small></span>
                <span class="level-badge ${levelDefinitions[level].className}">${levelDefinitions[level].label}</span>
              </li>
            `;
          })
          .join("")}
      </ul>
    </article>
  `;
}

function getFriendIds(child) {
  return Array.isArray(child.friends) ? child.friends : [];
}

function getNoGoIds(child) {
  return Array.isArray(child.noGos) ? child.noGos : [];
}

function getLevelValue(child) {
  const index = levelOrder.indexOf(getChildLevel(child));

  return index + 1;
}

function getAgeValue(child) {
  return Number(child?.age) || 0;
}

function loadGroups() {
  try {
    const savedGroups = localStorage.getItem(GROUP_STORAGE_KEY);
    return savedGroups ? JSON.parse(savedGroups).map((group) => normalizeGroupRelationships(group)) : [];
  } catch {
    return [];
  }
}

function loadTrainingPlans() {
  try {
    const savedTrainingPlans = localStorage.getItem(TRAINING_STORAGE_KEY);
    return savedTrainingPlans ? JSON.parse(savedTrainingPlans) : [];
  } catch {
    return [];
  }
}

function loadTrainingTemplates() {
  try {
    const savedTrainingTemplates = localStorage.getItem(TRAINING_TEMPLATE_STORAGE_KEY);
    return savedTrainingTemplates ? JSON.parse(savedTrainingTemplates) : [];
  } catch {
    return [];
  }
}

function saveGroups() {
  try {
    localStorage.setItem(GROUP_STORAGE_KEY, JSON.stringify(youthGroups));
  } catch {
    // De app blijft werken, ook als de browser opslag blokkeert.
  }
}

function saveTrainingPlans() {
  try {
    localStorage.setItem(TRAINING_STORAGE_KEY, JSON.stringify(trainingPlans));
  } catch {
    // De app blijft werken, ook als de browser opslag blokkeert.
  }
}

function saveTrainingTemplates() {
  try {
    localStorage.setItem(TRAINING_TEMPLATE_STORAGE_KEY, JSON.stringify(trainingTemplates));
  } catch {
    // De app blijft werken, ook als de browser opslag blokkeert.
  }
}

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function updateGroupSummary() {
  if (!groupCount || !groupSummary) {
    return;
  }

  groupCount.textContent = youthGroups.length;
  groupSummary.textContent = youthGroups.length
    ? `${youthGroups.length} ${youthGroups.length === 1 ? "groep" : "groepen"} aangemaakt`
    : "Nog geen groepen aangemaakt";
}

function updateTrainingSummary() {
  if (!trainingCount || !trainingSummary) {
    return;
  }

  trainingCount.textContent = trainingPlans.length;
  trainingSummary.textContent = trainingPlans.length
    ? `${trainingPlans.length} ${trainingPlans.length === 1 ? "training" : "trainingen"} gemaakt`
    : "Nog geen trainingen gemaakt";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function setMenu(open) {
  sidebar.classList.toggle("open", open);
  scrim.hidden = !open;
  openMenu.setAttribute("aria-expanded", String(open));
}

function activateMenuItem(sectionName) {
  menuItems.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionName);
  });
  pageTitle.textContent = sections[sectionName].title;
  sectionKicker.textContent = sections[sectionName].kicker;
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    isChoosingTrainingDate = false;
    pendingTrainingDraft = null;
    activateMenuItem(item.dataset.section);
    renderSection(item.dataset.section);
    setMenu(false);
  });
});

openMenu.addEventListener("click", () => setMenu(true));
closeMenu.addEventListener("click", () => setMenu(false));
scrim.addEventListener("click", () => setMenu(false));
primaryAction.addEventListener("click", () => {
  const activeSection = document.querySelector(".menu-item.active")?.dataset.section;

  if (activeSection === "groepen") {
    const groupForm = document.querySelector("#groupForm");

    if (groupForm) {
      groupForm.requestSubmit();
      return;
    }

    renderGroupForm();
  }

  if (activeSection === "niveaus") {
    activateMenuItem("evaluatie");
    renderEvaluation();
  }

  if (activeSection === "evaluatie") {
    activateMenuItem("groepen");
    renderGroups();
  }

  if (activeSection === "groepenMaken") {
    const builderForm = document.querySelector("#groupBuilderForm");

    if (builderForm) {
      builderForm.requestSubmit();
    }
  }

  if (activeSection === "trainingen") {
    const trainingForm = document.querySelector("#trainingForm");

    if (trainingForm) {
      trainingForm.requestSubmit();
      return;
    }

    pendingTrainingDraft = null;
    renderTrainingForm();
  }

  if (activeSection === "kalender") {
    const trainingForm = document.querySelector("#trainingForm");

    if (trainingForm) {
      trainingForm.requestSubmit();
      return;
    }

    pendingTrainingDraft = null;
    renderTrainingForm();
  }
});

updateGroupSummary();
updateTrainingSummary();
renderSection("opties");
