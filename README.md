# Neon Moss Studio

Strona studia + dema gier w przeglądarce. Statyczna, działa na GitHub Pages bez budowania.

## Struktura

    index.html          strona główna
    css/style.css       wygląd (kolory logo na górze pliku, w :root)
    js/games.js         LISTA GIER i linki kontaktowe  <- to edytujesz
    js/main.js          logika (karty, PL/EN, zarodniki w tle)
    assets/             logo, favicon, obrazek do udostępniania (og.jpg)
    assets/games/       okładki gier (1280x720)
    games/<slug>/       eksporty Web z Godota
    404.html            strona błędu
    .nojekyll           wyłącza Jekylla (ważne dla plików Godota)

## Kolory

| nazwa    | hex       | skąd w logo      |
|----------|-----------|------------------|
| cyan     | `#35e8ff` | litery N, E      |
| magenta  | `#ff3fd1` | obrysy E, O      |
| lime     | `#c8ff3c` | MOSS             |
| moss     | `#34d97a` | mech na M        |
| tło      | `#0b0e12` |                  |

## Nowe demo

1. Godot: Projekt > Eksportuj > Web, szablon jednowątkowy. Folder wyjściowy `games/<slug>/`, plik `index.html`.
2. Okładka do `assets/games/<slug>.jpg`.
3. W `js/games.js` dopisz wpis albo zmień istniejący: `status: "demo"`, `play: "games/<slug>/"`, `cover: "assets/games/<slug>.jpg"`.
4. Commit i push. Po minucie strona się odświeży.

## Publikacja na GitHub Pages (raz)

1. Na GitHubie utwórz repo, np. `neonmoss.github.io` (strona będzie pod tym adresem) albo dowolną nazwę (wtedy `<login>.github.io/<nazwa>`).
2. W tym folderze:

       cd "P:\NeonMossStudio\site"
       git init
       git add -A
       git commit -m "Strona studia"
       git branch -M main
       git remote add origin https://github.com/<login>/<repo>.git
       git push -u origin main

3. Repo > Settings > Pages > Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`.

Limity GitHub Pages: plik do 100 MB, cała strona do ok. 1 GB. Eksport Godota (wasm ok. 40 MB) się mieści.

## Podgląd lokalny

    cd "P:\NeonMossStudio\site"
    python -m http.server 8000

i otwórz http://localhost:8000 (gry Godota nie ruszą z dwukliku w plik, potrzebny serwer).
