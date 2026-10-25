import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'germany',
  group: 'countries',
  order: 230,
  country: 'de',
  tool: { kind: 'mini:de-line' },
  mini: { kind: 'cost', props: { country: 'de' } },
  related: ['germany-apply', 'austria', 'documents', 'cost', 'countries-dual'],
  sources: ['de-stag-4', 'de-stag-5', 'de-stag-15', 'de-gg-116', 'de-gi-loss', 'de-gi-certificate', 'de-bva-2024', 'de-bva-feststellung-gebuehren', 'de-bva-20261019'],
  en: {
    slug: 'german-citizenship-by-descent',
    nav: 'German citizenship by descent',
    card: 'No generation limit, but every link had to be German at the next birth: naturalization dates, the 1975 mother rule, s. 5 and s. 15.',
    title: 'German citizenship by descent: the line, dates and routes',
    description: 'German citizenship by descent for Americans: when a US naturalization broke the line, the 1975 and 1993 rules, the free s. 5 and s. 15 routes and fees.',
    h1: 'German citizenship by descent for Americans',
    intro: 'Say which ancestor was German, when they took US citizenship and whether the line runs through a married woman: the tool names the route.',
    resume: (h) => {
      const K = h.C('de');
      return `German citizenship by descent has no generation limit, but it is unforgiving about dates. A child is German if one parent was German on the day of the birth (${h.src('de-stag-4', 'section 4 of the Nationality Act')}), so each link in an American family line has to pass that test in turn. The test fails most often for one reason: until June 27, 2024, a German who applied for US citizenship lost German citizenship on the spot, unless a retention permit had been granted first. The line therefore survives only if the emigrant naturalized after the next child in the line was born, or never. Before 1975 a German mother married to a foreigner did not pass citizenship on, and before July 1993 an unmarried German father did not either. Those people and all their descendants can now make a free declaration under section 5 until ${h.date(K.cutoffs.s5Deadline)}. Proof for everyone else is a certificate of citizenship, ${h.cur(K.fee.amount, 'EUR')}, with a wait of two to three years.`;
    },
    faqs: (h) => [
      { q: 'My great-grandfather naturalized in 1925. Is that the end of it?', a: `It depends on one date: the birth of his child in the line. If that child was born before the 1925 oath, the child was born German and the line can continue. If the child came after, the child was born to a man who had already lost German citizenship, and nothing passes. The German missions' ${h.src('de-gi-loss', 'page on loss of citizenship')} explains the old rule.` },
      { q: 'Does the 2024 law give back citizenship my family lost?', a: `No. Since June 27, 2024 a German who takes another citizenship keeps the German one, which helps people naturalizing today. The ${h.src('de-bva-2024', 'Federal Office of Administration')} is clear that it does not reach back: a loss caused by a US naturalization in 1950 or 1990 still stands, and so does its effect on children born after it.` },
      { q: 'What does "already German" mean in practice?', a: 'It means no one has to grant you anything. If every link held, you have been German since birth, even if no German office has ever heard of you. You ask for a certificate of citizenship to prove it, and with that certificate you can apply for a German passport at a mission in the United States.' },
      { q: 'Are the routes for descendants of Nazi victims different?', a: `Yes, and they are wider. Article 116(2) of the Basic Law covers people stripped of citizenship between 1933 and 1945 and their descendants, and ${h.src('de-stag-15', 'section 15')} covers those who lost it or could not acquire it because of persecution. Neither has a generation limit or a fee, and earlier US naturalizations do not block them.` },
    ],
    body: (h) => {
      const K = h.C('de');
      return `
<h2>Three questions decide the line</h2>
<p>A German claim through an American family is a chain, and the chain holds only if every person in it was German at the moment the next person was born. Three questions settle most cases before you order a single record.</p>
${h.table(['Question', 'If the answer is yes', 'Where the rule comes from'], [
  ['Did the emigrant leave Germany before 1904?', 'Usually lost after 10 years abroad under the 1870 Act', 'German missions in the US'],
  ['Did an ancestor naturalize before the next child was born?', 'Line broken at that point (losses before June 27, 2024 stand)', 'Former section 25 of the Nationality Act'],
  ['Was a child born to a German mother married to a non-German before 1975, or to an unmarried German father before July 1993?', 'Not German at birth; section 5 declaration open if born after May 23, 1949', 'Section 5 of the Nationality Act'],
], 'Rules as explained by the German missions in the United States and the Nationality Act, October 2026.', ['l', 'l', 'l'])}
<p>The ${h.src('de-gi-certificate', 'German missions in the United States')} screen inquiries with almost the same three points: the ancestor came after 1904, did not naturalize before the children were born, and the people born in the line between 1914 and 1975 are men. If your family passes, you are probably German already. If one answer fails, read on, because a failure on the third point is now repairable.</p>

<h2>The naturalization date, year by year</h2>
<p>For most of the twentieth century, German law took citizenship away from a German who applied for a foreign one. An immigrant who took the oath in a US court in 1931 stopped being German that day. Children born before the oath were born German and stayed German; children born after it were born to a non-German. The same rule applied to every later generation: a German-American who naturalized in some other country, or who applied for a second passport, could lose German citizenship too. Being born a US citizen never counted as applying, so the birth of a child on US soil did not cost anyone German citizenship. The ${h.src('de-gi-loss', 'missions\' page on loss')} also mentions the retention permit, a document a few emigrants obtained before naturalizing; it is rare in family papers, but if it exists it changes the answer.</p>
<p>The rule changed on June 27, 2024. Germany now accepts dual citizenship, and naturalizing abroad no longer ends German citizenship. The change is not retroactive, so the old losses remain part of every assessment of an American family.</p>

<h2>Mothers, unmarried fathers and section 5</h2>
<p>Until January 1, 1975, a child born to married parents took German citizenship from the father only. A German woman who married an American before April 1, 1953 also lost her own citizenship on marriage. And until July 1, 1993, an unmarried German father could not pass citizenship to his child. In 2021 lawmakers opened a remedy: a declaration under ${h.src('de-stag-5', 'section 5 of the Nationality Act')}, available to people born after May 23, 1949 who missed out because of these rules, and to all of their descendants. It is free, it involves no language test and no residence, and it must reach the Federal Office of Administration by ${h.date(K.cutoffs.s5Deadline)}. Citizenship starts on the day the declaration is received, not at birth. The ${h.a('germany-apply', 'application page')} walks through the forms; people born before May 23, 1949 must use discretionary naturalization instead, which asks for German.</p>

<h2>Descendants of people persecuted between 1933 and 1945</h2>
<p>Two routes ignore the usual chain. ${h.src('de-gg-116', 'Article 116(2) of the Basic Law')} entitles anyone whose German citizenship was revoked on political, racial or religious grounds between January 30, 1933 and May 8, 1945, and their descendants, to be naturalized again on request. ${h.src('de-stag-15', 'Section 15')} covers the cases article 116 does not, such as people who left and naturalized abroad before 1955 because of persecution, or who were never allowed to become German. Both routes are free, have no generation limit and accept US citizenship. On October 19, 2026 the Federal Office announced ${h.src('de-bva-20261019', 'temporary delays for article 116 files')} while it tightens checks; section 15 files were not affected. The ${h.a('austria', 'Austrian section 58c route')} works on a similar idea.</p>

<h2>Births abroad after 1999</h2>
<p>A newer limit concerns families still living abroad. If your German parent was born outside Germany after December 31, 1999, your own birth abroad passes German citizenship only when it is registered with a German registry office or mission within one year (${h.src('de-stag-4', 'section 4(4)')}). For most adult Americans checking a line today this does not arise yet, but it matters for their children.</p>

<h2>Documents, apostilles and translations</h2>
<p>The Federal Office wants certified copies of the birth and marriage records of every person in the line, back to the emigrant, plus proof that the emigrant was German: an old passport, a certificate of citizenship or a German birth record from before 1914. It also wants the naturalization record of each ancestor who took US citizenship, because the date is the whole case. Certified copies can come from a notary, from the issuing registrar or from a German mission. On apostilles and translations the published guidance differs: the missions in the United States say English documents usually need neither, while the Federal Office's section 5 leaflet asks for them as a rule. Follow the instructions of the mission that handles your file. The ${h.a('documents', 'US documents guide')} explains where each record and apostille comes from, and the ${h.a('cost', 'cost calculator')} totals them.</p>

<h2>Fees and waiting times</h2>
<p>A certificate of citizenship costs ${h.cur(K.fee.amount, 'EUR')} (${h.src('de-bva-feststellung-gebuehren', 'Federal Office fee page')}). The section 5 declaration, section 15 and article 116(2) cost nothing. The missions give two to three years for a certificate of citizenship. No time is published for the other three routes.</p>

<h2>Keeping US citizenship</h2>
<p>None of these routes asks you to give up US citizenship, and since 2024 Germany has no objection to a second one. The United States does not object either; the ${h.a('dual', 'dual citizenship page')} covers the US side, and the ${h.a('dual-taxes', 'tax page')} explains what changes, and what does not, for your IRS filings. To compare Germany with other European options, see the ${h.a('countries-dual', 'country table')} and the ${h.a('second-passport', 'second passport guide')}.</p>`;
    },
  },
});
