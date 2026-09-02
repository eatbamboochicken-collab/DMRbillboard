/**
 * DMR DIGITAL BILLBOARD — CORE ENGINE (VANILLA JAVASCRIPT)
 * Brand: DMR Earthmoving Training Specialists (Harare, Zimbabwe)
 * Concept: T-shirt QR Doorway -> Living Digital Billboard Experience
 * Architecture: Pure Vanilla JS • No Frameworks • No External Libraries
 */

// ==========================================================================
// 1. CENTRAL CONFIGURATION (SINGLE SOURCE OF TRUTH)
// ==========================================================================
const DMR_CONFIG = {
  phoneDisplay: "0779068932",
  phoneInternational: "+263 77 906 8932",
  whatsapp: "263779068932",
  website: "https://dmrearthmovers.co.zw",
  scanSource: "DMR-T-SHIRT",
  campaignTitle: "TRAIN. CERTIFY. OPERATE.",
  campaignText: "Build practical skills on real earthmoving equipment.",
  featuredMachineId: "excavator",
  locationNotice: "HARARE, ZIMBABWE",
  intakeNotice: "WEEKLY INTAKES OPEN // WILLOWVALE CAMPUS"
};

// ==========================================================================
// 2. 10 ACCREDITED MACHINERY DATASET (EDITORIAL READY WITH CURRICULA)
// ==========================================================================
const DMR_MACHINES = [
  {
    id: "excavator",
    number: "01",
    name: "Excavator",
    classSpec: "CAT 336 CLASS // 36T HYDRAULIC",
    headline: "BECOME AN EXCAVATOR OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Trenching, benching & quarry loading",
    description: "Master multi-axis hydraulic controls, deep trenching, bench stabilization, truck loading, and bucket angle manipulation under licensed heavy equipment instructors.",
    image: "/assets/images/hero-excavator.svg",
    curriculum: [
      "Operating controls & hydraulic joystick manipulation",
      "Quarry site safety protocols & OSHA hazard prevention",
      "Precision trenching, slope grading & benching techniques",
      "High-capacity dump truck loading & cycle time optimization",
      "Daily pre-shift inspections & preventative maintenance"
    ]
  },
  {
    id: "backhoe",
    number: "02",
    name: "Backhoe Loader",
    classSpec: "JCB 3CX / CAT 428 CLASS",
    headline: "BECOME A BACKHOE OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Dual-action earthmoving & trenching",
    description: "Dual-function heavy earthmoving mastery. Learn front-bucket aggregate loading, stabilizer deployment, rear boom trenching, and road transit safety protocols.",
    image: "/assets/images/backhoe.svg",
    curriculum: [
      "Dual control transition (front loader to backhoe arm)",
      "Hydraulic stabilizer leveling on uneven terrain",
      "Precision pipe trenching & foundation excavation",
      "Front bucket leveling, backfilling & stockpiling",
      "Road travel transit safety & hydraulic brake checks"
    ]
  },
  {
    id: "loader",
    number: "03",
    name: "Front-End Loader",
    classSpec: "CAT 950 / VOLVO L120 CLASS",
    headline: "BECOME A WHEEL LOADER OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "High-capacity quarry loading & stockpiling",
    description: "Learn high-efficiency quarry stockpiling, high-capacity articulated dump truck loading, bucket rollback leveling, and aggregate handling techniques.",
    image: "/assets/images/loader.svg",
    curriculum: [
      "Articulated steering & blind spot navigation",
      "Bucket penetration techniques in hard gravel & rock",
      "Truck loading patterns (V-shape & Y-shape cycles)",
      "Stockpile management & aggregate grade separation",
      "Torque converter & transmission temperature management"
    ]
  },
  {
    id: "forklift",
    number: "04",
    name: "Forklift",
    classSpec: "TOYOTA 3-TON / HYSTER DIESEL",
    headline: "BECOME A CERTIFIED FORKLIFT OPERATOR.",
    duration: "1-2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Warehouse & logistics high-bay loading",
    description: "Industrial warehouse logistics, freight container destuffing, high-bay pallet stacking, stability triangle mechanics, and workplace safety compliance.",
    image: "/assets/images/forklift.svg",
    curriculum: [
      "Mast tilt, carriage side-shift & fork position controls",
      "Stability triangle dynamics & center-of-gravity calculation",
      "Container destuffing & ramp incline navigation",
      "High-bay pallet retrieval & precision stacking",
      "Pedestrian safety signaling & horn protocol"
    ]
  },
  {
    id: "tractor",
    number: "05",
    name: "Tractor",
    classSpec: "MASSEY FERGUSON / JOHN DEERE 4WD",
    headline: "BECOME AN INDUSTRIAL TRACTOR OPERATOR.",
    duration: "1-2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Heavy trailer haulage & civil implements",
    description: "Agricultural and commercial earth preparation, PTO power takeoff implement operation, disc plowing, laser leveling, and heavy trailer haulage.",
    image: "/assets/images/tractor.svg",
    curriculum: [
      "Three-point hitch linkage & hydraulic draft control",
      "PTO shaft connection & safety shield procedures",
      "Heavy multi-axle trailer reversing & haulage",
      "Implement coupling (plows, harrows, mowers)",
      "Differential lock & all-wheel drive management"
    ]
  },
  {
    id: "crane",
    number: "06",
    name: "Mobile Crane",
    classSpec: "TEREX / TADANO 25T-50T ROUGH TERRAIN",
    headline: "BECOME A MOBILE CRANE OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Heavy certified rigging & precision lifts",
    description: "Heavy lifting dynamics, outrigger matting stabilization, load chart computation, telescopic boom extension angles, and certified crane rigging signaling.",
    image: "/assets/images/crane.svg",
    curriculum: [
      "Load capacity chart interpretation & radius calculation",
      "Outrigger pad setup & ground pressure verification",
      "Telescopic boom extension & anti-two-block safety",
      "Standard international dogman / rigger hand signals",
      "Wind speed limits & hazardous lift protocols"
    ]
  },
  {
    id: "bulldozer",
    number: "07",
    name: "Bulldozer",
    classSpec: "CAT D6 / KOMATSU D65 CLASS",
    headline: "BECOME A BULLDOZER OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Heavy bush clearing & cut-and-fill",
    description: "Heavy bush clearing, cut-and-fill bulk earthmoving, rip-tooth subsoiling, blade angle adjustments, and slope gradient grading in rough mining terrain.",
    image: "/assets/images/bulldozer.svg",
    curriculum: [
      "Semi-U blade pitch and angle hydraulic controls",
      "Track tension adjustment & rough terrain traction",
      "Bulk slot dozing & cut-and-fill leveling",
      "Rear single-shank ripper operation in hard ground",
      "Side-hill stability & roll-over prevention"
    ]
  },
  {
    id: "dumptruck",
    number: "08",
    name: "Dump Truck (ADT / Rigid)",
    classSpec: "BELL B40E / VOLVO A40 ARTICULATED",
    headline: "BECOME AN ARTICULATED DUMP TRUCK OPERATOR.",
    duration: "2 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Mine payload & haul road transit",
    description: "Haul road navigation, heavy mine payload transport, tipping dynamics on unstable quarry dumping edges, retarder braking, and reversing spotter protocols.",
    image: "/assets/images/dumptruck.svg",
    curriculum: [
      "Articulated chassis turning & center-hinge dynamics",
      "Transmission retarder braking on steep haul road declines",
      "Spotter alignment & high-efficiency loader positioning",
      "Tipping bin hydraulic lockouts on unstable dump benches",
      "Differential cross-axle locks & mud traction control"
    ]
  },
  {
    id: "grader",
    number: "09",
    name: "Motor Grader",
    classSpec: "CAT 140K / 140M PRECISION BLADE",
    headline: "BECOME A MOTOR GRADER OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Precision road civil profiling & camber",
    description: "Road civil engineering, crown profiling, road camber angles, drainage ditch cutting, moldboard circle adjustments, and laser-guided surface leveling.",
    image: "/assets/images/grader.svg",
    curriculum: [
      "Moldboard blade pitch, rotation, and side-shift controls",
      "Front wheel lean physics & steering counteraction",
      "Ditch cutting & road shoulder profiling",
      "Road camber angles & aggregate crowning",
      "Scarifier shank operation for hard surface scarifying"
    ]
  },
  {
    id: "drillrig",
    number: "10",
    name: "Drill Rig",
    classSpec: "ATLAS COPCO / SANDVIK ROTARY DTH",
    headline: "BECOME A ROTARY DRILL RIG OPERATOR.",
    duration: "3 WEEKS",
    trainingType: "HANDS-ON PRACTICALS",
    cert: "DMR CERTIFICATION",
    shortSub: "Blast hole & borehole deep drilling",
    description: "Mining blast hole drilling, pneumatic down-the-hole (DTH) hammer operations, geological borehole extraction, hydraulic mast erection, and rod handling.",
    image: "/assets/images/drillrig.svg",
    curriculum: [
      "Mast leveling, stabilizing jacks & plumb alignment",
      "Rotary head torque & pull-down hydraulic pressure controls",
      "DTH hammer pneumatic air pressure & flushing rates",
      "Drill rod carousel indexing & thread coupling",
      "Dust suppression systems & blast pattern spacing"
    ]
  }
];

// ==========================================================================
// 3. TELEMETRY & ANALYTICS ARCHITECTURE
// ==========================================================================
function recordScan() {
  try {
    const scanPayload = {
      campaign: DMR_CONFIG.campaignTitle,
      source: DMR_CONFIG.scanSource,
      timestamp: new Date().toISOString(),
      screen: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || "t_shirt_qr_direct"
    };

    const pastScans = JSON.parse(localStorage.getItem("dmr_scans") || "[]");
    pastScans.push(scanPayload);
    localStorage.setItem("dmr_scans", JSON.stringify(pastScans.slice(-25)));

    // =======================================================================
    // FUTURE DMR ANALYTICS API ENDPOINT:
    // When live telemetry server is ready, uncomment below:
    // fetch(`${DMR_CONFIG.website}/api/telemetry/scans`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(scanPayload)
    // }).catch(() => {});
    // =======================================================================
  } catch (e) {
    // Handle storage restrictions gracefully
  }
}

// ==========================================================================
// 4. WHATSAPP & PHONE URL BUILDERS
// ==========================================================================
function buildWhatsAppUrl(message) {
  return `https://wa.me/${DMR_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function getGeneralWhatsAppUrl() {
  return buildWhatsAppUrl(
    "Hello DMR, I scanned the QR code on a DMR T-shirt and I want to find out more about heavy machinery operator training."
  );
}

function getMachineWhatsAppUrl(machineName) {
  return buildWhatsAppUrl(
    `Hello DMR, I scanned the QR code on a DMR T-shirt and I am interested in ${machineName} operator training.`
  );
}

function getRegistrationWhatsAppUrl(name, phone, machine) {
  return buildWhatsAppUrl(
    `Hello DMR Admissions, I would like to register for training.\n\nMachine:\n${machine || "Not specified"}\n\nName:\n${name}\n\nPhone:\n${phone}\n\nSource: DMR T-Shirt QR Billboard`
  );
}

// ==========================================================================
// 5. INITIALIZATION & RENDERING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // A. Log scan telemetry
  recordScan();

  // B. Bind Config values to DOM
  injectConfigValues();

  // C. Render Featured Machine Spotlight
  renderMachineSpotlight();

  // D. Render 10-Machine Editorial Grid
  renderMachinesGrid();

  // E. Populate Select in Registration Form
  populateMachineSelect();

  // F. Bind Interactive Events (Modals, Form, Parallax, Progress)
  bindInteractiveEvents();

  // G. Initialize Scroll Reveal System (IntersectionObserver)
  initScrollReveals();
});

function injectConfigValues() {
  // Campaign Content
  const campaignTitleEl = document.getElementById("campaignHeadline");
  if (campaignTitleEl) {
    campaignTitleEl.innerHTML = DMR_CONFIG.campaignTitle.replace(/\. /g, ".<br/>");
  }

  const campaignTextEl = document.getElementById("campaignBody");
  if (campaignTextEl) campaignTextEl.textContent = DMR_CONFIG.campaignText;

  // Phone numbers in labels
  document.querySelectorAll(".js-phone-display").forEach(el => {
    el.textContent = DMR_CONFIG.phoneDisplay;
  });

  // General WhatsApp Redirects
  const waUrl = getGeneralWhatsAppUrl();
  document.querySelectorAll(".js-wa-general").forEach(btn => {
    btn.setAttribute("href", waUrl);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener");
  });

  // Phone Dialer Redirects
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
        <span class="spotlight-tag-overlay">FEATURED MACHINE // ${featured.number}</span>
        <img src="${featured.image}" alt="${featured.name} heavy equipment" loading="lazy" />
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
          <button type="button" class="btn btn-call-solid js-open-featured" data-machine-id="${featured.id}">
            <span>EXPLORE ${featured.name.toUpperCase()}</span>
            <span class="btn-arrow">→</span>
          </button>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp-main" aria-label="WhatsApp about ${featured.name}">
            <span class="btn-icon">💬</span>
            <span>WHATSAPP DMR</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach explore click to open detail drawer
  container.querySelector(".js-open-featured")?.addEventListener("click", () => {
    openMachineDetail(featured.id);
  });
}

function renderMachinesGrid() {
  const container = document.getElementById("machinesGrid");
  if (!container) return;

  container.innerHTML = DMR_MACHINES.map(m => `
    <article class="machine-card-editorial" tabindex="0" role="button" data-machine-id="${m.id}" aria-label="Explore ${m.name} training competencies">
      <div class="machine-card-thumb">
        <span class="machine-card-index">${m.number}</span>
        <img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.style.opacity='0.3'" />
      </div>
      <div class="machine-card-content">
        <div>
          <h3 class="machine-card-title">${m.name}</h3>
          <p class="machine-card-sub">${m.shortSub}</p>
        </div>
        <div class="machine-card-cta">
          <span>EXPLORE</span>
          <span class="btn-arrow">→</span>
        </div>
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
// 6. MACHINE DETAIL DRAWER / MODAL EXPERIENCE
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

  const curriculumHtml = machine.curriculum.map(item => `
    <li class="curriculum-item">
      <span class="curriculum-check">✓</span>
      <span>${item}</span>
    </li>
  `).join("");

  card.innerHTML = `
    <div class="detail-header-media">
      <button class="detail-close-btn" id="modalCloseBtn" aria-label="Close detail view">✕</button>
      <img src="${machine.image}" alt="${machine.name}" class="detail-header-img" />
    </div>

    <div class="detail-body">
      <div class="detail-num">${machine.number} // ${machine.classSpec}</div>
      <h2 class="detail-name">${machine.name}</h2>
      <div class="detail-statement">${machine.headline}</div>

      <div class="detail-specs-row">
        <span class="detail-spec-chip">⏱ ${machine.duration}</span>
        <span class="detail-spec-chip">🚜 ${machine.trainingType}</span>
        <span class="detail-spec-chip">📜 ${machine.cert}</span>
      </div>

      <p class="detail-desc">${machine.description}</p>

      <div class="detail-curriculum-box">
        <div class="curriculum-title">WHAT YOU'LL LEARN:</div>
        <ul class="curriculum-list">
          ${curriculumHtml}
        </ul>
      </div>

      <div class="detail-actions">
        <a href="${machineWaUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp-main" aria-label="WhatsApp admissions about ${machine.name}">
          <span class="btn-icon">💬</span>
          <span>WHATSAPP ABOUT ${machine.name.toUpperCase()}</span>
          <span class="btn-arrow">→</span>
        </a>
        <a href="${telUri}" class="btn btn-call-solid" aria-label="Call DMR Admissions">
          <span class="btn-icon">📞</span>
          <span>CALL ADMISSIONS</span>
          <span class="btn-arrow">→</span>
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
// 7. INTERACTION BINDINGS & PROGRESS
// ==========================================================================
function bindInteractiveEvents() {
  // A. Scroll Progress Bar & Subtle Parallax
  const progressBar = document.getElementById("scrollProgressBar");
  const heroMachineFrame = document.getElementById("heroMachineFrame");

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Scroll Progress
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && progressBar) {
          const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
          progressBar.style.width = `${progress}%`;
        }

        // Subtle Hero Parallax (5-12px movement, fast & smooth)
        if (heroMachineFrame && window.scrollY < 600) {
          const parallaxOffset = Math.min(12, Math.max(0, window.scrollY * 0.04));
          heroMachineFrame.style.transform = `translateY(${parallaxOffset}px)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // B. Machine Card Clicks
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

  // C. Modal Backdrop & Escape Key Handlers
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

  // D. Admissions Form Validation & Submission
  const regForm = document.getElementById("dmrRegForm");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("regName");
      const phoneInput = document.getElementById("regPhone");
      const name = nameInput?.value.trim() || "";
      const phone = phoneInput?.value.trim() || "";
      const machine = document.getElementById("regMachineSelect")?.value || "";

      let hasError = false;

      if (!name) {
        nameInput?.classList.add("input-error");
        nameInput?.focus();
        hasError = true;
      } else {
        nameInput?.classList.remove("input-error");
      }

      if (!phone) {
        phoneInput?.classList.add("input-error");
        if (!hasError) phoneInput?.focus();
        hasError = true;
      } else {
        phoneInput?.classList.remove("input-error");
      }

      if (hasError) return;

      const waUrl = getRegistrationWhatsAppUrl(name, phone, machine);
      window.open(waUrl, "_blank", "noopener");
    });
  }
}

// ==========================================================================
// 8. SCROLL REVEALS (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
      el.classList.add("is-revealed");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
      el.classList.add("is-revealed");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    observer.observe(el);
  });
}
