import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy',
  group: 'italy',
  order: 100,
  country: 'it',
  tool: { kind: 'mini:it-gen' },
  mini: { kind: 'cost', props: { country: 'it' } },
  related: ['italy-requirements', 'italy-1948', 'italy-apply', 'italy-dual', 'documents'],
  sources: ['it-law-91-art3bis', 'it-dl-36-2025', 'it-law-11-2026', 'it-cons-ny-iure', 'it-cons-ny-tariffe', 'it-cass-su-24045-2026', 'it-cc-147-2026-press'],
  en: {
    slug: 'italian-citizenship-by-descent',
    nav: 'Italian citizenship by descent',
    card: 'Who still qualifies after Law 74/2025: parent or grandparent, the two exceptions, the $691 fee and the 2029 move to Rome.',
    title: 'Italian citizenship by descent: who still qualifies in 2026',
    description: 'Italian citizenship by descent after Law 74/2025: parent or grandparent only, the exclusively Italian and 2-year residence exceptions, €600 fee, 730-day limit.',
    h1: 'Italian citizenship by descent after the 2025 reform',
    intro: 'Pick your Italian-born ancestor and say whether they ever took US citizenship: the answer follows the law as it stands today.',
    resume: (h) => {
      const K = h.C('it');
      return `Italian citizenship by descent, the jure sanguinis route that let Americans claim through a great-great-grandfather, changed on March 28, 2025. Decree-Law 36/2025, converted by ${h.src('it-dl-36-2025', 'Law 74/2025')}, added article 3-bis to the 1992 citizenship law: a person born abroad who holds another citizenship is treated as never having been Italian, unless one of a short list of exceptions applies. For an American family, three matter. A case filed by 11:59 p.m. Rome time on March 27, 2025 is still decided under the old, unlimited rules. A parent or grandparent who holds, or held at death, only Italian citizenship still passes it on. And an Italian parent who lived in Italy for two years in a row before your birth also does. Everyone else, including most great-grandchildren and the grandchildren of emigrants who naturalized in the United States, falls outside the law. The consular fee stays ${h.cur(K.fee.amount, 'EUR')} per adult, ${h.usd(K.usdFee.amount)} at the New York consulate until December 31, 2026.`;
    },
    faqs: (h) => [
      { q: 'Can I still get Italian citizenship through my great-grandfather?', a: 'Only if your application or court case was filed by March 27, 2025. For anyone filing later, article 3-bis limits transmission to a parent or a grandparent who held only Italian citizenship, or to a parent who lived two years in Italy before your birth. A great-grandparent no longer opens the door, however complete the documents are.' },
      { q: 'My grandfather naturalized in the US after my father was born. Does that still work?', a: 'Under the old rules it did, because your father was born Italian before the naturalization. Under the 2025 rules it usually does not: your grandfather took another citizenship, so he did not hold Italian citizenship only, and your father was born a US citizen. The remaining door is a parent who lived in Italy for two years before your birth.' },
      { q: 'Is the 2025 law final, or could the courts undo it?', a: `The Constitutional Court rejected one challenge in April 2026 (judgment 63/2026), then on July 23, 2026 sent another to the EU Court of Justice (${h.src('it-cc-147-2026-press', 'order 147/2026')}). Until Luxembourg rules, consulates apply article 3-bis. A ruling against it would reopen the question for people who have not yet applied.` },
      { q: 'Where do Americans apply after 2028?', a: `Law 11/2026 moves adult applications from abroad to a central office of the Foreign Ministry in Rome from January 1, 2029, with filing by post only. Until then, each consulate takes files within a yearly cap. Minors' declarations stay with the consulates. The legal time limit for an adult file becomes 36 months.` },
    ],
    body: (h) => {
      const K = h.C('it');
      return `
<h2>The four situations, side by side</h2>
${h.table(['Your situation', 'Since March 28, 2025', 'Why'], [
  ['Case filed by March 27, 2025', 'Old rules apply', 'Letter (a) of art. 3-bis'],
  ['Parent or grandparent held only Italian citizenship', 'Qualifies', 'Letter (c)'],
  ['Italian parent lived 2 years in Italy before your birth', 'Qualifies', 'Letter (d)'],
  ['Great-grandparent, or a naturalized grandparent', 'Does not qualify', 'Default rule of art. 3-bis'],
], 'Law 91/1992, art. 3-bis, text in force since May 24, 2025.', ['l', 'l', 'l'])}
<p>The law turns on what the ancestor held, not on where they were born. "Only Italian" means the Italian parent or grandparent never acquired another citizenship. An emigrant who took the oath in an American court in 1938 held two, and the consulate will ask for that naturalization record or, if they never naturalized, for the USCIS certificate that no record exists. The ${h.a('documents', 'document checklist')} lists both.</p>
<h2>What the consulate asks for</h2>
<p>The ${h.src('it-cons-ny-iure', 'New York consulate')} wants the Italian ancestor's birth extract from the comune, then the birth, marriage and death records of every person down to you. US records are long-form certified copies, each with an apostille from the state that issued it and an Italian translation. Naturalization proof comes from the National Archives (certified copies need no apostille) or from USCIS. The application forms carry notarized signatures. The ${h.a('italy-requirements', 'requirements page')} goes through each item and the ${h.a('cost', 'cost calculator')} adds them up.</p>
<!--tool:frise|{"preset":"it-consulate"}-->
<h2>Fee and waiting time</h2>
<p>The fee is ${h.cur(K.fee.amount, 'EUR')} per adult, paid in dollars at the quarterly rate: ${h.usd(K.usdFee.amount)} at New York from October 1 to December 31, 2026 (${h.src('it-cons-ny-tariffe', 'consular fee table')}). The legal limit for a decision is 730 days; San Francisco states 24 months for a complete file. Law 11/2026 caps how many adult files each consulate takes until 2028 and sets a 36-month limit, and New York's waiting list is closed to new registrations.</p>
<h2>The cases that survive on old rules</h2>
<p>If a file went in before the deadline, two court rulings matter. The United Sections of the Court of Cassation (${h.src('it-cass-su-24045-2026', 'judgment 24045/2026')}) ended the "minor issue": a child born in the United States kept Italian citizenship even when the Italian father naturalized while the child was a minor. And the ${h.a('italy-1948', '1948 rule')} still blocks the administrative route through an Italian mother for children born before 1948, which only a court can fix.</p>
<h2>Keeping your US passport</h2>
<p>Italy does not ask you to give up US citizenship, and the United States does not object to a second one. The ${h.a('italy-dual', 'dual citizenship page')} covers the passport you use where, military service and taxes.</p>`;
    },
  },
});
