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
- **Karta 2** od Nr 164 (sprawdzone), dalej standard 2 × 28 = 56 kodów.
- **Karta 60** od Nr 3421, prawa połowa od Nr 3449 (sprawdzone na zdjęciu, przy wierszach zapisane 3426, 3431 …). Od karty 60 standard
  (karta 273 od Nr 15 349). Potwierdzone przez użytkownika: kod Nr 15 360 = karta 273, lewa połowa, wiersz 12, licznik 60.
- Zeszyt był pierwszy, tabela TRÓJKA (Excel) była z niego przepisywana — kody tabeli pochodzą z zeszytu.
- Sprawdzone na zdjęciach (kody zgodne z tabelą): **karta 15** od Nr 900, **karta 30** od Nr 1740 (prawa od 1768), **karta 45** od Nr 2581.
- Punkty sprawdzone: `ANCH` w `index.html` (karty 2, 15, 30, 45, 60). Między nimi standard 56 kodów na kartę.
- **Każda karta ma tyle samo kratek** — karta nie może mieć więcej wierszy (ustalenie użytkownika).
- Tabela ma więcej kodów niż zeszyt: **karty 3–14: 8 kodów** (Nr 892–899), **karty 31–44: 1 kod** (Nr 2580) — pewnie dopisane / zdublowane
  przy przepisywaniu do Excela. Tabeli nie zmieniamy (ZESZYT tylko czyta). Gdy zdjęcie karty pokaże, które to kody — pomijać je na karcie. Na razie —
  pokazane pod kartą 14 / 44 jako „kody bez miejsca”. Szukamy dalej zdjęciami kart (połowienie: 8, potem 5 / 11 …; 38, potem 34 / 41 …);
  każda sprawdzona karta = nowy punkt w `ANCH`.
- **Licznik setek** przy prawej krawędzi: Nr kodu w tabeli TRÓJKA, 1 … 99, 00, 1 … — w zeszycie dopiero od prawej połowy karty 60 (= 49).
- Znaki: `−` = 0, `+` = 1. Pierwszy znak = pierwsza cyfra kodu, środkowy = druga, trzeci = ostatnia (tak jest w zeszycie TRÓJKA).
- Ostatni kod podświetlony, następny wiersz ze strzałką `▸`. Dotknięcie wiersza → notatka (np. mecz) — także na wierszach bez kodu;
  notatka zapisana przy Nr kodu.
