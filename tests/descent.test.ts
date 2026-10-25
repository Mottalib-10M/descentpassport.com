import { describe, it, expect } from 'vitest';
import { evaluate, DEFAULT_FLAGS, COUNTRY_ORDER, relLabel, type LineIn, type Flags } from '../src/lib/engine/descent';
import P from '../src/data/params-2026.json';

const L = (country: string, rel: string, ancBorn: number, ancNat: number, mid: number[], you: number, f: Partial<Flags> = {}): LineIn =>
  ({ country, rel, ancBorn, ancNat, mid, you, flags: { ...DEFAULT_FLAGS, ...f } });
const lv = (l: LineIn) => evaluate(l).level;

describe('labels and data', () => {
  it('reads the line from your parent up', () => {
    expect(relLabel('MF')).toBe("Mother's father (grandfather)");
    expect(relLabel('F')).toBe('Mother');
    expect(relLabel('FMM')).toBe("Father's father's mother (great-grandmother)");
  });
  it('every country has a fee, a time, a dual status and a page', () => {
    for (const c of COUNTRY_ORDER) {
      const k = (P.countries as any)[c];
      expect(k.fee.src in P.sources, c).toBe(true);
      expect(k.time.src in P.sources, c).toBe(true);
      expect(['yes', 'no', 'conditional']).toContain(k.dual.status);
      expect(k.slug).toMatch(/-citizenship-by-descent$/);
    }
  });
  it('every reason links an official source', () => {
    const r = evaluate(L('it', 'MF', 1900, 0, [1930], 1960));
    expect(r.reasons.every((x) => x.src?.startsWith('https://'))).toBe(true);
  });
});

describe('Italy after Law 74/2025', () => {
  it('grandparent who never naturalized: exception (c)', () => expect(lv(L('it', 'MF', 1900, 0, [1930], 1960))).toBe('yes'));
  it('grandparent naturalized after the parent was born: no exception left', () => expect(lv(L('it', 'MM', 1900, 1940, [1930], 1960))).toBe('no'));
  it('parent with 2 years in Italy: exception (d)', () => expect(lv(L('it', 'M', 1950, 1990, [], 1985, { itResidence: true }))).toBe('yes'));
  it('great-grandparent: closed since March 28, 2025', () => expect(lv(L('it', 'MMM', 1880, 0, [1910, 1940], 1970))).toBe('no'));
  it('great-grandparent with a case filed before March 27, 2025: old rules', () => expect(lv(L('it', 'MMM', 1880, 1920, [1910, 1940], 1970, { itFiled: true }))).toBe('yes'));
  it('old rules, naturalized before the next birth: line broken', () => expect(lv(L('it', 'MMM', 1880, 1905, [1910, 1940], 1970, { itFiled: true }))).toBe('no'));
  it('old rules, Italian mother before 1948: court route', () => expect(lv(L('it', 'FMM', 1890, 0, [1920, 1950], 1980, { itFiled: true }))).toBe('maybe'));
  it('grandmother, parent born before 1948: no', () => expect(lv(L('it', 'FM', 1910, 0, [1940], 1970))).toBe('no'));
});

describe('Ireland', () => {
  it('parent: citizen', () => expect(lv(L('ie', 'F', 1950, 0, [], 1980))).toBe('yes'));
  it('grandparent: Foreign Births Register', () => expect(lv(L('ie', 'FM', 1920, 1950, [1950], 1980))).toBe('yes'));
  it('great-grandparent without parent registered: no', () => expect(lv(L('ie', 'MMM', 1890, 0, [1920, 1950], 1980))).toBe('no'));
  it('great-grandparent with parent registered before your birth: yes', () => expect(lv(L('ie', 'MMM', 1890, 0, [1920, 1950], 1980, { fbrParent: true }))).toBe('yes'));
});

describe('United Kingdom', () => {
  it('British father, born after 1983: by descent', () => expect(evaluate(L('gb', 'M', 1960, 0, [], 1990)).route).toBe('British by descent'));
  it('British mother, born before 1983: s. 4C registration', () => expect(evaluate(L('gb', 'F', 1940, 0, [], 1970)).route).toContain('4C'));
  it('grandparent, adult: no', () => expect(lv(L('gb', 'MM', 1920, 0, [1950], 1980))).toBe('no'));
});

describe('Poland', () => {
  it('naturalized before 1951 and before the child: lost', () => expect(lv(L('pl', 'MM', 1895, 1925, [1930], 1960))).toBe('no'));
  it('naturalized after 1951: kept', () => expect(lv(L('pl', 'MM', 1900, 1955, [1930], 1965))).toBe('yes'));
  it('mother married to a foreigner before 1951: chain broken', () => expect(lv(L('pl', 'FM', 1905, 0, [1935], 1965))).toBe('no'));
});

describe('Canada after C-3', () => {
  it('great-grandparent, born before Dec 15, 2025: citizen', () => expect(lv(L('ca', 'MMF', 1900, 0, [1930, 1960], 1990))).toBe('yes'));
  it('born 2026 to a parent born abroad without 1,095 days: no', () => expect(lv(L('ca', 'MF', 1960, 0, [1990], 2026))).toBe('no'));
  it('born 2026 with 1,095 days: yes', () => expect(lv(L('ca', 'MF', 1960, 0, [1990], 2026, { caPresence: true }))).toBe('yes'));
});

describe('Germany', () => {
  it('naturalized after the child was born, male line: certificate', () => expect(lv(L('de', 'MM', 1900, 1935, [1930], 1960))).toBe('yes'));
  it('naturalized before the child: lost', () => expect(lv(L('de', 'MM', 1900, 1925, [1930], 1960))).toBe('no'));
  it('German mother married, child born 1955: s. 5 declaration', () => expect(evaluate(L('de', 'FM', 1925, 0, [1955], 1985)).route).toContain('s. 5'));
  it('German mother, child born 1940: outside s. 5', () => expect(lv(L('de', 'FM', 1915, 0, [1940], 1970))).toBe('no'));
  it('persecuted ancestor: s. 15', () => expect(lv(L('de', 'MMM', 1890, 1940, [1920, 1950], 1980, { persecuted: true }))).toBe('yes'));
});

describe('Austria, France, Norway, Sweden', () => {
  it('Austria s. 58c', () => expect(lv(L('at', 'FMM', 1900, 1945, [1930, 1960], 1990, { persecuted: true }))).toBe('yes'));
  it('France 50-year rule', () => expect(lv(L('fr', 'MM', 1900, 0, [1930], 1960))).toBe('no'));
  it('France parent: yes', () => expect(lv(L('fr', 'F', 1960, 0, [], 1990))).toBe('yes'));
  it('Norway adult born abroad, no ties: lost at 22', () => expect(lv(L('no', 'F', 1960, 0, [], 1990))).toBe('no'));
  it('Norway child under 22: citizen', () => expect(lv(L('no', 'F', 1980, 0, [], 2010))).toBe('yes'));
  it('Sweden grandparent: no', () => expect(lv(L('se', 'MM', 1920, 0, [1950], 1980))).toBe('no'));
});

describe('input checks', () => {
  it('a child born before the parent asks to check the years', () => expect(evaluate(L('ie', 'MF', 1950, 0, [1940], 1980)).route).toBe('Check the years'));
});

describe('Spain, Portugal, Mexico', () => {
  it('Spain grandparent: closed since October 22, 2025', () => expect(lv(L('es', 'MM', 1920, 1950, [1950], 1980))).toBe('closed'));
  it('Spain parent naturalized before your birth: option', () => expect(evaluate(L('es', 'M', 1950, 1975, [], 1980)).route).toContain('20.1.b'));
  it('Portugal grandparent: test since 2026', () => expect(lv(L('pt', 'MF', 1920, 0, [1950], 1980))).toBe('maybe'));
  it('Portugal great-grandparent: residence only', () => expect(lv(L('pt', 'MMF', 1890, 0, [1920, 1950], 1980))).toBe('no'));
  it('Mexico great-grandparent: step by step', () => expect(lv(L('mx', 'MMF', 1900, 0, [1930, 1960], 1990))).toBe('yes'));
});

describe('Greece, Hungary, Czech Republic, Slovakia', () => {
  it('Greece mother before 1984: declaration', () => expect(evaluate(L('gr', 'F', 1940, 1960, [], 1970)).route).toContain('Declaration'));
  it('Hungary grandparent without Hungarian: maybe', () => expect(lv(L('hu', 'MM', 1910, 1940, [1938], 1970))).toBe('maybe'));
  it('Hungary grandparent with Hungarian: yes', () => expect(lv(L('hu', 'MM', 1910, 1940, [1938], 1970, { huLanguage: true }))).toBe('yes'));
  it('Czech grandchild of a former citizen: declaration', () => expect(evaluate(L('cz', 'MF', 1920, 1955, [1950], 1980)).route).toContain('s. 31'));
  it('Czech great-grandchild: no', () => expect(lv(L('cz', 'MMF', 1890, 1925, [1920, 1950], 1980))).toBe('no'));
  it('Slovakia great-grandparent: grant', () => expect(lv(L('sk', 'MMF', 1900, 1930, [1925, 1955], 1985))).toBe('yes'));
});
