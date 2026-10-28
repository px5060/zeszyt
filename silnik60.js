// ZESZYT T60 — silnik dla tabeli T60 (PIKOFF): układ stron i liczenie modeli. Używa go ZESZYT T60 (t60.html) — te same nazwy funkcji
// co silnik.js (T50), żeby strona zeszytu działała tak samo. Liczy tak jak SZUKAJ W ZESZYCIE T60 (modele/t60.html). Bez localStorage i DOM.
"use strict";
// ===== STRONY T60: 30 wierszy (3 tercje po 10) od Nr 1, bez połów (wybór użytkownika) =====
// Strona k (od 1, jak w SZUKAJ T60): Nr (k − 1)·30 + 1 … k·30. Karta 0 to pusta zakładka (strony liczymy od 1).
const STR = 30;
const partsOf = k => k === 0 ? [0] : [STR];
function buildBook(N) {   // → {cards: [{parts: [[{nr, pre: [], dop: []}…]]}], pos: Nr → {k, p: 0, r}}
  const cards = [{ parts: [[]] }], pos = [], last = Math.max(1, Math.ceil(N / STR)) + 1;
  for (let k = 1; k <= last; k++) {
    const rows = [];
    for (let r = 1; r <= STR; r++) { const nr = (k - 1) * STR + r; rows.push({ nr, pre: [], dop: [] }); pos[nr] = { k, p: 0, r }; }
    cards.push({ parts: [rows] });
  }
  return { cards, pos };
}

// ===== KOD T60: 1. cyfra 0 brak gola 40–50', 1 gol 40–45', 2 gol 46–50', 3 oba; 2. cyfra gol 50–60'; 3. cyfra gol 60–70' =====
// cel modelu: ['2', '3'] (gol 46–50'), ['1'] (gol 40–45'), ['x1x'], ['xx1'] — jak „Gramy na” w SZUKAJ T60
const trafia = (cd, cel) => (cd[0] !== '0' && cel.includes(cd[0])) || (cd[1] === '1' && cel.includes('x1x')) || (cd[2] === '1' && cel.includes('xx1'));
const celTx = cel => { const d = ['1', '2', '3'].filter(x => cel.includes(x));
  return [d.length ? (d.length === 3 ? '1-3xx' : d.join('/') + 'xx') : '', cel.includes('x1x') ? 'x1x' : '', cel.includes('xx1') ? 'xx1' : ''].filter(Boolean).join('+'); };
const celOpis = cel => { const d = ['1', '2', '3'].filter(x => cel.includes(x)), o = [];
  if (d.length) o.push(d.length === 3 ? 'gol 40–50\' (1xx, 2xx, 3xx)' : d.join() === '2,3' ? 'gol 46–50\' (2xx, 3xx)' : d.map(x => ({ 1: '1xx (gol 40–45\')', 2: '2xx (46–50\')', 3: '3xx' })[x]).join(', '));
  if (cel.includes('x1x')) o.push('x1x (gol 50–60\')'); if (cel.includes('xx1')) o.push('xx1 (gol 60–70\')'); return o.join(' lub '); };

// ===== MODELE (wiersze strony, gra krok za krokiem) =====
// W każdej stronie liczą się tylko wiersze modelu. Strona bez trafienia na nich = pusta; po `cz` pustych gra od następnej strony
// na tych samych wierszach, aż do WIN; po WIN nowy cykl. Stawki 8, 8, 16, 32…, kurs 3.0, gra do kroku `limit`.
const MODELE = [];   // wbudowanych brak — modele przenosi się z SZUKAJ W ZESZYCIE T60 (zeszyt_v1_modele60)
const KURS = 3, STAWKI = [8, 8]; while (STAWKI.length < 40) STAWKI.push(STAWKI[STAWKI.length - 1] * 2);
const sumSt = s => STAWKI.slice(0, s).reduce((a, b) => a + b, 0);
const pustych = n => n > 1 ? `${n} pustych` : '1 pustej';
// PUSTA STRONA (opis od 1.23.0): w wierszach modelu na stronie żaden kod nie trafia celu; pozostałe cyfry dowolne
const pustaTx60 = cel => { const d = ['1', '2', '3'].filter(x => cel.includes(x)), o = [];
  if (d.length) o.push(d.length === 3 ? 'pierwsza cyfra 0' : d.join() === '2,3' ? 'pierwsza cyfra 0 albo 1' : `pierwsza cyfra inna niż ${d.join(' i ')}`);
  if (cel.includes('x1x')) o.push('środkowa cyfra 0'); if (cel.includes('xx1')) o.push('ostatnia cyfra 0'); return o.join(' i '); };

// nazwa jak w SZUKAJ T60: [cel] wiersze [×n = po n pustych] kL, np. „2/3xx 11·23·29 ×3 k9”, „xx1 23·24 k9”
function modDef(m) {
  const M = { cel: ['2', '3'], cz: 1, war: '', limit: 9, jedn: 's', ...m };
  M.w = [...M.w].sort((a, b) => a - b); M.czekaj = M.cz;
  M.nazwa = `${celTx(M.cel)} ${M.w.join('·')}${M.cz === 1 ? '' : M.cz ? ` ×${M.cz}` : ' od razu'} k${M.limit}`;
  return M;
}
const modDop = M => [celOpis(M.cel), M.cz ? `po ${pustych(M.cz)} (pusta = ${pustaTx60(M.cel)}, reszta dowolna)` : 'od razu', `do k${M.limit}`].join(' · ');
const modOpis = M => `gramy na ${celOpis(M.cel)}; na każdej stronie (30 wierszy) wiersze ${M.w.join(', ')}; ${M.cz ? `gra po ${pustych(M.cz)} stronie/ach` : 'gra od razu'}, do ${M.limit}. kroku${M.cz ? `. Pusta strona = w wierszach ${M.w.join(', ')} ${pustaTx60(M.cel)}; pozostałe cyfry mogą być dowolne (nie muszą być same 0)` : ''}`;
const parseModele = str => { try { const a = JSON.parse(str || '[]'); return Array.isArray(a) ? a.filter(m => m && m.id && Array.isArray(m.w) && m.w.length >= 1 && Array.isArray(m.cel) && (m.jedn || 's') === 's') : []; } catch (e) { return []; } };
const sameModel = (a, b) => a.w.join() === b.w.join() && a.cel.join() === b.cel.join() && a.cz === b.cz && a.limit === b.limit;
const modLost = M => !!((M.teraz && M.teraz.gra && M.teraz.s > M.limit) || (M.gry.length && M.gry[M.gry.length - 1].s > M.limit));
// kod modelu w linku (ZESZYT T60 ⇄ SZUKAJ T60): cel-wiersze-start-limit, np. „23-11.23.29-3-9”, „xx1-23.24-1-9”
const modKod = M => [M.cel.join(''), M.w.join('.'), M.cz, M.limit].join('-');
function modZKodu(k) {
  const a = String(k || '').split('-'), w = (a[1] || '').split('.').map(Number);
  const cel = { 23: ['2', '3'], 1: ['1'], 123: ['1', '2', '3'], x1x: ['x1x'], xx1: ['xx1'] }[a[0]];
  if (a.length !== 4 || !cel || !w.length || w.some(x => !(x >= 1 && x <= STR))) return null;
  return modDef({ w, cel, cz: +a[2], limit: +a[3] || 9 });
}
function liczModel(c, B, M) {   // pełne liczenie (z kluczami wierszy do kolorów na kartach) — ta sama budowa wyniku co w silnik.js
  // → {…model, mx, gry: [{s, h, k, p, r, sk, sp, pus: [klucze], pol: [{rs: [{key, s: [kroki], hit}]}]}], teraz, otw (gra w toku)}
  const n = c.length, mx = Math.max(...M.w), gry = [];
  let gra = null, nobs = 0, pus = [], teraz = null;
  scan: for (let k = 1; k < B.cards.length; k++) for (let p = 0; p < B.cards[k].parts.length; p++) {
    if (partsOf(k)[p] < mx) continue;
    if (!gra && !M.cz) gra = { sk: k, sp: p, pus: [], pol: [], st: 0, h: 0 };   // gra od razu
    const rows = B.cards[k].parts[p], keys = M.w.map(r => `${k}.${p}.${r}`), rs = [];
    let hit = 0;
    for (const r of M.w) {
      const row = rows[r - 1], key = `${k}.${p}.${r}`;
      if (row.nr > n) { teraz = { k, p, r, nr: row.nr, key, rs }; break scan; }
      const o = { key, s: [], hit: false }; rs.push(o);
      if (gra) o.s.push(++gra.st);
      if (trafia(c[row.nr - 1], M.cel)) { hit = r; o.hit = true; break; }
    }
    if (gra) {
      gra.h++; gra.pol.push({ rs });
      if (hit) { gry.push({ s: gra.st, h: gra.h, k, p, r: hit, sk: gra.sk, sp: gra.sp, pus: gra.pus, pol: gra.pol }); gra = null; nobs = 0; }
      continue;
    }
    if (hit) { nobs = 0; pus = []; continue; }
    pus.push(...keys);
    if (++nobs === M.cz) { gra = { sk: k, sp: p, pus, pol: [], st: 0, h: 0 }; pus = []; nobs = 0; }
  }
  const otw = gra;
  if (teraz) { teraz.gra = !!otw; teraz.bez = false; teraz.s = otw ? otw.st + 1 : 1; }
  return { ...M, mx, gry, teraz, otw };
}
function modNum(M) {   // liczby modelu: gry, WIN, BUST, najdłużej, bilans, największy spadek, WIN wg kroku i strony gry
  const G = M.gry, L = M.limit, zysk = s => s <= L ? KURS * STAWKI[s - 1] - sumSt(s) : -sumSt(L);
  let bal = 0, top = 0, dd = 0;
  for (const g of G) { dd = Math.max(dd, top - (bal - sumSt(Math.min(g.s, L)))); bal += zysk(g.s); top = Math.max(top, bal); }
  const krok = {}, pol = {}; G.filter(g => g.s <= L).forEach(g => { krok[g.s] = (krok[g.s] || 0) + 1; pol[g.h] = (pol[g.h] || 0) + 1; });
  return { G, win: G.filter(g => g.s <= L).length, bust: G.filter(g => g.s > L).length, max: Math.max(0, ...G.map(g => g.s)), bal, dd, krok, pol, zysk };
}
