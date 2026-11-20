/* Full-Stack Study — vanilla JS app. No build step; works from file:// or any static server. */
(function () {
  "use strict";
  const DATA = window.STUDY_DATA;
  const app = document.getElementById("app");

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
          <span>${s.topics} topics</span><span>${s.cards} cards</span><span>${s.known} mastered</span>
        </div>
        ${bar(s.pct)}
        <span class="track-cta">Start studying →</span>
      </a>`;
    }).join("");
    const totalCards = Object.values(DATA.topics).reduce((n, t) => n + t.cards.length, 0);
    const totalQuiz = Object.values(DATA.topics).reduce((n, t) => n + t.quiz.length, 0);
    const dueAll = dueRefs("all").length;
    app.innerHTML = `
      <section class="hero">
        <h1>Study smarter, not harder.</h1>
        <p class="lead">Pick a track, then learn each topic three ways: <strong>Read</strong> the essentials,
        drill <strong>Flashcards</strong>, and test yourself with a <strong>Quiz</strong>.
        Progress is saved in your browser.</p>
        <div class="hero-stats">
          <div><b>${Object.keys(DATA.topics).length}</b><span>topics</span></div>
          <div><b>${totalCards}</b><span>flashcards</span></div>
          <div><b>${totalQuiz}</b><span>quiz questions</span></div>
        </div>
      </section>
      ${dueAll ? `<a class="review-banner" href="#/review/all">🔁 <b>${dueAll}</b> card${dueAll === 1 ? "" : "s"} due for review — start a session →</a>` : ""}
      <section class="track-grid">${cards}</section>
      <section class="how">
        <h3>How it works</h3>
        <div class="how-grid">
          <div class="how-item"><span>📖</span><h4>Read</h4><p>Condensed, interview-ready notes with the trade-offs that matter.</p></div>
          <div class="how-item"><span>🃏</span><h4>Flashcards</h4><p>Flip to reveal, mark "Got it" or "Still learning". Keyboard: space flips, ←/→ navigate, 1/2 mark.</p></div>
          <div class="how-item"><span>✅</span><h4>Quiz</h4><p>Multiple choice with instant explanations. Your best score is saved per topic.</p></div>
        </div>
      </section>`;
  }

  /* ---------------- track overview ---------------- */
  function renderTrack(trackId) {
    const t = DATA.tracks[trackId];
    if (!t) return renderHome();
    const s = trackStats(trackId);
    const rows = t.topics.map(id => {
      const topic = DATA.topics[id], st = topicStats(id);
      const quizLabel = st.quiz ? `Best ${st.quiz.best}%` : "Not tried";
      return `<div class="topic-row">
        <div class="topic-main">
          <span class="topic-icon">${topic.icon}</span>
          <div class="topic-info">
            <h3>${esc(topic.title)}</h3>
            <div class="topic-sub">${st.total} cards · ${topic.quiz.length} quiz · ${quizLabel}${st.read ? " · read ✓" : ""}</div>
            ${bar(st.pct)}
          </div>
          ${ring(st.pct, 46)}
        </div>
        <div class="topic-actions">
          <a class="btn ghost" href="#/study/${trackId}/${id}/read">📖 Read</a>
          <a class="btn" href="#/study/${trackId}/${id}/cards">🃏 Cards</a>
          <a class="btn" href="#/study/${trackId}/${id}/quiz">✅ Quiz</a>
        </div>
      </div>`;
    }).join("");
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/">← All tracks</a>
        <div class="page-title"><span class="track-icon-lg">${t.icon}</span>
          <div><h1>${t.name}</h1><p>${esc(t.tagline)}</p></div>
          ${ring(s.pct, 64)}
        </div>
        <div class="track-cta-row">
          <a class="btn" href="#/guide/${trackId}">📖 Read the full guide (one page)</a>
          <a class="btn ghost" href="#/review/${trackId}">🔁 Review due (${dueRefs(trackId).length})</a>
        </div>
      </div>
      <div class="topic-list">${rows}</div>`;
  }

  /* ---------------- full guide (one page per track) ---------------- */
  function renderGuide(trackId) {
    const t = DATA.tracks[trackId];
    if (!t) return renderHome();
    const toc = t.topics.map(id =>
      `<button class="toc-link" data-target="sec-${id}">${DATA.topics[id].icon} ${esc(DATA.topics[id].title)}</button>`
    ).join("");
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
        <div class="read guide-body">${topic.read}</div>
      </section>`;
    }).join("");
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/track/${trackId}">← ${t.name} topics</a>
        <div class="page-title"><span class="track-icon-lg">${t.icon}</span>
          <div><h1>${t.name} — Full Guide</h1><p>All ${t.topics.length} topics on a single page.</p></div>
        </div>
      </div>
      <div class="guide-layout">
        <nav class="guide-toc" id="guide-toc">
          <h4>Contents</h4>
          ${toc}
          <button class="toc-top" id="toc-top">↑ Back to top</button>
        </nav>
        <div class="guide-content">${sections}</div>
      </div>`;

    const tocEl = document.getElementById("guide-toc");
    tocEl.addEventListener("click", e => {
      const btn = e.target.closest("[data-target]");
      if (btn) {
        const el = document.getElementById(btn.dataset.target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (e.target.closest("#toc-top")) window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // scroll-spy: highlight the section currently in view
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
      const label = { read: "📖 Read", cards: "🃏 Flashcards", quiz: "✅ Quiz" }[m];
      const on = m === mode ? " active" : "";
      return `<a class="tab${on}" href="#/study/${trackId}/${topicId}/${m}">${label}</a>`;
    }).join("");
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="#/track/${trackId}">← ${DATA.tracks[trackId].name}</a>
        <div class="page-title"><span class="track-icon-lg">${topic.icon}</span>
          <div><h1>${esc(topic.title)}</h1></div>
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
    body.innerHTML = `
      <article class="read">
        ${topic.read}
        <div class="read-foot">
          <button id="mark-read" class="btn ${done ? "ghost" : ""}">${done ? "✓ Marked as read" : "Mark as read"}</button>
          <a class="btn" href="#/study/${trackId}/${topicId}/cards">Drill flashcards →</a>
        </div>
      </article>`;
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
    const label = scope === "all" ? "All tracks" : DATA.tracks[scope].name;
    const back = scope === "all" ? "#/" : "#/track/" + scope;
    app.innerHTML = `
      <div class="page-head">
        <a class="back" href="${back}">← ${label}</a>
        <div class="page-title"><span class="track-icon-lg">🔁</span>
          <div><h1>Review — ${label}</h1><p>Spaced repetition: cards you flagged or that are due today.</p></div>
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
        <h2>Nothing due right now</h2>
        <p class="quiz-msg">${nxt ? "Next card comes back in <b>" + fmtRel(nxt) + "</b>." : "Mark cards in a topic to build your review queue."}</p>
        <div class="cards-actions center">
          <a class="btn" href="${back}">← Back</a>
          ${ctx.kind === "topic" ? `<a class="btn ghost" href="#/study/${ctx.trackId}/${ctx.topicId}/cards">Open the full deck</a>` : ""}
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
    const markBadge = mark === "known" ? '<span class="badge known">Got it</span>'
      : mark === "review" ? '<span class="badge review">Still learning</span>' : "";
    const dueBadge = (srs && srs.due <= Date.now()) ? '<span class="badge review">due</span>' : "";
    const topicTag = ctx.kind === "review" ? `<span class="badge topic">${topic.icon} ${esc(topic.title)}</span>` : "";

    let progressLine, topRight, foot;
    if (ctx.kind === "topic") {
      const st = topicStats(ctx.topicId);
      progressLine = `${st.known} mastered · ${st.review} reviewing · ${st.total - st.known - st.review} new`;
      topRight = `<label class="shuffle"><input type="checkbox" id="shuffle" ${s.shuffle ? "checked" : ""}> Shuffle</label>`;
      foot = `<button class="btn ghost sm" id="restart">↺ Restart deck</button>
              <a class="btn sm" href="#/study/${ctx.trackId}/${ctx.topicId}/quiz">Take the quiz →</a>`;
    } else {
      progressLine = `${s.deck.length} card${s.deck.length === 1 ? "" : "s"} left in this review`;
      topRight = `<span class="cards-progress">marking schedules the next repetition</span>`;
      foot = `<a class="btn ghost sm" href="${ctx.scope === "all" ? "#/" : "#/track/" + ctx.scope}">← Back</a>`;
    }

    body.innerHTML = `
      <div class="cards-wrap">
        <div class="cards-top">
          <div class="cards-count">Card ${s.pos + 1} / ${s.deck.length} ${markBadge}${dueBadge}${topicTag}</div>
          <div class="cards-progress">${progressLine}</div>
          ${topRight}
        </div>
        ${bar(Math.round((s.pos + 1) / s.deck.length * 100))}
        <div class="flashcard ${s.flipped ? "flipped" : ""}" id="flashcard" tabindex="0" role="button" aria-label="Flip card">
          <div class="fc-inner">
            <div class="fc-face fc-front"><span class="fc-label">Question</span><p>${esc(card.q)}</p><span class="fc-hint">click or press space to flip</span></div>
            <div class="fc-face fc-back"><span class="fc-label">Answer</span><p>${esc(card.a)}</p></div>
          </div>
        </div>
        <div class="cards-actions">
          <button class="btn ghost" id="prev" ${s.pos === 0 ? "disabled" : ""}>← Prev</button>
          <button class="btn review" id="mark-review">1 · Still learning</button>
          <button class="btn known" id="mark-known">2 · Got it</button>
          <button class="btn ghost" id="next" ${s.pos === s.deck.length - 1 ? "disabled" : ""}>Next →</button>
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
          <b>${s.selected === q.answer ? "Correct!" : "Not quite."}</b> ${esc(q.explain)}
        </div>
        <button class="btn" id="qnext">${s.pos === s.order.length - 1 ? "See results →" : "Next question →"}</button>`
      : `<p class="quiz-hint">Choose an answer.</p>`;
    body.innerHTML = `
      <div class="quiz-wrap">
        <div class="cards-top">
          <div class="cards-count">Question ${s.pos + 1} / ${s.order.length}</div>
          <div class="cards-progress">Score ${s.score} / ${s.pos + (s.selected !== null ? 1 : 0)}</div>
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
    const msg = pct === 100 ? "Perfect run! 🎉" : pct >= 80 ? "Strong work. 💪" : pct >= 50 ? "Getting there — review the misses." : "Worth another pass through the cards.";
    body.innerHTML = `
      <div class="quiz-done">
        ${ring(pct, 120)}
        <h2>${s.score} / ${total} correct</h2>
        <p class="quiz-msg">${msg}</p>
        <p class="quiz-best">Best score for this topic: <b>${best}%</b> · Attempts: ${progress.quiz[topicId].attempts}</p>
        <div class="cards-actions center">
          <button class="btn" id="retry">↺ Retry quiz</button>
          <a class="btn ghost" href="#/study/${trackId}/${topicId}/cards">🃏 Review flashcards</a>
          <a class="btn ghost" href="#/track/${trackId}">Back to topics</a>
        </div>
      </div>`;
    document.getElementById("retry").addEventListener("click", () => {
      session = newQuiz(topicId);
      renderQuiz(body, trackId, topicId);
    });
  }

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", e => {
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
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Reset all study progress? This cannot be undone.")) {
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
