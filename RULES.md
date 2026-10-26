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
  Od 1.9.3: ostatnia litera nie jest ucinana (pismo Caveat wystaje poza swoje pole — odstęp na końcu), a za długa nazwa
  dostaje mniejsze litery, żeby zmieścić się w wierszu (`fitNt` po narysowaniu karty i po wczytaniu pisma; najmniej 40%).
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
  na kartach + opis pod nim, co się dzieje (`zeszyt_v1_model` — id po przecinku); ponowne dotknięcie — odznacza. Od 1.9.0 **kilka
  modeli naraz** (patrz niżej).
  Modele dodaje się **tylko z SZUKAJ W ZESZYCIE** (od 1.7.2 — ręczne „＋ Dodaj model” w ZESZYCIE usunięte na prośbę użytkownika;
  na dole listy link „🔎 Dodaj model — SZUKAJ W ZESZYCIE ▶”). Własne modele w `zeszyt_v1_modele` (JSON); 🗑 usuwa model (wbudowanego nie).
- **Kolory na karcie**: **fioletowy** = start (pusta trójka, cała trójka; „start” przy 3., ostatnim pustym wierszu — on uruchamia grę);
  każdy rozegrany wiersz z **numerem kroku**: **czerwony** = bez trafienia, **zielony** = WIN („WIN 9”); ciemnoczerwony = BUST,
  kroki za limitem: w bieżącej grze **bez oznaczeń**, w **Prześledź** szare z numerami aż do trafienia kończącego przegraną grę („LOST 14”; od 1.9.1). Wiersze modelu bez udziału w grze (także po WIN w tej samej połowie) — neutralna ramka. Gra w toku: migająca
  ramka następnego kroku („▶ 2”), dalej **pomarańczowe przerywane ramki z numerami kolejnych kroków aż do limitu** (od 1.9.0, np. gra do k6,
  jesteśmy na k3 → ▶3, potem 4, 5, 6 — w tej połowie i następnych; za limitem nic). Gry nie zachodzą na siebie. (1.4.0 miało kolor na całą połowę — użytkownik chce numer przy każdym kroku.)
- **Opis wybranego modelu**: wynik, CZEKAJ / GRAJ + „Pokaż ▶”, „Na kartach: …” (bieżąca gra / ostatnia + „Idź ▶” / wszystkie),
  „📊 Statystyki”, „🔍 Prześledź”. **Legenda jedna, pod zeszytem** (od 1.5.1, gdy model jest na kartach) — nie przy każdym modelu.
- **🔍 Prześledź** (`zeszyt_v1_przesledz`): **WŁ** = wszystkie dotychczasowe gry modelu na całym zeszycie (przewracając karty);
  **WYŁ** = tylko bieżąca gra (przy CZEKAJ — ostatnia). Osobny ekran z listą / siatką (1.1.1–1.3.0) usunięty — oglądamy na kartach.
- **Statystyki** (📊): stan (krok, miejsce, stawka, ile już postawione, ile da WIN), gry / WIN / BUST / najdłużej / bilans /
  największy spadek, WIN na kroku (stawka, ile, zysk), WIN w połowie gry, ostatnie gry (dotknięcie → karta),
  przyciski Pokaż na kartach / Ukryj, Prześledź, Zamknij.
- ~~Kafelek MODELE na pasku~~ — **usunięty w 1.9.2** (prośba użytkownika: „zakładka modele z góry strony nie jest nam potrzebna”).
  Stan modeli (żółty CZEKAJ / migający GRAJ) widać tylko na liście „Modele” nad kartą.
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

## ZESZYT ⇄ SZUKAJ W ZESZYCIE, ramka po LOST (od 1.8.1)

- Model w ZESZYCIE **po LOST-cie** (ostatnia skończona gra przegrana albo gra w toku już za limitem — od LOST-u bez WIN; `modLost`
  w `silnik.js`) ma na liście **biało-czerwoną ramkę w paski jak w MOJE** (`border-image` jak `.lsrc` w MOJE) i dopisek „po LOST”.
- Przy każdym modelu w ZESZYCIE ikonka **🔎** → SZUKAJ W ZESZYCIE z od razu otwartymi statystykami tego modelu
  (link `modele/?m=<kod>`, kod `poz-wiersze-czekaj-warunek-limit`, np. `1-16.18.27-1-b-9`; `modKod` / `modZKodu` w `silnik.js`).
- W wyszukiwarce „✓ w ZESZYCIE — otwórz ▶” → ZESZYT z tym modelem wybranym i pokazanym na kartach (link `../?m=<id>`).

## Kilka modeli naraz, kroki do limitu (od 1.9.0)
- Na prośbę użytkownika: dotknięcie modelu na liście dodaje go do kart, ponowne — zdejmuje; **można rozwinąć kilka modeli naraz**
  (każdy ma swój opis pod sobą, swój formularz zakładu i przyciski). `zeszyt_v1_model` = id wybranych po przecinku (stary zapis
  jednego id dalej działa). Link `?m=` z SZUKAJ W ZESZYCIE, „Pokaż na kartach” w Statystykach i dotknięcie zakładu **dodają** model.
- Wiersz oznaczony przez **2 (lub więcej) modele**: przy znaczku **„×2”**; kolor najważniejszy (▶ > WIN > BUST > krok > dalszy krok >
  start), numery kroków obu modeli po „/” (np. „4 / 2 ×2”). Na karcie 1 (wąsko) „×2” na rogu ramki. Legenda pod zeszytem: „×2 — wiersz 2 modeli”.
- **Gra w toku**: ▶ następny krok miga, a kolejne kroki do limitu modelu mają pomarańczowe przerywane ramki z numerami.
- **Za limitem**: w bieżącej grze (i przy dalszych krokach) — bez oznaczeń, tylko neutralna ramka modelu: w grze jeszcze nie wiemy, co będzie,
  więc oznaczamy tylko do kroku, do którego gra model. W **🔍 Prześledź** (historia) od 1.9.1 kroki po limicie są widoczne — szare
  z numerami, a wiersz trafienia, które zamknęło przegraną grę: „LOST 14” (legenda: „po limicie (przegrana gra)”). Liczenie gier się nie zmienia.

## Dotknięcie i przytrzymanie modelu na liście (od 1.9.4)
- Prośba użytkownika: **dotknięcie modelu** = tylko pokaż / ukryj go na kartach (wiersze gry wg legendy), bez opisu pod spodem.
- **Przytrzymanie** (0,5 s, krótka wibracja) = otwiera / zamyka opis modelu jak dawniej po dotknięciu: wynik, GRAJ + „Pokaż ▶”,
  💰 Zapisz zakład, „Na kartach…”, 📊 Statystyki, 🔍 Prześledź. Opis otwarty dla jednego modelu naraz (`S.panel`, tylko w pamięci strony);
  przytrzymany model trafia też na karty. Zdjęcie modelu z kart (dotknięcie) zamyka jego opis.
- Puszczenie palca po przytrzymaniu nie przełącza modelu (`S.lpSkip`); przesunięcie palca > 10 px (przewijanie) przerywa przytrzymanie;
  na wierszu modelu bez zaznaczania tekstu i bez menu przytrzymania przeglądarki. Na 🔎 i 🗑 przytrzymanie nie działa.

## SZUKAJ W ZESZYCIE — stan gry: GRAJ teraz / CZEKAJ na grę / od 1. kroku (od 1.9.5)
- Prośba użytkownika — filtr „Stan teraz” (i „Stan po LOST”) ma trzy możliwości (+ „wszystkie”):
  - **GRAJ teraz** — następny krok modelu wypada w **następnym wierszu** (Nr ostatniego kodu + 1), dowolny krok;
  - **CZEKAJ na grę** — model w grze, kolejny krok (2., 3.…) wypada **za kilka wierszy**;
  - **od 1. kroku** — po pustej trójce (1 albo 2 pustych, „po triggerze”) gra rusza od 1. kroku (także gdy to następny wiersz).
- Na kafelku modelu w grze linia: „Krok 3 (16 zł) · **za 14 wierszy** · Nr 15 375, karta 273 L w.27” (przy 1. kroku: „— od 1. kroku
  (po pustej trójce)”; przy następnym wierszu: „następny wiersz”). Za ile wierszy = Nr wiersza kroku − liczba kodów.
- Znaczki: zielony migający GRAJ teraz, pomarańczowy CZEKAJ na grę, fioletowy OD 1. KROKU; żółty „czeka na pustą trójkę” (bez gry),
  czerwony „po BUST” (krok za limitem — nie gramy) — te dwa tylko przy „wszystkie”. Sortowanie „najpierw najbliższa gra” = wg za ile wierszy.
- Silnik: `szybkiModel` zwraca też `at` = [połowa, wiersz] następnego kroku (sprawdzone z `liczModel`: 217/217 zgodnych). Statystyki
  modelu: „▶ GRAJ teraz / ⏳ CZEKAJ na grę / ⏳ OD 1. KROKU — krok n, za N wierszy”; krok za limitem = „⏸ po BUST”.
- „Przenieś do zeszytu” dokłada model do wybranych w ZESZYCIE (od 1.9.0 można kilka naraz), nie zastępuje ich.

## ZESZYT — stan modelu na liście jak w SZUKAJ (od 1.9.6)
- Prośba użytkownika: na liście „Modele” **GRAJ (miga, zielony kwadracik) tylko gdy następny krok wypada w następnym wierszu**.
  Model w grze z krokiem dalej: pomarańczowe „CZEKAJ na grę · krok n za N wierszy”, po pustej trójce fioletowe „OD 1. KROKU · za N wierszy”;
  krok za limitem: czerwone „po BUST”. Nie gra = żółte CZEKAJ (na pustą trójkę). To samo w Statystykach modelu.

## Usuwanie modelu wbudowanego (od 1.9.7)
- Prośba użytkownika: 16·18·27 nie ma być na stałe — ma 🗑 jak inne modele. Usunięte wbudowane modele: `zeszyt_v1_modele_usuniete`
  (id po przecinku); ZESZYT i SZUKAJ W ZESZYCIE ich nie pokazują. Ten sam model można potem dodać z SZUKAJ W ZESZYCIE (jako własny).

## SZUKAJ W ZESZYCIE — filtr „Krok gry” (od 1.9.8)
- Prośba użytkownika: wybór, na którym kroku jest model w grze: chipy „każdy” i k1…k(limit) (kilka naraz, np. k1 + k2 + k3);
  wybrane kroki = tylko modele w grze na tych krokach (k1 = od 1. kroku). Działa razem ze „Stan teraz” i w zakładce LOST
  (ustawienie z zakładki Szukaj, widać w opisie). Kroki ponad nowy limit znikają przy zmianie „Gra do kroku”. Zapis w `zeszyt_v1_szukaj` (`krok`).

## Osobna lista „Modele LOST” w ZESZYCIE (od 1.9.9)
- Prośba użytkownika: obok rozwijanej listy „Modele” druga, osobna, rozwijana lista **„Modele LOST”** (czerwona ramka).
  Trafiają na nią modele przeniesione z SZUKAJ W ZESZYCIE z zakładki **🔻 LOST** (przycisk „➕ Przenieś do zeszytu — Modele LOST”;
  w `zeszyt_v1_modele` pole `lista: 'lost'`). Z zakładki Szukaj — jak dotąd na zwykłą listę.
- Każda lista zwija się osobno (`zeszyt_v1_modele_otw`, `zeszyt_v1_modele_lost_otw`); zwinięta = jej modele bez oznaczeń na kartach.
  Dotknięcie / przytrzymanie, 🗑, 🔎 — tak samo. 🔎 z listy LOST i „Dodaj model” otwierają w SZUKAJ W ZESZYCIE zakładkę LOST.

## Klawiatura przy zakładzie (od 1.9.10)
- Błąd: w polu kwoty / Nr / kroku zakładu klawiatura wyjeżdżała i od razu się chowała — wysunięta klawiatura zmienia wysokość okna,
  a `resize` przerysowywał całą stronę (pole traciło kursor). Teraz przerysowanie tylko przy zmianie szerokości o ≥ 40 px (obrót telefonu) i nigdy, gdy kursor jest w polu (INPUT / SELECT).

## SZUKAJ W ZESZYCIE — T60 (od 1.10.0, `modele/t60.html`)
- Prośba użytkownika: wyszukiwarka dla tabeli T60 (kody z T60 RAZEM / MOJE: baza `/moje/seed_t60.txt` + `t60razem_v1_added`).
  Kod T60: 1. cyfra 0 brak gola 40–50', 1 gol 40–45', 2 gol 46–50', 3 oba; 2. cyfra gol 50–60'; 3. cyfra gol 60–70'.
- Układ: **strona 27 wierszy** (tercje 10 · 10 · 7) od Nr 1, bez połów; albo jednostka **tercja** (10 / 10 / 7 osobno; model z wierszem > 7 pomija 3. tercję).
- Przełącznik **T50 / T60** na górze obu stron wyszukiwarki (osobne pliki, T50 bez zmian w liczeniu).
- Filtry: gramy na (kilka naraz) 1xx · 2xx · 3xx · x1x · xx1; wierszy modelu 1–9 (do 3 — wszystkie zestawy, więcej — ciągłe zakresy
  + najlepsze z mniejszej liczby rozbudowane o 1 wiersz); dowolne / ciągły zakres; musi mieć wiersz; start od razu / po 1–5 pustych;
  warunek „na pustej był inny gol”; gra do k3–k15; gier ≥, BUST ≤, najdłużej ≤, bilans ≥; **sprawdzenie** — podział tabeli (np. 65/35,
  wg strony startu gry) i „tylko 0 BUST w obu częściach”; stan (GRAJ teraz / CZEKAJ na grę / od 1. kroku), krok gry; sortowanie
  (najmniej BUST, najwięcej gier, najkrótsze, bilans, najbliższa gra).
- Kafelek: stan + krok i za ile wierszy (strona, wiersz), gry / WIN / BUST / najdłużej / bilans, WIN na każdym kroku, sprawdzenie.
  Statystyki: WIN na kroku, ile stron trwała gra, najdłuższe gry, gra po grze (ostatnie 30), „➕ Przenieś do zeszytu T60”
  (`zeszyt_v1_modele60`, z LOST — `lista: 'lost'`; ZESZYT T60 — następny krok). Zakładka LOST i „+ Dopisz kod” T60 (1. cyfra 0–3).
- Nazwa modelu T60: `[cel] wiersze [T = tercja] [×n = po n pustych | od razu] [+gol] kL`, np. „1-3xx 1·15·25 k6”.
- Sprawdzone: 1·15·25 (k6) 106 gier 0 BUST, 3·24 (k9) 128 / 0, 10·14·16 (k9) 123 / 0 — zgodne z analizą w Pythonie.

## T60: strona 30 wierszy (3 × 10) — wybór użytkownika (od 1.10.1)
- Porównanie (1xx/2xx/3xx, 1–3 wiersze, po 1–3 pustych, ≥ 50 gier): strona 27 — 0 BUST do k9: 131 modeli, do k6: 1; tercje 10/10/7 i równe
  po 10 — ok. 41–42 do k9, 0 do k6; **strona 30 — 196 do k9, 2 do k6** (3·7·18 104 gry, 4·9 ×2). Użytkownik wybrał **3 × 10**.
- Wyszukiwarka T60: jednostka domyślna **strona 30** (`jedn: 's'`), **tercja 10** (`'t'`, 3 na stronie), strona 27 (`'s27'`, do porównań, w nazwie „S27”).
  Numeracja w „Dopisz kod” i w informacji o ostatnim kodzie: strona 30, wiersz 1–30. ZESZYT T60 będzie miał strony 30 wierszy.

## T60: „wszystkie” przy wierszach modelu i warunku startu (od 1.10.2)
- Prośba użytkownika: żeby nie dzielić — chip **„wszystkie”** (domyślny): wiersze modelu = dowolne + ciągłe (dowolne i tak obejmują ciągłe
  zakresy), warunek startu = bez warunku + „na pustej był inny gol” (oba warianty w jednym szukaniu; w nazwie modelu z warunkiem „+gol”).

## T60: bez strony 27 (od 1.10.3)
- Prośba użytkownika: jednostka gry tylko **strona 30** i **tercja 10** (3 × 10 na stronie); opcja „strona 27” usunięta (zapisany filtr `s27` → strona 30).

## T60: mniej pól (od 1.10.4)
- Prośba użytkownika: usunięte pola „Najdłużej najwyżej”, „Bilans co najmniej” i „Musi mieć wiersz” — zostają: gra do kroku, gier co najmniej, BUST najwyżej.

## ZESZYT: ↩ cofanie wielu kodów (od 1.9.11)
- Prośba użytkownika: przycisk **↩** zawsze na wierzchu (obok „＋ Dopisz kod”). Każde dotknięcie (z potwierdzeniem) cofa **ostatni kod dopisany
  w telefonie** — w dowolnej aplikacji (`t50razem_v1_added`), można wiele razy z rzędu; mecz przy cofniętym Nr też znika.
  Kodów z bazy MOJE cofnąć się nie da (przycisk wyszarzony, gdy w telefonie nie ma dopisanych kodów). Stara ramka „Dopisany tutaj … ↩ Cofnij” usunięta.

## T60: warunek startu bez „wszystkie” (od 1.10.5)
- Prośba użytkownika: przy warunku startu usunięte „wszystkie” — jeden wybór: **bez warunku** (domyślnie) albo **na pustej był inny gol**.
  Zapisane „wszystkie” zamienia się na „bez warunku”. Przy wierszach modelu „wszystkie” zostaje.

## T60: uproszczona wyszukiwarka jak T50 (od 1.10.6)
- Prośba użytkownika: za dużo możliwości, nie da się znaleźć modelu. Teraz jak SZUKAJ T50: **gramy na** (kilka naraz, każdy cel szukany
  osobno) 1xx·2xx·3xx (gol 40–50') / x1x / xx1; **start** po 1 / po 2 pustych stronach; **stan** (wszystkie, GRAJ teraz, CZEKAJ na grę,
  od 1. kroku); **krok gry**; gra do kroku, gier ≥ (domyślnie 50), BUST ≤ (domyślnie 2); sortowanie.
- Na stałe: strona 30 (3 × 10), modele z 2 i 3 wierszy (dowolne), bez warunku startu; sprawdzenie 65/35 tylko w statystykach modelu.
  Nowy klucz filtrów `zeszyt_v1_szukaj60b` (stare ustawienia nie przeszkadzają). Domyślnie: 3 141 modeli, GRAJ teraz 28.
- 1.10.7: start gry po **1, 2, 3, 4 albo 5** pustych stronach (kilka naraz; domyślnie po 1 i po 2).
- 1.10.8 (prośba użytkownika): „gramy na” — **2xx · 3xx (gol 46–50')** razem (domyślnie), **1xx (gol 40–45')** osobno (tylko 1. cyfra 1),
  x1x, xx1. Wspólne „1xx·2xx·3xx” usunięte (zapisane → 2xx·3xx). Nazwa modelu: „2/3xx …”, „1xx …”.
- 1.10.8: domyślnie start po 1, 2 i 3 pustych, gier ≥ 30, BUST ≤ 3 (żeby przy 2xx·3xx było co pokazać; przy gier ≥ 50 i BUST ≤ 2 — 0 modeli).
  Klucz filtrów `zeszyt_v1_szukaj60c`. Najlepsze 2xx·3xx (strona 30): k9 po 3 pustych 11·23·29 — 45 gier, 3 BUST; k12 po 3 pustych 6·7·15 — 50 gier, 0 BUST.
  1xx: k9 po 2 pustych 3·21·27 — 59 gier, 1 BUST; k12 po 1 pustej 3·21·27 — 118 gier, 1 BUST.

## ZESZYT T60 (od 1.11.0, `t60.html` + `silnik60.js`)
- Prośba użytkownika: zeszyt dla tabeli T60. Osobna strona `/zeszyt/t60.html`, przełącznik **T50 / T60** na górze obu zeszytów
  (i wyszukiwarek). Kody wspólne z MOJE / RAZEM 60: baza `/moje/seed_t60.txt` + `t60razem_v1_added`.
- Układ: **strona 30 wierszy (3 × 10)** od Nr 1, strony liczone od 1 (jak w SZUKAJ T60), czerwone linie po 10. i 20. wierszu,
  przy prawej krawędzi licznik Nr (1…99, 00). Kod pokazany cyframi (0 = szare „−”, 1. cyfra 1/2/3).
- Wszystko jak w ZESZYCIE T50: przewracanie stron, nazwy meczów, modele (dotknięcie = na kartach, przytrzymanie = opis, kilka naraz, ×2,
  kroki do limitu, Prześledź, lista „Modele LOST”), stan GRAJ / CZEKAJ na grę / OD 1. KROKU, zakłady, ↩ cofanie, „+ Dopisz kod”
  (1. cyfra 0 → 1 → 2 → 3, potem 0 / 1).
- Silnik `silnik60.js`: te same nazwy co `silnik.js` (buildBook, liczModel, modDef, modNum …); cel modelu `cel` (['2','3'], ['1'],
  ['x1x'], ['xx1']), start `cz`. Sprawdzone: wyniki ZESZYTU T60 = SZUKAJ T60 (xx1 23·24 115/0, 2/3xx 11·23·29 ×3 45/3, x1x 1·5·11 113/0,
  1xx 13·21 108/12; ten sam krok i Nr następnego kroku).
- Klucze ZESZYTU T60: modele `zeszyt_v1_modele60` (wspólne z SZUKAJ T60), wybór `zeszyt_v1_model60`, listy `zeszyt_v1_modele60_otw` /
  `zeszyt_v1_modele60_lost_otw`, Prześledź `zeszyt_v1_przesledz60`, zakłady `zeszyt_v1_zaklady60`, mecze `zeszyt_v1_notes_t60`,
  ostatni kod `zeszyt_v1_ostatni60`. SZUKAJ T60 „Przenieś do zeszytu T60” od razu wybiera model; link „✓ w ZESZYCIE T60 — otwórz ▶”,
  🔎 w ZESZYCIE T60 → `modele/t60.html?m=cel-wiersze-start-limit`.
- 1.11.1: w ZESZYCIE T60 zera pokazane jako „0” (szare), nie „−” — jak w tabeli użytkownika.
- 1.11.2: w ZESZYCIE T60 cyfra **2** (2xx) czerwona, **3** (3xx) czerwono-czarna (pół na pół), na prośbę użytkownika.

## Statystyki modelu w ZESZYCIE: ostatnie gry jako kwadraciki (od 1.11.3)
- Prośba użytkownika (jak w MOJE): „Ostatnie gry” = same kolorowe kwadraciki bez opisu — **zielony WIN, czerwony LOST** (gra dłuższa niż limit),
  od najstarszej do najnowszej (do 20), najnowsza z obwódką i ▲ pod spodem. Dotknięcie — karta tej gry (opis w podpowiedzi przy przytrzymaniu myszką).
  Wcześniej wszystkie gry miały napis „WIN”, nawet przegrane. ZESZYT T50 i T60.
- 1.11.4: kwadraciki „Ostatnie gry” także w statystykach **SZUKAJ W ZESZYCIE** (T50 i T60; w T60 zamiast listy „Gra po grze”).
- 1.11.5: w każdym kwadraciku „Ostatnie gry” **numer kroku** — przy WIN krok wygranej, przy LOST ile kroków trwała gra (ZESZYT i SZUKAJ, T50 i T60).
- 1.11.6: ↩ cofnięcie kodu (ZESZYT T50 i T60) usuwa **tylko kod** — wpisana nazwa meczu zostaje przy wierszu (prośba użytkownika).
- 1.11.7: 🗑 usuwa każdy własny model (z SZUKAJ: T50 id „u…”, T60 id „v…”) — wcześniej modele T60 nie znikały, bo kosz sprawdzał tylko „u…”.

## Statystyki w ZESZYCIE: co było po wyniku i po LOST (od 1.11.8)
- Prośba użytkownika (jak w MOJE), **tylko w ZESZYCIE** (T50 i T60; nie w SZUKAJ): w statystykach modelu **dotknięcie kwadracika** (np. WIN 3)
  pokazuje, co było w całej historii modelu **w następnej grze po takim wyniku** — rozkład od najczęstszego (WIN 1 × 12, WIN 2 × 8, L × 1 …)
  i ostatnie po kolei; pod spodem „Idź do karty tej gry ▶” (wcześniej dotknięcie od razu przenosiło na kartę).
- Sekcja **„Po LOST — następna gra”** (gdy model miał LOST): jakie WIN-y (albo LOST) były w grze zaraz po każdym LOST.

## Poprawianie kodu w dowolnym wierszu i nazwy meczów z T50 w T60 (od 1.12.0)
- Prośba użytkownika: dotknięcie wiersza z kodem (ZESZYT T50 i T60) — poza nazwą meczu można **poprawić kod** (T50: − / +;
  T60: 1. cyfra 0 → 1 → 2 → 3, potem 0 / 1), „Zapisz” pyta „Zmienić kod Nr …: stary → nowy?”. „Usuń mecz” usuwa tylko nazwę.
  - Kod dopisany w telefonie: poprawka wprost na wspólnej liście (`t50razem_v1_added` / `t60razem_v1_added`) — widzą wszystkie aplikacje.
  - Kod z bazy MOJE (pliku z serwera nie zmienimy z telefonu): poprawka w `zeszyt_v1_poprawki_t50` / `_t60` ({Nr: kod}) — stosują ją
    ZESZYT i SZUKAJ W ZESZYCIE (T50 i T60); MOJE i RAZEM zostają przy starym kodzie (komunikat w oknie). Powrót do kodu z bazy usuwa wpis.
  - Odczyt kodów porównuje teraz cały ciąg (nie tylko liczbę i ostatni kod), więc poprawka w środku od razu przelicza modele.
- **Nazwy meczów z T50 w ZESZYCIE T60**: w oknie wiersza T60 „🔗 Ten mecz w T50 to Nr …” + „Połącz” (podgląd nazwy z T50).
  Połączenia `zeszyt_v1_t60_t50` = [{n60, n50}]; od połączonego wiersza w dół Nr T50 = Nr T60 + (n50 − n60) — do następnego połączenia
  (gdy kolejność meczów się rozjedzie, nowe połączenie niżej). Nazwa z T50 widoczna na niebiesko, gdy w T60 nie wpisano własnej;
  „↓ Wpisz tę nazwę” przepisuje ją do T60; „+ Dopisz kod” T60 podpowiada nazwę z T50. Bez połączeń — propozycja wykryta po tych samych
  nazwach w obu tabelach („Wykryto po nazwach … Użyj”).

## 🏆 Głos (od 1.12.1)
- Prośba użytkownika: przycisk 🏆 na pasku ZESZYTU (T50 i T60) — telefon mówi „Maciek, jesteś mistrzem zeszytów!” (mowa przeglądarki `speechSynthesis`, głos polski; bez mowy — okienko z tekstem).
- 1.12.2: nazwy meczów z T50 w ZESZYCIE T60 czarne (jak w T50), nie niebieskie.

## Praca bez internetu (od 1.13.0)
- Prośba użytkownika: ZESZYT, SZUKAJ W ZESZYCIE (T50, T60) i MOJE działają offline. `zeszyt-sw.js`: każde pobranie z tego samego adresu
  (strony, silnik.js / silnik60.js, ikony, baza kodów `/moje/seed_t*.txt`) i pismo Caveat z Google — najpierw z sieci (zawsze najnowsza wersja),
  kopia w pamięci `zeszyt-offline-v1`; bez sieci — kopia (strony bez ?m= / ?v=). Przy instalacji od razu zapisuje 4 strony + silniki.
  Wystarczy raz otworzyć z internetem. Dane i tak są w pamięci telefonu (localStorage), więc wpisywanie kodów offline działa.
- Rejestracja pomocnika także na `localhost` (testy). MOJE: to samo w `moje-sw.js` (repo moje, build.py) — razem z pulami z SZUKAJ.
- Po starcie zielony komunikat na 3,5 s: „✓ Pobrane — działa też bez internetu”, a bez sieci „📴 Bez internetu — działa z pamięci telefonu”.

## Podgląd na zeszycie w statystykach SZUKAJ W Z (1.14.0)
- Na dole statystyk modelu (T50 i T60) ramka z zeszytem: `../?podglad=<kod>` / `../t60.html?podglad=<kod>`.
- Zeszyt w podglądzie pokazuje tylko ten model (bieżąca gra: następny krok ▶ i dalsze kroki do limitu), otwiera się na karcie bieżącej gry; ◀ ▶ — inne karty.
- Podgląd **nic nie zapisuje** w pamięci telefonu (zapisy tylko w PAM w ramce) — model nie trafia do zeszytu, dopóki nie naciśniesz „Przenieś do zeszytu”.
- W podglądzie ukryte: pasek aplikacji, przełącznik T50/T60, dopisywanie kodów, listy modeli; bez dźwięku i bez komunikatu offline.

## Zeszyt z bieżącą grą z SZUKAJ+ (?znacz=, 1.15.0)
- `?znacz=Nr:typ[:krok],…` (typ: s STEP, t TRIGGER, k krok bez trafienia, w WIN, b BUST, n zakład do gry) — ZESZYT T50 / T60 zaznacza te wiersze (z nazwami meczów), otwiera kartę zakładu do gry.
- Tryb podglądu: nic nie zapisuje, bez modeli zeszytu. Używa go okno modelu w S+50 / S+60 (przycisk „📓 Zeszyt — bieżąca gra”).

## Zakłady: dalej po przegranym (1.16.0)
- Przy ostatnim zakładzie modelu, gdy jest przegrany: „➡ Dalej:” stan modelu teraz (GRAJ / CZEKAJ na grę za N w. / OD 1. KROKU / CZEKAJ / po BUST).
- Gdy model jest w grze: formularz Nr wiersza · krok · zł (stawka = poprzednia × progresja) i „💰 Postaw kolejny krok — kN”. Zapis jak zwykły zakład (ten sam model).
- Zakład czekający: „▶ GRA TERAZ” albo „gra za N wierszy”.
- Model usunięty z listy — liczony z zapisanej definicji w zakładzie. T50 i T60.

## Kwadraciki w statystykach: dwa dotknięcia (1.17.0)
- 1. dotknięcie kwadracika (Ostatnie gry) — powiększa go; 2. dotknięcie — co było w historii po takim wyniku (WIN na kroku N albo LOST): najczęstsze następne wyniki i kolejno.
- Tylko ZESZYT T50 i T60 (statystyki modeli z listy), nie SZUKAJ W Z.

## Znaczki na przełączniku T50 / T60 (1.18.0)
- Jak w MOJE / RAZEM: pomarańczowe kółko (prawy róg) = ile modeli z list (Modele + Modele LOST) gra na następnym wierszu; żółte (lewy róg) = za ile wierszy grają (2, 3, np. „2,3”). Tylko gra do limitu (bez „po BUST”).
- Druga tabela liczona w ukrytej ramce (`t60.html?znaczki=1` / `./?znaczki=1`, tryb podglądu — bez zapisu), która przysyła wynik; odświeża się sama po nowym kodzie.

## Zakłady jednego modelu razem (1.19.0)
- Lista zakładów pogrupowana po modelu: na wierzchu ostatni zakład modelu (z „➡ Dalej”), wcześniejsze zwinięte pod nim („Wcześniejsze zakłady tego modelu · N · wynik”).
- Grupa jest w „Czekają na wynik”, gdy jej ostatni zakład czeka; inaczej w „Rozliczone”. Liczby w nagłówkach — dalej wszystkie zakłady.
- RAZEM (od 1.20.0): znaczniki bez kroku (`k`, `w`, `b`, `n` bez liczby) — „✗”, „WIN”, „BUST”, „▶ GRA”.
- RAZEM (1.21.0): znacznik może mieć gotowy opis z tabeli (`Nr:typ:opis`, np. „✗ K2”, „○ K3”, „HIT ▼ K3”, „▶ K3 16 zł”); typ `o` = bez rozstrzygnięcia (szary, ○).
