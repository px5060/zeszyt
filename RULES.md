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
- Własne dane tylko pod kluczami z przedrostkiem `zeszyt_` (`zeszyt_v1_theme`, `zeszyt_v1_notes_t50`).

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
  2–6, 8, 9, 11–15, 30, 34, 36, 38, 40, 42, 44, 45, 60, 273. Ważne punkty: karta 2 od Nr 164, 15 od 900, 30 od 1740,
  45 od 2581, **60 od 3421** (prawa połowa od 3449 = licznik 49), **273 od 15 349** (Nr 15 360 = wiersz 12, licznik 60 — potwierdzone).
- Dopiski: 290 (k4), 377 (k5), 693, 700, 729 (k11), 813, 842 (k13), 861 (k14), 2000 (k34). Puste: po 528 (k8 lewa w.28 — do potwierdzenia),
  po 803 (k13 lewa w.19 „SUSP”).
- **Karta 10**: tabela ma 2 kody więcej (Nr 669–670), brak zdjęcia — `ANCH = {11: 671}`, kody pokazane pod kartą 10 jako „bez miejsca”.
  Po zdjęciu karty 10: dopisać do `DOP` / `PUSTE` i usunąć `ANCH`.
- **Licznik setek** przy prawej krawędzi: Nr kodu w tabeli TRÓJKA, 1 … 99, 00, 1 … — w zeszycie dopiero od prawej połowy karty 60 (= 49).
- Znaki: `−` = 0, `+` = 1. Pierwszy znak = pierwsza cyfra kodu, środkowy = druga, trzeci = ostatnia (tak jest w zeszycie TRÓJKA).
- Ostatni kod podświetlony, następny wiersz ze strzałką `▸`. Dotknięcie wiersza → notatka (np. mecz) — także na wierszach bez kodu;
  notatka zapisana przy Nr kodu.
