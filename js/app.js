/* Full-Stack Study — vanilla JS app. No build step; works from file:// or any static server. */
(function () {
  "use strict";
  const DATA_EN = window.STUDY_DATA;
  const DATA_ES = window.STUDY_DATA_ES;
  let LANG = "en";
  let DATA = DATA_EN;
  const app = document.getElementById("app");

  /* UI strings per language */
  const UI = {
    en: {
      docTitle: "Full-Stack Study — Interview Prep",
      footer: 'Built from the Full-Stack Interview Guide · Progress saved locally in your browser · Keyboard: space flips, ←/→ navigate, 1/2 mark cards, 1–4 answer quiz.',
      heroTitle: "Study smarter, not harder.",
      heroLead: 'Pick a track, then learn each topic three ways: <strong>Read</strong> the essentials, drill <strong>Flashcards</strong>, and test yourself with a <strong>Quiz</strong>. Progress is saved in your browser.',
      statTopics: "topics", statCards: "flashcards", statQuiz: "quiz questions",
      metaTopics: n => `${n} topics`, metaCards: n => `${n} cards`, metaMastered: n => `${n} mastered`,
      startStudying: "Start studying →",
      reviewBanner: n => `🔁 <b>${n}</b> card${n === 1 ? "" : "s"} due for review — start a session →`,
      howTitle: "How it works",
      how1t: "Read", how1p: "Condensed, interview-ready notes with the trade-offs that matter.",
      how2t: "Flashcards", how2p: 'Flip to reveal, mark "Got it" or "Still learning". Keyboard: space flips, ←/→ navigate, 1/2 mark.',
      how3t: "Quiz", how3p: "Multiple choice with instant explanations. Your best score is saved per topic.",
      allTracks: "← All tracks",
      fullGuide: "📖 Read the full guide (one page)",
      reviewDue: n => `🔁 Review due (${n})`,
      btnRead: "📖 Read", btnCards: "🃏 Cards", btnQuiz: "✅ Quiz",
      cardsWord: "cards", notTried: "Not tried", readDone: "read ✓", best: p => `Best ${p}%`,
      topicsBack: n => `← ${n} topics`,
      fullGuideTitle: n => `${n} — Full Guide`,
      guideSub: n => `All ${n} topics on a single page.`,
      contents: "Contents", backToTop: "↑ Back to top",
      tabRead: "📖 Read", tabCards: "🃏 Flashcards", tabQuiz: "✅ Quiz",
      reviewTitle: n => `Review — ${n}`,
      reviewSub: "Spaced repetition: cards you flagged or that are due today.",
      allTracksName: "All tracks",
      reviewLeft: n => `${n} card${n === 1 ? "" : "s"} left in this review`,
      reviewNote: "marking schedules the next repetition",
      emptyTitle: "Nothing due right now",
      emptyNext: t => `Next card comes back in <b>${t}</b>.`,
      emptyHint: "Mark cards in a topic to build your review queue.",
      back: "← Back", openDeck: "Open the full deck",
      cardCount: (a, b) => `Card ${a} / ${b}`,
      masteredLine: (a, b, c) => `${a} mastered · ${b} reviewing · ${c} new`,
      shuffle: "Shuffle",
      qLabel: "Question", aLabel: "Answer", flipHint: "click or press space to flip",
      prev: "← Prev", next: "Next →",
      btnStill: "1 · Still learning", btnGot: "2 · Got it",
      restart: "↺ Restart deck", takeQuiz: "Take the quiz →",
      badgeGot: "Got it", badgeReview: "Still learning", badgeDue: "due",
      markRead: "Mark as read", markedRead: "✓ Marked as read", drill: "Drill flashcards →",
      startOfTrack: "← Start of track", endOfTrack: "End of track ✓",
      quizCount: (a, b) => `Question ${a} / ${b}`,
      scoreLine: (a, b) => `Score ${a} / ${b}`,
      chooseAnswer: "Choose an answer.",
      correct: "Correct!", wrong: "Not quite.",
      seeResults: "See results →", nextQuestion: "Next question →",
      doneScore: (a, b) => `${a} / ${b} correct`,
      doneMsgs: ["Perfect run! 🎉", "Strong work. 💪", "Getting there — review the misses.", "Worth another pass through the cards."],
      bestScore: (p, a) => `Best score for this topic: <b>${p}%</b> · Attempts: ${a}`,
      retry: "↺ Retry quiz", reviewCards: "🃏 Review flashcards", backTopics: "Back to topics",
      resetConfirm: "Reset all study progress? This cannot be undone.",
      langTitle: "Cambiar a español"
    },
    es: {
      docTitle: "Full-Stack Study — Preparación para Entrevistas",
      footer: 'Basado en la Full-Stack Interview Guide · Progreso guardado en tu navegador · Teclado: espacio voltea, ←/→ navegan, 1/2 califica tarjetas, 1–4 responde el quiz.',
      heroTitle: "Estudia inteligente, no más duro.",
      heroLead: 'Elige una ruta y aprende cada tema de tres formas: <strong>lee</strong> lo esencial, practica con <strong>tarjetas</strong> y pruébate con un <strong>quiz</strong>. Tu progreso se guarda en tu navegador.',
      statTopics: "temas", statCards: "tarjetas", statQuiz: "preguntas de quiz",
      metaTopics: n => `${n} temas`, metaCards: n => `${n} tarjetas`, metaMastered: n => `${n} dominadas`,
      startStudying: "Empieza a estudiar →",
      reviewBanner: n => `🔁 <b>${n}</b> tarjeta${n === 1 ? "" : "s"} para repasar — inicia una sesión →`,
      howTitle: "Cómo funciona",
      how1t: "Leer", how1p: "Notas condensadas y listas para entrevista con los trade-offs que importan.",
      how2t: "Tarjetas", how2p: 'Voltea para revelar y marca "La sé" o "Repasar". Teclado: espacio voltea, ←/→ navegan, 1/2 califican.',
      how3t: "Quiz", how3p: "Opción múltiple con explicaciones al instante. Tu mejor puntaje se guarda por tema.",
      allTracks: "← Todas las rutas",
      fullGuide: "📖 Lee la guía completa (una página)",
      reviewDue: n => `🔁 Repasar pendientes (${n})`,
      btnRead: "📖 Leer", btnCards: "🃏 Tarjetas", btnQuiz: "✅ Quiz",
      cardsWord: "tarjetas", notTried: "Sin intentar", readDone: "leído ✓", best: p => `Mejor ${p}%`,
      topicsBack: n => `← Temas de ${n}`,
      fullGuideTitle: n => `${n} — Guía completa`,
      guideSub: n => `Los ${n} temas en una sola página.`,
      contents: "Contenido", backToTop: "↑ Volver arriba",
      tabRead: "📖 Leer", tabCards: "🃏 Tarjetas", tabQuiz: "✅ Quiz",
      reviewTitle: n => `Repaso — ${n}`,
      reviewSub: "Repetición espaciada: tarjetas que marcaste o que vencen hoy.",
      allTracksName: "Todas las rutas",
      reviewLeft: n => `Queda${n === 1 ? "" : "n"} ${n} tarjeta${n === 1 ? "" : "s"} en este repaso`,
      reviewNote: "calificar programa la siguiente repetición",
      emptyTitle: "No hay nada pendiente ahora",
      emptyNext: t => `La próxima tarjeta vuelve en <b>${t}</b>.`,
      emptyHint: "Marca tarjetas en un tema para llenar tu cola de repaso.",
      back: "← Volver", openDeck: "Abrir el mazo completo",
      cardCount: (a, b) => `Tarjeta ${a} / ${b}`,
      masteredLine: (a, b, c) => `${a} dominadas · ${b} en repaso · ${c} nuevas`,
      shuffle: "Aleatorio",
      qLabel: "Pregunta", aLabel: "Respuesta", flipHint: "clic o barra espaciadora para voltear",
      prev: "← Anterior", next: "Siguiente →",
      btnStill: "1 · Repasar", btnGot: "2 · La sé",
      restart: "↺ Reiniciar mazo", takeQuiz: "Hacer el quiz →",
      badgeGot: "La sé", badgeReview: "Repasar", badgeDue: "pendiente",
      markRead: "Marcar como leído", markedRead: "✓ Marcado como leído", drill: "Practicar tarjetas →",
      startOfTrack: "← Inicio de la ruta", endOfTrack: "Fin de la ruta ✓",
      quizCount: (a, b) => `Pregunta ${a} / ${b}`,
      scoreLine: (a, b) => `Aciertos ${a} / ${b}`,
      chooseAnswer: "Elige una respuesta.",
      correct: "¡Correcto!", wrong: "Casi.",
      seeResults: "Ver resultados →", nextQuestion: "Siguiente pregunta →",
      doneScore: (a, b) => `${a} / ${b} correctas`,
      doneMsgs: ["¡Ronda perfecta! 🎉", "¡Muy bien! 💪", "Vas bien — repasa los errores.", "Vale la pena otra pasada por las tarjetas."],
      bestScore: (p, a) => `Mejor puntaje en este tema: <b>${p}%</b> · Intentos: ${a}`,
      retry: "↺ Repetir quiz", reviewCards: "🃏 Repasar tarjetas", backTopics: "Volver a los temas",
      resetConfirm: "¿Restablecer todo tu progreso de estudio? Esto no se puede deshacer.",
      langTitle: "Switch to English"
    }
  };
  const L = () => UI[LANG];
  function applyLang() {
    document.documentElement.lang = LANG;
    document.title = UI[LANG].docTitle;
    const foot = document.querySelector(".site-footer");
    if (foot) foot.innerHTML = UI[LANG].footer;
    const lb = document.getElementById("lang-toggle");
    if (lb) { lb.textContent = "🌐 " + LANG.toUpperCase(); lb.title = UI[LANG].langTitle; }
    document.querySelectorAll("#lang-menu .dropdown-item").forEach(b => {
      const on = b.dataset.lang === LANG;
      b.classList.toggle("active", on);
      const chk = b.querySelector(".check");
      if (chk) chk.textContent = on ? "✓" : "";
    });
  }

  /* ---------------- persistence ---------------- */
  const P_KEY = "fs-study-progress-v1";
  const S_KEY = "fs-study-settings-v1";
  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (e) { return fallback; }
  }
  let progress = load(P_KEY, { cards: {}, quiz: {}, read: {}, srs: {} });
  let settings = load(S_KEY, { dark: false });
  function saveProgress() { localStorage.setItem(P_KEY, JSON.stringify(progress)); }
  function saveSettings() { localStorage.setItem(S_KEY, JSON.stringify(settings)); }
  LANG = settings.lang === "es" ? "es" : "en";
  DATA = LANG === "es" ? DATA_ES : DATA_EN;
  applyLang();

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }
  function cardId(topic, i) { return topic + ":" + i; }
  function topicStats(id) {
    const t = DATA.topics[id];
    const total = t.cards.length;
    let known = 0, review = 0;
    t.cards.forEach((_, i) => {
      const m = progress.cards[cardId(id, i)];
      if (m === "known") known++; else if (m === "review") review++;
    });
    const quiz = progress.quiz[id];
    const read = !!progress.read[id];
    // weighted mastery: cards 70%, quiz best 20%, read 10%
    const cardPct = total ? known / total : 0;
    const quizPct = quiz ? quiz.best / 100 : 0;
    const pct = Math.round((cardPct * 0.7 + quizPct * 0.2 + (read ? 1 : 0) * 0.1) * 100);
    return { total, known, review, quiz, read, pct };
  }
  function trackStats(trackId) {
    const ids = DATA.tracks[trackId].topics;
    let sum = 0, cards = 0, known = 0;
    ids.forEach(id => { const s = topicStats(id); sum += s.pct; cards += s.total; known += s.known; });
    return { pct: Math.round(sum / ids.length), topics: ids.length, cards, known };
  }
  function ring(pct, size) {
    size = size || 44;
    const r = (size - 6) / 2, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" class="ring-bg"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" class="ring-fg"
        stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"
        transform="rotate(-90 ${size/2} ${size/2})"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" class="ring-txt">${pct}</text>
    </svg>`;
  }
  function bar(pct) {
    return `<div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>`;
  }
  /* Animated scroll that doesn't depend on native smooth-scroll support
     (some WebViews silently ignore scrollIntoView/scrollTo with behavior:"smooth"). */
  function smoothScrollTo(targetY) {
    const startY = window.pageYOffset;
    const diff = Math.round(targetY) - startY;
    if (Math.abs(diff) < 2) return;
    const dur = Math.min(700, 300 + Math.abs(diff) / 3);
    const t0 = performance.now();
    (function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // easeInOutQuad
      window.scrollTo(0, startY + diff * eased);
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  function scrollToSection(el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 84; // clear the sticky header
    smoothScrollTo(Math.max(0, y));
  }

  /* ---------------- routing ---------------- */
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts[0] === "track" && parts[1]) return { view: "track", track: parts[1] };
    if (parts[0] === "guide" && parts[1]) return { view: "guide", track: parts[1] };
    if (parts[0] === "review") return { view: "review", scope: parts[1] || "all", track: DATA.tracks[parts[1]] ? parts[1] : undefined };
    if (parts[0] === "study" && parts[1] && parts[2]) return { view: "study", track: parts[1], topic: parts[2], mode: parts[3] || "read" };
    return { view: "home" };
  }
  function go(hash) { location.hash = hash; }

  /* ---------------- header ---------------- */
  function renderHeader(route) {
    const active = route.track || (route.view === "home" ? "" : "");
    const pills = Object.keys(DATA.tracks).map(id => {
      const t = DATA.tracks[id];
      const on = active === id ? " active" : "";
      return `<a class="pill${on}" href="#/track/${id}">${t.icon} ${t.name}</a>`;
    }).join("");
    document.getElementById("track-pills").innerHTML = pills;
    const darkBtn = document.getElementById("dark-toggle");
    darkBtn.textContent = settings.dark ? "☀️" : "🌙";
    darkBtn.title = settings.dark ? "Switch to light mode" : "Switch to dark mode";
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    const cards = Object.keys(DATA.tracks).map(id => {
      const t = DATA.tracks[id], s = trackStats(id);
      return `<a class="track-card" href="#/track/${id}">
        <div class="track-card-top">
          <span class="track-icon">${t.icon}</span>
          ${ring(s.pct, 56)}
        </div>
        <h2>${t.name}</h2>
        <p>${esc(t.tagline)}</p>
        <div class="track-meta">
          <span>${L().metaTopics(s.topics)}</span><span>${L().metaCards(s.cards)}</span><span>${L().metaMastered(s.known)}</span>
        </div>
        ${bar(s.pct)}
        <span class="track-cta">${L().startStudying}</span>
      </a>`;
    }).join("");
    const totalCards = Object.values(DATA.topics).reduce((n, t) => n + t.cards.length, 0);
    const totalQuiz = Object.values(DATA.topics).reduce((n, t) => n + t.quiz.length, 0);
    const dueAll = dueRefs("all").length;
    app.innerHTML = `
      <section class="hero">
        <h1>${L().heroTitle}</h1>
        <p class="lead">${L().heroLead}</p>
        <div class="hero-stats">
          <div><b>${Object.keys(DATA.topics).length}</b><span>${L().statTopics}</span></div>
          <div><b>${totalCards}</b><span>${L().statCards}</span></div>
          <div><b>${totalQuiz}</b><span>${L().statQuiz}</span></div>
        </div>
      </section>
      ${dueAll ? `<a class="review-banner" href="#/review/all">🔁 ${L().reviewBanner(dueAll)}</a>` : ""}
      <section class="track-grid">${cards}</section>
      <section class="how">
        <h3>${L().howTitle}</h3>
        <div class="how-grid">
          <div class="how-item"><span>📖</span><h4>${L().how1t}</h4><p>${L().how1p}</p></div>
          <div class="how-item"><span>🃏</span><h4>${L().how2t}</h4><p>${L().how2p}</p></div>
          <div class="how-item"><span>✅</span><h4>${L().how3t}</h4><p>${L().how3p}</p></div>
        </div>
      </section>`;
  }

  /* ---------------- track overview ---------------- */
  function renderTrack(trackId) {
    const t = DATA.tracks[trackId];
    if (!t) return renderHome();
    const s = trackStats(trackId);
    const rowFor = (id) => {
      const topic = DATA.topics[id], st = topicStats(id);
      const quizLabel = st.quiz ? L().best(st.quiz.best) : L().notTried;
      return `<div class="topic-row" data-go="#/study/${trackId}/${id}/read">
        <div class="topic-main">
          <span class="topic-icon">${topic.icon}</span>
          <div class="topic-info">
            <h3>${esc(topic.title)}</h3>
            <p class="topic-def">${esc(topic.blurb)}</p>
            <div class="topic-sub">${st.total} ${L().cardsWord} · ${topic.quiz.length} quiz · ${quizLabel}${st.read ? " · " + L().readDone : ""}</div>
            ${bar(st.pct)}
          </div>
          ${ring(st.pct, 46)}
        </div>
        <div class="topic-actions">
          <a class="btn ghost" href="#/study/${trackId}/${id}/read">${L().btnRead}</a>
          <a class="btn" href="#/study/${trackId}/${id}/cards">${L().btnCards}</a>
          <a class="btn" href="#/study/${trackId}/${id}/quiz">${L().btnQuiz}</a>
        </div>
      </div>`;
    };
    let rows = "";
    if (t.groups) {
      t.groups.forEach(g => {
        rows += `<div class="group-head">${esc(g.name)}</div>`;
        rows += g.topics.map(rowFor).join("");
      });
    } else {
      rows = t.topics.map(rowFor).join("");
    }
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/">${L().allTracks}</a>
        <div class="page-title"><span class="track-icon-lg">${t.icon}</span>
          <div><h1>${t.name}</h1><p>${esc(t.tagline)}</p></div>
          ${ring(s.pct, 64)}
        </div>
        <div class="track-cta-row">
          <a class="btn" href="#/guide/${trackId}">${L().fullGuide}</a>
          <a class="btn ghost" href="#/review/${trackId}">${L().reviewDue(dueRefs(trackId).length)}</a>
        </div>
      </div>
      <div class="topic-list">${rows}</div>`;
    // clicking anywhere on a topic row opens its read section (buttons keep their own targets)
    app.querySelectorAll(".topic-row").forEach(row => {
      row.addEventListener("click", e => {
        if (e.target.closest(".topic-actions")) return;
        location.hash = row.dataset.go;
      });
    });
  }

  /* ---------------- full guide (one page per track) ---------------- */
  function renderGuide(trackId) {
    const t = DATA.tracks[trackId];
    if (!t) return renderHome();
    let toc = "";
    if (t.groups) {
      t.groups.forEach(g => {
        toc += `<div class="toc-group">${esc(g.name)}</div>`;
        toc += g.topics.map(id =>
          `<button class="toc-link" data-target="sec-${id}">${DATA.topics[id].icon} ${esc(DATA.topics[id].title)}</button>`
        ).join("");
      });
    } else {
      toc = t.topics.map(id =>
        `<button class="toc-link" data-target="sec-${id}">${DATA.topics[id].icon} ${esc(DATA.topics[id].title)}</button>`
      ).join("");
    }
    const sections = t.topics.map(id => {
      const topic = DATA.topics[id];
      return `<section class="guide-section" id="sec-${id}">
        <div class="guide-head">
          <span class="topic-icon">${topic.icon}</span>
          <h2>${esc(topic.title)}</h2>
          <div class="guide-actions">
            <a class="btn ghost sm" href="#/study/${trackId}/${id}/cards">🃏 Cards</a>
            <a class="btn ghost sm" href="#/study/${trackId}/${id}/quiz">✅ Quiz</a>
          </div>
        </div>
        <p class="def-lead">${esc(topic.blurb)}</p>
        <div class="read guide-body">${topic.read}</div>
      </section>`;
    }).join("");
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/track/${trackId}">${L().topicsBack(t.name)}</a>
        <div class="page-title"><span class="track-icon-lg">${t.icon}</span>
          <div><h1>${L().fullGuideTitle(t.name)}</h1><p>${L().guideSub(t.topics.length)}</p></div>
        </div>
      </div>
      <div class="guide-layout" id="guide-layout">
        <nav class="guide-toc" id="guide-toc">
          <h4>${L().contents}</h4>
          ${toc}
          <button class="toc-top" data-top>${L().backToTop}</button>
        </nav>
        <div class="guide-content">${sections}</div>
      </div>`;

    // one delegated handler covers the TOC, per-section prev/next, and back-to-top
    const layout = document.getElementById("guide-layout");
    layout.addEventListener("click", e => {
      const nav = e.target.closest("[data-target]");
      if (nav) {
        const el = document.getElementById(nav.dataset.target);
        if (el) scrollToSection(el);
        return;
      }
      if (e.target.closest("[data-top]")) smoothScrollTo(0);
    });
    // scroll-spy: highlight the section currently in view
    const tocEl = document.getElementById("guide-toc");
    const links = Array.from(tocEl.querySelectorAll(".toc-link"));
    const byId = {};
    links.forEach(l => byId[l.dataset.target] = l);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const l = byId[en.target.id];
          if (l) l.classList.add("active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    t.topics.forEach(id => { const el = document.getElementById("sec-" + id); if (el) obs.observe(el); });
  }

  /* ---------------- study shell ---------------- */
  let session = null;
  function renderStudy(trackId, topicId, mode) {
    const topic = DATA.topics[topicId];
    if (!topic || !DATA.tracks[trackId]) return renderHome();
    const tabs = ["read", "cards", "quiz"].map(m => {
      const label = { read: L().tabRead, cards: L().tabCards, quiz: L().tabQuiz }[m];
      const on = m === mode ? " active" : "";
      return `<a class="tab${on}" href="#/study/${trackId}/${topicId}/${m}">${label}</a>`;
    }).join("");
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/track/${trackId}">← ${DATA.tracks[trackId].name}</a>
        <div class="page-title"><span class="track-icon-lg">${topic.icon}</span>
          <div><h1>${esc(topic.title)}</h1><p class="topic-def">${esc(topic.blurb)}</p></div>
        </div>
        <div class="tabs">${tabs}</div>
      </div>
      <div id="study-body"></div>`;
    const body = document.getElementById("study-body");
    if (mode === "cards") { renderCards(body, trackId, topicId); }
    else if (mode === "quiz") { session = newQuiz(topicId); renderQuiz(body, trackId, topicId); }
    else { session = null; renderRead(body, trackId, topicId); }
  }

  /* ---------------- read mode ---------------- */
  function renderRead(body, trackId, topicId) {
    const topic = DATA.topics[topicId];
    const done = !!progress.read[topicId];
    const ids = DATA.tracks[trackId].topics;
    const pos = ids.indexOf(topicId);
    const prevId = pos > 0 ? ids[pos - 1] : null;
    const nextId = pos >= 0 && pos < ids.length - 1 ? ids[pos + 1] : null;
    body.innerHTML = `
      <article class="read">
        ${topic.read}
        <div class="read-foot">
          <button id="mark-read" class="btn ${done ? "ghost" : ""}">${done ? L().markedRead : L().markRead}</button>
          <a class="btn" href="#/study/${trackId}/${topicId}/cards">${L().drill}</a>
        </div>
      </article>
      <div class="guide-nav lesson-nav">
        ${prevId
          ? `<a class="btn ghost" href="#/study/${trackId}/${prevId}/read">← ${esc(DATA.topics[prevId].title)}</a>`
          : `<button class="btn ghost" disabled>${L().startOfTrack}</button>`}
        ${nextId
          ? `<a class="btn" href="#/study/${trackId}/${nextId}/read">${esc(DATA.topics[nextId].title)} →</a>`
          : `<button class="btn" disabled>${L().endOfTrack}</button>`}
      </div>`;
    document.getElementById("mark-read").addEventListener("click", () => {
      progress.read[topicId] = !progress.read[topicId];
      saveProgress();
      renderRead(body, trackId, topicId);
    });
  }

  /* ---------------- spaced repetition ---------------- */
  // SM-2-style ladder: again=10m, then 1d, 3d, 7d, 21d, 60d on successive "Got it".
  const SRS_LADDER = [10 * 60e3, 24 * 3600e3, 3 * 24 * 3600e3, 7 * 24 * 3600e3, 21 * 24 * 3600e3, 60 * 24 * 3600e3];
  function srsSchedule(id, grade) {
    progress.srs = progress.srs || {};
    const prev = progress.srs[id];
    const step = grade === "review" ? 0 : Math.min((prev ? prev.step : 0) + 1, SRS_LADDER.length - 1);
    progress.srs[id] = { step, due: Date.now() + SRS_LADDER[step] };
  }
  function scopeTopicIds(scope) {
    return scope === "all" ? Object.keys(DATA.topics) : (DATA.tracks[scope] ? DATA.tracks[scope].topics : []);
  }
  function dueRefs(scope) {
    const now = Date.now(), out = [];
    scopeTopicIds(scope).forEach(tid => DATA.topics[tid].cards.forEach((c, i) => {
      const id = cardId(tid, i);
      const s = progress.srs && progress.srs[id];
      const legacyReview = progress.cards[id] === "review" && !s;
      if ((s && s.due <= now) || legacyReview) out.push({ topicId: tid, idx: i, due: s ? s.due : 0 });
    }));
    out.sort((a, b) => a.due - b.due);
    return out;
  }
  function nextDueIn(scope) {
    const now = Date.now(); let min = Infinity;
    scopeTopicIds(scope).forEach(tid => DATA.topics[tid].cards.forEach((c, i) => {
      const s = progress.srs && progress.srs[cardId(tid, i)];
      if (s && s.due > now && s.due < min) min = s.due;
    }));
    return min === Infinity ? null : min - now;
  }
  function fmtRel(ms) {
    const m = Math.round(ms / 60e3);
    if (m < 60) return m + "m";
    const h = Math.round(m / 60);
    if (h < 24) return h + "h";
    return Math.round(h / 24) + "d";
  }

  /* ---------------- card player (topic decks + review decks) ---------------- */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function newTopicSession(topicId) {
    return { kind: "topic", topicId, deck: DATA.topics[topicId].cards.map((_, i) => ({ topicId, idx: i })), pos: 0, flipped: false, shuffle: false };
  }
  function renderCards(body, trackId, topicId) {
    if (!session || session.kind !== "topic" || session.topicId !== topicId) session = newTopicSession(topicId);
    renderPlayer(body, { kind: "topic", trackId, topicId });
  }
  function renderReview(scope) {
    session = { kind: "review", scope, deck: dueRefs(scope), pos: 0, flipped: false, shuffle: false };
    const label = scope === "all" ? L().allTracksName : DATA.tracks[scope].name;
    const back = scope === "all" ? "#/" : "#/track/" + scope;
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="${back}">← ${label}</a>
        <div class="page-title"><span class="track-icon-lg">🔁</span>
          <div><h1>${L().reviewTitle(label)}</h1><p>${L().reviewSub}</p></div>
        </div>
      </div>
      <div id="study-body"></div>`;
    renderPlayer(document.getElementById("study-body"), { kind: "review", scope });
  }
  function renderPlayerEmpty(body, ctx) {
    const nxt = nextDueIn(ctx.kind === "review" ? ctx.scope : ctx.topicId);
    const back = ctx.kind === "review" ? (ctx.scope === "all" ? "#/" : "#/track/" + ctx.scope) : "#/track/" + ctx.trackId;
    body.innerHTML = `
      <div class="quiz-done">
        <div class="empty-emoji">🎉</div>
        <h2>${L().emptyTitle}</h2>
        <p class="quiz-msg">${nxt ? L().emptyNext(fmtRel(nxt)) : L().emptyHint}</p>
        <div class="cards-actions center">
          <a class="btn" href="${back}">${L().back}</a>
          ${ctx.kind === "topic" ? `<a class="btn ghost" href="#/study/${ctx.trackId}/${ctx.topicId}/cards">${L().openDeck}</a>` : ""}
        </div>
      </div>`;
  }
  function renderPlayer(body, ctx) {
    const s = session;
    if (!s.deck.length) return renderPlayerEmpty(body, ctx);
    const ref = s.deck[s.pos];
    const topic = DATA.topics[ref.topicId];
    const card = topic.cards[ref.idx];
    const id = cardId(ref.topicId, ref.idx);
    const mark = progress.cards[id];
    const srs = progress.srs && progress.srs[id];
    const markBadge = mark === "known" ? `<span class="badge known">${L().badgeGot}</span>`
      : mark === "review" ? `<span class="badge review">${L().badgeReview}</span>` : "";
    const dueBadge = (srs && srs.due <= Date.now()) ? `<span class="badge review">${L().badgeDue}</span>` : "";
    const topicTag = ctx.kind === "review" ? `<span class="badge topic">${topic.icon} ${esc(topic.title)}</span>` : "";

    let progressLine, topRight, foot;
    if (ctx.kind === "topic") {
      const st = topicStats(ctx.topicId);
      progressLine = L().masteredLine(st.known, st.review, st.total - st.known - st.review);
      topRight = `<label class="shuffle"><input type="checkbox" id="shuffle" ${s.shuffle ? "checked" : ""}> ${L().shuffle}</label>`;
      foot = `<button class="btn ghost sm" id="restart">${L().restart}</button>
              <a class="btn sm" href="#/study/${ctx.trackId}/${ctx.topicId}/quiz">${L().takeQuiz}</a>`;
    } else {
      progressLine = L().reviewLeft(s.deck.length);
      topRight = `<span class="cards-progress">${L().reviewNote}</span>`;
      foot = `<a class="btn ghost sm" href="${ctx.scope === "all" ? "#/" : "#/track/" + ctx.scope}">${L().back}</a>`;
    }

    body.innerHTML = `
      <div class="cards-wrap">
        <div class="cards-top">
          <div class="cards-count">${L().cardCount(s.pos + 1, s.deck.length)} ${markBadge}${dueBadge}${topicTag}</div>
          <div class="cards-progress">${progressLine}</div>
          ${topRight}
        </div>
        ${bar(Math.round((s.pos + 1) / s.deck.length * 100))}
        <div class="flashcard ${s.flipped ? "flipped" : ""}" id="flashcard" tabindex="0" role="button" aria-label="Flip card">
          <div class="fc-inner">
            <div class="fc-face fc-front"><span class="fc-label">${L().qLabel}</span><p>${esc(card.q)}</p><span class="fc-hint">${L().flipHint}</span></div>
            <div class="fc-face fc-back"><span class="fc-label">${L().aLabel}</span><p>${esc(card.a)}</p></div>
          </div>
        </div>
        <div class="cards-actions">
          <button class="btn ghost" id="prev" ${s.pos === 0 ? "disabled" : ""}>${L().prev}</button>
          <button class="btn review" id="mark-review">${L().btnStill}</button>
          <button class="btn known" id="mark-known">${L().btnGot}</button>
          <button class="btn ghost" id="next" ${s.pos === s.deck.length - 1 ? "disabled" : ""}>${L().next}</button>
        </div>
        <div class="cards-foot">${foot}</div>
      </div>`;

    const fc = document.getElementById("flashcard");
    const flip = () => { s.flipped = !s.flipped; fc.classList.toggle("flipped", s.flipped); };
    fc.addEventListener("click", flip);
    const sh = document.getElementById("shuffle");
    if (sh) sh.addEventListener("change", e => {
      s.shuffle = e.target.checked;
      s.deck = DATA.topics[ctx.topicId].cards.map((_, i) => ({ topicId: ctx.topicId, idx: i }));
      if (s.shuffle) shuffle(s.deck);
      s.pos = 0; s.flipped = false;
      renderPlayer(body, ctx);
    });
    document.getElementById("prev").addEventListener("click", () => nav(-1));
    document.getElementById("next").addEventListener("click", () => nav(1));
    document.getElementById("mark-review").addEventListener("click", () => markCard("review"));
    document.getElementById("mark-known").addEventListener("click", () => markCard("known"));
    const rs = document.getElementById("restart");
    if (rs) rs.addEventListener("click", () => {
      const keep = s.shuffle;
      session = newTopicSession(ctx.topicId);
      session.shuffle = keep;
      if (keep) shuffle(session.deck);
      renderPlayer(body, ctx);
    });

    function nav(d) {
      const np = s.pos + d;
      if (np < 0 || np >= s.deck.length) return;
      s.pos = np; s.flipped = false;
      renderPlayer(body, ctx);
    }
    function markCard(m) {
      progress.cards[id] = m;
      srsSchedule(id, m);
      saveProgress();
      if (s.kind === "review") {
        // scheduled into the future -> drop from this session
        s.deck.splice(s.pos, 1);
        if (s.pos >= s.deck.length) s.pos = Math.max(0, s.deck.length - 1);
        s.flipped = false;
      } else if (s.pos < s.deck.length - 1) { s.pos++; s.flipped = false; }
      renderPlayer(body, ctx);
    }
    session._flip = flip; session._nav = nav; session._mark = markCard;
  }

  /* ---------------- quiz ---------------- */
  function newQuiz(topicId) {
    const topic = DATA.topics[topicId];
    const order = shuffle(topic.quiz.map((_, i) => i));
    return { topicId, order, pos: 0, selected: null, score: 0, done: false };
  }
  function renderQuiz(body, trackId, topicId) {
    const topic = DATA.topics[topicId];
    const s = session;
    if (s.done) return renderQuizDone(body, trackId, topicId);
    const q = topic.quiz[s.order[s.pos]];
    const opts = q.options.map((o, i) => {
      let cls = "opt";
      if (s.selected !== null) {
        if (i === q.answer) cls += " correct";
        else if (i === s.selected) cls += " wrong";
        else cls += " dim";
      }
      return `<button class="${cls}" data-i="${i}" ${s.selected !== null ? "disabled" : ""}>
        <span class="opt-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`;
    }).join("");
    const feedback = s.selected !== null
      ? `<div class="feedback ${s.selected === q.answer ? "good" : "bad"}">
          <b>${s.selected === q.answer ? L().correct : L().wrong}</b> ${esc(q.explain)}
        </div>
        <button class="btn" id="qnext">${s.pos === s.order.length - 1 ? L().seeResults : L().nextQuestion}</button>`
      : `<p class="quiz-hint">${L().chooseAnswer}</p>`;
    body.innerHTML = `
      <div class="quiz-wrap">
        <div class="cards-top">
          <div class="cards-count">${L().quizCount(s.pos + 1, s.order.length)}</div>
          <div class="cards-progress">${L().scoreLine(s.score, s.pos + (s.selected !== null ? 1 : 0))}</div>
        </div>
        ${bar(Math.round((s.pos + (s.selected !== null ? 1 : 0)) / s.order.length * 100))}
        <div class="quiz-q">${esc(q.q)}</div>
        <div class="opts">${opts}</div>
        ${feedback}
      </div>`;
    body.querySelectorAll(".opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (s.selected !== null) return;
        s.selected = parseInt(btn.dataset.i, 10);
        if (s.selected === q.answer) s.score++;
        renderQuiz(body, trackId, topicId);
      });
    });
    const nx = document.getElementById("qnext");
    if (nx) nx.addEventListener("click", () => {
      if (s.pos === s.order.length - 1) { finishQuiz(trackId, topicId); }
      else { s.pos++; s.selected = null; renderQuiz(body, trackId, topicId); }
    });
    session._answer = (i) => {
      if (s.selected !== null || s.done) return;
      s.selected = i; if (i === q.answer) s.score++;
      renderQuiz(body, trackId, topicId);
    };
    session._next = () => { const b = document.getElementById("qnext"); if (b) b.click(); };
  }
  function finishQuiz(trackId, topicId) {
    const s = session;
    const total = s.order.length;
    const pct = Math.round(s.score / total * 100);
    const prev = progress.quiz[topicId];
    progress.quiz[topicId] = {
      best: Math.max(pct, prev ? prev.best : 0),
      last: pct,
      attempts: (prev ? prev.attempts : 0) + 1
    };
    saveProgress();
    s.done = true; s.resultPct = pct;
    renderQuiz(document.getElementById("study-body"), trackId, topicId);
  }
  function renderQuizDone(body, trackId, topicId) {
    const s = session;
    const total = s.order.length;
    const pct = s.resultPct;
    const best = progress.quiz[topicId].best;
    const msgs = L().doneMsgs;
    const msg = pct === 100 ? msgs[0] : pct >= 80 ? msgs[1] : pct >= 50 ? msgs[2] : msgs[3];
    body.innerHTML = `
      <div class="quiz-done">
        ${ring(pct, 120)}
        <h2>${L().doneScore(s.score, total)}</h2>
        <p class="quiz-msg">${msg}</p>
        <p class="quiz-best">${L().bestScore(best, progress.quiz[topicId].attempts)}</p>
        <div class="cards-actions center">
          <button class="btn" id="retry">${L().retry}</button>
          <a class="btn ghost" href="#/study/${trackId}/${topicId}/cards">${L().reviewCards}</a>
          <a class="btn ghost" href="#/track/${trackId}">${L().backTopics}</a>
        </div>
      </div>`;
    document.getElementById("retry").addEventListener("click", () => {
      session = newQuiz(topicId);
      renderQuiz(body, trackId, topicId);
    });
  }

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { const dd = document.getElementById("lang-dd"); if (dd) dd.classList.remove("open"); }
    const route = parseHash();
    if (route.view !== "study" || !session) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    if (route.mode === "cards") {
      if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); session._flip && session._flip(); }
      else if (e.code === "ArrowLeft") { session._nav && session._nav(-1); }
      else if (e.code === "ArrowRight") { session._nav && session._nav(1); }
      else if (e.key === "1") { session._mark && session._mark("review"); }
      else if (e.key === "2") { session._mark && session._mark("known"); }
    } else if (route.mode === "quiz") {
      if (["1", "2", "3", "4"].includes(e.key)) { session._answer && session._answer(parseInt(e.key, 10) - 1); }
      else if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); session._next && session._next(); }
    }
  });

  /* ---------------- dark mode + reset ---------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", settings.dark ? "dark" : "light");
  }
  document.getElementById("dark-toggle").addEventListener("click", () => {
    settings.dark = !settings.dark; saveSettings(); applyTheme(); render();
  });
  const langDD = document.getElementById("lang-dd");
  const langBtn = document.getElementById("lang-toggle");
  function closeLangMenu() {
    langDD.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }
  langBtn.addEventListener("click", e => {
    e.stopPropagation();
    langDD.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", String(langDD.classList.contains("open")));
  });
  document.querySelectorAll("#lang-menu .dropdown-item").forEach(b => {
    b.addEventListener("click", () => {
      const lang = b.dataset.lang;
      closeLangMenu();
      if (lang === LANG) return;
      LANG = lang;
      DATA = lang === "es" ? DATA_ES : DATA_EN;
      settings.lang = LANG; saveSettings();
      applyLang(); render();
    });
  });
  document.addEventListener("click", e => {
    if (!e.target.closest("#lang-dd")) closeLangMenu();
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm(L().resetConfirm)) {
      progress = { cards: {}, quiz: {}, read: {}, srs: {} }; saveProgress(); render();
    }
  });

  /* ---------------- render dispatch ---------------- */
  function render() {
    const route = parseHash();
    renderHeader(route);
    if (route.view === "track") renderTrack(route.track);
    else if (route.view === "guide") renderGuide(route.track);
    else if (route.view === "review") renderReview(route.scope);
    else if (route.view === "study") renderStudy(route.track, route.topic, route.mode);
    else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", render);
  applyTheme();
  render();
})();
