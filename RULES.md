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
  Rozwinięta: każdy model w wierszu (kwadracik żółty CZEKAJ / migający GRAJ, nazwa, opcje, stan). Nagłówek listy bez znaczka „GRAJ: …”
  (od 1.7.3, prośba użytkownika) — zielone GRAJ świeci tylko przy modelu na rozwiniętej liście. **Dotknięcie modelu** = jego wiersze
  na kartach + opis pod nim, co się dzieje (`zeszyt_v1_model`); ponowne dotknięcie — odznacza. Jeden model na kartach naraz.
  Modele dodaje się **tylko z SZUKAJ W ZESZYCIE** (od 1.7.2 — ręczne „＋ Dodaj model” w ZESZYCIE usunięte na prośbę użytkownika;
  na dole listy link „🔎 Dodaj model — SZUKAJ W ZESZYCIE ▶”). Własne modele w `zeszyt_v1_modele` (JSON); 🗑 usuwa model (wbudowanego nie).
- **Kolory na karcie**: **fioletowy** = start (pusta trójka, cała trójka; „start” przy 3., ostatnim pustym wierszu — on uruchamia grę);
  każdy rozegrany wiersz z **numerem kroku**: **czerwony** = bez trafienia, **zielony** = WIN („WIN 9”); ciemnoczerwony = BUST,
  szary = po BUST. Wiersze modelu bez udziału w grze (także po WIN w tej samej połowie) — neutralna ramka. Gra w toku: migająca
  ramka następnego kroku („▶ 2”). Gry nie zachodzą na siebie. (1.4.0 miało kolor na całą połowę — użytkownik chce numer przy każdym kroku.)
- **Opis wybranego modelu**: wynik, CZEKAJ / GRAJ + „Pokaż ▶”, „Na kartach: …” (bieżąca gra / ostatnia + „Idź ▶” / wszystkie),
  „📊 Statystyki”, „🔍 Prześledź”. **Legenda jedna, pod zeszytem** (od 1.5.1, gdy model jest na kartach) — nie przy każdym modelu.
- **🔍 Prześledź** (`zeszyt_v1_przesledz`): **WŁ** = wszystkie dotychczasowe gry modelu na całym zeszycie (przewracając karty);
  **WYŁ** = tylko bieżąca gra (przy CZEKAJ — ostatnia). Osobny ekran z listą / siatką (1.1.1–1.3.0) usunięty — oglądamy na kartach.
- **Statystyki** (📊): stan (krok, miejsce, stawka, ile już postawione, ile da WIN), gry / WIN / BUST / najdłużej / bilans /
  największy spadek, WIN na kroku (stawka, ile, zysk), WIN w połowie gry, ostatnie gry (dotknięcie → karta),
  przyciski Pokaż na kartach / Ukryj, Prześledź, Zamknij.
- **Kafelek MODELE na pasku**: kwadracik na każdy model — żółty = CZEKAJ, miga = GRAJ (przy jednym grającym — numer kroku ▶n);
  zielone tło, gdy model jest pokazany na kartach. 1. dotknięcie powiększa, 2. rozwija listę modeli.
- Karta 0 (brak wiersza 27): przy pokazanym modelu wiersze, które są, w szarej kropkowanej ramce + adnotacja na dole kartki.
- Od 1.6.0 model ma też **`poz`** — gramy na + na początku (0, „+XX”), na środku (1, domyślnie) albo na końcu (2, „XX+”) — i **start
  „od razu”** (`czekaj: 0`): gra bez pustej trójki, od pierwszej połowy i zaraz po każdym WIN. Warunek `war: 'boki'` = w pustej trójce
  jest + w innym miejscu niż `poz` (przy X+X: „+ z boku”).
- **Nazwa modelu** (od 1.7.2) jednoznaczna i ta sama w SZUKAJ W ZESZYCIE i w ZESZYCIE (`modDef` w `silnik.js`):
  [cel, gdy nie X+X] wiersze [`+bok` = warunek] [`×2` = start po 2 pustych] [`k8` = gra do kroku, gdy nie 9] — np. „16·18·27”,
  „16·18·27 +bok”, „XX+ 5·13·28 +bok”, „20·23·24 ×2”. Użytkownik myśli o przyszłym szukaniu modeli po nazwie (nie po parametrach).
- Wbudowane modele: `MODELE` w `silnik.js` (`w` wiersze; opcjonalnie `poz`, `czekaj`, `war: 'boki'`, `limit`).

## Silnik wspólny — `silnik.js` (od 1.6.0)

- Układ kart (`DOP`, `DOPG`, `PUSTE`, `partsOf`, `buildBook`) i liczenie modeli (`liczModel`, `modNum`, `modDef`, `szybkiModel`)
  są w `silnik.js`, ładowanym przez ZESZYT i wyszukiwarkę (`silnik.js?v=…` — przy zmianie silnika podbić `v`, żeby telefon nie wziął starego pliku).
- `szybkiModel` (wyszukiwarka, tysiące modeli naraz) liczy dokładnie to samo co `liczModel` (ZESZYT) — sprawdzone na 1 800 losowych
  modelach (wszystkie `poz`, `czekaj` 0–2, z warunkiem i bez, także z grą w toku): zero różnic. Po przeniesieniu do `silnik.js`
  wyniki ZESZYTU identyczne jak wcześniej (porównanie gier, stanu i kolorów).

## Wyszukiwarka modeli — SZUKAJ W ZESZYCIE (`/zeszyt/modele/`, od 1.6.0; nazwa od 1.7.1, wcześniej „SZUKAJ M”)

- Pomysł użytkownika: aplikacja bez zeszytu, sama wyszukiwarka modeli, jak SZUKAJ 50 / 60 — **kryteria ustawia użytkownik**.
- Filtry: gramy na (X+X / +XX / XX+, kilka naraz), start (po 1 / po 2 pustych / od razu), warunek (bez / + z boku), stan teraz
  (wszystkie / GRAJ teraz / CZEKAJ), gra do kroku 5–12, **gier co najmniej**, **BUST najwyżej**, sortowanie
  (najmniej BUST → najwięcej gier; bilans; gry; najpierw w grze). Zapis filtrów: `zeszyt_v1_szukaj`.
- Przeszukuje wszystkie zestawy 3 wierszy (3 276) × wybrane opcje (wszystko naraz: 49 140 modeli, ~2 s), w paczkach z postępem.
- Wynik: model, opcje, stan teraz (GRAJ krok n + stawka / CZEKAJ / po BUST), gry / WIN / BUST / najdłużej / bilans.
  **„➕ Do zeszytu”** dopisuje model do `zeszyt_v1_modele` i wybiera go w ZESZYCIE (`zeszyt_v1_model`, lista rozwinięta);
  model już w ZESZYCIE → „✓ w ZESZYCIE — otwórz ▶”.
- Kody: te same co w innych aplikacjach (baza `/moje/seed_t50.txt` + `t50razem_v1_added`); przelicza po powrocie / zmianie kodów.
- **Od 1.6.1 bez „+XX” (początek) i bez startu „od razu”** — decyzja użytkownika: nie ma takich modeli do k9 (+XX: najmniej 5 BUST
  przy ≥ 100 grach; „od razu”: żaden nie zamyka się do k9), więc nie pokazujemy ich w wyszukiwarce ani w formularzu ZESZYTU
  (silnik dalej je umie). **XX+ zostaje** — są modele do k9 (np. XX+ 5·13·28 z „+ gdzie indziej”: 111 gier, 1 BUST; po 2 pustych
  trójkach modele bez BUST ok. 60 gier). Stare zapisy filtrów z tymi opcjami są czyszczone.
- **Dotknięcie modelu** na liście wyników → okno statystyk (pełne liczenie jak w ZESZYCIE: stan z miejscem i stawką, gry / WIN / BUST /
  najdłużej / bilans / największy spadek, WIN na kroku, WIN w połowie gry, ostatnie gry) i przycisk **„➕ Przenieś do zeszytu”**
  (po przeniesieniu „✓ w ZESZYCIE — otwórz ▶”); na karcie wyniku znaczek „✓ w ZESZYCIE”.
- **Zakładka „＋ Dopisz kod”** (od 1.6.2, prośba użytkownika): trzy znaki − / + (− = 0, + = 1), mecz nieobowiązkowo → kod dopisany
  na koniec wspólnej listy `t50razem_v1_added` (czytaj-zmień-zapisz, jak w ZESZYCIE), więc od razu widzą go ZESZYT, MOJE, RAZEM,
  SZUKAJ, L50…; mecz w `zeszyt_v1_notes_t50` (widać w ZESZYCIE). Pokazuje Nr i miejsce w zeszycie (karta, połowa, wiersz),
  ostatnie kody, „↩ Cofnij” (wspólne z ZESZYTEM: `zeszyt_v1_ostatni`). Po zapisie wyniki modeli przeliczają się same.
- Na pasku obu stron przycisk **🔎 SZUKAJ W Z** (skrót od „SZUKAJ W ZESZYCIE”, nazwa wybrana przez użytkownika) (w MOJE jeszcze nie ma — osobne repo).
- Sprawdzone: domyślne filtry (X+X, po 1 pustej, k9, ≥ 100 gier, BUST ≤ 2) → 217 modeli, tyle samo co w analizie w rozmowie.
- Analiza „od razu” (bez pustej trójki): żaden model 3 kroków nie zamyka się do k9 (X+X najmniej 7 BUST do k9); bez BUST dopiero do k12
  (np. 1·6·17, 6·19·22, 8·24·28 — te same wiersze co najlepsze „po 1 pustej” do k9: 9 kroków gry + 3 kroki pustej trójki).

## Zakłady w ZESZYCIE (od 1.7.0)

- Prośba użytkownika: zakładka **💰 Zakłady** i stawianie zakładów na kolejnych krokach modeli — jak „MOJE ZAKŁADY” w MOJE / SZUKAJ.
- Zakładki nad kartą: **📓 Zeszyt** · **💰 Zakłady** (znaczek = ile zakładów czeka na wynik).
- W opisie wybranego modelu, gdy model **GRA**: formularz jak w MOJE — **Nr wiersza** (domyślnie wiersz następnego kroku) · **krok** ·
  **postawione zł** (stawka kroku: 8, 8, 16, 32…) → „💰 Zapisz zakład”. Postawiony → „💰 Postawiony: Nr … · k… · … zł — czeka na wynik”;
  następny krok po przegranej podpowiada się sam (kolejny wiersz, krok +1, jego stawka). Na karcie przy tym wierszu znaczek 💰.
- Zapis: `zeszyt_v1_zaklady` (model z ustawieniami, Nr, krok, zł, czas). Wynik z kodu w tym wierszu: + w miejscu gry = **WIN +2 × stawka**
  (kurs 3.0), inaczej przegrany −stawka; dopóki kodu nie ma — „czeka”. Kod może przyjść z dowolnej aplikacji (wspólna lista kodów).
- Zakładka Zakłady: wynik łącznie, postawione (rozliczone), dziś; „⏳ Czekają na wynik” i „Rozliczone” (WIN / przegrane, kod −/+);
  dotknięcie → karta z tym wierszem i model pokazany; „✕ usuń”.
- Zakłady ZESZYTU są (na razie) tylko w ZESZYCIE — MOJE ich nie pokazuje (MOJE ma swoje zakłady modeli SZUKAJ / RAZEM).
- Kody T50 dopisane w MOJE, RAZEM, SZUKAJ, L50 (i w SZUKAJ W ZESZYCIE) trafiają do ZESZYTU w kolejny wiersz — wspólny klucz `t50razem_v1_added`
  (sprawdzone w `moje/build.py`: TABS t50 key = `t50razem_v1_added`).

## Zakładka 🔻 LOST w SZUKAJ W ZESZYCIE (od 1.8.0)

- Prośba użytkownika, wzór: aplikacja L50 (SZUKAJ LOST, repo `szukajbust50`): modele **po przegranej** — ostatnia gra modelu była
  LOST (BUST = gra dłuższa niż „gra do kroku”), albo gra właśnie przekroczyła limit i czeka na koniec cyklu („LOST w toku”).
- Ustawienia „gramy na / start / warunek / gra do kroku / gier co najmniej” wspólne z zakładką Szukaj („zmień ▶”); w zakładce LOST:
  **LOST co najmniej** (1), **LOST najwyżej** (5), **LOST po LOST najwyżej** (0 — jak w L50: bez LOST-u zaraz po LOST-cie),
  stan po LOST (wszystkie / GRAJ teraz / CZEKAJ). Kolejność: najpierw GRAJ, potem CZEKAJ, potem LOST w toku; mniej LOST-ów, więcej gier.
- Karta modelu (jak historia w L50): gry, LOST-y, **co ile gier LOST** (średnio, najkrócej), **po LOST: WIN / LOST**
  (co było w grze zaraz po LOST-cie), najdłuższa gra, bilans, **sprawdzenie** = ostatnie 35% gier (gry, LOST, LOST po LOST).
- Okno statystyk modelu ma sekcję **LOST (przegrane gry)**: lista ostatnich 10 LOST-ów — karty, kroki, odstęp w grach od poprzedniego
  LOST-u, następna gra (WIN n / LOST / trwa); w „Ostatnie gry” przegrana jako „LOST k…” na czerwono.
- Na danych (15 361 kodów, X+X po 1 pustej, k9, ≥ 100 gier): 47 modeli po LOST (LOST 1–5, bez LOST po LOST), 24 z nich GRAJ teraz.
