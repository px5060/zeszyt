# RULES — aplikacja ZESZYT (stan ustaleń)

Zapisuje reguły i ustalenia z rozmów, żeby przetrwały nowe sesje.

## Sposób pracy

- Rozmowa po polsku, prosto. Symbole z `x` (np. `x1x`) zostają.
- **Przed scaleniem zrzuty ekranu; PR scalany dopiero po słowie „Scal”** od użytkownika. Nigdy samodzielnie.
- Przy każdej zmianie podbić `APP_VER` w `index.html` (wersja w nagłówku).
- Test przed PR: Playwright z Chromium (`/opt/pw-browsers/chromium`), brak błędów JS, wynik na prawdziwych kodach.
- Aplikacji źródłowych (RAZEM, SZUKAJ, MOJE) nie zmieniamy pod ZESZYT.

## Kody

- T50: baza `seed_t50.txt` z repo `moje` + `t50razem_v1_added`; kody z cyfr 0/1 (000…111), cel `x1x`.
- T60: baza `seed_t60.txt` z repo `moje` + `t60razem_v1_added`; pierwsza cyfra 0–3, pozostałe 0/1; cele `x1x` i `xx1`.
- Bazę czytamy z `/moje/seed_t50.txt` i `/moje/seed_t60.txt` (ten sam adres), kopia na brak internetu w pamięci podręcznej (Cache), nie w localStorage.
- **ZESZYT tylko czyta kody** — nigdy nie zapisuje `t50razem_v1_added` / `t60razem_v1_added`.
- Własne dane tylko pod kluczami z przedrostkiem `zeszyt_` (`zeszyt_v1_tab`, `zeszyt_v1_theme`, `zeszyt_v1_notes_t50` / `_t60`).

## Karta

- Kody wpisujemy w tercjach: 1. tercja wiersze 1–10, 2. tercja 11–20, 3. tercja 21–28.
- Pierwsza karta ma 3. tercję 21–26 (obie połowy), od drugiej karty 21–28.
- Karta jest podzielona na pół (lewa / prawa połowa) → 6 tercji na karcie. Karta 1 = 52 kody, każda następna = 56.
- Numeracja kart od kodu Nr 1. Numer karty w kółku w prawym górnym rogu, czerwone linie po wierszach 10 i 20.
- Znaki: `−` = 0, `+` = 1; w T60 pierwsza cyfra 2 / 3 pisana cyfrą.
- Ostatni kod podświetlony, następny wiersz ze strzałką `▸`. Dotknięcie wiersza → notatka (np. mecz) — także na wierszach bez kodu.
