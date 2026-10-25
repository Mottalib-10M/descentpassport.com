import type { MiniSpec } from '../mini-types';
import { opts } from '../mini-kit';
const HOW = ['Recognized by descent (no oath)', 'Registered or declared (form, no oath)', 'Naturalized as an adult, with an oath', 'Formal renunciation before a US consul'];
const spec: MiniSpec = {
  title: 'Does a second citizenship put my US citizenship at risk?',
  cta: 'Find which country your ancestors open', ctaPage: 'home',
  inputs: [
    { id: 'how', label: 'How you get the other citizenship', def: 0, options: opts(HOW) },
    { id: 'intent', label: 'Do you intend to give up US citizenship?', def: 0, options: [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }] },
  ],
  run: (v) => {
    const how = Math.max(0, Math.min(3, Math.round(v.how)));
    if (how === 3) return { head: ['US citizenship', 'Ends once approved'], rows: [['Basis', '8 U.S.C. 1481(a)(5)'], ['Step', 'Oath of renunciation, then a Certificate of Loss of Nationality']], note: 'Renunciation is the only act here that is meant to end US citizenship.' };
    const act = how === 2;
    const risk = act && v.intent;
    return {
      head: ['US citizenship', risk ? 'Can be lost' : 'Kept'],
      rows: [['Potentially expatriating act', act ? 'Yes, naturalization after 18' : 'No'], ['Intent to relinquish', v.intent ? 'Declared' : 'None'], ['Loss automatic?', 'Never: the State Department decides']],
      note: risk ? 'Loss needs a voluntary act and the intention to give up US nationality, documented by the State Department.' : 'Taking a second citizenship by descent does not cost US citizenship.',
    };
  },
};
export default spec;
