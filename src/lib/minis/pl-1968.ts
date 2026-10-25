import type { MiniSpec } from '../mini-types';
import { LEVEL, YN, C, usd, clamp } from '../mini-kit';
import { typical } from '../mini-kit';
const K = C.pl;
const spec: MiniSpec = {
  title: 'Restoration or confirmation after a loss of Polish citizenship?',
  cta: 'Check the rest of your family tree', ctaPage: 'home',
  inputs: [
    { id: 'who', label: 'The person who lost Polish citizenship is', def: 1, options: [{ value: '0', label: 'You' }, { value: '1', label: 'Your parent' }, { value: '2', label: 'Your grandparent' }] },
    { id: 'when', label: 'The next person in your line was born', def: 1, options: [{ value: '0', label: 'Before the loss' }, { value: '1', label: 'After the loss' }] },
    { id: 'before99', label: 'The loss happened before January 1, 1999', def: 1, options: YN },
    { id: 'dep', label: 'It was a deprivation decision (not a permit to leave or a change of citizenship)', def: 0, options: YN },
  ],
  run: (v) => {
    const who = clamp(v.who, 0, 2);
    const restorable = !!v.before99;
    if (who === 0) {
      return {
        head: ['Under art. 38 of the 2009 Act', restorable ? LEVEL.yes : LEVEL.maybe],
        rows: [['Route', restorable ? 'Restoration by the Minister of the Interior' : 'Not covered by art. 38'], ['Who applies', 'You, in person'], ['Published decision time', 'Not published']],
        note: restorable ? `Art. 38 restores citizenship lost before ${K.cutoffs.restoreBefore} under the 1920, 1951 or 1962 Acts, on application; wartime service for the Axis and acts against Poland are excluded.` : 'A loss after 1998 can only follow a renunciation approved by the President, which art. 38 does not undo.',
      };
    }
    if (v.when === 0 && !v.dep) {
      const r = typical('pl', who, { natAfterNext: true });
      return {
        head: ['Confirmation of an existing status', LEVEL[r.level === 'yes' ? 'maybe' : r.level]],
        rows: [['Route', 'Confirmation by a voivode'], ['Fee at a US consulate', usd(K.fee.amount)], ['Published decision time', 'Not published']],
        note: 'The next person in your line was born Polish before the loss. The voivode checks whether the loss reached children who were then under 18.',
      };
    }
    const r = typical('pl', who, { flags: { deprived: !!v.dep } });
    return {
      head: ['Through the person who lost it', v.dep ? LEVEL[r.level] : LEVEL.no],
      rows: [['Route', 'None for you as of right'], ['What remains', restorable ? 'Restoration for the person who lost it' : 'Naturalization rules'], ['Published decision time', 'Not published']],
      note: v.dep ? r.reasons[0]?.text : 'A child born after the loss was not born Polish. Restoration applies to the person who lost citizenship and does not reach back to children born before it.',
    };
  },
};
export default spec;
