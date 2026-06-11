/* ============================================================
   VICTOR BEE PORTFOLIO — app.js
   ============================================================ */

'use strict';

/* ──────────────────────────────────────
   DATA
────────────────────────────────────── */
const APPS = [
  {
    id: 'expense-tracker',
    num: '01',
    name: 'Expense Tracker',
    snippet: 'Full CRUD finance app with Firebase, BLoC state, and weekly spending charts.',
    desc: 'A production-ready personal finance app built with Flutter and Firebase Firestore. Tracks income and expenses in real time, visualises weekly spending with animated bar charts, and uses the BLoC pattern for clean, testable state management. Demonstrates solid CRUD fundamentals, Firebase integration, and chart rendering — the kind of thing clients need in nearly every fintech project.',
    tags: ['Flutter', 'Dart', 'BLoC'],
    platform: 'flutter',
    platformLabel: 'Flutter',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=75',
    features: [
      'Add & delete transactions with category labels',
      'Firebase Firestore for real-time cloud storage',
      'Animated chart showing weekly spending breakdown',
      'BLoC pattern for predictable state management',
      'Clean Material 3 UI with dark theme',
    ],
    github: 'https://github.com/Mubangizivictor/expense-tracker',
    playstore: null,
  },
  {
    id: 'prayer-times',
    num: '02',
    name: 'Prayer Times App',
    snippet: 'Fetches 5 daily prayer times via Aladhan API with push notifications & offline cache.',
    desc: 'A precise, location-aware prayer times app built for Muslim users across the Gulf and East Africa. Pulls live prayer schedules from the Aladhan API for any city, fires local push notifications 10 minutes before each prayer, and caches the last fetched schedule so the app works fully offline. A strong example of API integration, local notifications, and offline-first architecture.',
    tags: ['Flutter', 'REST API', 'Hive', 'Notifications'],
    platform: 'flutter',
    platformLabel: 'Flutter',
    img: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=700&q=75',
    features: [
      'Aladhan API integration — any city worldwide',
      'Displays all 5 daily prayer times cleanly',
      'Push notification 10 min before each prayer',
      'Hive offline caching — works without internet',
      'Auto-refresh on location/city change',
    ],
    github: 'https://github.com/Mubangizivictor/prayer-times-app',
    playstore: null,
  },
  {
    id: 'business-catalog',
    num: '03',
    name: 'Small Business Catalog',
    snippet: 'Auth + search + Firebase favorites — the most common freelance app request.',
    desc: 'A full-stack Flutter app simulating a local business directory. Users browse 10 shops with images and descriptions, search/filter the list locally in real time, and save favourites to Firebase per user account. Email/password authentication ensures each user has their own saved list. This app covers the exact feature set clients ask for most — auth, search, and user-specific data.',
    tags: ['Flutter', 'Firebase Auth', 'Firestore', 'Search'],
    platform: 'flutter',
    platformLabel: 'Flutter',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=75',
    features: [
      '10 shop listings with images & descriptions',
      'Live local search bar with instant filtering',
      'Firebase email/password authentication',
      'Per-user favourites saved to Firestore',
      'Clean card UI with category badges',
    ],
    github: 'https://github.com/Mubangizivictor/small-business-catalog',
    playstore: null,
  },
  {
    id: 'todo-deadlines',
    num: '04',
    name: 'Todo with Deadlines',
    snippet: 'Tasks with date picker, overdue red highlights, Hive storage & dark/light theme.',
    desc: 'A polished task manager that proves you don\'t always need Firebase. Tasks are stored locally using Hive (no internet required), include a date picker for deadlines, and overdue items are automatically highlighted red. A dark/light theme toggle is built in. This app demonstrates local database skills, UI theming, and the ability to architect offline-first solutions.',
    tags: ['Flutter', 'Hive', 'SQLite', 'Theming'],
    platform: 'flutter',
    platformLabel: 'Flutter',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&q=75',
    features: [
      'Add tasks with title, notes & due date picker',
      'Overdue tasks highlighted red automatically',
      'Local Hive storage — 100% offline',
      'Dark / light theme toggle with persistence',
      'Swipe-to-delete with undo snackbar',
    ],
    github: 'https://github.com/Mubangizivictor/todo-deadlines',
    playstore: null,
  },
  {
    id: 'original-app',
    num: '05',
    name: 'Victor\'s Original App',
    snippet: 'Two Firebase collections, image upload, full loading states & error handling.',
    desc: 'My flagship original project — architected from scratch. Uses two related Firebase Firestore collections with proper relational design, allows users to upload images to Firebase Storage, and handles every async state correctly: loading spinners while fetching, user-friendly error messages on failures, and empty states when there\'s no data. The strongest proof of independent architecture skills in this portfolio.',
    tags: ['Flutter', 'Firebase Storage', 'Firestore', 'Architecture'],
    platform: 'flutter',
    platformLabel: 'Flutter',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=75',
    features: [
      'Two Firestore collections with relational data',
      'Image upload and display via Firebase Storage',
      'Full loading states — no blank white screens',
      'User-friendly error handling throughout',
      'Architected independently from zero',
    ],
    github: 'https://github.com/Mubangizivictor',
    playstore: null,
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
const mobileMenu  = document.getElementById('mobileMenu');
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
const overlay   = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(app) {
  document.getElementById('modalNumber').textContent  = `Project ${app.num}`;
  document.getElementById('modalTitle').textContent   = app.name;
  document.getElementById('modalDesc').textContent    = app.desc;
  document.getElementById('modalImg').src             = app.img;
  document.getElementById('modalImg').alt             = app.name;

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
  } else {
    const psBtn = document.createElement('span');
    psBtn.style.cssText = 'font-family:var(--mono);font-size:0.72rem;color:var(--text-dim);align-self:center;';
    psBtn.textContent = '⏳ Play Store coming soon';
    linksEl.appendChild(psBtn);
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
   CONTACT FORM
────────────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('formSuccess');
  msg.classList.add('show');
  e.target.reset();
  setTimeout(() => msg.classList.remove('show'), 5000);
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

  // Small delay so elements are in DOM before observing
  requestAnimationFrame(() => {
    observeAll();

    // Immediately reveal anything already in viewport
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) el.classList.add('in');
    });
  });
});
