import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy-in-italy',
  group: 'italy',
  order: 140,
  country: 'it',
  tool: { kind: 'mini:it-res' },
  related: ['italy', 'italy-apply', 'italy-dual', 'italy-requirements', 'second-passport'],
  sources: ['it-law-91-art4', 'it-law-91-art3bis', 'it-law-91-art17', 'it-cons-ny-iure'],
  en: {
    slug: 'italian-citizenship-in-italy',
    nav: 'Applying from Italy',
    card: 'Filing with an Italian comune instead of a consulate, the 2-year residence routes and the 2027 window for former citizens.',
    title: 'Italian citizenship in Italy: comune, residence and 2025 law',
    description: 'Applying for Italian citizenship in Italy: recognition at the comune, the 2-year residence declaration of art. 4, the parent exception, the art. 17 window.',
    h1: 'Getting Italian citizenship while living in Italy',
    intro: 'Say whether a parent or grandparent was Italian by birth and how long you have lived legally in Italy: the tool names the route that fits.',
    resume: (h) => `Applying for Italian citizenship in Italy means dealing with the comune, the town hall where you take up residence, instead of a US consulate. For recognition by descent the rules are the same as abroad: since March 28, 2025, article 3-bis limits it to a parent or grandparent who held only Italian citizenship, or to an Italian parent who lived two years in Italy before your birth, and moving to Italy does not change your place of birth. Living in Italy does open two other doors. ${h.src('it-law-91-art4', 'Article 4 of Law 91/1992')} lets a foreigner whose parent or grandparent was Italian by birth become a citizen by declaration after two years of legal residence in Italy as an adult, declared within a year. And ${h.src('it-law-91-art17', 'article 17')} lets people born in Italy, or who lived there two years, and who lost citizenship by naturalizing abroad before August 16, 1992, take it back by declaration until December 31, 2027.`,
    faqs: (h) => [
      { q: 'Is it faster to apply at a comune than at a US consulate?', a: 'For recognition by descent, the comune applies the same law and asks for the same records, and you must first obtain legal residence, which for a US citizen means a visa and a residence permit. The gain used to be speed; since 2025, the line itself is the obstacle, and residence in Italy does not fix a line the law no longer accepts.' },
      { q: 'What counts as legal residence for the art. 4 declaration?', a: `Registration in the comune's population register with a valid residence permit, for at least two years after turning 18 (${h.src('it-law-91-art4', 'art. 4')}). Tourist stays do not count. The declaration is filed with the registrar of the comune within one year of meeting the condition, and citizenship starts the day after.` },
      { q: 'My grandfather lost Italian citizenship in 1950 by naturalizing. Can he get it back?', a: `If he is alive and was born in Italy, yes: article 17 opened a window from July 1, 2025 to December 31, 2027 for people who lost citizenship that way, with a ${h.cur(h.C('it').feeReacq.amount, 'EUR')} fee at a consulate. Reacquiring it does not reach adult descendants born abroad.` },
    ],
    body: (h) => `
<h2>Three routes, three different laws</h2>
${h.table(['Route', 'Who', 'Condition in Italy'], [
  ['Recognition by descent at the comune', 'Line accepted by art. 3-bis', 'Legal residence in the comune'],
  ['Declaration (art. 4)', 'Parent or grandparent Italian by birth', '2 years of legal residence as an adult'],
  ['Reacquisition (art. 17)', 'Former citizens who naturalized before August 16, 1992', 'None if born in Italy; window to December 31, 2027'],
], 'Law 91/1992, consolidated text on Normattiva.', ['l', 'l', 'l'])}
<h2>Recognition at the comune</h2>
<p>The comune's registrar checks the same chain of records as a consulate: the ancestor's birth extract, each birth, marriage and death record down to you, with apostilles and translations for foreign records, and proof of the ancestor's naturalization status. The difference is the gatekeeper. A consulate checks that you live in its district; a comune checks that you are registered as a resident, and the police check that your stay is legal. A US citizen arriving as a tourist cannot simply register: residence requires a visa issued for that purpose.</p>
<p>After March 28, 2025, a comune applies article 3-bis like any consulate. A family that moves to Italy to file through a great-grandparent will be refused, whatever the town, unless a case was lodged by March 27, 2025.</p>
<h2>The declaration after two years</h2>
<p>Article 4 is the door for those whose line no longer qualifies by descent but who have an Italian-born parent or grandparent. It is not automatic: you live legally in Italy for two years after turning 18, then declare within one year. Citizenship begins the day after the declaration, not at birth, so it does not pass back to your parents. It does pass forward: a child born after the declaration is born to an Italian parent, although article 3-bis still asks whether that parent held Italian citizenship only or lived in Italy two years before the birth, which by then you have.</p>
<h2>The 2027 window for former citizens</h2>
<p>Many emigrants lost Italian citizenship when they naturalized in the United States under the 1912 law. Article 17, in force since July 1, 2025, lets them reacquire it by declaration until December 31, 2027, if they were born in Italy or lived there two years. It helps the emigrant, not the grandchildren born abroad, who remain subject to article 3-bis.</p>
<h2>Before you move</h2>
<p>Check the line first with the ${h.a('home', 'family tree checker')}, then compare the ${h.a('italy-apply', 'consular route')} with a move. If the plan is to live in Europe anyway, the ${h.a('second-passport', 'page on second citizenship')} compares the descent routes of other countries that do not require living there, and the ${h.a('italy-dual', 'dual citizenship page')} covers what changes for taxes once you live in Italy.</p>`,
  },
});
