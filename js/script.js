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
  {
    tag: "Road King",
    name: "Toyota Innova Crysta",
    img: "images/fleet/innova-crysta.jpeg",
    features: [
      { icon: "mountain", text: "Best choice for long Northeast trips" },
      { icon: "check", text: "7-seater comfort with huge boot" },
      { icon: "users", text: "Excellent for family journeys" },
      { icon: "shield", text: "Smooth suspension on hill roads" },
    ],
  },
  // {
  //   tag: "Family MUV",
  //   name: "Toyota Innova",
  //   img: "images/fleet/innova.jpg",
  //   features: [
  //     { icon: "mountain", text: "Reliable for outstation travel" },
  //     { icon: "check", text: "Spacious seating for groups" },
  //     { icon: "users", text: "Great for families and luggage" },
  //     { icon: "shield", text: "Dependable long-route comfort" },
  //   ],
  // },
  {
    tag: "Luxury Van",
    name: "Force Urbania",
    img: "images/fleet/urbania.jpeg",
    features: [
      { icon: "mountain", text: "Premium ride for group tours" },
      { icon: "check", text: "Reclining seats and roomy cabin" },
      { icon: "users", text: "Ideal for teams and families" },
      { icon: "shield", text: "Comfortable for longer journeys" },
    ],
  },
  {
    tag: "Group Traveller",
    name: "Force Tempo Traveller 17 Seater",
    img: "images/fleet/traveller-17.jpeg",
    features: [
      { icon: "mountain", text: "Built for Northeast group trips" },
      { icon: "check", text: "17-seat capacity with AC" },
      { icon: "users", text: "Great for large families" },
      { icon: "shield", text: "Practical for tours and events" },
    ],
  },
  {
    tag: "Big Group",
    name: "Force Tempo Traveller 26 Seater",
    img: "images/fleet/traveller-26.jpeg",
    features: [
      { icon: "mountain", text: "Ready for big tour groups" },
      { icon: "check", text: "26 seats for events and trips" },
      { icon: "users", text: "Comfortable group movement" },
      { icon: "shield", text: "Suitable for corporate travel" },
    ],
  },
  {
    tag: "City Sedan",
    name: "Maruti Suzuki Swift Dzire",
    img: "images/fleet/dzire.jpeg",
    features: [
      { icon: "mountain", text: "Smooth for city and highway runs" },
      { icon: "check", text: "Economical airport transfers" },
      { icon: "users", text: "Comfortable for small families" },
      { icon: "shield", text: "Easy ride for local travel" },
    ],
  },
  {
    tag: "Compact SUV",
    name: "Maruti Suzuki Brezza",
    img: "images/fleet/breeza.jpeg",
    features: [
      { icon: "mountain", text: "Confident on hill roads" },
      { icon: "check", text: "Compact SUV with good comfort" },
      { icon: "users", text: "Great for weekend getaways" },
      { icon: "shield", text: "High seating and steady drive" },
    ],
  },
  {
    tag: "Hill Ready",
    name: "Maruti Suzuki Fronx",
    img: "images/fleet/fronx.jpeg",
    features: [
      { icon: "mountain", text: "SUV stance with stylish looks" },
      { icon: "check", text: "Efficient for hill climbs" },
      { icon: "users", text: "Practical boot for short trips" },
      { icon: "shield", text: "Peppy ride for small groups" },
    ],
  },
  {
    tag: "Sporty SUV",
    name: "Hyundai Venue",
    img: "images/fleet/venue.jpeg",
    features: [
      { icon: "mountain", text: "Perfect for short getaways" },
      { icon: "check", text: "Feature-rich compact SUV" },
      { icon: "users", text: "Comfortable for city travel" },
      { icon: "shield", text: "High ground clearance feel" },
    ],
  },
  {
    tag: "Highway Hatch",
    name: "Hyundai i20",
    img: "images/fleet/i20.jpeg",
    features: [
      { icon: "mountain", text: "Premium hatchback comfort" },
      { icon: "check", text: "Smooth on Meghalaya roads" },
      { icon: "users", text: "Good for 4 passengers" },
      { icon: "shield", text: "Easy for city and highway" },
    ],
  },
];

/* ---------------------------------------------------------
   3. DESTINATION DATA
   --------------------------------------------------------- */
const DESTINATIONS = [
  { name: "Anini", desc: "Pine hills, lakes and easy-going hill-station days.", img: "images/site/dest-anini.jpeg" },
  { name: "Shillong / Cherrapunji", desc: "Waterfalls, caves and cloud-wrapped viewpoints.", img: "images/site/dest-cherrapunji.jpg" },
  { name: "Kaziranga", desc: "Grasslands and wildlife in the heart of Assam.", img: "images/site/dest-kaziranga.jpg" },
  { name: "Tawang", desc: "High mountain passes and Himalayan monasteries.", img: "images/site/dest-tawang.jpg" },
  { name: "Dong Valley", desc: "India's easternmost sunrise with breathtaking mountain views.", img: "images/site/dest-dongvalley.jpg" },
  { name: " Maa Kamakhya Temple", desc: "Riverside temples and the gateway to the Northeast.", img: "images/site/dest-kamakhya.jpg" },
  // { name: "Dawki", desc: "Clear turquoise river water and quiet boat rides.", img: "images/site/dest-dawki.jpg" },
  { name: "Ziro Valley", desc: "Green paddy fields framed by gentle pine hills.", img: "images/site/dest-ziro.jpg" },
  { name: "Manas National Park", desc: "Wild forests, river valleys and rare wildlife in Assam.", img: "images/site/dest-manas.jpeg" },
  { name: "Mechuka", desc: "Serene valleys and stunning mountain views.", img: "images/site/dest-mechuka.jpeg" },
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
const GALLERY_COUNT = 31;
const GALLERY_INITIAL_VISIBLE = 20;
const GALLERY_EXTENSIONS = ["jpeg", "jpg", "png", "webp"];
const galleryImages = [];

/* =========================================================
   RENDERING
   ========================================================= */
const svg = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const FLEET_ICONS = {
  mountain: '<path d="M3 19l6-10 4 6 2-3 6 7Z"/>',
  check: '<circle cx="12" cy="12" r="8"/><path d="m9 12 2 2 4-4"/>',
  users: '<circle cx="9" cy="9" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M17 10a2.5 2.5 0 0 1 0 5"/><path d="M20 20c0-2-.7-3.4-2-4.2"/>',
  shield: '<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/>',
};

function renderFleet() {
  const grid = document.getElementById("fleetGrid");
  if (!grid) return;
  grid.innerHTML = FLEET.map(
    (v) => `
    <article class="vcard reveal">
      <div class="vcard__media">
        <span class="vcard__tag">${v.tag}</span>
        <img src="${v.img}" alt="${v.name} available for rent" loading="lazy" width="1024" height="768" />
      </div>
      <div class="vcard__body">
        <div class="vcard__title-row">
          <h3>${v.name}</h3>
          <span class="vcard__status"><span aria-hidden="true"></span>Popular</span>
        </div>
        <ul class="vcard__features" aria-label="${v.name} highlights">
          ${v.features
            .map(
              (feature) => `<li><span class="vcard__feature-icon">${svg(FLEET_ICONS[feature.icon])}</span><span>${feature.text}</span></li>`
            )
            .join("")}
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
  document.getElementById("galleryShowMore")?.remove();
  galleryImages.length = 0;

  let activeCount = 0;
  let failedCount = 0;
  const showMore = document.createElement("button");
  showMore.id = "galleryShowMore";
  showMore.className = "btn btn--primary gallery-more";
  showMore.type = "button";
  showMore.textContent = "Show More";
  showMore.hidden = true;

  const updateEmptyState = () => {
    const allImagesFailed = failedCount >= GALLERY_COUNT;
    if (empty) empty.hidden = activeCount > 0 || !allImagesFailed;
    if (grid) grid.style.display = allImagesFailed ? "none" : "grid";
  };

  const updateShowMore = () => {
    const hasHiddenImages = galleryImages.some((item) => !item.failed && item.el.hidden);
    showMore.hidden = activeCount === 0 || !hasHiddenImages;
  };

  updateEmptyState();

  for (let i = GALLERY_COUNT; i >= 1; i--) {
    const card = document.createElement("button");
    const img = document.createElement("img");
    const zoom = document.createElement("span");
    const item = {
      src: `images/${i}.${GALLERY_EXTENSIONS[0]}`,
      alt: `Cars on Rent travel photo ${i}`,
      el: card,
      failed: false,
    };
    let extIndex = 0;

    card.className = "gcard reveal is-in";
    card.type = "button";
    card.hidden = galleryImages.length >= GALLERY_INITIAL_VISIBLE;
    card.setAttribute("aria-label", `Open gallery photo ${i}`);

    img.alt = item.alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.onload = () => {
      activeCount++;
      updateEmptyState();
      updateShowMore();
    };
    img.onerror = () => {
      extIndex++;
      if (extIndex < GALLERY_EXTENSIONS.length) {
        item.src = `images/${i}.${GALLERY_EXTENSIONS[extIndex]}`;
        img.src = item.src;
        return;
      }
      item.failed = true;
      failedCount++;
      card.remove();
      updateEmptyState();
      updateShowMore();
    };

    zoom.className = "gcard__zoom";
    zoom.setAttribute("aria-hidden", "true");
    zoom.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
    `;

    card.append(img, zoom);
    grid.appendChild(card);
    galleryImages.push(item);
    img.src = item.src;
  }

  showMore.addEventListener("click", () => {
    galleryImages.forEach((item) => {
      if (!item.failed) item.el.hidden = false;
    });
    updateShowMore();
  });

  grid.insertAdjacentElement("afterend", showMore);
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
