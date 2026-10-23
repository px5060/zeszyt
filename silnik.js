// ZESZYT — wspólny silnik: układ kart zeszytu TRÓJKA i liczenie modeli. Używają go ZESZYT (index.html) i wyszukiwarka modeli
// (modele/index.html), żeby obie strony zawsze liczyły tak samo. Bez localStorage i bez DOM — tylko dane.
"use strict";
// ===== KARTY ZESZYTU TRÓJKA (sprawdzone na kodach ze zdjęć zeszytu) =====
// karta = 2 połowy × 28 wierszy, tercje 1–10 · 11–20 · 21–28. Wyjątki: karta 0 — lewa 26, prawa 25 wierszy (Nr 1–51),
// karta 1 — 4 części × 28 (Nr 52–163). Każda karta ma tyle samo kratek, ale w zeszycie bywają:
// DOPISKI — mecz wciśnięty między wiersze albo pod 28. wiersz (kod bez własnego wiersza, pokazany przy poprzednim kodzie),
// PUSTE — wiersz bez kodu (np. mecz przełożony, „SUSP”).
// Sprawdzone na zdjęciach: karty 2–6, 8–15, 30, 34, 36, 38, 40, 42, 44, 45, 60, 273 (Nr 15 360 = karta 273, wiersz 12).
const DOP = new Set([290, 377, 649, 693, 700, 729, 813, 842, 861, 2000]);   // Nr kodów dopisanych (przy wierszu poprzedniego kodu)
const DOPG = new Set([641]);   // Nr kodów dopisanych nad 1. wierszem połowy (pokazane przy wierszu 1)
const PUSTE = new Set([528, 803]);   // po kodzie o tym Nr — wiersz bez kodu
const partsOf = k => k === 0 ? [26, 25] : k === 1 ? [28, 28, 28, 28] : [28, 28];
function buildBook(N) {   // → {cards: [{parts: [[{nr (0 = pusty), pre: [Nr…], dop: [Nr…]}…]…]}], pos: Nr → {k, p, r, d (dopisek)}}
  const cards = [], pos = [];
  let nr = 1, empty = false;
  for (let k = 0; nr <= N || k <= (pos[N] ? pos[N].k + 1 : 1); k++) {
    const card = { parts: [] };
    partsOf(k).forEach((R, p) => {
      const rows = [];
      for (let r = 1; r <= R; r++) {
        if (empty) { rows.push({ nr: 0, pre: [], dop: [] }); empty = false; continue; }
        const row = { nr: 0, pre: [], dop: [] };
        while (DOPG.has(nr)) { row.pre.push(nr); pos[nr] = { k, p, r, d: 1 }; nr++; }
        row.nr = nr; pos[nr] = { k, p, r }; nr++;
        while (DOP.has(nr)) { row.dop.push(nr); pos[nr] = { k, p, r, d: 1 }; nr++; }
        empty = PUSTE.has(nr - 1);
        rows.push(row);
      }
      card.parts.push(rows);
    });
    cards.push(card);
  }
  return { cards, pos };
}

// ===== MODELE (gra 3 kroków na połowę) =====
// W każdej połowie liczą się tylko 3 wiersze modelu. WIN = + w miejscu `poz` kodu (0 = +XX, 1 = X+X — środek, 2 = XX+).
// Połowa bez + w tych wierszach = pusta trójka → gra od następnej połowy, krok za krokiem, aż do WIN; po WIN nowy cykl od następnej połowy.
// czekaj = ile pustych trójek przed grą (0 = gramy od razu: od pierwszej połowy i zaraz po każdym WIN).
// war 'boki' = gramy tylko, gdy w pustej trójce jest kod z + w innym miejscu niż `poz` (np. + z boku przy X+X); inaczej czekamy bez gry na WIN.
// Połowy krótsze niż najwyższy wiersz modelu (karta 0) pomijamy. Stawki 8, 8, 16, 32…, kurs 3.0, gra do kroku `limit`.
const MODELE = [{ id: 'm1', w: [16, 18, 27] }];   // wbudowane; własne modele użytkownika w zeszyt_v1_modele
const KURS = 3, STAWKI = [8, 8]; while (STAWKI.length < 40) STAWKI.push(STAWKI[STAWKI.length - 1] * 2);
const sumSt = s => STAWKI.slice(0, s).reduce((a, b) => a + b, 0);
const CEL = ['+XX', 'X+X', 'XX+'], CELTX = ['+ na początku', '+ na środku', '+ na końcu'];
const pustych = n => n > 1 ? `${n} pustych trójkach` : '1 pustej trójce';
const bokTx = poz => poz === 1 ? '+ z boku' : '+ gdzie indziej';
// NAZWA MODELU — jednoznaczna, ta sama w SZUKAJ W ZESZYCIE i w ZESZYCIE (kiedyś: szukanie po nazwie):
// [cel, gdy nie X+X] wiersze [+bok = warunek „+ z boku”] [×2 = start po 2 pustych trójkach] [k8 = gra do kroku, gdy nie 9],
// np. „16·18·27”, „16·18·27 +bok”, „XX+ 5·13·28 +bok”, „20·23·24 ×2”, „1·6·17 k8”.
function modDef(m) {   // model z wartościami domyślnymi i nazwą
  const M = { poz: 1, czekaj: 1, war: '', limit: 9, ...m };
  if (!M.czekaj) M.war = '';
  M.nazwa = (M.poz === 1 ? '' : CEL[M.poz] + ' ') + M.w.join('·') + (M.war ? ' +bok' : '') + (M.czekaj !== 1 ? ` ×${M.czekaj}` : '') + (M.limit !== 9 ? ` k${M.limit}` : '');
  return M;
}
const modDop = M => [M.poz === 1 ? '' : CELTX[M.poz], M.war ? bokTx(M.poz) : '', M.czekaj ? `po ${pustych(M.czekaj)}` : 'od razu', `do k${M.limit}`].filter(Boolean).join(' · ');
const modOpis = M => `${CELTX[M.poz]}; w każdej połowie wiersze ${M.w.join(', ')}; ${M.czekaj ? `gra po ${pustych(M.czekaj)}${M.war ? ` (tylko gdy w pustej trójce jest ${bokTx(M.poz)})` : ''}` : 'gra od razu (bez pustej trójki)'}, do ${M.limit}. kroku`;
const parseModele = str => { try { const a = JSON.parse(str || '[]'); return Array.isArray(a) ? a.filter(m => m && m.id && Array.isArray(m.w) && m.w.length === 3) : []; } catch (e) { return []; } };
const sameModel = (a, b) => a.w.join() === b.w.join() && a.poz === b.poz && a.czekaj === b.czekaj && a.war === b.war && a.limit === b.limit;
// model po LOST-cie: ostatnia skończona gra przegrana (dłuższa niż limit) albo gra w toku już za limitem — od LOST-u jeszcze bez WIN
const modLost = M => !!((M.teraz && M.teraz.gra && M.teraz.s > M.limit) || (M.gry.length && M.gry[M.gry.length - 1].s > M.limit));
// kod modelu w linku (ZESZYT ⇄ SZUKAJ W ZESZYCIE): poz-wiersze-czekaj-warunek-limit, np. „1-16.18.27-1-b-9”
const modKod = M => [M.poz, M.w.join('.'), M.czekaj, M.war ? 'b' : '', M.limit].join('-');
function modZKodu(k) {
  const a = String(k || '').split('-'), w = (a[1] || '').split('.').map(Number);
  if (a.length !== 5 || w.length !== 3 || w.some(x => !(x >= 1 && x <= 28))) return null;
  return modDef({ w, poz: +a[0], czekaj: +a[2], war: a[3] === 'b' ? 'boki' : '', limit: +a[4] || 9 });
}
const innyPlus = (cd, poz) => [0, 1, 2].some(i => i !== poz && cd[i] === '1');
function liczModel(c, B, M) {   // pełne liczenie (z kluczami wierszy do kolorów na kartach)
  // → {…model, mx, gry: [{s, h, k, p, r, sk, sp, pus: [klucze], pol: [{rs: [{key, s: [kroki], hit}]}]}], teraz, otw (gra w toku)}
  const n = c.length, mx = Math.max(...M.w), gry = [];
  let gra = null, nobs = 0, pus = [], pusK = [], teraz = null;   // gra: {sk, sp, pus, pol, st, h, graj} — cykl w toku (graj = false: warunek niespełniony, bez gry)
  scan: for (let k = 0; k < B.cards.length; k++) for (let p = 0; p < B.cards[k].parts.length; p++) {
    if (partsOf(k)[p] < mx) continue;
    if (!gra && !M.czekaj) gra = { sk: k, sp: p, pus: [], pol: [], st: 0, h: 0, graj: true };   // gra od razu
    const rows = B.cards[k].parts[p], keys = M.w.map(r => `${k}.${p}.${r}`), rs = [], kody = [];   // rs: rozegrane wiersze połowy z numerami kroków
    let hit = 0;
    for (const r of M.w) {
      const row = rows[r - 1], key = `${k}.${p}.${r}`;
      if (row.nr > n) { teraz = { k, p, r, nr: row.nr, key, rs }; break scan; }
      const o = { key, s: [], hit: false }; rs.push(o);
      for (const x of [...row.pre, ...(row.nr ? [row.nr] : []), ...row.dop]) {
        if (x > n) continue;
        kody.push(c[x - 1]);
        if (gra) o.s.push(++gra.st);
        if (c[x - 1][M.poz] === '1') { hit = r; o.hit = true; break; }
      }
      if (hit) break;
    }
    if (gra) {
      gra.h++; gra.pol.push({ rs });
      if (hit) { if (gra.graj) gry.push({ s: gra.st, h: gra.h, k, p, r: hit, sk: gra.sk, sp: gra.sp, pus: gra.pus, pol: gra.pol }); gra = null; nobs = 0; }
      continue;
    }
    if (hit) { nobs = 0; pus = []; pusK = []; continue; }
    pus.push(...keys); pusK.push(...kody);
    if (++nobs === M.czekaj) { gra = { sk: k, sp: p, pus, pol: [], st: 0, h: 0, graj: !M.war || pusK.some(x => innyPlus(x, M.poz)) }; pus = []; pusK = []; }
  }
  const otw = gra && gra.graj ? gra : null;
  if (teraz) { teraz.gra = !!otw; teraz.bez = !!(gra && !gra.graj); teraz.s = otw ? otw.st + 1 : 1; }
  return { ...M, mx, gry, teraz, otw };
}
function modNum(M) {   // liczby modelu: gry, WIN, BUST, najdłużej, bilans, największy spadek (ze stawkami w trakcie gry), WIN wg kroku i połowy
  const G = M.gry, L = M.limit, zysk = s => s <= L ? KURS * STAWKI[s - 1] - sumSt(s) : -sumSt(L);
  let bal = 0, top = 0, dd = 0;
  for (const g of G) { dd = Math.max(dd, top - (bal - sumSt(Math.min(g.s, L)))); bal += zysk(g.s); top = Math.max(top, bal); }
  const krok = {}, pol = {}; G.filter(g => g.s <= L).forEach(g => { krok[g.s] = (krok[g.s] || 0) + 1; pol[g.h] = (pol[g.h] || 0) + 1; });
  return { G, win: G.filter(g => g.s <= L).length, bust: G.filter(g => g.s > L).length, max: Math.max(0, ...G.map(g => g.s)), bal, dd, krok, pol, zysk };
}

// ===== SZYBKIE SZUKANIE (wyszukiwarka: tysiące modeli naraz, te same reguły co liczModel, tylko długości gier) =====
function przygotuj(c, B) {   // dla każdej połowy i wiersza: ile kodów (−1 = jeszcze puste), pierwsze trafienie wg poz, czy jest + w innym miejscu
  const n = c.length, H = [];
  B.cards.forEach((card, k) => card.parts.forEach((rows, p) => {
    const len = partsOf(k)[p], cnt = new Int8Array(29), fh = [new Int8Array(29), new Int8Array(29), new Int8Array(29)], ob = [new Uint8Array(29), new Uint8Array(29), new Uint8Array(29)];
    for (let r = 1; r <= len; r++) {
      const row = rows[r - 1];
      if (row.nr > n) { cnt[r] = -1; continue; }
      const xs = [...row.pre, ...(row.nr ? [row.nr] : []), ...row.dop].filter(x => x <= n).map(x => c[x - 1]);
      cnt[r] = xs.length;
      for (let poz = 0; poz < 3; poz++) { const i = xs.findIndex(cd => cd[poz] === '1'); fh[poz][r] = i + 1; ob[poz][r] = xs.some(cd => innyPlus(cd, poz)) ? 1 : 0; }
    }
    H.push({ k, p, len, cnt, fh, ob });
  }));
  H.FH = [0, 1, 2].map(poz => H.map(h => h.fh[poz])); H.OB = [0, 1, 2].map(poz => H.map(h => h.ob[poz]));
  return H;
}
function szybkiModel(H, M) {   // → {s: [długości gier], teraz: następny krok gry w toku (0 = CZEKAJ), bez: czeka bez gry (warunek), at: [połowa w H, wiersz] — tu następny krok / stąd patrzymy}
  const w = M.w, mx = Math.max(...w), FH = H.FH[M.poz], OB = H.OB[M.poz], s = [];
  let gra = -1, graj = true, nobs = 0, bok = false, at = null;   // gra: liczba kroków w grze w toku (−1 = brak gry)
  scan: for (let i = 0; i < H.length; i++) {
    const h = H[i]; if (h.len < mx) continue;
    if (gra < 0 && !M.czekaj) { gra = 0; graj = true; }
    let hit = false, b = false;
    for (const r of w) {
      const n = h.cnt[r]; if (n < 0) { at = [i, r]; break scan; }
      const f = FH[i][r];
      if (f) { if (gra >= 0) gra += f; hit = true; break; }
      if (gra >= 0) gra += n;
      if (OB[i][r]) b = true;
    }
    if (gra >= 0) { if (hit) { if (graj) s.push(gra); gra = -1; nobs = 0; } continue; }
    if (hit) { nobs = 0; bok = false; continue; }
    bok = bok || b;
    if (++nobs === M.czekaj) { gra = 0; graj = !M.war || bok; bok = false; }
  }
  return { s, teraz: gra >= 0 && graj ? gra + 1 : 0, bez: gra >= 0 && !graj, at };
}
