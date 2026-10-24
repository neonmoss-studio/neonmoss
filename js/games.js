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
//   engine    np. "Godot 4"
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
    status: "soon",
    cover: "assets/games/liv-love-loot.jpg",
    accent: "magenta",
    engine: "Godot",
    tags: ["cards", "roguelike", "dungeon"],
    desc: {
      pl: "Dynamiczny roguelike z budowaniem talii o chciwości i przetrwaniu. Zbieraj skarby w mrocznych komnatach, podczas gdy nieustępliwy Cień depcze ci po piętach. Im więcej bierzesz, tym bliżej jest.",
      en: "A fast-paced deckbuilding roguelike about greed and survival. Grab treasures across dark chambers while an unrelenting Shadow stalks your every step. The more you take, the closer it gets."
    },
    play: null,
    download: null,
    itch: null
  }
];
