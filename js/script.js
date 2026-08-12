/* =========================================================
   Cars on Rent — main script (vanilla JS, no dependencies)
   ========================================================= */

/* ---------------------------------------------------------
   1. BUSINESS CONFIGURATION  — edit these values only
   --------------------------------------------------------- */
const CONFIG = {
  BUSINESS_NAME: "Cars on Rent",
  PHONE: "+917086263505",
  PHONE_DISPLAY: "+91 70862 63505",
  WHATSAPP_NUMBER: "917086263505", // international format, no + or spaces
  EMAIL: "carsonrentnortheast2025@gmail.com",
  ADDRESS: "Sarat Chandra Singha Path, Jyotikuchi, Dhapalia, Guwahati, Assam 781014",
};

const waLink = (message) =>
  `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const openWhatsApp = (message) => {
  window.open(waLink(message), "_blank", "noopener");
};

/* ---------------------------------------------------------
   2. FLEET DATA — categories are editable placeholder content
   --------------------------------------------------------- */
const FLEET = [
  { tag: "7 Seater MPV", name: "Toyota Innova Crysta", desc: "Premium comfort for families and long Northeast drives.", img: "images/fleet/innova-crysta.jpg", specs: ["7 seats", "AC", "Outstation"] },
  { tag: "7 Seater MPV", name: "Toyota Innova", desc: "Dependable and spacious for group and outstation travel.", img: "images/fleet/innova.jpg", specs: ["7 seats", "Luggage", "Tours"] },
  { tag: "Luxury Van", name: "Force Urbania", desc: "Premium van travel with reclining seats and ample luggage space.", img: "images/fleet/urbania.jpg", specs: ["Luxury van", "Recliner", "Groups"] },
  { tag: "17 Seater", name: "Force Tempo Traveller 17 Seater", desc: "Ideal for larger families and group tours across the Northeast.", img: "images/fleet/traveller-17.jpg", specs: ["17 seats", "Group tours", "AC"] },
  { tag: "26 Seater", name: "Force Tempo Traveller 26 Seater", desc: "Big-group travel for tours, events and corporate trips.", img: "images/fleet/traveller-26.jpg", specs: ["26 seats", "Events", "Corporate"] },
  { tag: "Sedan", name: "Maruti Suzuki Swift Dzire", desc: "Economical sedan for city runs and airport transfers.", img: "images/fleet/dzire.jpg", specs: ["Sedan", "Airport", "City"] },
  { tag: "Compact SUV", name: "Maruti Suzuki Brezza", desc: "Comfortable compact SUV for hill roads and highways.", img: "images/fleet/brezza.jpg", specs: ["SUV", "Hill roads", "AC"] },
  { tag: "Compact SUV", name: "Maruti Suzuki Fronx", desc: "Stylish, fuel-efficient ride for small groups.", img: "images/fleet/fronx.jpg", specs: ["SUV", "Efficient", "Small group"] },
  { tag: "Compact SUV", name: "Hyundai Venue", desc: "Feature-rich SUV for city travel and short getaways.", img: "images/fleet/venue.jpg", specs: ["SUV", "Getaways", "Comfort"] },
  { tag: "Hatchback", name: "Hyundai i20", desc: "Smart, easy-going hatchback for local Guwahati travel.", img: "images/fleet/i20.jpg", specs: ["Hatchback", "Local", "Easy ride"] },
];

/* ---------------------------------------------------------
   3. DESTINATION DATA
   --------------------------------------------------------- */
const DESTINATIONS = [
  { name: "Shillong", desc: "Pine hills, lakes and easy-going hill-station days.", img: "images/site/dest-shillong.jpg" },
  { name: "Cherrapunji / Sohra", desc: "Waterfalls, caves and cloud-wrapped viewpoints.", img: "images/site/dest-cherrapunji.jpg" },
  { name: "Kaziranga", desc: "Grasslands and wildlife in the heart of Assam.", img: "images/site/dest-kaziranga.jpg" },
  { name: "Tawang", desc: "High mountain passes and Himalayan monasteries.", img: "images/site/dest-tawang.jpg" },
  { name: "Sikkim", desc: "Terraced valleys with snow peaks on the horizon.", img: "images/site/dest-sikkim.jpg" },
  { name: "Guwahati", desc: "Riverside temples and the gateway to the Northeast.", img: "images/site/dest-guwahati.jpg" },
  { name: "Dawki", desc: "Clear turquoise river water and quiet boat rides.", img: "images/site/dest-dawki.jpg" },
  { name: "Ziro Valley", desc: "Green paddy fields framed by gentle pine hills.", img: "images/site/dest-ziro.jpg" },
];

/* ---------------------------------------------------------
   4. SERVICES DATA
   --------------------------------------------------------- */
const ICONS = {
  car: '<path d="M4 16h16M5 16l1.5-4.6A3 3 0 0 1 9.4 9.3h5.2a3 3 0 0 1 2.9 2.1L19 16"/><path d="M8 20v-2M16 20v-2"/>',
  plane: '<path d="M10 20l2-5 8-2.5a1.6 1.6 0 0 0 0-3L12 7 10 2 8 7 3 9.5a1.6 1.6 0 0 0 0 3L8 15Z"/>',
  road: '<path d="M9 3 7 21M15 3l2 18M12 4v3M12 11v3M12 18v3"/>',
  mountain: '<path d="M3 19l6-10 4 6 2-3 6 7Z"/>',
  case: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M16 6.5a3 3 0 0 1 0 5.8M18 20c0-2-.7-3.5-2-4.5"/>',
};

const SERVICES = [
  { icon: "car", title: "Local Car Rental", desc: "Convenient vehicles for travel around Guwahati and Assam." },
  { icon: "plane", title: "Airport Transfers", desc: "Comfortable transportation for airport pickups and drop-offs." },
  { icon: "road", title: "Outstation Travel", desc: "Travel beyond the city for business, family trips and leisure." },
  { icon: "mountain", title: "Northeast Tours", desc: "Plan scenic journeys across Northeast India." },
  { icon: "case", title: "Corporate Travel", desc: "Comfortable transportation for meetings and business travel." },
  { icon: "users", title: "Group Travel", desc: "Suitable vehicle options for families and larger groups." },
];

/* ---------------------------------------------------------
   5. GALLERY DATA & RENDERER
   --------------------------------------------------------- */
const GALLERY_COUNT = 20;
const galleryImages = [];

/* =========================================================
   RENDERING
   ========================================================= */
const svg = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

function renderFleet() {
  const grid = document.getElementById("fleetGrid");
  if (!grid) return;
  grid.innerHTML = FLEET.map(
    (v) => `
    <article class="vcard reveal">
      <div class="vcard__media">
        <img src="${v.img}" alt="${v.name} available for rent" loading="lazy" width="1024" height="768" />
      </div>
      <div class="vcard__body">
        <span class="vcard__tag">${v.tag}</span>
        <h3>${v.name}</h3>
        <p>${v.desc}</p>
        <ul class="vcard__specs" aria-label="${v.name} highlights">
          ${v.specs.map((spec) => `<li>${spec}</li>`).join("")}
        </ul>
        <button class="btn btn--fleet-wa js-fleet-wa" type="button" data-vehicle="${v.name}">Enquire on WhatsApp</button>
      </div>
    </article>`
  ).join("");
}

function renderDestinations() {
  const grid = document.getElementById("destGrid");
  if (!grid) return;
  grid.innerHTML = DESTINATIONS.map(
    (d) => `
    <button class="dcard reveal js-dest-wa" type="button" data-dest="${d.name}" aria-label="Plan a trip to ${d.name}">
      <img src="${d.img}" alt="${d.name}, Northeast India" loading="lazy" width="1200" height="900" />
      <span class="dcard__body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <span class="dcard__cta">Plan This Trip
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </span>
    </button>`
  ).join("");
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s) => `
    <article class="service reveal">
      <span class="service__ico">${svg(ICONS[s.icon])}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </article>`
  ).join("");
}

/* pure image cards for gallery */
function renderGallery() {
  const grid = document.getElementById("galleryGrid") || document.getElementById("gallery");
  const empty = document.getElementById("galleryEmpty");
  if (!grid) return;

  grid.innerHTML = "";
  galleryImages.length = 0;

  let loadedCount = 0;

  const updateEmptyState = () => {
    if (empty) empty.hidden = loadedCount > 0;
    if (grid) grid.style.display = loadedCount > 0 ? "grid" : "none";
  };

  updateEmptyState();

  const loadedIndices = new Set();
  const candidateExtensions = ["jpeg", "jpg", "png", "webp"];

  for (let i = 1; i <= GALLERY_COUNT; i++) {
    candidateExtensions.forEach((ext) => {
      const src = `images/${i}.${ext}`;
      const imgObj = new Image();

      imgObj.onload = () => {
        if (loadedIndices.has(i)) return;
        loadedIndices.add(i);

        loadedCount++;

        const card = document.createElement("button");
        card.className = "gcard reveal is-in";
        card.type = "button";
        card.setAttribute("aria-label", `Open gallery photo ${loadedCount}`);
        card.innerHTML = `
          <img src="${src}" alt="Cars on Rent travel photo ${loadedCount}" loading="lazy" decoding="async" />
          <span class="gcard__zoom" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </span>
        `;

        grid.appendChild(card);
        galleryImages.push({
          src: src,
          alt: `Cars on Rent travel photo ${loadedCount}`,
          el: card,
        });

        updateEmptyState();
      };

      imgObj.onerror = () => {
        updateEmptyState();
      };

      imgObj.src = src;
    });
  }
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  if (!nav || !burger || !links) return;

  const closeMenu = () => {
    links.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  };

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // active link based on scroll position
  const navLinks = [...links.querySelectorAll(".nav__link")];
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }
}

/* =========================================================
   SCROLL REVEAL + HERO PARALLAX + SCROLL TOP
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
        entry.target.classList.add("is-in");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => io.observe(el));
}

function initParallax() {
  const img = document.getElementById("heroImg");
  if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let raf = null;
  const update = () => {
    raf = null;
    const y = Math.min(window.scrollY, 900);
    img.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(1.03)`;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!raf) raf = requestAnimationFrame(update);
    },
    { passive: true }
  );
}

function initToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;
  const toggle = () => (btn.hidden = window.scrollY < 600);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer;
function toast(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 3200);
}

/* =========================================================
   WHATSAPP MESSAGES
   ========================================================= */
function genericEnquiry() {
  return `Hello ${CONFIG.BUSINESS_NAME},

I would like to enquire about a car rental across Northeast India.

Please share availability and pricing.

Thank you.`;
}

function initWhatsAppButtons() {
  document.querySelectorAll(".js-wa").forEach((el) => {
    el.setAttribute("href", waLink(genericEnquiry()));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.addEventListener("click", (e) => {
    const fleetBtn = e.target.closest(".js-fleet-wa");
    if (fleetBtn) {
      openWhatsApp(
        `Hello ${CONFIG.BUSINESS_NAME}, I am interested in renting a ${fleetBtn.dataset.vehicle}. Please share availability and pricing.`
      );
      return;
    }
    const destBtn = e.target.closest(".js-dest-wa");
    if (destBtn) {
      openWhatsApp(
        `Hello ${CONFIG.BUSINESS_NAME}, I would like to plan a trip to ${destBtn.dataset.dest}. Please share availability and pricing.`
      );
    }
  });
}

/* form validation helper */
function validate(form, requiredIds) {
  let firstInvalid = null;
  requiredIds.forEach((id) => {
    const input = form.querySelector(`#${id}`);
    if (!input) return;
    const wrap = input.closest(".field");
    const ok = String(input.value || "").trim().length > 0;
    if (wrap) wrap.classList.toggle("has-error", !ok);
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    if (!ok && !firstInvalid) firstInvalid = input;
  });
  if (firstInvalid) {
    firstInvalid.focus();
    toast("Please fill in the highlighted fields.");
    return false;
  }
  return true;
}

function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(form, ["q-pickup", "q-destination", "q-date", "q-vehicle"])) return;
    const d = new FormData(form);
    openWhatsApp(`Hello ${CONFIG.BUSINESS_NAME},

I would like to enquire about a car rental.

Pickup Location: ${d.get("pickup")}
Destination: ${d.get("destination")}
Travel Date: ${d.get("date")}
Vehicle Type: ${d.get("vehicle")}

Please share availability and pricing.

Thank you.`);
    toast("Opening WhatsApp with your trip details…");
  });
}

function initEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const required = ["e-name", "e-phone", "e-pickup", "e-destination", "e-date", "e-vehicle"];
    if (!validate(form, required)) return;
    const d = new FormData(form);
    const optional = (label, value) => (String(value || "").trim() ? `\n${label}: ${value}` : "");
    openWhatsApp(`Hello ${CONFIG.BUSINESS_NAME},

I would like to enquire about a car rental.

Name: ${d.get("name")}
Phone: ${d.get("phone")}
Pickup Location: ${d.get("pickup")}
Destination: ${d.get("destination")}
Travel Date: ${d.get("date")}
Vehicle Type: ${d.get("vehicle")}${optional("Passengers", d.get("passengers"))}${optional("Trip Type", d.get("triptype"))}${optional("Additional Requirements", d.get("message"))}

Please share availability and pricing.

Thank you.`);
    toast("Opening WhatsApp with your enquiry…");
  });

  form.querySelectorAll("input, select, textarea").forEach((el) => {
    el.addEventListener("input", () => el.closest(".field")?.classList.remove("has-error"));
  });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
function initLightbox() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const count = document.getElementById("lbCount");
  if (!box || !img) return;

  let index = 0;
  let lastFocus = null;

  const visible = () => galleryImages.filter((g) => !g.el.hidden && g.el.style.display !== "none");

  const show = (i) => {
    const list = visible();
    if (!list.length) return;
    index = (i + list.length) % list.length;
    img.src = list[index].src;
    img.alt = list[index].alt;
    if (count) count.textContent = `${index + 1} / ${list.length}`;
  };

  const open = (i) => {
    lastFocus = document.activeElement;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    show(i);
    document.getElementById("lbClose")?.focus();
  };

  const close = () => {
    box.hidden = true;
    document.body.style.overflow = "";
    img.src = "";
    lastFocus?.focus?.();
  };

  const gridContainer = document.getElementById("galleryGrid") || document.getElementById("gallery");
  gridContainer?.addEventListener("click", (e) => {
    const card = e.target.closest(".gcard");
    if (!card) return;
    open(visible().findIndex((g) => g.el === card));
  });

  document.getElementById("lbClose")?.addEventListener("click", close);
  document.getElementById("lbPrev")?.addEventListener("click", () => show(index - 1));
  document.getElementById("lbNext")?.addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });

  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  // basic swipe support
  let startX = null;
  box.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
  box.addEventListener(
    "touchend",
    (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    },
    { passive: true }
  );
}

/* =========================================================
   SMOOTH SCROLL (offset-aware for older browsers)
   ========================================================= */
function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", id);
  });
}

/* =========================================================
   BOOT
   ========================================================= */
function boot() {
  renderFleet();
  renderDestinations();
  renderServices();
  renderGallery();
  initNav();
  initSmoothScroll();
  initWhatsAppButtons();
  initQuoteForm();
  initEnquiryForm();
  initLightbox();
  initReveal();
  initParallax();
  initToTop();

  // min date = today for both date pickers
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach((el) => el.setAttribute("min", today));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
