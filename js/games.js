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
//   shots     nazwy zrzutów ekranu (galeria na stronie gry)
//   about     opis gry na stronie gry { en: {...}, pl: {...} }: tagline, intro, sections, features
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
    // Zrzuty ekranu na stronie gry: assets/games/<slug>/shots/<nazwa>.webp (1920x1080)
    // i <nazwa>_t.webp (miniatura 640x360). Kolejność = kolejność w galerii.
    // Źródła (2560x1440): chambers-like/_shots/promo/na_strone
    shots: ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08",
            "s09", "s10", "s11", "s12", "s13", "s14", "s15", "s16"],
    // Opis gry na stronie gry (play.html). shot = numer zrzutu z listy shots (od 1) obok sekcji.
    about: {
      en: {
        tagline: "A dark fairy tale card roguelike about greed.",
        intro: "Liv Love Loot sends you into the cursed depths beneath a castle. Grab as much treasure as you dare and get out before the Shadow catches you. Every coin makes it stronger. The more you take, the closer it gets.",
        sections: [
          { title: "A Curse Beneath the Castle", shot: 2,
            text: "Once upon a time life in the kingdom was like a fairy tale. Then a curse came. The depths below the castle filled with treasure, and whoever went down there never came back. Now four daring souls answer the royal decree: lift the curse and win the hand of Princess Liv." },
          { title: "Pick Your Hero", shot: 4,
            text: "Each hero brings a different ability and a starting deck.",
            bullets: ["Golden Knight: starts with a shield and forgives one mistake.",
                      "Thief: +1 gold for every treasure.",
                      "Alchemist: Focus recharges twice as fast.",
                      "Bard: always one extra card in hand."] },
          { title: "Grab the Loot, Outrun the Shadow", shot: 14,
            text: "Every chamber is full of gems and gold, and the Shadow is already on your trail. Grab half the treasures to open the doors, grab all of them to earn a new card. Hold Shift to Focus: time slows down, and so does the Shadow. Jump, push it back, freeze it or vanish into smoke, one card at a time." },
          { title: "Build Your Deck, Bend the Rules", shot: 12,
            text: "Spend your gold in shops, strike pacts at shrines and collect artifacts that change how every run plays. Each pact gives real power and asks for a price, usually a curse that sneaks into your deck." },
          { title: "Choose Your Path", shot: 8,
            text: "A branching map leads through three floors: the Castle Cellars, the Catacombs of Kings and the Sunken Crypts, where lava glows in the cracks. Pick hard chambers for artifacts, vaults for gold, or play it safe and rest. Somewhere below a Wanderer guards a crypt and a letter nobody was meant to read." }
        ],
        features: [
          "Real time dungeon runs driven by a deck of cards. The Shadow never waits for your turn.",
          "4 heroes with unique abilities and starting decks",
          "80 cards, including curses that pile up as you get greedy",
          "7 artifacts and 8 shrine pacts that reshape each run",
          "3 floors, 6 chambers each, on a branching map with shops, shrines, vaults, rest stops and bosses",
          "Hand painted story intro, English and Polish"
        ]
      },
      pl: {
        tagline: "Mroczna baśń: karciany roguelike o chciwości.",
        intro: "Liv Love Loot zabiera cię w przeklęte podziemia pod zamkiem. Zbierz tyle skarbów, ile się odważysz, i uciekaj, zanim dopadnie cię Cień. Każda moneta go wzmacnia. Im więcej bierzesz, tym bliżej jest.",
        sections: [
          { title: "Klątwa pod zamkiem", shot: 2,
            text: "Pewnego razu życie w królestwie było jak z bajki. Potem przyszła klątwa. Podziemia zamku wypełniły się skarbami, a kto tam zszedł, już nie wracał. Teraz czworo śmiałków odpowiada na królewskie obwieszczenie: zdjąć klątwę i zdobyć rękę królewny Liv." },
          { title: "Wybierz bohatera", shot: 4,
            text: "Każdy bohater ma inną zdolność i własną talię na start.",
            bullets: ["Złoty Rycerz: zaczyna z tarczą i wybacza jeden błąd.",
                      "Złodziejka: +1 złota za każdy skarb.",
                      "Alchemiczka: skupienie odnawia się dwa razy szybciej.",
                      "Bard: zawsze jedna karta więcej w ręce."] },
          { title: "Bierz łup, uciekaj przed Cieniem", shot: 14,
            text: "Każda komnata jest pełna klejnotów i złota, a Cień już idzie twoim tropem. Zbierz połowę skarbów, żeby otworzyć drzwi, zbierz wszystkie, żeby zdobyć nową kartę. Przytrzymaj Shift, żeby się skupić: czas zwalnia, Cień też. Skacz, odpychaj go, zamrażaj albo znikaj w dymie, karta po karcie." },
          { title: "Buduj talię, naginaj zasady", shot: 12,
            text: "Wydawaj złoto w sklepach, zawieraj pakty w kapliczkach i zbieraj artefakty, które zmieniają każdy run. Każdy pakt daje prawdziwą moc i każe za nią zapłacić, zwykle klątwą, która wkrada się do talii." },
          { title: "Wybierz drogę", shot: 8,
            text: "Rozgałęziona mapa prowadzi przez trzy piętra: Piwnice Zamku, Katakumby Królów i Zatopione Krypty, gdzie w szczelinach żarzy się lawa. Trudne komnaty dają artefakty, skarbce złoto, a odpoczynek chwilę wytchnienia. Gdzieś w głębi Włóczęga strzeże krypty i listu, którego nikt nie miał przeczytać." }
        ],
        features: [
          "Wyprawy w czasie rzeczywistym napędzane talią kart. Cień nie czeka na twoją turę.",
          "4 bohaterów z unikalnymi zdolnościami i talią startową",
          "80 kart, w tym klątwy, które rosną razem z twoją chciwością",
          "7 artefaktów i 8 paktów w kapliczkach, które zmieniają każdy run",
          "3 piętra po 6 komnat na rozgałęzionej mapie: sklepy, kapliczki, skarbce, odpoczynek i bossowie",
          "Ręcznie malowane intro, wersja angielska i polska"
        ]
      }
    },
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
