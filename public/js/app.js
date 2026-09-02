/**
 * DMR DIGITAL BILLBOARD — CORE ENGINE (VANILLA JAVASCRIPT)
 * Brand: DMR Earthmoving Training Specialists (Harare, Zimbabwe)
 * Zero-Framework • Ultra-Fast • Central Configuration & Admin Readines
 */

// ==========================================================================
// 1. CENTRAL CONFIGURATION (SINGLE SOURCE OF TRUTH)
// ==========================================================================
const DMR_CONFIG = {
  campaignTitle: "TRAIN. CERTIFY. OPERATE.",
  campaignText: "Build practical skills on real earthmoving equipment.",
  phoneDisplay: "0779068932",
  phoneInternational: "+263779068932",
  whatsapp: "263779068932",
  scanSource: "DMR-T-SHIRT",
  companyName: "DMR Earthmoving",
  tagline: "Training Specialists",
  location: "185 Willowvale Road, Harare, Zimbabwe",
  featuredMachineId: "excavator"
};

// ==========================================================================
// 2. 10 ACCREDITED MACHINERY DATASET (EDITORIAL READY)
// ==========================================================================
const DMR_MACHINES = [
  {
    id: "excavator",
    number: "01",
    name: "Excavator",
    headline: "BECOME AN EXCAVATOR OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Hands-on operator training",
    description: "Master trenching, benching, deep excavation, site loading, and hydraulic attachment controls on modern tracked excavators under licensed trainer supervision.",
    image: "/assets/images/hero-excavator.svg"
  },
  {
    id: "backhoe",
    number: "02",
    name: "Backhoe Loader",
    headline: "BECOME A BACKHOE OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Dual-action earthmoving",
    description: "Dual-function earthmoving mastery. Learn front bucket loading, trenching, stabilizer deployment, and road transit safety protocols.",
    image: "/assets/images/backhoe.svg"
  },
  {
    id: "loader",
    number: "03",
    name: "Front-End Loader",
    headline: "BECOME A WHEEL LOADER OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "High-capacity quarry loading",
    description: "Learn high-efficiency quarry stockpiling, high-capacity dump truck loading, bucket leveling, and aggregate handling techniques.",
    image: "/assets/images/loader.svg"
  },
  {
    id: "forklift",
    number: "04",
    name: "Forklift",
    headline: "BECOME A CERTIFIED FORKLIFT OPERATOR.",
    duration: "1-2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Warehouse & logistics loading",
    description: "Industrial warehouse logistics, container destuffing, high-bay stacking, stability triangle mechanics, and workplace safety compliance.",
    image: "/assets/images/forklift.svg"
  },
  {
    id: "tractor",
    number: "05",
    name: "Tractor",
    headline: "BECOME AN INDUSTRIAL TRACTOR OPERATOR.",
    duration: "1-2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Heavy trailer haulage & civil",
    description: "Agricultural and commercial earth preparation, PTO power takeoff implement operation, disc plowing, and heavy trailer haulage.",
    image: "/assets/images/tractor.svg"
  },
  {
    id: "crane",
    number: "06",
    name: "Mobile Crane",
    headline: "BECOME A MOBILE CRANE OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Heavy certified rigging & lifts",
    description: "Heavy lifting dynamics, outrigger stabilization, load chart computation, boom extension angles, and certified crane rigging signaling.",
    image: "/assets/images/crane.svg"
  },
  {
    id: "bulldozer",
    number: "07",
    name: "Bulldozer",
    headline: "BECOME A BULLDOZER OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Heavy bush clearing & cuts",
    description: "Heavy bush clearing, cut-and-fill operations, rip-tooth subsoiling, blade angle adjustments, and slope gradient grading in rough terrain.",
    image: "/assets/images/bulldozer.svg"
  },
  {
    id: "dumptruck",
    number: "08",
    name: "Dump Truck (ADT / Rigid)",
    headline: "BECOME AN ARTICULATED DUMP TRUCK OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Mine payload & haul road transit",
    description: "Haul road navigation, heavy mine payload transport, tipping dynamics on unstable ground, retarder braking, and reversing spotter protocols.",
    image: "/assets/images/dumptruck.svg"
  },
  {
    id: "grader",
    number: "09",
    name: "Motor Grader",
    headline: "BECOME A MOTOR GRADER OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Precision road civil profiling",
    description: "Road civil engineering, crown profiling, camber angles, ditch cutting, precision blade articulators, and laser-guided surface leveling.",
    image: "/assets/images/grader.svg"
  },
  {
    id: "drillrig",
    number: "10",
    name: "Drill Rig",
    headline: "BECOME A ROTARY DRILL RIG OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON",
    cert: "CERTIFICATION",
    shortSub: "Blast hole & borehole drilling",
    description: "Mining blast hole drilling, pneumatic down-the-hole hammer operations, geological borehole extraction, and hydraulic feed controls.",
    image: "/assets/images/drillrig.svg"
  }
];

// ==========================================================================
// 3. WHATSAPP & PHONE URL BUILDERS
// ==========================================================================
function buildWhatsAppUrl(message) {
  return `https://wa.me/${DMR_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function getGeneralWhatsAppUrl() {
  return buildWhatsAppUrl("Hello DMR, I scanned your T-shirt QR code and would like to know more about your training.");
}

function getMachineWhatsAppUrl(machineName) {
  return buildWhatsAppUrl(`Hello DMR, I scanned your T-shirt QR experience and I am interested in ${machineName} training.`);
}

function getRegistrationWhatsAppUrl(name, phone, machine) {
  return buildWhatsAppUrl(
    `Hello DMR, I would like to register for training.\n\nMachine:\n${machine || "Not specified"}\n\nName:\n${name}\n\nPhone:\n${phone}`
  );
}

// ==========================================================================
// 4. INITIALIZATION & RENDERING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // A. Bind Config to DOM
  injectConfigValues();

  // B. Render Featured Machine Spotlight
  renderMachineSpotlight();

  // C. Render 2-Column Machine Matrix
  renderMachinesGrid();

  // D. Populate Machine Select Options in Form
  populateMachineSelect();

  // E. Setup Interaction Listeners
  bindInteractiveEvents();
});

function injectConfigValues() {
  // Campaign content
  const campaignTitleEl = document.getElementById("campaignHeadline");
  if (campaignTitleEl) campaignTitleEl.textContent = DMR_CONFIG.campaignTitle;

  const campaignTextEl = document.getElementById("campaignBody");
  if (campaignTextEl) campaignTextEl.textContent = DMR_CONFIG.campaignText;

  // WhatsApp Global Redirects
  const waUrl = getGeneralWhatsAppUrl();
  document.querySelectorAll(".js-wa-general").forEach(btn => {
    btn.setAttribute("href", waUrl);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener");
  });

  // Direct Call Redirects (dialer intent, never exposed as plain text)
  const telUri = `tel:+${DMR_CONFIG.whatsapp}`;
  document.querySelectorAll(".js-call-link").forEach(btn => {
    btn.setAttribute("href", telUri);
  });
}

function renderMachineSpotlight() {
  const container = document.getElementById("spotlightContainer");
  if (!container) return;

  const featured = DMR_MACHINES.find(m => m.id === DMR_CONFIG.featuredMachineId) || DMR_MACHINES[0];
  const waUrl = getMachineWhatsAppUrl(featured.name);
  const telUri = `tel:+${DMR_CONFIG.whatsapp}`;

  container.innerHTML = `
    <div class="spotlight-card">
      <div class="spotlight-media">
        <span class="spotlight-tag-overlay">FEATURED MACHINE // 01</span>
        <img src="${featured.image}" alt="${featured.name}" loading="lazy" />
      </div>
      <div class="spotlight-body">
        <h3 class="spotlight-h3">${featured.name.toUpperCase()}</h3>
        <div class="spotlight-sub">${featured.headline}</div>
        
        <div class="spotlight-specs">
          <span class="spec-badge">⏱ ${featured.duration}</span>
          <span class="spec-badge">🚜 ${featured.trainingType}</span>
          <span class="spec-badge">📜 ${featured.cert}</span>
        </div>

        <p class="spotlight-desc">${featured.description}</p>

        <div class="spotlight-btn-row">
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp-main" aria-label="WhatsApp about ${featured.name}">
            <span>💬</span>
            <span>WHATSAPP ABOUT ${featured.name.toUpperCase()}</span>
          </a>
          <a href="${telUri}" class="btn btn-call-solid" aria-label="Call admissions about ${featured.name}">
            <span>📞</span>
            <span>CALL ADMISSIONS</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderMachinesGrid() {
  const container = document.getElementById("machinesGrid");
  if (!container) return;

  container.innerHTML = DMR_MACHINES.map(m => `
    <article class="machine-card-editorial" tabindex="0" role="button" data-machine-id="${m.id}" aria-label="Explore ${m.name} training details">
      <div class="machine-card-thumb">
        <span class="machine-card-index">${m.number}</span>
        <img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.style.opacity='0.3'" />
      </div>
      <div class="machine-card-content">
        <div>
          <h3 class="machine-card-title">${m.name}</h3>
          <p class="machine-card-sub">${m.shortSub}</p>
        </div>
        <div class="machine-card-cta">EXPLORE →</div>
      </div>
    </article>
  `).join("");
}

function populateMachineSelect() {
  const select = document.getElementById("regMachineSelect");
  if (!select) return;

  DMR_MACHINES.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.name;
    opt.textContent = `${m.number} - ${m.name}`;
    select.appendChild(opt);
  });
}

// ==========================================================================
// 5. DETAIL DRAWER / MODAL
// ==========================================================================
let activeMachine = null;

function openMachineDetail(machineId) {
  const machine = DMR_MACHINES.find(m => m.id === machineId);
  if (!machine) return;

  activeMachine = machine;
  const overlay = document.getElementById("detailOverlay");
  const card = document.getElementById("detailCard");
  if (!overlay || !card) return;

  const machineWaUrl = getMachineWhatsAppUrl(machine.name);
  const telUri = `tel:+${DMR_CONFIG.whatsapp}`;

  card.innerHTML = `
    <div class="detail-header-media">
      <button class="detail-close-btn" id="modalCloseBtn" aria-label="Close detail view">✕</button>
      <img src="${machine.image}" alt="${machine.name}" class="detail-header-img" />
    </div>

    <div class="detail-body">
      <div class="detail-num">${machine.number} // ACCREDITED OPERATOR COURSE</div>
      <h2 class="detail-name">${machine.name}</h2>
      <div class="detail-statement">${machine.headline}</div>

      <div class="detail-specs-row">
        <span class="detail-spec-chip">⏱ ${machine.duration}</span>
        <span class="detail-spec-chip">🚜 ${machine.trainingType}</span>
        <span class="detail-spec-chip">📜 ${machine.cert}</span>
      </div>

      <p class="detail-desc">${machine.description}</p>

      <div class="detail-actions">
        <a href="${machineWaUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp-main" aria-label="WhatsApp admissions about ${machine.name}">
          <span>💬</span>
          <span>WHATSAPP ABOUT ${machine.name.toUpperCase()}</span>
        </a>
        <a href="${telUri}" class="btn btn-call-solid" aria-label="Call DMR Admissions">
          <span>📞</span>
          <span>CALL ADMISSIONS</span>
        </a>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  document.getElementById("modalCloseBtn")?.addEventListener("click", closeMachineDetail);
}

function closeMachineDetail() {
  const overlay = document.getElementById("detailOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  activeMachine = null;
}

// ==========================================================================
// 6. INTERACTIVE BINDINGS
// ==========================================================================
function bindInteractiveEvents() {
  // Machine card clicks
  const grid = document.getElementById("machinesGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".machine-card-editorial");
      if (card) {
        openMachineDetail(card.dataset.machineId);
      }
    });

    grid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".machine-card-editorial");
        if (card) {
          e.preventDefault();
          openMachineDetail(card.dataset.machineId);
        }
      }
    });
  }

  // Backdrop click & Escape key
  const overlay = document.getElementById("detailOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeMachineDetail();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeMachine) {
      closeMachineDetail();
    }
  });

  // Registration Form
  const regForm = document.getElementById("dmrRegForm");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("regName");
      const phoneInput = document.getElementById("regPhone");
      const name = nameInput?.value.trim() || "";
      const phone = phoneInput?.value.trim() || "";
      const machine = document.getElementById("regMachineSelect")?.value || "";

      if (!name) {
        nameInput?.focus();
        nameInput?.classList.add("input-error");
        return;
      }
      if (!phone) {
        phoneInput?.focus();
        phoneInput?.classList.add("input-error");
        return;
      }

      nameInput?.classList.remove("input-error");
      phoneInput?.classList.remove("input-error");

      const waUrl = getRegistrationWhatsAppUrl(name, phone, machine);
      window.open(waUrl, "_blank", "noopener");
    });
  }
}
