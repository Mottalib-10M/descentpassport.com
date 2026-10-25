import type { MiniSpec } from '../mini-types';
import { typical, LEVEL, YN, C } from '../mini-kit';
const K = C.es;
const closed = new Date(`${K.cutoffs.lmdClosed}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const spec: MiniSpec = {
  title: 'Which Spanish route is still open to you?',
  cta: 'Check your whole family tree', ctaPage: 'home',
  inputs: [
    { id: 'gen', label: 'Your Spanish ancestor is your', def: 1, options: [{ value: '1', label: 'Parent' }, { value: '2', label: 'Grandparent' }, { value: '3', label: 'Great-grandparent' }] },
    { id: 'spain', label: 'That parent was born in Spain', def: 1, options: YN },
    { id: 'still', label: 'That parent was still Spanish when you were born', def: 1, options: YN },
    { id: 'filed', label: 'You asked for a Democratic Memory appointment before ' + closed, def: 0, options: YN },
  ],
  run: (v) => {
    const r = typical('es', v.gen, { natAfterNext: v.still ? null : false, flags: { esFiled: !!v.filed } });
    let level = LEVEL[r.level], route = r.route;
    let note = r.reasons[r.reasons.length - 1]?.text;
    if (v.gen === 1 && !v.spain) {
      if (v.still) note = `Your parent was born abroad, so you must declare that you want to keep Spanish nationality within ${K.cutoffs.keepYears} years of turning 18.`;
      else { level = LEVEL.no; route = 'No option: the parent was not born in Spain'; note = 'The option of art. 20.1.b needs a parent who was originally Spanish and born in Spain.'; }
    }
    return {
      head: ['Rules in force on October 25, 2026', level],
      rows: [
        ['Route', route],
        ['Fee', K.fee.amount === 0 ? 'Free at the consular civil registry' : String(K.fee.amount)],
        ['Keep US citizenship', route.includes('Option') ? 'Renunciation declaration required' : 'No renunciation for Spaniards by origin'],
      ],
      note,
    };
  },
};
export default spec;
