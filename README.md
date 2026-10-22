# ZESZYT — karty z zeszytu

Aplikacja (PWA) pod `https://px5060.github.io/zeszyt/`. Pokazuje kody T50 / T60 tak, jak w papierowym zeszycie:
karta = dwie połowy, każda połowa = 3 tercje (wiersze 1–10 · 11–20 · 21–28; pierwsza karta: 21–26), czyli 6 tercji na karcie.
Kod w wierszu: `−` = 0, `+` = 1 (w T60 pierwsza cyfra 2 / 3 pisana cyfrą).

- Kody **tylko czytane** ze wspólnej pamięci telefonu (ten sam adres px5060.github.io), te same co w RAZEM / SZUKAJ / MOJE:
  baza `seed_t50.txt` / `seed_t60.txt` z aplikacji MOJE (`/moje/…`) + kody dopisane w telefonie (`t50razem_v1_added` / `t60razem_v1_added`).
- Dotknięcie wiersza → notatka (np. mecz). Własne dane ZESZYTU tylko pod kluczami `zeszyt_…`.
- Na górze pasek przycisków do pozostałych aplikacji (jak w MOJE) + ZESZYT.

Bez budowania — `index.html` jest gotowy. Ikony: `python3 make_icons.py`. Zasady pracy: `RULES.md`.
