/* ============================================================
   VICTOR BEE PORTFOLIO — app.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────
   DATA
────────────────────────────────────── */
const APPS = [
  {
    id: 'pearl-exchange',
    num: '01',
    name: 'Pearl Exchange',
    snippet: 'Scan-to-pay fintech app for Uganda — mobile payments made simple and fast.',
    desc: 'Pearl Exchange is a scan-to-pay fintech application built for the Ugandan market. Users can scan QR codes to send and receive payments instantly, view transaction history, and manage their wallet — all within a clean, fast Flutter interface. Built with security and low-latency UX in mind, it addresses the real gap in accessible mobile payments across East Africa.',
    tags: ['Flutter', 'Fintech', 'Firebase', 'Payments'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=75',
    features: [
      'QR code scan-to-pay flow with instant feedback',
      'Real-time transaction history and wallet balance',
      'Secure Firebase Authentication & Firestore',
      'Optimised for Uganda\'s mobile-first users',
      'Clean, accessible Material 3 UI',
    ],
    github: 'https://github.com/Mubangizivictor/pearl_exchange',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'wonder-kids',
    num: '02',
    name: 'Wonder Kids',
    snippet: 'Children\'s e-commerce app — browse, buy and gift kids\' products with ease.',
    desc: 'Wonder Kids is a full e-commerce experience built specifically for children\'s products. Parents can browse categorised listings, add items to cart, and complete purchases with a smooth, family-friendly checkout flow. The app features Firebase-backed product listings, order management, and a UI designed to delight both parents and kids. A strong showcase of e-commerce architecture in Flutter.',
    tags: ['Flutter', 'E-commerce', 'Firebase', 'Stripe'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/wonderkids.jpeg',
    features: [
      'Full product catalogue with category filters',
      'Cart, wishlist and checkout flow',
      'Firebase Firestore product & order management',
      'Child-friendly, colourful UI design',
      'Order history and delivery tracking',
    ],
    github: 'https://github.com/Mubangizivictor/wonder-kids-ecommerce-flutter',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'dogify',
    num: '03',
    name: 'Dogify',
    snippet: 'Pet shop + AI dog trainer — your all-in-one companion for dog owners.',
    desc: 'Dogify combines a pet product shop with an AI-powered dog training assistant. Users can browse and purchase pet supplies, access training guides, and get AI-generated advice tailored to their dog\'s breed and age. This app demonstrates the integration of AI features alongside a real e-commerce flow — a combination increasingly requested by modern app clients.',
    tags: ['Flutter', 'AI', 'Firebase', 'E-commerce'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/dogify.jpeg',
    features: [
      'Pet product shop with cart and checkout',
      'AI dog trainer with breed-specific advice',
      'Firebase-backed product and user data',
      'Personalized training plans by dog age/breed',
      'Clean, playful UI with intuitive navigation',
    ],
    github: 'https://github.com/Mubangizivictor/dogify',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'flow',
    num: '04',
    name: 'Flow',
    snippet: 'Minimal to-do task manager — focus on what matters, nothing else.',
    desc: 'Flow is a beautifully minimal task management app built on the principle that productivity tools should get out of your way. Tasks are organised by priority and deadline, stored locally with Hive for instant offline access, and the interface strips away everything non-essential. A deliberate design exercise in restraint — proving that great UX is about what you leave out.',
    tags: ['Flutter', 'Hive', 'Productivity', 'Minimal UI'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/flow.webp',
    features: [
      'Add tasks with priority levels and due dates',
      'Overdue tasks highlighted for immediate attention',
      'Hive local storage — fully offline, instant load',
      'Minimal UI — zero clutter by design',
      'Dark and light theme with smooth toggle',
    ],
    github: 'https://github.com/Mubangizivictor/flow',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'mizan',
    num: '05',
    name: 'Mizan',
    snippet: 'All-in-one Muslim lifestyle app — prayer times, Quran, Qibla & more.',
    desc: 'Mizan is a comprehensive Muslim lifestyle app that brings together prayer times, a digital Quran, Qibla compass, and daily dhikr counter in one beautifully designed package. Prayer times are fetched live via the Aladhan API with push notifications before each prayer. The app is built with East African and Gulf Muslim users in mind — offline-capable and available in multiple languages.',
    tags: ['Flutter', 'REST API', 'Notifications', 'Lifestyle'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android · iOS',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/mizan.jpg',
    features: [
      'Live prayer times for any city via Aladhan API',
      'Push notifications before each of the 5 prayers',
      'Digital Quran with bookmarks and search',
      'Qibla compass using device sensors',
      'Offline caching — works without internet',
    ],
    github: 'https://github.com/Mubangizivictor/mizan_app',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'ubuntu-interiors',
    num: '06',
    name: 'Ubuntu Interiors',
    snippet: 'Interior design showcase app — browse, save and visualise room inspirations.',
    desc: 'Ubuntu Interiors is a visually-rich app for an interior design studio, letting users browse curated room designs by style and category, save favourites to a personal moodboard, and contact designers directly in-app. Firebase Storage powers the high-quality image delivery, while Firestore handles the catalogue and user moodboards. A strong portfolio piece for any design or real-estate adjacent client.',
    tags: ['Flutter', 'Firebase Storage', 'Design', 'Firestore'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android · iOS',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/ubuntu.avif',
    features: [
      'Curated interior design catalogue by style/room',
      'Firebase Storage for high-quality image delivery',
      'Personal moodboard — save favourite designs',
      'Direct designer contact form in-app',
      'Smooth image transitions and gallery viewer',
    ],
    github: 'https://github.com/Mubangizivictor/obuntu',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'adhan-flow',
    num: '07',
    name: 'Adhan Flow',
    snippet: 'World-time prayer alarm — accurate prayer times globally with smart alerts.',
    desc: 'Adhan Flow is a precision prayer alarm app designed for Muslim travellers and users across multiple time zones. It automatically detects location, fetches accurate prayer times for any city worldwide, and fires beautifully designed alarm notifications at each prayer. The app handles time zone changes gracefully and caches data for offline use — a technically demanding real-world utility app.',
    tags: ['Flutter', 'Geolocation', 'Notifications', 'API'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android · iOS',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/adhan.png',
    features: [
      'Auto location detection for accurate prayer times',
      'Prayer alarm notifications with custom adhan tones',
      'World time zone support — works while travelling',
      'Offline caching of last fetched prayer schedule',
      'Sleek dark UI optimised for early morning use',
    ],
    github: 'https://github.com/Mubangizivictor/adhan-flow',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'budgto',
    num: '08',
    name: 'Budgto',
    snippet: 'Expenses & budget tracker — take control of your money, one tap at a time.',
    desc: 'Budgto is a smart personal budget tracker that helps users set monthly budgets by category, log daily expenses, and get visual breakdowns of spending patterns. Charts update in real time as transactions are added, and Firebase Firestore keeps data synced across devices. Budgto is aimed at young East African professionals taking their first steps toward financial discipline.',
    tags: ['Flutter', 'Firebase', 'Charts', 'Fintech'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/to-do-app.png',
    features: [
      'Set monthly budgets per spending category',
      'Log daily expenses with notes and receipts',
      'Real-time charts — pie and bar breakdowns',
      'Firebase Firestore sync across devices',
      'Budget warnings when nearing category limits',
    ],
    github: 'https://github.com/Mubangizivictor/budgeto',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
  {
    id: 'lunara',
    num: '09',
    name: 'Lunara',
    snippet: 'Productivity planner — plan your week, track habits, achieve your goals.',
    desc: 'Lunara is a weekly productivity planner and habit tracker built for people who want structure without rigidity. Users plan their week with time blocks, set recurring habits, and track streaks. The app uses Hive for local-first storage so it works offline, and offers a beautiful calendar view alongside habit completion rings inspired by the Apple Fitness aesthetic — but built entirely in Flutter.',
    tags: ['Flutter', 'Hive', 'Habits', 'Productivity'],
    platform: 'flutter',
    platformLabel: 'Flutter · Android · iOS',
    img: 'https://raw.githubusercontent.com/Mubangizivictor/victorbee/main/lunara.jpg',
    features: [
      'Weekly planner with drag-and-drop time blocks',
      'Habit tracker with daily streaks and rings',
      'Hive local storage — fully offline-capable',
      'Calendar view with completed/missed indicators',
      'Goal-setting with weekly progress summaries',
    ],
    github: 'https://github.com/Mubangizivictor/lunara_todo_app',
    playstore: null,
    store: 'Google Play Store & Apple App Store',
  },
];

const SKILLS = [
  { icon: '📱', name: 'Flutter & Dart',   desc: 'Custom widgets, animations, BLoC/Riverpod, multi-platform release pipeline.',   level: 95, color: '#22c55e' },
  { icon: '🤖', name: 'Android Native',   desc: 'Kotlin, Jetpack Compose, MVVM, Room, WorkManager, Play Store deployment.',       level: 88, color: '#a3e635' },
  { icon: '🍎', name: 'iOS Development',  desc: 'Swift, SwiftUI, UIKit, App Store submission and native API integration.',        level: 78, color: '#86efac' },
  { icon: '🌐', name: 'Web & React',      desc: 'SPA, PWA, React hooks, Next.js, TypeScript, Tailwind CSS.',                     level: 82, color: '#4ade80' },
  { icon: '🔥', name: 'Firebase & Cloud', desc: 'Auth, Firestore, Cloud Functions, Storage, Analytics, Crashlytics.',           level: 92, color: '#22c55e' },
  { icon: '🎨', name: 'UI/UX Design',     desc: 'Figma to code, micro-interactions, design systems, accessibility.',             level: 80, color: '#86efac' },
];


/* ──────────────────────────────────────
   NAV — scroll behaviour
────────────────────────────────────── */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


/* ──────────────────────────────────────
   MOBILE MENU
────────────────────────────────────── */
const mobileMenu   = document.getElementById('mobileMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileClose  = document.getElementById('mobileClose');

hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}


/* ──────────────────────────────────────
   LIVE CLOCK — Kampala EAT
────────────────────────────────────── */
function updateClock() {
  const el = document.getElementById('clockStat');
  if (!el) return;
  const t = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Nairobi',
    hour: '2-digit', minute: '2-digit',
    hour12: false,
  }).format(new Date());
  el.textContent = t;
}
updateClock();
setInterval(updateClock, 1000);


/* ──────────────────────────────────────
   COUNTER ANIMATION
────────────────────────────────────── */
function animateCounter(el, target, suffix = '+') {
  let val = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = val + suffix;
    if (val >= target) clearInterval(interval);
  }, 30);
}


/* ──────────────────────────────────────
   MOCKUP TABS (hero)
────────────────────────────────────── */
document.querySelectorAll('.mockup-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.mockup-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


/* ──────────────────────────────────────
   RENDER APPS GRID
────────────────────────────────────── */
function renderApps() {
  const grid = document.getElementById('appsGrid');
  if (!grid) return;

  APPS.forEach(app => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.setAttribute('data-id', app.id);

    card.innerHTML = `
      <div class="app-card__thumb">
        <img
          class="app-card__img"
          src="${app.img}"
          alt="${app.name}"
          loading="lazy"
        />
        <span class="app-card__num">${app.num}</span>
        <span class="app-card__platform app-card__platform--${app.platform}">${app.platformLabel}</span>
      </div>
      <div class="app-card__body">
        <div class="app-card__tags">
          ${app.tags.map(t => `<span class="app-card__tag">${t}</span>`).join('')}
        </div>
        <p class="app-card__name">${app.name}</p>
        <p class="app-card__snippet">${app.snippet}</p>
        <div class="app-card__footer">
          <span class="app-card__cta">
            View details <i class="fas fa-arrow-right" style="font-size:0.65rem;"></i>
          </span>
          <div class="app-card__icons">
            ${app.playstore ? `<a href="${app.playstore}" target="_blank" class="app-card__icon-link" title="Play Store" onclick="event.stopPropagation()"><i class="fab fa-google-play"></i></a>` : ''}
            <a href="${app.github}" target="_blank" class="app-card__icon-link" title="GitHub" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(app));
    grid.appendChild(card);
  });
}


/* ──────────────────────────────────────
   RENDER SKILLS
────────────────────────────────────── */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  SKILLS.forEach(skill => {
    const cell = document.createElement('div');
    cell.className = 'skill-cell reveal';
    cell.style.setProperty('--cell-color', skill.color);

    cell.innerHTML = `
      <span class="skill-cell__icon">${skill.icon}</span>
      <p class="skill-cell__name">${skill.name}</p>
      <p class="skill-cell__desc">${skill.desc}</p>
      <div class="skill-cell__bar">
        <div class="skill-cell__fill" data-width="${skill.level}%"></div>
      </div>
    `;
    grid.appendChild(cell);
  });
}


/* ──────────────────────────────────────
   MODAL
────────────────────────────────────── */
const overlay    = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(app) {
  document.getElementById('modalNumber').textContent = `Project ${app.num}`;
  document.getElementById('modalTitle').textContent  = app.name;
  document.getElementById('modalDesc').textContent   = app.desc;
  document.getElementById('modalImg').src            = app.img;
  document.getElementById('modalImg').alt            = app.name;

  // badges
  const badgesEl = document.getElementById('modalBadges');
  badgesEl.innerHTML = app.tags.map(t =>
    `<span style="
      font-family:var(--mono);font-size:0.62rem;padding:3px 10px;
      border-radius:999px;background:rgba(0,0,0,0.65);color:#fff;
      border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(6px);
    ">${t}</span>`
  ).join('');

  // features
  const featuresEl = document.getElementById('modalFeatures');
  featuresEl.innerHTML = (app.features || []).map(f =>
    `<div class="modal__feature">${f}</div>`
  ).join('');

  // links
  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = '';

  const ghBtn = document.createElement('a');
  ghBtn.href = app.github;
  ghBtn.target = '_blank';
  ghBtn.className = 'btn btn--ghost';
  ghBtn.innerHTML = '<i class="fab fa-github"></i> View Code';
  linksEl.appendChild(ghBtn);

  if (app.playstore) {
    const psBtn = document.createElement('a');
    psBtn.href = app.playstore;
    psBtn.target = '_blank';
    psBtn.className = 'btn btn--green';
    psBtn.innerHTML = '<i class="fab fa-google-play"></i> Play Store';
    linksEl.appendChild(psBtn);
  }
  if (app.store) {
    const badge = document.createElement('span');
    badge.style.cssText = 'display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:0.68rem;color:var(--green);align-self:center;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.25);padding:4px 12px;border-radius:999px;';
    badge.innerHTML = '<i class="fas fa-circle-check" style="font-size:0.6rem;"></i> Published \u00b7 ' + app.store;
    linksEl.appendChild(badge);
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


/* ──────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver
────────────────────────────────────── */
let countersTriggered = false;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    el.classList.add('in');

    // Animate skill bars when they enter view
    el.querySelectorAll('.skill-cell__fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });

    // Animate stat counters once
    if (!countersTriggered && el.classList.contains('stats-bar__inner')) {
      countersTriggered = true;
      document.querySelectorAll('.stat__val[data-target]').forEach(valEl => {
        const target = parseInt(valEl.dataset.target, 10);
        const suffix = valEl.dataset.suffix || '+';
        animateCounter(valEl, target, suffix);
      });
    }

    revealObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
  document.querySelectorAll('.reveal, .stats-bar__inner').forEach(el => {
    if (!el.classList.contains('in')) revealObserver.observe(el);
  });
}


/* ──────────────────────────────────────
   INIT
────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderApps();
  renderSkills();

  requestAnimationFrame(() => {
    observeAll();

    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) el.classList.add('in');
    });
  });
});
