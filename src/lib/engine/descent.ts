/**
 * Citizenship by descent: one line of a family tree (a foreign-born ancestor, the people between them
 * and you) checked against the dated rules of one country. Every cut-off comes from params-2026.json,
 * every reason names the official page it rests on. Years only: when a decisive event falls in the
 * same year as a birth, the answer is "maybe" (the exact dates decide).
 *
 * rel = sexes from the ancestor down to your parent: 'M' father, 'F' mother, 'MF' mother's father,
 * 'FMM' father's father's mother… (length = generations above you).
 */
import P from '../../data/params-2026.json';
import { money } from '../format-l';

export type Level = 'yes' | 'maybe' | 'no' | 'closed';
export interface Flags {
  married: boolean; persecuted: boolean; fbrParent: boolean; itResidence: boolean; itFiled: boolean;
  plPre1920: boolean; plMilitary: boolean; deprived: boolean; deEarly: boolean; ties: boolean; frPapers: boolean;
  caPresence: boolean; jewish: boolean; huLanguage: boolean; esFiled: boolean;
}
export interface LineIn { country: string; rel: string; ancBorn: number; ancNat: number; mid: number[]; you: number; flags: Flags }
export interface Reason { ok: boolean | null; text: string; src?: string }
export interface Result { level: Level; route: string; reasons: Reason[]; facts: Array<[string, string]>; page?: string }

type Country = (typeof P.countries)[keyof typeof P.countries] & Record<string, any>;
const CTRY = P.countries as unknown as Record<string, Country>;
export const COUNTRY_ORDER = ['it', 'ie', 'pl', 'de', 'gb', 'gr', 'hu', 'ca', 'pt', 'es', 'lt', 'cz', 'sk', 'at', 'fr', 'lv', 'il', 'mx', 'no', 'se'].filter((c) => c in CTRY);
export const countryName = (c: string) => CTRY[c]?.name ?? c;
export const NOW = 2026;

export const DEFAULT_FLAGS: Flags = {
  married: true, persecuted: false, fbrParent: false, itResidence: false, itFiled: false, plPre1920: false, plMilitary: false,
  deprived: false, deEarly: false, ties: false, frPapers: false, caPresence: false, jewish: false, huLanguage: false, esFiled: false,
};
export const FLAG_DEFS: Record<keyof Flags, { label: string; countries: string[]; minGen?: number }> = {
  married: { label: 'The parents were married when each child in the line was born', countries: ['gb', 'de', 'at', 'no', 'se', 'pl', 'gr', 'lt', 'cz', 'sk', 'lv', 'hu'] },
  persecuted: { label: 'The ancestor was persecuted by the Nazi regime (1933 to 1945) or fled because of it', countries: ['de', 'at'] },
  fbrParent: { label: 'Your parent was entered in the Foreign Births Register before you were born', countries: ['ie'], minGen: 3 },
  itResidence: { label: 'Your Italian parent lived in Italy for 2 years in a row after becoming Italian and before your birth', countries: ['it'] },
  itFiled: { label: 'An application or court case was filed for you by March 27, 2025', countries: ['it'] },
  plPre1920: { label: 'The ancestor left Polish lands before 1920', countries: ['pl'] },
  plMilitary: { label: 'The ancestor served in a foreign army before 1951', countries: ['pl'] },
  deprived: { label: 'The ancestor was formally deprived of citizenship', countries: ['pl', 'lt', 'cz', 'sk', 'hu'] },
  deEarly: { label: 'The ancestor left Germany before 1904', countries: ['de'] },
  ties: { label: 'You lived in that country, or stayed there for long periods, before turning 22', countries: ['no', 'se'] },
  frPapers: { label: 'You or your French parent held a French passport, ID card or consular registration', countries: ['fr'] },
  caPresence: { label: 'Your Canadian parent spent 1,095 days in Canada before your birth', countries: ['ca'] },
  jewish: { label: 'The ancestor was Jewish (or you are Jewish)', countries: ['il'] },
  huLanguage: { label: 'You speak Hungarian', countries: ['hu'] },
  esFiled: { label: 'You applied under the Democratic Memory Law by October 22, 2025', countries: ['es'] },
};

export const REL_OPTIONS = ['M', 'F', 'MM', 'MF', 'FM', 'FF', 'MMM', 'MMF', 'MFM', 'MFF', 'FMM', 'FMF', 'FFM', 'FFF'];
/** "Mother's father" for 'MF' (read from your parent up to the ancestor). */
export const relPath = (rel: string) => {
  const w = rel.split('').reverse().map((s) => (s === 'M' ? 'father' : 'mother'));
  const t = w.join("'s ");
  return t.charAt(0).toUpperCase() + t.slice(1);
};
const GEN = ['', '', 'grand', 'great-grand'];
export const relLabel = (rel: string) => rel.length === 1 ? relPath(rel) : `${relPath(rel)} (${GEN[rel.length]}${rel[0] === 'M' ? 'father' : 'mother'})`;

const url = (k: string) => (P.sources as Record<string, { url: string }>)[k]?.url;
const R = (ok: boolean | null, text: string, src?: string): Reason => ({ ok, text, src: src ? url(src) : undefined });

interface Chain { sex: string[]; born: number[]; gen: number }
/** People from the ancestor (0) to you (gen): sex of each transmitter, birth year of each person. */
function chain(l: LineIn): Chain {
  const gen = l.rel.length;
  const born = [l.ancBorn, ...l.mid.slice(0, gen - 1), l.you];
  return { sex: l.rel.split(''), born, gen };
}
const who = (c: Chain, k: number) => k === c.gen ? 'you' : k === 0 ? 'the ancestor' : k === c.gen - 1 ? `your ${c.sex[k] === 'M' ? 'father' : 'mother'}` : `your ${c.sex[k] === 'M' ? 'grandfather' : 'grandmother'}`;
const Who = (c: Chain, k: number) => { const s = who(c, k); return s.charAt(0).toUpperCase() + s.slice(1); };

/** Ancestor naturalized elsewhere: compared with the next birth in the line. */
function natVsChild(l: LineIn, c: Chain, lossBefore: number | null): 'never' | 'after' | 'same' | 'before' {
  if (!l.ancNat) return 'never';
  if (lossBefore !== null && l.ancNat >= lossBefore) return 'never';
  if (l.ancNat > c.born[1]) return 'after';
  if (l.ancNat === c.born[1]) return 'same';
  return 'before';
}

function facts(code: string): Array<[string, string]> {
  const k = CTRY[code];
  const out: Array<[string, string]> = [];
  out.push(['Official fee', k.fee.amount === null ? 'Not published' : k.fee.amount === 0 ? 'Free' : money(k.fee.amount, k.fee.cur)]);
  out.push(['Published time', !k.time.minMonths && k.time.maxMonths ? `Up to ${k.time.maxMonths} months` : k.time.minMonths ? (k.time.minMonths === k.time.maxMonths ? `${k.time.minMonths} months` : `${k.time.minMonths} to ${k.time.maxMonths} months`) : 'Not published']);
  out.push(['Keep US citizenship', k.dual.status === 'yes' ? 'Yes' : k.dual.status === 'no' ? 'No' : 'With conditions']);
  return out;
}
function done(code: string, level: Level, route: string, reasons: Reason[]): Result {
  return { level, route, reasons, facts: facts(code), page: CTRY[code]?.slug ? `/en/${CTRY[code].slug}/` : undefined };
}
const worst = (a: Level, b: Level): Level => { const o: Level[] = ['yes', 'maybe', 'no', 'closed']; return o[Math.max(o.indexOf(a), o.indexOf(b))]; };

// ───────────────────────────── Italy ─────────────────────────────
function italy(l: LineIn): Result {
  const c = chain(l), k = CTRY.it.cutoffs, rs: Reason[] = [];
  const nat = natVsChild(l, c, k.law555End);
  if (l.flags.itFiled) {
    let lv: Level = 'yes';
    rs.push(R(true, 'Filed by March 27, 2025: your case is decided under the old rules, with no generation limit.', 'it-law-91-art3bis'));
    if (nat === 'before') { lv = 'no'; rs.push(R(false, `The ancestor naturalized in ${l.ancNat}, before ${who(c, 1)} was born (${c.born[1]}): the line stops there.`, 'it-cons-ny-iure')); }
    else if (nat === 'same') { lv = worst(lv, 'maybe'); rs.push(R(null, `Naturalization and the next birth fall in the same year (${l.ancNat}): the exact dates decide.`, 'it-cons-ny-iure')); }
    else if (nat === 'after') rs.push(R(true, `${Who(c, 1)} was born before the ancestor naturalized and kept Italian citizenship (Court of Cassation, July 2026).`, 'it-cass-su-24045-2026'));
    for (let i = 0; i < c.gen; i++) if (c.sex[i] === 'F' && c.born[i + 1] < k.motherFrom) {
      lv = worst(lv, 'maybe');
      rs.push(R(null, `${Who(c, i + 1)} was born in ${c.born[i + 1]} to an Italian mother: before 1948 only an Italian court recognizes this link (the "1948 case").`, 'it-cass-su-24045-2026'));
    }
    return done('it', lv, lv === 'maybe' ? 'Old rules, court route for a pre-1948 mother' : 'Recognition under the old rules', rs);
  }
  if (c.gen >= 3) {
    rs.push(R(false, 'Since March 28, 2025, someone born abroad with another citizenship gets Italian citizenship from a parent or grandparent only, not from a great-grandparent.', 'it-law-91-art3bis'));
    return done('it', 'no', 'Not under Law 74/2025', rs);
  }
  let lv: Level = 'yes';
  if (c.gen === 2 && c.sex[0] === 'F' && c.born[1] < k.motherFrom) {
    rs.push(R(false, `${Who(c, 1)} was born in ${c.born[1]} to an Italian mother: before 1948 that link needs a court case, and new court cases fall under the 2025 limits.`, 'it-law-91-art3bis'));
    return done('it', 'no', 'Not under Law 74/2025', rs);
  }
  if (nat === 'before') {
    rs.push(R(false, `The ancestor naturalized in ${l.ancNat}, before ${who(c, 1)} was born (${c.born[1]}), and lost Italian citizenship then.`, 'it-cons-ny-iure'));
    return done('it', 'no', 'Line broken before the next birth', rs);
  }
  if (!l.ancNat) {
    rs.push(R(true, `The ancestor never took another citizenship: an Italian ${c.gen === 1 ? 'parent' : 'grandparent'} holding only Italian citizenship is one of the exceptions of art. 3-bis.`, 'it-law-91-art3bis'));
    rs.push(R(null, 'The consulate will ask for proof that the ancestor never naturalized (USCIS certificate of non-existence and court records).', 'it-cons-ny-doclist'));
  } else if (l.flags.itResidence) {
    rs.push(R(true, 'Your Italian parent lived 2 years in a row in Italy before your birth: that is the other exception of art. 3-bis.', 'it-law-91-art3bis'));
    if (nat === 'same') { lv = 'maybe'; rs.push(R(null, `Naturalization in ${l.ancNat}, the same year as the next birth: the exact dates decide.`, 'it-cons-ny-iure')); }
  } else {
    rs.push(R(false, `The ancestor took another citizenship in ${l.ancNat}, so the Italian ${c.gen === 1 ? 'parent' : 'grandparent'} did not hold Italian citizenship only, and no 2-year residence in Italy was ticked.`, 'it-law-91-art3bis'));
    lv = 'no';
  }
  if (l.you >= NOW - k.minorsYears && lv !== 'yes') rs.push(R(null, 'A child under 3 with a parent who is Italian by birth can still acquire it by a declaration of both parents.', 'it-law-91-art4'));
  return done('it', lv, lv === 'no' ? 'Not under Law 74/2025' : 'Recognition by descent (art. 3-bis exception)', rs);
}

// ───────────────────────────── Ireland ─────────────────────────────
function ireland(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (c.gen === 1) {
    rs.push(R(true, 'A parent born on the island of Ireland makes you an Irish citizen automatically: you apply for a passport, not for citizenship.', 'ie-ci-descent'));
    return done('ie', 'yes', 'Irish citizen from birth', rs);
  }
  if (c.gen === 2) {
    rs.push(R(true, 'A grandparent born on the island of Ireland lets you register in the Foreign Births Register; you are Irish from the date of registration.', 'ie-dfa-fbr'));
    return done('ie', 'yes', 'Foreign Births Register', rs);
  }
  if (l.flags.fbrParent) {
    rs.push(R(true, 'Your parent was registered before your birth, so the Irish-born great-grandparent counts: you can register too.', 'ie-ci-fbr'));
    return done('ie', 'yes', 'Foreign Births Register', rs);
  }
  rs.push(R(false, 'A great-grandparent is enough only if your parent was entered in the Foreign Births Register before you were born.', 'ie-ci-fbr'));
  return done('ie', 'no', 'Not through a great-grandparent', rs);
}

// ───────────────────────────── United Kingdom ─────────────────────────────
function uk(l: LineIn): Result {
  const c = chain(l), k = CTRY.gb.cutoffs, rs: Reason[] = [];
  if (c.gen >= 2) {
    if (NOW - l.you < 18) {
      rs.push(R(null, 'A child born abroad to a British-by-descent parent can be registered if that parent lived 3 years in the UK before the birth (form MN1).', 'gb-bna-s3'));
      return done('gb', 'maybe', 'Registration of a child (s. 3(2))', rs);
    }
    rs.push(R(false, 'British citizenship passes one generation born abroad. A grandparent born in the UK is not enough for an adult, and the Ancestry visa is for Commonwealth citizens only.', 'gb-bna-s2'));
    return done('gb', 'no', 'One generation only', rs);
  }
  if (l.ancNat && l.ancNat < 1949 && l.ancNat <= l.you) {
    rs.push(R(null, `Your parent took another citizenship in ${l.ancNat}, before 1949, when that could end British nationality: the Home Office checks the file.`, 'gb-govuk-british-parent'));
    return done('gb', 'maybe', 'Check before applying', rs);
  }
  const mother = c.sex[0] === 'F';
  if (mother && l.you < k.mother1983) {
    rs.push(R(true, `Born in ${l.you} to a British mother: before 1983 mothers did not pass it on, and section 4C now gives you a right to register (form UKM, ceremony fee only).`, 'gb-bna-s4c'));
    return done('gb', 'yes', 'Registration under s. 4C (form UKM)', rs);
  }
  if (!mother && !l.flags.married && l.you < 2006) {
    rs.push(R(true, 'Before July 1, 2006 an unmarried British father did not pass it on automatically; you have a right to register (form UKF).', 'gb-govuk-british-parent'));
    return done('gb', 'yes', 'Registration (form UKF)', rs);
  }
  rs.push(R(true, `A ${mother ? 'mother' : 'father'} born in the UK makes you British by descent automatically: you apply for a passport.`, 'gb-bna-s2'));
  rs.push(R(null, 'Your own children born abroad will not be British automatically.', 'gb-bna-s2'));
  return done('gb', 'yes', 'British by descent', rs);
}

// ───────────────────────────── Poland ─────────────────────────────
function poland(l: LineIn): Result {
  const c = chain(l), k = CTRY.pl.cutoffs, rs: Reason[] = [];
  let lv: Level = 'yes';
  if (l.flags.deprived) { rs.push(R(false, 'A formal deprivation of citizenship breaks the chain.', 'pl-act-1951')); return done('pl', 'no', 'Chain broken', rs); }
  if (l.flags.plPre1920) { lv = 'maybe'; rs.push(R(null, 'There was no Polish citizenship before 1920: an ancestor who left earlier rarely became Polish.', 'pl-act-1920')); }
  if (l.flags.plMilitary) { rs.push(R(false, 'Service in a foreign army without consent ended Polish citizenship under the 1920 Act.', 'pl-act-1920')); return done('pl', 'no', 'Chain broken', rs); }
  if (l.ancNat && l.ancNat < k.act1951) {
    if (l.ancNat <= c.born[1]) { rs.push(R(false, `The ancestor naturalized in ${l.ancNat}, before 1951 and before ${who(c, 1)} was born: Polish citizenship was lost.`, 'pl-act-1920')); return done('pl', 'no', 'Lost before 1951', rs); }
    if (l.ancNat - c.born[1] < 18) { lv = worst(lv, 'maybe'); rs.push(R(null, `Naturalization in ${l.ancNat}, when ${who(c, 1)} was still a minor: under the 1920 Act the loss reached minor children.`, 'pl-act-1920')); }
    else rs.push(R(true, `${Who(c, 1)} was already an adult when the ancestor naturalized.`, 'pl-act-1920'));
  } else if (l.ancNat) rs.push(R(true, `Naturalization in ${l.ancNat}, after the 1951 Act: without a permit it did not end Polish citizenship.`, 'pl-act-1951'));
  else rs.push(R(true, 'The ancestor never naturalized elsewhere.', 'pl-act-2009'));
  for (let i = 0; i < c.gen; i++) {
    const y = c.born[i + 1];
    if (y < k.act1951 && c.sex[i] === 'F' && l.flags.married) { rs.push(R(false, `${Who(c, i + 1)} was born in ${y} to a Polish mother married to a foreigner: before 1951 the child took the father's citizenship only.`, 'pl-act-1920')); return done('pl', 'no', 'Chain broken', rs); }
    if (y >= k.act1951 && y < k.act1962 && i > 0) { lv = worst(lv, 'maybe'); rs.push(R(null, `${Who(c, i + 1)} was born in ${y} to one Polish parent: the 1951 Act handled mixed couples case by case.`, 'pl-act-1951')); }
  }
  rs.push(R(true, 'Poland has no generation limit: a voivode confirms a chain of citizens who never lost it.', 'pl-consulate-usa'));
  return done('pl', lv, 'Confirmation of Polish citizenship', rs);
}

// ───────────────────────────── Canada ─────────────────────────────
function canada(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (l.you <= 2024) {
    rs.push(R(true, 'Born abroad before December 15, 2025 to a Canadian parent: Bill C-3 removed the first-generation limit, with no generation cap.', 'ca-rules-2025'));
    if (c.gen >= 2) rs.push(R(null, `Each person between the ancestor and you is Canadian under the same rule; IRCC checks the chain from ${who(c, 0)}.`, 'ca-citizenship-act'));
    if (l.ancNat && l.ancNat < 1947) { rs.push(R(null, 'The ancestor took another citizenship before 1947, when Canadian citizenship began: IRCC checks whether they became Canadian.', 'ca-citizenship-act')); return done('ca', 'maybe', 'Citizenship certificate (proof)', rs); }
    return done('ca', 'yes', 'Citizenship certificate (proof)', rs);
  }
  if (l.you === 2025) { rs.push(R(null, 'Born in 2025: before or after December 15 changes the rule.', 'ca-rules-2025')); return done('ca', 'maybe', 'Depends on the exact date', rs); }
  if (c.gen === 1) { rs.push(R(true, 'A parent born in Canada passes citizenship to a child born abroad.', 'ca-citizenship-act')); return done('ca', 'yes', 'Citizenship certificate (proof)', rs); }
  if (l.flags.caPresence) { rs.push(R(true, 'Your Canadian parent, born abroad, spent 1,095 days in Canada before your birth.', 'ca-news-c3-in-force')); return done('ca', 'yes', 'Citizenship certificate (proof)', rs); }
  rs.push(R(false, 'Born on or after December 15, 2025 to a parent born abroad: the parent needs 1,095 days in Canada before the birth.', 'ca-news-c3-in-force'));
  return done('ca', 'no', 'Substantial connection test not met', rs);
}

// ───────────────────────────── Germany ─────────────────────────────
function germany(l: LineIn): Result {
  const c = chain(l), k = CTRY.de.cutoffs, rs: Reason[] = [];
  if (l.flags.persecuted) {
    rs.push(R(true, 'Descendants of people persecuted by the Nazi regime have a right to naturalization, with no generation limit and no fee (s. 15 StAG or art. 116(2) Basic Law).', 'de-stag-15'));
    return done('de', 'yes', 'Naturalization under s. 15 or art. 116(2)', rs);
  }
  let lv: Level = 'yes', route = 'Certificate of citizenship';
  if (l.flags.deEarly) { rs.push(R(false, 'An emigrant who left before 1904 normally lost German citizenship after 10 years abroad.', 'de-gi-citizenship')); return done('de', 'no', 'Lost under the 1870 Act', rs); }
  const nat = natVsChild(l, c, k.dual2024);
  if (nat === 'before') { rs.push(R(false, `The ancestor naturalized in ${l.ancNat}, before ${who(c, 1)} was born: before June 27, 2024 that ended German citizenship.`, 'de-gi-loss')); return done('de', 'no', 'Line broken before the next birth', rs); }
  if (nat === 'same') { lv = 'maybe'; rs.push(R(null, `Naturalization and the next birth in the same year (${l.ancNat}): the exact dates decide.`, 'de-gi-loss')); }
  if (nat === 'after') rs.push(R(true, `The ancestor naturalized in ${l.ancNat}, after ${who(c, 1)} was born.`, 'de-gi-certificate'));
  if (nat === 'never') rs.push(R(true, 'No naturalization elsewhere before the next birth.', 'de-gi-certificate'));
  for (let i = 0; i < c.gen; i++) {
    const y = c.born[i + 1];
    const viaMother = c.sex[i] === 'F' && y < k.mother1975 && l.flags.married;
    const viaFather = c.sex[i] === 'M' && !l.flags.married && y < k.father1993;
    if (viaMother || viaFather) {
      if (y < k.s5Born) { rs.push(R(false, `${Who(c, i + 1)} was born in ${y} ${viaMother ? 'to a German mother married to a foreigner' : 'to an unmarried German father'}; the declaration of s. 5 covers births after May 23, 1949 only.`, 'de-gi-s5')); return done('de', 'no', 'Discretionary naturalization only', rs); }
      route = 'Declaration under s. 5 StAG (until August 19, 2031)';
      rs.push(R(true, `${Who(c, i + 1)} was born in ${y} ${viaMother ? 'to a German mother married to a foreigner' : 'to an unmarried German father'}: the free s. 5 declaration repairs that link.`, 'de-stag-5'));
    }
  }
  if (c.gen >= 2 && c.born[c.gen - 1] >= k.born2000) { lv = worst(lv, 'maybe'); rs.push(R(null, 'Your German parent was born abroad after 1999: your birth had to be registered within a year.', 'de-stag-4')); }
  return done('de', lv, route, rs);
}

// ───────────────────────────── Austria ─────────────────────────────
function austria(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (l.flags.persecuted) {
    rs.push(R(true, 'Direct descendants of people persecuted by the Nazi regime can declare Austrian citizenship (s. 58c), in every generation, free of federal fees.', 'at-bmeia-58c'));
    rs.push(R(null, 'Take any other citizenship before filing: one acquired afterwards costs the Austrian one.', 'at-bmeia-58c-faq'));
    return done('at', 'yes', 'Declaration under s. 58c', rs);
  }
  if (l.ancNat && l.ancNat <= c.born[1]) { rs.push(R(false, `The ancestor took another citizenship in ${l.ancNat}, before or in the year of the next birth: Austria withdraws citizenship from people who naturalize elsewhere.`, 'at-bmeia-dual')); return done('at', 'no', 'Line broken', rs); }
  if (c.gen >= 2) { rs.push(R(null, 'Outside s. 58c Austrian citizenship passes only from a parent who is Austrian at the birth; through a grandparent the embassy checks each link.', 'at-bmeia-acquisition')); return done('at', 'maybe', 'Check each link with the embassy', rs); }
  if (c.sex[0] === 'M' && !l.flags.married) { rs.push(R(null, 'An unmarried Austrian father passes it on if paternity was acknowledged within eight weeks of the birth.', 'at-bmeia-acquisition')); return done('at', 'maybe', 'Austrian from birth', rs); }
  rs.push(R(true, 'A parent who was Austrian when you were born makes you Austrian from birth, and dual citizenship acquired at birth is kept.', 'at-bmeia-acquisition'));
  return done('at', 'yes', 'Austrian from birth', rs);
}

// ───────────────────────────── France ─────────────────────────────
function france(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  const firstAbroad = c.gen === 1 ? l.you : c.born[1];
  if (NOW - firstAbroad > CTRY.fr.cutoffs.desuetudeYears && !l.flags.frPapers && c.gen >= 2) {
    rs.push(R(false, `The family has lived abroad since at least ${firstAbroad}, more than 50 years, and no French papers were kept: art. 30-3 bars proof by descent.`, 'fr-cc-30-3'));
    rs.push(R(null, 'Ties with France can still allow a declaration under art. 21-14.', 'fr-cc-21-14'));
    return done('fr', 'no', 'Blocked by the 50-year rule', rs);
  }
  rs.push(R(true, `A parent who was French on the day of your birth makes you French; the certificate of nationality proves it.`, 'fr-cc-18'));
  if (c.gen >= 2) rs.push(R(null, 'Each person in the line must have been French at the next birth; the Paris court checks the documents.', 'fr-sp-cnf'));
  return done('fr', c.gen === 1 ? 'yes' : 'maybe', 'Certificate of French nationality', rs);
}

// ───────────────────────────── Norway, Sweden ─────────────────────────────
function nordic(l: LineIn, code: 'no' | 'se'): Result {
  const c = chain(l), k = CTRY[code].cutoffs, rs: Reason[] = [];
  const law = code === 'no' ? 'no-statsborgerloven' : 'se-medborgarskapslag';
  const dualFrom = code === 'no' ? k.dual2020 : k.act2001;
  if (c.gen >= 2) {
    if (l.flags.ties) { rs.push(R(null, `Only a parent who is ${CTRY[code].adj} at the birth passes it on; with time spent there before 22, ask for an official assessment.`, code === 'no' ? 'udi-guide' : 'mv-declaration')); return done(code, 'maybe', 'Official assessment', rs); }
    rs.push(R(false, `${CTRY[code].name} has no route through grandparents: only a parent who is ${CTRY[code].adj} at your birth counts, and people born abroad who never lived there lose it at 22.`, code === 'no' ? 'udi-by-birth' : 'mv-auto'));
    return done(code, 'no', 'Parent only', rs);
  }
  if (l.ancNat && l.ancNat < dualFrom && l.ancNat <= l.you) {
    rs.push(R(l.ancNat === l.you ? null : false, `Your parent naturalized in ${l.ancNat}, before ${dualFrom}, when that ended ${CTRY[code].adj} citizenship${l.ancNat === l.you ? ', in the year of your birth' : ', before you were born'}.`, code === 'no' ? 'udi-dual' : 'mv-means'));
    if (code === 'no') rs.push(R(null, 'Your parent can take Norwegian citizenship back by notification; that does not reach adult children.', 'udi-reacquire'));
    return done(code, l.ancNat === l.you ? 'maybe' : 'no', 'Parent not a citizen at your birth', rs);
  }
  let lv: Level = 'yes';
  const mother = c.sex[0] === 'F';
  if (code === 'no' && l.you < k.act2006) {
    if (mother && l.you < k.mother1979) { lv = l.you < 1961 ? 'no' : 'maybe'; rs.push(R(lv === 'no' ? false : null, `Born in ${l.you} to a Norwegian mother: before July 1979 that depended on a notification by the mother.`, 'udi-guide')); }
    if (!mother && !l.flags.married) { lv = 'no'; rs.push(R(false, 'Before September 2006 an unmarried Norwegian father did not pass it on automatically.', 'udi-by-birth')); }
  }
  if (code === 'se' && l.you < k.act2015) {
    if (!mother && !l.flags.married) { lv = NOW - l.you < 18 ? 'maybe' : 'no'; rs.push(R(lv === 'no' ? false : null, 'Born abroad to an unmarried Swedish father before April 2015: only a notification by the father before you turn 18.', 'mv-father')); }
    else if (l.you < k.act2001) { lv = 'maybe'; rs.push(R(null, 'Born before July 2001: the older rules are not on the agency\'s pages; a free declaration of citizenship settles it.', 'mv-declaration')); }
  }
  if (lv !== 'no') {
    if (NOW - l.you < k.lossAge) rs.push(R(true, `Citizen from birth. Born abroad, you must ask to keep it before your 22nd birthday.`, code === 'no' ? 'udi-by-birth' : 'mv-retain'));
    else if (l.flags.ties) { lv = worst(lv, 'maybe'); rs.push(R(null, 'Time spent in the country before 22 may have kept your citizenship; the authority confirms it.', code === 'no' ? 'udi-by-birth' : 'mv-retain')); }
    else { lv = 'no'; rs.push(R(false, `Born abroad and never living there, a ${CTRY[code].adj} citizen loses it on the 22nd birthday unless they applied to keep it.`, law)); }
  }
  return done(code, lv, lv === 'no' ? 'Lost or never acquired' : `${CTRY[code].adj} from birth`, rs);
}

// ───────────────────────────── Spain ─────────────────────────────
function spain(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (c.gen >= 2) {
    if (l.flags.esFiled) { rs.push(R(null, 'Files requested before the deadline are still decided, at the consulate where the appointment was obtained.', 'es-ba-lmd')); return done('es', 'maybe', 'Democratic Memory Law, pending file', rs); }
    rs.push(R(false, 'The grandchildren route of the Democratic Memory Law closed on October 22, 2025. A grandchild can now only naturalize after 1 year of legal residence in Spain.', 'es-montreal-fin'));
    return done('es', 'closed', 'Democratic Memory Law closed', rs);
  }
  if (!l.ancNat || l.ancNat > l.you) {
    rs.push(R(true, 'A parent who was Spanish when you were born makes you Spanish by origin; the consulate registers your birth.', 'es-cc'));
    rs.push(R(null, 'Since your parent was born in Spain, the rule that removes Spanish nationality from a second generation born abroad does not apply to you.', 'es-cc'));
    return done('es', 'yes', 'Spanish by origin (birth registration)', rs);
  }
  rs.push(R(true, 'Your parent was born in Spain as a Spaniard: you can opt for Spanish nationality at any age (art. 20.1.b), free at the consulate.', 'es-ny-opcion'));
  rs.push(R(null, 'The option requires a declaration renouncing US nationality before Spanish authorities.', 'es-ny-opcion'));
  return done('es', 'yes', 'Option under art. 20.1.b', rs);
}

// ───────────────────────────── Portugal ─────────────────────────────
function portugal(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (c.gen >= 3) { rs.push(R(false, 'Great-grandchildren have no declaration route: only naturalization after 5 years of legal residence in Portugal.', 'pt-lei-37-81-consolidada')); return done('pt', 'no', 'Residence only', rs); }
  let lv: Level = 'yes';
  if (l.ancNat && l.ancNat <= c.born[1]) { lv = 'maybe'; rs.push(R(null, `The ancestor took another citizenship in ${l.ancNat}: the registry checks whether Portuguese nationality was lost under the law of that time.`, 'pt-irn-neto')); }
  if (c.gen === 1) {
    rs.push(R(true, 'A child born abroad to a Portuguese parent is Portuguese of origin once the birth is registered, at any age.', 'pt-irn-filho'));
    return done('pt', lv, 'Attribution as child of a Portuguese parent', rs);
  }
  rs.push(R(true, 'A grandparent who was Portuguese of origin and never lost it opens the grandchild declaration.', 'pt-irn-neto'));
  rs.push(R(null, 'Since May 19, 2026 the grandchild must also pass a test of Portuguese language, culture, history and national symbols.', 'pt-lo-1-2026-pdf'));
  return done('pt', 'maybe', 'Grandchild declaration (test since May 2026)', rs);
}

// ───────────────────────────── Mexico ─────────────────────────────
function mexico(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  let lv: Level = 'yes';
  if (l.ancNat && l.ancNat < 1998 && l.ancNat <= c.born[1]) { lv = 'maybe'; rs.push(R(null, `The ancestor took US citizenship in ${l.ancNat}: the consulate checks whether they were still Mexican when the next child was born.`, 'mx-lnac')); }
  rs.push(R(true, 'A child born abroad to a Mexican mother or father is Mexican by birth.', 'mx-cpeum'));
  if (c.gen >= 2) rs.push(R(true, 'Since May 18, 2021 the parent no longer has to be born in Mexico: each generation registers its birth, then the next one can.', 'mx-dof-2021'));
  return done('mx', lv, c.gen === 1 ? 'Birth registration at a consulate' : 'Registration generation by generation', rs);
}

// ───────────────────────────── Greece ─────────────────────────────
function greece(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  let lv: Level = 'yes', route = c.gen === 1 ? 'Registration as Greek from birth' : 'Registration generation by generation';
  rs.push(R(true, 'Taking US citizenship did not end Greek citizenship without the Interior Minister\'s permission.', 'gr-kei-2025'));
  for (let i = 0; i < c.gen; i++) {
    const y = c.born[i + 1];
    if (y < CTRY.gr.cutoffs.equal1984 && c.sex[i] === 'F' && l.flags.married) { route = 'Declaration at the consulate (Greek mother before 1984)'; rs.push(R(true, `${Who(c, i + 1)} was born in ${y} to a Greek mother married to a foreigner: a simple declaration to the consulate, with no deadline.`, 'gr-kei-2025')); }
    if (c.sex[i] === 'M' && !l.flags.married) { lv = 'maybe'; rs.push(R(null, `An unmarried Greek father passes it on only if he recognized ${who(c, i + 1)} as a minor.`, 'gr-kei-2025')); }
  }
  if (c.gen >= 2) rs.push(R(null, 'Each generation is registered in a municipal register in Greece before the next; if your parent was recognized after your birth, art. 26 applies (EUR 100).', 'gr-circular-16-2026'));
  return done('gr', lv, route, rs);
}

// ───────────────────────────── Hungary ─────────────────────────────
function hungary(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (l.flags.deprived) { rs.push(R(null, 'A deprivation decision breaks automatic descent; simplified naturalization remains open to descendants who speak Hungarian.', 'hu-act-lv-1993')); }
  if (c.gen === 1 && !l.flags.deprived) {
    rs.push(R(true, 'A parent who was Hungarian when you were born makes you Hungarian already: a free citizenship verification at the consulate confirms it, without a language check.', 'hu-ny-vizsgalat'));
    return done('hu', 'yes', 'Citizenship verification', rs);
  }
  if (l.flags.huLanguage) {
    rs.push(R(true, 'Any ancestor who was a Hungarian citizen opens simplified naturalization, with no residence in Hungary and no generation limit.', 'hu-act-lv-1993'));
    rs.push(R(null, 'The consulate checks your Hungarian in a conversation; you become a citizen on the day of the oath.', 'hu-bfkh-simplified'));
    return done('hu', 'yes', 'Simplified naturalization', rs);
  }
  rs.push(R(null, 'If every link was still Hungarian at the next birth, a verification may show you are already Hungarian.', 'hu-ny-vizsgalat'));
  rs.push(R(false, 'Otherwise simplified naturalization needs Hungarian at an intermediate level; without it, expect a refusal.', 'hu-bfkh-simplified'));
  return done('hu', 'maybe', 'Verification, or naturalization with Hungarian', rs);
}

// ───────────────────────────── Czech Republic, Slovakia ─────────────────────────────
function czech(l: LineIn): Result {
  const c = chain(l), rs: Reason[] = [];
  if (c.gen >= 3) { rs.push(R(false, 'The declaration covers the children and grandchildren of a former citizen, not great-grandchildren; a grandchild who acquires it passes it to children born afterwards.', 'cz-gk-chicago-31')); return done('cz', 'no', 'Not for great-grandchildren', rs); }
  if (!l.ancNat || l.ancNat >= CTRY.cz.cutoffs.dual2014) {
    rs.push(R(true, `The ancestor never lost Czech citizenship${l.ancNat ? ' (naturalizing after 2013 no longer ends it)' : ''}: ${c.gen === 1 ? 'you are Czech by birth and ask for a citizenship certificate' : 'the declaration of s. 31 is the simplest proof route'}.`, c.gen === 1 ? 'cz-act-186-2013' : 'cz-gk-chicago-31'));
    return done('cz', 'yes', c.gen === 1 ? 'Citizenship certificate' : 'Declaration under s. 31', rs);
  }
  rs.push(R(true, `The ancestor lost Czech or Czechoslovak citizenship by naturalizing in ${l.ancNat}: since 2019 their ${c.gen === 1 ? 'children' : 'grandchildren'} can declare Czech citizenship, with no language test or residence.`, 'cz-gk-chicago-31'));
  rs.push(R(null, 'Excluded: losses under the 1945 decrees on Germans and Hungarians, and current Slovak citizens.', 'cz-gk-chicago-31'));
  return done('cz', 'yes', 'Declaration under s. 31', rs);
}
function slovakia(l: LineIn): Result {
  const rs: Reason[] = [];
  rs.push(R(true, 'A parent, grandparent or great-grandparent who was a Czechoslovak citizen born in today\'s Slovakia lets you apply without living there or speaking Slovak.', 'sk-act-40-1993'));
  rs.push(R(null, 'It is a discretionary grant, and Czechoslovakia only existed from 1918: an ancestor who left Austria-Hungary earlier does not count.', 'sk-act-40-1993'));
  return done('sk', 'yes', 'Grant of citizenship (discretionary)', rs);
}

// ───────────────────────────── dispatch ─────────────────────────────
const RULES: Record<string, (l: LineIn) => Result> = {
  it: italy, ie: ireland, gb: uk, pl: poland, ca: canada, de: germany, at: austria, fr: france,
  es: spain, pt: portugal, mx: mexico, gr: greece, hu: hungary, cz: czech, sk: slovakia,
  no: (l) => nordic(l, 'no'), se: (l) => nordic(l, 'se'),
};
export function evaluate(l: LineIn): Result {
  const f = RULES[l.country];
  if (!f) return { level: 'maybe', route: 'Rules being checked', reasons: [R(null, 'This country is not checked yet.')], facts: [] };
  const c = chain(l);
  for (let i = 0; i < c.gen; i++) if (c.born[i + 1] <= c.born[i]) return { ...done(l.country, 'maybe', 'Check the years', [R(null, `${Who(c, i + 1)} is born in or before the year of ${who(c, i)}: check the years typed.`)]) };
  return f(l);
}
