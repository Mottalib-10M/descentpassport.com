import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, opts, year, C, cur, NOW } from '../mini-kit';
import { dateL } from '../format-l';
const K = C.de;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const free = (a: number) => (a === 0 ? 'Free' : cur(a, 'EUR'));
const spec: MiniSpec = {
  title: 'Does your German line still hold, and which route fits?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'The German-born ancestor is your', def: 2, options: opts(['Parent', 'Grandparent', 'Great-grandparent']).map((o) => ({ ...o, value: String(Number(o.value) + 1) })) },
    { id: 'nat', label: 'Did that ancestor take US citizenship?', def: 0, options: [{ value: '0', label: 'Never' }, { value: '1', label: 'Yes, after the next child in the line was born' }, { value: '2', label: 'Yes, before that child was born' }] },
    { id: 'woman', label: 'Does the line pass through a woman married to a non-German?', def: 0, options: [{ value: '0', label: 'No, only fathers' }, { value: '1', label: 'Yes, my mother' }, { value: '2', label: 'Yes, my grandmother' }] },
    year('cy', 'Birth year of that woman\'s child (you or your parent)', 1965, 'Ignored when the line runs through fathers only'),
    { id: 'pers', label: 'The ancestor was persecuted by the Nazi regime or fled it', def: 0, options: YN },
    { id: 'early', label: 'The ancestor left Germany before 1904', def: 0, options: YN },
  ],
  run: (v) => {
    const g = Math.max(1, Math.min(3, Math.round(v.gen)));
    const w = Math.round(v.woman ?? 0);
    const idx = w === 1 ? g - 1 : w === 2 ? g - 2 : -1;
    const sexes = Array.from({ length: g }, (_, i) => (i === idx ? 'F' : 'M')).join('');
    const cy = Math.max(1900, Math.min(NOW, Math.round(v.cy)));
    let you = 1990;
    if (idx >= 0) you = idx === g - 1 ? cy : Math.min(NOW, cy + 30);
    const births = Array.from({ length: g + 1 }, (_, i) => (idx >= 0 && idx === g - 2 && i === g - 1 ? cy : you - 30 * (g - i)));
    const nat = v.nat === 1 ? true : v.nat === 2 ? false : null;
    const r = typical('de', g, { sexes, births, natAfterNext: nat, flags: { persecuted: !!v.pers, deEarly: !!v.early, married: true } });
    const s5 = r.route.includes('s. 5'), s15 = r.route.includes('s. 15');
    const fee = s15 ? K.feeS15.amount : s5 ? K.feeS5.amount : K.fee.amount;
    const rows: Array<[string, string]> = [['Route', r.route], ['Fee', r.level === 'no' ? 'Not applicable' : free(fee)]];
    if (s5) rows.push(['Must reach the BVA by', dateL(K.cutoffs.s5Deadline)]);
    else if (r.level !== 'no') rows.push(['Published time', s15 ? 'Not published' : cap(K.time.text.split(';')[0])]);
    const why = r.reasons.find((x) => x.ok === false) ?? r.reasons[r.reasons.length - 1];
    return { head: ['Under the rules in force on October 25, 2026', LEVEL[r.level]], rows, note: why?.text.replace(/^You was/, 'You were') };
  },
};
export default spec;
