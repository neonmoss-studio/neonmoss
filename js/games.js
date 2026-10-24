// =============================================================
//  NEON MOSS STUDIO :: lista gier i ustawienia strony
//  Tylko ten plik edytujesz, zeby dodac nowe demo.
// =============================================================
//
//  Jak dodac demo:
//   1. Eksport z Godota (Web, jednowatkowy) wrzuc do folderu games/<slug>/
//      (tak, zeby byl plik games/<slug>/index.html).
//   2. Okladke wrzuc do assets/games/<slug>.jpg (najlepiej 1280x720).
//   3. Dopisz wpis ponizej i ustaw play: "games/<slug>/".
//
//  Pola gry:
//   slug      krotka nazwa bez spacji (folder)
//   title     tytul gry
//   status    "demo" | "soon" | "released"
//   cover     sciezka do okladki albo null (wtedy rysuje sie neonowa plansza)
//   accent    "cyan" | "magenta" | "lime" | "moss" (kolor poswiaty karty)
//   tags      krotkie etykiety
//   desc      opis { pl: "...", en: "..." }
//   play      link do wersji w przegladarce albo null
//   download  link do pobrania (np. itch.io) albo null
//   itch      link do strony na itch.io albo null
//   release   { repo, asset } plik z GitHub Releases (wersja do pobrania + licznik)
//   engine    np. "Godot 4"
//   controls  lista klawiszy pod oknem gry (opcjonalnie)
//
//  Gra otwiera sie w oknie na stronie play.html?g=<slug>.
//  Po zmianie plikow podbij ?v= w index.html i play.html (cache przegladarki).
// =============================================================

window.NM_SITE = {
  // Linki w sekcji Kontakt. Discord, X, itch.io i email pokazuja sie zawsze,
  // a dopoki link jest pusty (""), jako wyszarzone "wkrotce".
  discord: "",
  x: "",
  itch: "",
  email: "contact@neonmoss.net",
  // Dodatkowe, pokazuja sie tylko gdy maja link:
  github: "",
  youtube: "",
  bluesky: ""
};

window.NM_GAMES = [
  {
    slug: "liv-love-loot",
    title: "Liv Love Loot",
    status: "demo",
    cover: "assets/games/liv-love-loot.jpg",
    accent: "magenta",
    engine: "Godot",
    tags: ["cards", "roguelike", "dungeon"],
    desc: {
      pl: "Dynamiczny roguelike z budowaniem talii o chciwości i przetrwaniu. Zbieraj skarby w mrocznych komnatach, podczas gdy nieustępliwy Cień depcze ci po piętach. Im więcej bierzesz, tym bliżej jest.",
      en: "A fast-paced deckbuilding roguelike about greed and survival. Grab treasures across dark chambers while an unrelenting Shadow stalks your every step. The more you take, the closer it gets."
    },
    play: "games/liv-love-loot/",
    // Sterowanie pokazywane pod oknem gry (play.html)
    controls: [
      { k: "← ↑ → ↓", pl: "ruch", en: "move" },
      { k: "A S D F G", pl: "karty", en: "cards" },
      { k: "Enter", pl: "zatwierdź", en: "confirm" },
      { k: "Shift", pl: "skupienie", en: "focus" },
      { k: "Q", pl: "pieczęć", en: "seal" },
      { k: "Tab", pl: "talia", en: "deck" },
      { k: "M", pl: "mapa", en: "map" },
      { k: "Esc", pl: "pauza", en: "pause" }
    ],
    // Wersja na Windows z GitHub Releases. Link zawsze do najnowszego release,
    // licznik pobran z API GitHuba. Dopoki release nie istnieje, przycisk jest wyszarzony.
    release: { repo: "neonmoss-studio/neonmoss", asset: "LivLoveLoot-Windows.zip" },
    download: null,
    itch: null
  }
];

// Wspolne: sprawdza release na GitHubie i zwraca { url, count } albo null.
window.NM_release = function (g, cb) {
  var r = g && g.release;
  if (!r || !window.fetch) { cb(null); return; }
  var key = "nm_rel_" + r.repo + "_" + r.asset, now = Date.now();
  try {
    var c = JSON.parse(sessionStorage.getItem(key) || "null");
    if (c && now - c.t < 10 * 60 * 1000) { cb(c.v); return; }
  } catch (e) {}
  fetch("https://api.github.com/repos/" + r.repo + "/releases?per_page=100")
    .then(function (res) { return res.ok ? res.json() : []; })
    .then(function (list) {
      var count = 0, found = false;
      (list || []).forEach(function (rel) {
        (rel.assets || []).forEach(function (a) { if (a.name === r.asset) { found = true; count += a.download_count || 0; } });
      });
      var v = found ? { url: "https://github.com/" + r.repo + "/releases/latest/download/" + r.asset, count: count } : null;
      try { sessionStorage.setItem(key, JSON.stringify({ t: now, v: v })); } catch (e) {}
      cb(v);
    })
    .catch(function () { cb(null); });
};
