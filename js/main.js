// Neon Moss Studio :: logika strony
(function () {
  "use strict";

  // ---------- teksty PL / EN ----------
  var T = {
    pl: {
      nav_games: "Gry", nav_about: "O nas", nav_contact: "Kontakt",
      hero_tag: "Małe gry, które mocno uderzają. Zagraj w dema w przeglądarce i współtwórz ostateczną wersję.",
      hero_play: "Zagraj w dema", hero_about: "Kim jesteśmy",
      games_title: "Gry i dema",
      games_sub: "Buildy do zagrania od razu. Bez instalacji, bez kombinowania.",
      about_title: "O studiu",
      about_p1: "Neon Moss to niezależne studio, które tworzy krótkie, zwarte gry z dużą regrywalnością. Gry, które włączasz na pięć minut, a zostajesz na długie godziny.",
      about_p2: "Budujemy szybko, testujemy prosto w przeglądarce i słuchamy graczy. Jeśli demo chwyci, robimy z niego pełną grę.",
      p1_t: "Instant Play", p1_d: "Dema gotowe do gry w przeglądarce. Bez instalacji, bez kombinowania.",
      p2_t: "Handcrafted Design", p2_d: "Zwarta mechanika, klimatyczny dźwięk i dopracowana pętla rozgrywki.",
      p3_t: "Player Driven", p3_d: "To wasze opinie decydują, który prototyp stanie się pełną grą.",
      contact_title: "Odezwij się", contact_sub: "Zagrałeś w demo? Masz uwagi, pomysły albo chcesz pogadać o projektowaniu gier? Napisz do nas.",
      contact_none: "Linki pojawią się wkrótce.", link_soon: "wkrótce",
      to_top: "Do góry",
      st_demo: "Demo", st_soon: "Wkrótce", st_released: "Wydana",
      play: "Zagraj w demo", download: "Pobierz", itch: "itch.io", soon_btn: "Demo wkrótce", win_dl: "Pobierz na Windows",
      slot_t: "Coś się warzy...", slot_d: "Kolejny prototyp nabiera kształtu. Obserwuj nas albo zajrzyj wkrótce, żeby zagrać w następny eksperyment.",
      lang_aria: "Zmień język"
    },
    en: {
      nav_games: "Games", nav_about: "About", nav_contact: "Contact",
      hero_tag: "Small games that hit hard. Play instant browser demos, shape the final vision.",
      hero_play: "Play the demos", hero_about: "Who we are",
      games_title: "Games & Demos",
      games_sub: "Instant playable builds. No installs, no friction.",
      about_title: "About the studio",
      about_p1: "Neon Moss is an independent game studio crafting short, tight, replayable experiences. Games you start for five minutes and stay for hours.",
      about_p2: "We build quickly, test directly in the browser, and listen to players. If a demo catches fire, we turn it into a full game.",
      p1_t: "Instant Play", p1_d: "Browser-ready demos. Zero friction, no installation needed.",
      p2_t: "Handcrafted Design", p2_d: "Tight mechanics, atmospheric sound, and polished game loops.",
      p3_t: "Player Driven", p3_d: "Your feedback directly determines which prototype gets built into a full release.",
      contact_title: "Get in Touch", contact_sub: "Played a demo? Have feedback, ideas, or just want to chat game design? Reach out to us.",
      contact_none: "Links coming soon.", link_soon: "soon",
      to_top: "Back to top",
      st_demo: "Demo", st_soon: "Soon", st_released: "Released",
      play: "Play demo", download: "Download", itch: "itch.io", soon_btn: "Demo soon", win_dl: "Download for Windows",
      slot_t: "Something is brewing...", slot_d: "The next prototype is taking shape. Follow us or check back soon to play the next experiment.",
      lang_aria: "Change language"
    }
  };

  var KEY = "nm_lang";
  var lang;
  try { lang = localStorage.getItem(KEY); } catch (e) {}
  if (lang !== "pl" && lang !== "en") {
    lang = (navigator.language || "en").toLowerCase().indexOf("pl") === 0 ? "pl" : "en";
  }

  function t(k) { return (T[lang] && T[lang][k]) || T.pl[k] || k; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function link(href, cls, text, external) {
    var a = el("a", cls, text);
    a.href = href;
    if (external) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  // ---------- karty gier ----------
  function renderGames() {
    var grid = document.getElementById("gamesGrid");
    grid.innerHTML = "";
    (window.NM_GAMES || []).forEach(function (g) {
      var card = el("article", "card reveal");
      card.setAttribute("data-accent", g.accent || "lime");

      var cover = el("div", "cover");
      var st = g.status || "demo";
      cover.appendChild(el("span", "badge " + st, t("st_" + st)));
      if (g.cover) {
        var img = el("img");
        img.src = g.cover; img.alt = g.title; img.loading = "lazy";
        cover.appendChild(img);
      } else {
        var fb = el("div", "cover-fallback");
        fb.appendChild(el("span", null, g.title));
        cover.appendChild(fb);
      }
      var playUrl = g.play ? "play.html?g=" + encodeURIComponent(g.slug) : null;
      if (playUrl) {
        var ca = link(playUrl, "", null, false);
        ca.setAttribute("aria-label", t("play") + ": " + g.title);
        ca.appendChild(cover);
        card.appendChild(ca);
      } else {
        card.appendChild(cover);
      }

      var body = el("div", "card-body");
      body.appendChild(el("h3", null, g.title));
      var tags = el("div", "tags");
      (g.tags || []).concat(g.engine ? [g.engine] : []).forEach(function (x) { tags.appendChild(el("span", null, x)); });
      body.appendChild(tags);
      var d = g.desc || {};
      body.appendChild(el("p", null, d[lang] || d.pl || d.en || ""));

      var act = el("div", "card-actions");
      if (playUrl) act.appendChild(link(playUrl, "btn btn-lime btn-sm", t("play"), false));
      if (g.download) act.appendChild(link(g.download, "btn btn-ghost btn-sm", t("download"), true));
      if (g.itch) act.appendChild(link(g.itch, "btn btn-ghost btn-sm", t("itch"), true));
      if (!g.play && !g.download && !g.itch) act.appendChild(el("span", "btn btn-off btn-sm", t("soon_btn")));
      if (g.release && window.NM_release) {
        (function (box) {
          window.NM_release(g, function (r) {
            if (!r) return;
            box.appendChild(link(r.url, "btn btn-ghost btn-sm", t("win_dl"), false));
          });
        })(act);
      }
      body.appendChild(act);

      card.appendChild(body);
      grid.appendChild(card);
    });

    var slot = el("div", "empty-slot reveal");
    var inner = el("div");
    inner.appendChild(el("b", null, t("slot_t")));
    inner.appendChild(el("span", null, t("slot_d")));
    slot.appendChild(inner);
    grid.appendChild(slot);
  }

  // ---------- kontakt ----------
  // Discord, X, itch.io i e-mail pokazuja sie zawsze (bez linku jako "wkrotce").
  // Pozostale tylko wtedy, gdy maja link w games.js.
  function renderContact() {
    var s = window.NM_SITE || {};
    var box = document.getElementById("contactLinks");
    box.innerHTML = "";
    var items = [
      ["discord", "Discord", s.discord, true],
      ["x", "X (Twitter)", s.x, true],
      ["itch", "itch.io", s.itch, true],
      ["email", s.email ? "Email: " + s.email : "Email", s.email ? "mailto:" + s.email : "", true],
      ["github", "GitHub", s.github, false],
      ["youtube", "YouTube", s.youtube, false],
      ["bluesky", "Bluesky", s.bluesky, false]
    ];
    items.forEach(function (it) {
      if (it[2]) {
        var cls = it[0] === "discord" ? "btn btn-lime" : "btn btn-ghost";
        if (it[0] === "email") cls += " btn-plain";
        box.appendChild(link(it[2], cls, it[1], it[0] !== "email"));
      } else if (it[3]) {
        var off = el("span", "btn btn-off", it[1] + " · " + t("link_soon"));
        box.appendChild(off);
      }
    });
  }

  // ---------- jezyk ----------
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    var b = document.getElementById("langBtn");
    b.textContent = lang === "pl" ? "EN" : "PL";
    b.setAttribute("aria-label", t("lang_aria"));
    renderGames();
    renderContact();
    observe();
  }

  document.getElementById("langBtn").addEventListener("click", function () {
    lang = lang === "pl" ? "en" : "pl";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    applyLang();
  });

  // ---------- pojawianie przy przewijaniu ----------
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function observe() {
    document.querySelectorAll(".reveal:not(.in)").forEach(function (n) { io ? io.observe(n) : n.classList.add("in"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();

  // ---------- zarodniki w tle ----------
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cv = document.getElementById("spores");
  var cx = cv.getContext && cv.getContext("2d");
  if (!cx) return;
  var W, H, DPR, P = [];
  var COLORS = ["200,255,60", "52,217,122", "53,232,255", "255,63,209"];
  var WEIGHTS = [0.4, 0.3, 0.2, 0.1];
  function pickColor() {
    var r = Math.random(), a = 0;
    for (var i = 0; i < WEIGHTS.length; i++) { a += WEIGHTS[i]; if (r < a) return COLORS[i]; }
    return COLORS[0];
  }
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.width = Math.floor(innerWidth * DPR);
    H = cv.height = Math.floor(innerHeight * DPR);
    var count = Math.round(Math.min(70, innerWidth * innerHeight / 22000));
    P = [];
    for (var i = 0; i < count; i++) P.push(spawn(true));
  }
  function spawn(any) {
    return {
      x: Math.random() * W,
      y: any ? Math.random() * H : H + 10,
      r: (Math.random() * 1.8 + 0.6) * DPR,
      vy: -(Math.random() * 0.25 + 0.08) * DPR,
      ph: Math.random() * Math.PI * 2,
      c: pickColor(),
      a: Math.random() * 0.5 + 0.25
    };
  }
  function frame(time) {
    cx.clearRect(0, 0, W, H);
    for (var i = 0; i < P.length; i++) {
      var p = P[i];
      if (!reduce) {
        p.y += p.vy;
        p.x += Math.sin(time / 1800 + p.ph) * 0.15 * DPR;
        if (p.y < -10) P[i] = p = spawn(false);
      }
      var tw = 0.6 + 0.4 * Math.sin(time / 900 + p.ph);
      cx.beginPath();
      cx.fillStyle = "rgba(" + p.c + "," + (p.a * tw) + ")";
      cx.shadowColor = "rgba(" + p.c + ",0.9)";
      cx.shadowBlur = 8 * DPR;
      cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      cx.fill();
    }
    if (!reduce) requestAnimationFrame(frame);
  }
  addEventListener("resize", resize);
  resize();
  requestAnimationFrame(frame);
})();
