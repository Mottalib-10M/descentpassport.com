import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'czech',
  group: 'countries',
  order: 290,
  country: 'cz',
  tool: { kind: 'mini:cz-31' },
  mini: { kind: 'cost', props: { country: 'cz' } },
  related: ['slovakia', 'home', 'countries-dual', 'documents', 'cost'],
  sources: ['cz-act-186-2013', 'cz-gk-chicago-31', 'cz-fees-2026-10', 'cz-sydney-dual', 'cz-act-40-1993'],
  en: {
    slug: 'czech-citizenship-by-descent',
    nav: 'Czech citizenship by descent',
    card: 'The section 31 declaration for children and grandchildren of former Czechoslovak citizens: no test, no residence, a $46 consular fee.',
    title: 'Czech citizenship by descent: the section 31 declaration',
    description: 'Czech citizenship by descent for Americans: the section 31 declaration for children and grandchildren of former citizens, documents, the CZK 1,000 fee, no test.',
    h1: 'Czech citizenship by descent through a declaration',
    intro: 'Say which relative was Czech or Czechoslovak and whether they took US citizenship before 2014: the tool names the route and the consular fee.',
    resume: (h) => {
      const K = h.C('cz');
      return `Czech citizenship by descent is open to many Americans whose parent or grandparent left Czechoslovakia and became a US citizen. Until ${K.cutoffs.dual2014}, taking another citizenship by application cost a Czech citizen their Czech one, so most emigrants lost it on the day of their US oath. Section 31 of ${h.src('cz-act-186-2013', 'Act 186/2013')} lets those former citizens take it back by a simple declaration, and since September 6, 2019 the same declaration is open to their children and grandchildren. There is no language test, no residence in the Czech Republic and, in the text in force since October 1, 2025, no deadline. The declaration is made at a Czech consulate in the United States, costs ${h.cur(K.fee.amount, 'CZK')} (${h.usd(K.usdFee.amount)} in the October 2026 schedule) and is decided by a regional office in Prague or elsewhere. Great-grandchildren are not covered directly, and current Slovak citizens are excluded. You keep your US passport.`;
    },
    faqs: (h) => [
      { q: 'Is there a deadline to file the Czech section 31 declaration?', a: 'No deadline appears in the consolidated Act in force since October 1, 2025. Older articles mention an end date, but the text published in the official collection of laws contains none. Rules can change, so the date on which your file reaches the consulate is the one that counts, not the date you started gathering records.' },
      { q: 'My great-grandfather was the Czech citizen. Can I still use section 31?', a: 'Not directly: the declaration covers the children and grandchildren of the former citizen. The way through is for the grandchild generation, often your parent, to declare first. A child born after that parent became Czech again is Czech by birth, so the order of the filings matters more than the age of the records.' },
      { q: 'When exactly do I become Czech after the declaration?', a: 'On the day you take delivery of the certificate of acquisition, not on the day you file. The consulate forwards the declaration to the regional office within 30 days, the office checks the conditions and issues the certificate, and the consulate hands it to you. Only then can you ask for a Czech birth record and a passport.' },
    ],
    body: (h) => {
      const K = h.C('cz');
      return `
<h2>Who can declare, and who cannot</h2>
${h.table(['Your situation', 'Route', 'Basis'], [
  ['You are the former citizen and lost it before 2014', 'Declaration', 's. 31(1)'],
  ['Your parent or grandparent was the former citizen', 'Declaration', 's. 31(3), since 2019'],
  ['Your parent was still Czech when you were born', 'Citizenship certificate', 'Czech by birth'],
  ['Only a great-grandparent was Czech', 'Not directly', 'A parent declares first'],
  ['You hold Slovak citizenship today', 'Excluded', 's. 31'],
], 'Act 186/2013 on Czech citizenship, consolidated text in force since October 1, 2025.', ['l', 'l', 'l'])}
<p>The starting point is a person who lost Czech or Czechoslovak citizenship before January 1, ${K.cutoffs.dual2014}. For most American families that loss happened at a naturalization ceremony. Between 1993 and 2013 a Czech citizen lost Czech citizenship on the day they voluntarily took a foreign one by an express act such as an application, and earlier losses under Czechoslovak law are covered as well. Section 31 covers any such loss, whatever the year, with two groups left out: people who lost it under the 1945 presidential decree on Germans and Hungarians or under the 1945 treaty on Subcarpathian Ukraine, and people who became or are Slovak citizens. The ${h.src('cz-gk-chicago-31', 'Consulate General in Chicago')} spells out both exclusions.</p>
<p>If your parent never lost Czech citizenship, for example because they took US citizenship in 2014 or later, or never naturalized at all, you are probably Czech already. Under the current Act a child is Czech at birth if at least one parent is Czech on the day of the birth, wherever the child is born. In that case you do not declare anything: you ask for a citizenship certificate, which costs ${h.cur(K.feeCert.amount, 'CZK')} at a consulate. The certificate is the proof a Czech registry and passport office will ask for.</p>
<h2>How the declaration works</h2>
<p>You fill in the declaration form that matches your case: one for former citizens, one for children and grandchildren, and a separate one for a minor child. You add the records described below and a signed statement that you have not acquired Slovak citizenship, then hand everything in person to a Czech consulate, in originals with two sets of copies. Under ${h.src('cz-act-186-2013', 'section 31')}, a consulate forwards the declaration and its documents to the competent regional office within 30 days. If you never had permanent residence in the Czech Republic, the competent office is the one for Prague 1. Because the declaration is made in person, the appointment at the consulate is often the first step to book.</p>
<p>The office checks two things: that the ancestor was a citizen who lost citizenship before ${K.cutoffs.dual2014} in a way the law covers, and that each link from that ancestor to you is proved by civil records. Parents can file a separate declaration for a minor child with the notarized consent of the other parent; a child over 15 signs too.</p>
<!--tool:mini:cz-31-->
<h2>The documents a consulate asks for</h2>
<p>The checklist starts with your own birth certificate and, where relevant, marriage, divorce or death records. Then come the birth and marriage records of the parent and, for a grandchild, of the grandparent, so that each link is visible. The key document proves how and when the ancestor lost citizenship: in most American files this is the naturalization certificate, or a copy from USCIS if the family no longer has it. The ${h.a('documents', 'document checklist')} explains how to order those records.</p>
<p>US records ${K.docs.apostille ? 'need an apostille from the state that issued them' : 'do not need an apostille'}${K.docs.translation ? ', plus an official Czech translation' : ''}. The Chicago consulate lists a few exceptions to the translation rule, among them the apostille itself and the naturalization certificate. A valid US passport or driver's license serves as identification if you hold no Czech document. The ${h.a('cost', 'cost calculator')} adds up certified copies, apostilles and translation pages.</p>
<h2>Fee and waiting time</h2>
<p>The ${h.src('cz-fees-2026-10', 'consular fee schedule')} for October 2026 sets the declaration at ${h.cur(K.fee.amount, 'CZK')}, collected as ${h.usd(K.usdFee.amount)} at US consulates, and a citizenship certificate at ${h.cur(K.feeCert.amount, 'CZK')} (${h.usd(K.usdFeeCert.amount)}). The dollar amounts follow the exchange rate and are updated with each schedule. No decision time is published: the only time in the law is the 30 days the consulate has to forward the file. Plan for the regional office to write if a record is missing or unclear; each request adds months.</p>
<h2>Dual citizenship with the United States</h2>
<p>Since January 1, ${K.cutoffs.dual2014}, a Czech citizen no longer loses Czech citizenship by taking another one, as the ${h.src('cz-sydney-dual', 'Czech embassy in Canberra')} explains. A Czech citizen can now lose it only by declaring renunciation while living abroad and holding another citizenship. On the US side, acquiring a second citizenship does not put your US citizenship at risk unless you intend to give it up; the ${h.a('dual', 'dual citizenship page')} sets out the US position and the ${h.a('countries-dual', 'country table')} compares the rules of other countries. Taxes do not change with a Czech passport: US filing obligations follow citizenship, as the ${h.a('dual-taxes', 'tax page')} explains.</p>
<h2>Slovak roots in a Czechoslovak family</h2>
<p>Many families simply remember "Czechoslovakia". If the ancestor was born in what is now Slovakia, Slovakia has its own route for descendants up to great-grandchildren, without a language test but at the Ministry's discretion. It is described on the ${h.a('slovakia', 'Slovak citizenship page')}. The two routes do not mix easily: section 31 is closed to anyone who holds Slovak citizenship, so the order in which you file matters. Families with Czech and Slovak branches often settle the Czech declaration first. The ${h.a('home', 'family tree checker')} compares every country in your tree at once, and the ${h.a('second-passport', 'second passport overview')} lists the other routes open to Americans.</p>`;
    },
  },
});
