# RULES — aplikacja ZESZYT (stan ustaleń)

Zapisuje reguły i ustalenia z rozmów, żeby przetrwały nowe sesje.

## Sposób pracy

- Rozmowa po polsku, prosto. Symbole z `x` (np. `x1x`) zostają.
- **Przed scaleniem zrzuty ekranu; PR scalany dopiero po słowie „Scal”** od użytkownika. Nigdy samodzielnie.
- Przy każdej zmianie podbić `APP_VER` w `index.html` (wersja w nagłówku).
- Test przed PR: Playwright z Chromium (`/opt/pw-browsers/chromium`), brak błędów JS, wynik na prawdziwych kodach.
- Aplikacji źródłowych (RAZEM, SZUKAJ, MOJE) nie zmieniamy pod ZESZYT.

## Kody

- **Na razie tylko tabela TRÓJKA (T50).** PIKOFF (T60) ma w zeszycie inny układ kodów — dojdzie, gdy użytkownik go opisze.
- T50: baza `seed_t50.txt` z repo `moje` + `t50razem_v1_added`; kody z cyfr 0/1 (000…111), cel `x1x`.
- T60: baza `seed_t60.txt` z repo `moje` + `t60razem_v1_added`; pierwsza cyfra 0–3, pozostałe 0/1; cele `x1x` i `xx1`.
- Bazę czytamy z `/moje/seed_t50.txt` (ten sam adres), kopia na brak internetu w pamięci podręcznej (Cache), nie w localStorage.
- **ZESZYT tylko czyta kody** — nigdy nie zapisuje `t50razem_v1_added` / `t60razem_v1_added`.
- Własne dane tylko pod kluczami z przedrostkiem `zeszyt_` (`zeszyt_v1_theme`, `zeszyt_v1_notes_t50`, `zeszyt_v1_klucz`).

## Karta (zeszyt TRÓJKA)

- Kody wpisujemy w tercjach: 1. tercja wiersze 1–10, 2. tercja 11–20, 3. tercja 21–28. Karta podzielona na pół → 6 tercji.
- Karty numerowane od **0** (numer w kółku w prawym górnym rogu), czerwone linie po wierszach 10 i 20.
- **Karta 0**: tercja 3 = wiersze 21–26 w obu połowach; w tabeli TRÓJKA to kody Nr 1–51 (lewa 26, prawa 25 — potwierdzone przez użytkownika).
- **Karta 1**: wyjątkowo podział na 4 części × 28 wierszy = kody Nr 52–163 (sprawdzone na zdjęciu).
- Od karty 2 standard 2 × 28 = 56 kodów. **Każda karta ma tyle samo kratek** (więcej wierszy się nie da), ale w zeszycie bywają:
  - **dopiski** — mecz wciśnięty między wiersze albo pod 28. wiersz (kod bez własnego wiersza) → `DOP` w `index.html`,
    pokazany przy wierszu poprzedniego kodu w przerywanej ramce;
  - **puste wiersze** — wiersz bez kodu (np. mecz przełożony, „SUSP”) → `PUSTE` (Nr kodu przed pustym wierszem).
- Tabela TRÓJKA (Excel) była przepisywana z zeszytu. Układ sprawdzony na zdjęciach kart (kody zgodne z tabelą):
  2–6, 8–15, 30, 34, 36, 38, 40, 42, 44, 45, 60, 273. Ważne punkty: karta 2 od Nr 164, 15 od 900, 30 od 1740,
  45 od 2581, **60 od 3421** (prawa połowa od 3449 = licznik 49), **273 od 15 349** (Nr 15 360 = wiersz 12, licznik 60 — potwierdzone).
- Użytkownik potwierdził: dopiski to mecze ponad liczbę ramek, czasem dwa mecze w jednym polu (np. EIBAR na karcie 5).
- Dopiski: 290 (k4), 377 (k5), 641 (k10 prawa — nad 1. wierszem, `DOPG`), 649 (k10), 693, 700, 729 (k11), 813, 842 (k13), 861 (k14), 2000 (k34). Puste: po 528 (k8 lewa w.28 pod SCH-WAM 010 — potwierdzone),
  po 803 (k13 lewa w.19 „SUSP”).
- Wszystkie kody tabeli mają miejsce w zeszycie (od karty 2 do 273 bez „kodów bez miejsca”). Nowe nieprawidłowości → `DOP` / `DOPG` / `PUSTE`.
- **Licznik setek** przy prawej krawędzi: Nr kodu w tabeli TRÓJKA, 1 … 99, 00, 1 … — w zeszycie dopiero od prawej połowy karty 60 (= 49).
- Znaki: `−` = 0, `+` = 1. Pierwszy znak = pierwsza cyfra kodu, środkowy = druga, trzeci = ostatnia (tak jest w zeszycie TRÓJKA).
- Ostatni kod podświetlony, następny wiersz ze strzałką `▸`. Dotknięcie wiersza → notatka (np. mecz) — także na wierszach bez kodu;
  notatka zapisana przy Nr kodu.

## Kolory i mecze

- **Kartka zawsze w kolorach zeszytu** (jak karta 273): biała kartka, niebieska kratka, czarny tusz, czerwone linie tercji — także w trybie nocnym.
- Mecze (skróty drużyn, np. PAO-RAD) obok kodów — wielkie litery, czarnym „pismem”. Zapis w `zeszyt_v1_notes_t50` pod Nr kodu.
- Wpisywanie: dotknij wiersza → wpisz → **Enter / „Dalej ▶”** zapisuje i otwiera następny wiersz (bez dopisków).
- **📷 Mecze ze zdjęcia karty**: zdjęcie karty z zeszytu → Claude (`claude-opus-5-5`, effort medium, odpowiedź w JSON wg schematu,
  `fallbacks: "default"`) odczytuje skróty → lista do poprawienia → zapis. W zapytaniu są kody karty z tabeli (pomagają dopasować wiersze).
  Klucz API użytkownika tylko w telefonie (`zeszyt_v1_klucz`). Biblioteka: oficjalne `@anthropic-ai/sdk` 0.132.1 (MIT) spakowane esbuild
  do `anthropic-sdk-0.132.1.mjs` (ładowane dopiero przy pierwszym zdjęciu).
