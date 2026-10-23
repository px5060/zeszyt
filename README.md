# ZESZYT — karty z zeszytu

Aplikacja (PWA) pod `https://px5060.github.io/zeszyt/`. Pokazuje kody tabeli **TRÓJKA (T50)** tak, jak w papierowym zeszycie:
karta = dwie połowy, każda połowa = 3 tercje (wiersze 1–10 · 11–20 · 21–28), czyli 6 tercji na karcie.
Karty od 0 jak w zeszycie: karta 0 (21–26), karta 1 (4 części), od karty 2 standard — szczegóły w `RULES.md`.
Kod w wierszu: `−` = 0, `+` = 1; pierwszy znak = pierwsza cyfra kodu, środkowy = środkowa, trzeci = ostatnia.
PIKOFF (T60) ma w zeszycie inny układ — na razie go nie ma.
Licznik setek kodów (Nr w tabeli TRÓJKA: 1 … 99, 00, 1 …) przy prawej krawędzi — od prawej połowy karty 60, jak w zeszycie.

- Kody czytane ze wspólnej pamięci telefonu (ten sam adres px5060.github.io), te same co w RAZEM / SZUKAJ / MOJE:
  baza `seed_t50.txt` z aplikacji MOJE (`/moje/…`) + kody dopisane w telefonie (`t50razem_v1_added`).
- ＋ Dopisz kod (− / +) → kod trafia do wszystkich aplikacji; „nr karty” + Idź → przejście do karty.
- Dotknięcie wiersza → mecz (skróty drużyn, np. PAO-RAD); Enter = następny wiersz. Własne dane ZESZYTU tylko pod kluczami `zeszyt_…`.
- Kartka zawsze w kolorach zeszytu (biała, niebieska kratka, czarny tusz, czerwone linie).
- Na górze pasek przycisków do pozostałych aplikacji (jak w MOJE) + ZESZYT.
- **Modele** (lista nad kartą, rozwijana): dotknij modelu — jego wiersze na kartach (fioletowy start, czerwone kroki
  z numerami, zielony WIN, kolejne kroki do limitu w pomarańczowych ramkach) i opis, co się dzieje; można wybrać kilka modeli naraz —
  wspólny wiersz ma „×2”; w grze oznaczenia tylko do limitu (w Prześledź także kroki po limicie, szare, do „LOST”); „🔍 Prześledź” — wszystkie gry na całym zeszycie; „Zwiń” — oznaczenia znikają.
  Modele dodaje się z SZUKAJ W ZESZYCIE (link na dole listy); nazwa modelu ta sama w obu miejscach. Kwadracik żółty = czekaj, miga = graj.
- **🔎 SZUKAJ W ZESZYCIE** (`/zeszyt/modele/`, na pasku „🔎 SZUKAJ W Z”): wyszukiwarka modeli — sam ustawiasz: gramy na (X+X / +XX / XX+), start (po 1 / 2 pustych,
  od razu), warunek, grę do kroku, ile gier co najmniej i ile BUST najwyżej; widać, które modele są teraz w grze.
  „➕ Do zeszytu” — model trafia do listy modeli w ZESZYCIE. Silnik wspólny: `silnik.js`.

Bez budowania — `index.html` jest gotowy. Ikony: `python3 make_icons.py`. Zasady pracy: `RULES.md`.
