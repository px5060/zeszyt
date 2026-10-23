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
- **Dopisywanie kodów (od 1.0.1, na prośbę użytkownika):** „＋ Dopisz kod” albo dotknięcie wiersza ze strzałką ▸ → trzy znaki − / +
  (− = 0, + = 1) → kod dopisany na koniec wspólnej listy `t50razem_v1_added` (czytaj-zmień-zapisz, jak w RAZEM / MOJE), więc od razu widzą go
  RAZEM, SZUKAJ i MOJE (MOJE oznacza go jako „wpisany w innej aplikacji”). Tylko kolejny kod (Nr n+1), poprzednich kodów ZESZYT nie zmienia.
  „↩ Cofnij” — tylko kod dopisany w ZESZYCIE i wciąż ostatni (`zeszyt_v1_ostatni`).
- Własne dane tylko pod kluczami z przedrostkiem `zeszyt_` (`zeszyt_v1_theme`, `zeszyt_v1_notes_t50`, `zeszyt_v1_dzwiek`, `zeszyt_v1_ostatni`,
  `zeszyt_v1_model`).

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
- Zdjęcia (Claude odczytuje skróty ze zdjęcia karty, z kluczem API) — zrobione i usunięte na prośbę użytkownika: zostaje **zapis ręczny**.
  Kod jest w historii repo (commit „Kartka w kolorach zeszytu, szybkie wpisywanie meczów i mecze ze zdjęcia”).
- **Wygląd karty**: wiersz = 1 kratka (28 kratek w połowie), numer, 3 znaki, mecz i licznik siedzą w kratkach; połowa = 10 kratek
  (numer 1 + znaki 3 + mecz 5 + licznik 1); karta 1: części 5 + 4 + 4 + 4. Rozmiar kratki z szerokości ekranu (`--sq`), cała karta na ekranie.
- **Spirala po prawej** (dziurki w kartce + druciane kółka). **Przewracanie kart palcem** z animacją 3D wokół spirali, karta idzie za palcem:
  przeciągnięcie **w lewo = następna** karta (wychodzi zza spirali na wierzch), **w prawo = poprzednia** (wierzchnia odwraca się nad spiralą)
  — kierunek zmieniony na prośbę użytkownika (1.0.1).
  Krótkie przeciągnięcie — karta wraca; szybkie machnięcie — przewraca. Przyciski ◀ ▶ i strzałki też animują (skoki o więcej kart bez animacji).
- **Szelest kartki** przy przewracaniu (dźwięk robiony w aplikacji z szumu, bez plików audio); 🔊/🔇 na pasku (`zeszyt_v1_dzwiek`).
  Gra tylko gdy karta się przewróci (nie przy cofnięciu).
- **Przejście do karty**: pole „nr karty” + „Idź ▶” (albo Enter); dotknięcie „KARTA …” ustawia kursor w tym polu.

## Modele — podświetlenie układów (od 1.1.0, lista od 1.5.0)

- Model: + na środku (`x1x`), w każdej połowie liczą się tylko 3 wiersze modelu (3 kroki na połowę). Połowa bez + w tych wierszach
  = **pusta trójka** → gra od następnej połowy, krok za krokiem do WIN; po WIN nowy cykl od następnej połowy.
  Gra do kroku `limit` (domyślnie 9). Połowy krótsze niż najwyższy wiersz modelu (karta 0) pomijane; karta 1 — 4 części po kolei.
  Opcje: start po 1 albo 2 pustych trójkach; warunek **„+ z boku”** — gramy tylko, gdy w pustej trójce jest kod z + na początku
  albo na końcu (100 / 001 / 101); gdy same `−−−` — tej gry nie gramy, czekamy (bez stawiania) na + na środku.
- Wbudowany **16·18·27** (wybrany przez użytkownika): 133 gry, 133 WIN, 0 BUST, najdłużej 9 kroków, +11 472 zł (kurs 3.0, stawki 8, 8, 16…).
  Sprawdzone w aplikacji też 1·6·17 (138 gier, 0 BUST, +7 968) i 16·18·27 z „+ z boku” (108 gier, 0 BUST, +9 320) — zgodne z analizą.
- **Lista „Modele” nad kartą (1.5.0)**, rozwijana (`zeszyt_v1_modele_otw`): **zwinięta = żadnych oznaczeń na kartach**.
  Rozwinięta: każdy model w wierszu (kwadracik żółty CZEKAJ / migający GRAJ, nazwa, opcje, stan). **Dotknięcie modelu** = jego wiersze
  na kartach + opis pod nim, co się dzieje (`zeszyt_v1_model`); ponowne dotknięcie — odznacza. Jeden model na kartach naraz.
  „＋ Dodaj model”: 3 wiersze (1–28), start po 1 / 2 pustych, warunek brak / + z boku, gra do kroku 5–12 → własne modele w
  `zeszyt_v1_modele` (JSON); 🗑 usuwa własny model (wbudowanego nie).
- **Kolory na karcie**: **fioletowy** = start (pusta trójka, cała trójka; „start” przy 3., ostatnim pustym wierszu — on uruchamia grę);
  każdy rozegrany wiersz z **numerem kroku**: **czerwony** = bez trafienia, **zielony** = WIN („WIN 9”); ciemnoczerwony = BUST,
  szary = po BUST. Wiersze modelu bez udziału w grze (także po WIN w tej samej połowie) — neutralna ramka. Gra w toku: migająca
  ramka następnego kroku („▶ 2”). Gry nie zachodzą na siebie. (1.4.0 miało kolor na całą połowę — użytkownik chce numer przy każdym kroku.)
- **Opis wybranego modelu**: wynik, CZEKAJ / GRAJ + „Pokaż ▶”, „Na kartach: …” (bieżąca gra / ostatnia + „Idź ▶” / wszystkie),
  legenda, „📊 Statystyki”, „🔍 Prześledź”.
- **🔍 Prześledź** (`zeszyt_v1_przesledz`): **WŁ** = wszystkie dotychczasowe gry modelu na całym zeszycie (przewracając karty);
  **WYŁ** = tylko bieżąca gra (przy CZEKAJ — ostatnia). Osobny ekran z listą / siatką (1.1.1–1.3.0) usunięty — oglądamy na kartach.
- **Statystyki** (📊): stan (krok, miejsce, stawka, ile już postawione, ile da WIN), gry / WIN / BUST / najdłużej / bilans /
  największy spadek, WIN na kroku (stawka, ile, zysk), WIN w połowie gry, ostatnie gry (dotknięcie → karta),
  przyciski Pokaż na kartach / Ukryj, Prześledź, Zamknij.
- **Kafelek MODELE na pasku**: kwadracik na każdy model — żółty = CZEKAJ, miga = GRAJ (przy jednym grającym — numer kroku ▶n);
  zielone tło, gdy model jest pokazany na kartach. 1. dotknięcie powiększa, 2. rozwija listę modeli.
- Karta 0 (brak wiersza 27): przy pokazanym modelu wiersze, które są, w szarej kropkowanej ramce + adnotacja na dole kartki.
- Wbudowane modele: `MODELE` w `index.html` (`w` wiersze; opcjonalnie `czekaj`, `war: 'boki'`, `limit`).
