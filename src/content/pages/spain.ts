import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'spain',
  group: 'countries',
  order: 260,
  country: 'es',
  tool: { kind: 'mini:es-route' },
  mini: { kind: 'cost', props: { country: 'es' } },
  related: ['portugal', 'italy', 'documents', 'cost', 'dual'],
  sources: ['es-cc', 'es-ley-20-2022', 'es-ny-opcion', 'es-ny-lmd', 'es-ny-recuperacion', 'es-montreal-fin', 'es-ba-lmd'],
  en: {
    slug: 'spanish-citizenship-by-descent',
    nav: 'Spanish citizenship by descent',
    card: 'The grandchildren window closed in October 2025. What is left: Spanish by origin, the art. 20.1.b option for children of Spanish-born parents.',
    title: 'Spanish citizenship by descent after the 2025 deadline',
    description: 'Spanish citizenship by descent in 2026: the Democratic Memory window closed, the art. 20.1.b option for children of Spanish-born parents, the 3-year keep rule.',
    h1: 'Spanish citizenship by descent once the grandchildren law closed',
    intro: 'Say whether your Spanish ancestor is a parent or a grandparent, where that parent was born and whether they were still Spanish at your birth.',
    resume: (h) => {
      const K = h.C('es');
      return `Spanish citizenship by descent narrowed sharply on ${h.date(K.cutoffs.lmdClosed)}, when the window of the ${h.src('es-ley-20-2022', 'Democratic Memory Law')} closed at 11:59 p.m. local time. That law had let grandchildren of Spaniards apply from abroad; now only people who asked for an appointment before the deadline, and can prove it, may still file. For everyone else the Civil Code is what remains. If your father or mother was Spanish on the day you were born, you are Spanish by origin and the consulate simply registers your birth. If you were born abroad to a parent who was also born abroad, you had to declare within ${K.cutoffs.keepYears} years of turning 18 that you wanted to keep it. And if your parent was originally Spanish and born in Spain but had stopped being Spanish by the time you were born, ${h.src('es-cc', 'article 20.1.b')} lets you opt for Spanish nationality at any age, free of charge, with a declaration renouncing US nationality before Spanish authorities.`;
    },
    faqs: (h) => [
      { q: 'I missed the October 2025 deadline. Is there any way left through my Spanish grandmother?', a: 'Not from the United States. With the Democratic Memory window closed, a grandchild of an originally Spanish grandparent who has no option route can only naturalize by residence, and the Civil Code reduces the period to one year of legal, continuous residence in Spain just before applying. That means moving to Spain on a visa first.' },
      { q: 'I requested a Democratic Memory appointment in time. Where do I file now?', a: `At the consular office where you obtained the appointment, even if you have since moved to another district. Consulates have repeated that a missed appointment is not rescheduled, so keep the confirmation of your request and turn up on the date given (${h.src('es-ba-lmd', 'consular notice')}).` },
      { q: 'Does signing the Spanish renunciation make me lose US citizenship?', a: 'The declaration is a formality of Spanish law, required for the art. 20 option because the United States is not on the list of exempt countries. Whether it has any effect on US nationality is a question of US law, which treats loss as a voluntary act made with intent. Read the US position before signing.' },
      { q: 'How long does registration take after I opt at the consulate?', a: `The ${h.src('es-ny-opcion', 'New York consulate')} states ${h.C('es').time.text.replace('around ', 'about ').replace(' at the New York consulate', '')}. That clock starts once your documents have been checked by email and you have signed the option declaration in person. The consulate then issues your Spanish birth certificate, which you need to apply for a passport.` },
    ],
    body: (h) => {
      const K = h.C('es');
      return `
<h2>What changed in October 2025</h2>
<p>For three years the eighth additional provision of Law 20/2022, known in Spain as the grandchildren law, let the grandchild of a Spaniard who left Spain apply from a consulate, as well as children of Spanish women who lost their nationality by marrying a foreigner before 1978. The window was extended once by a year and ended on ${h.date(K.cutoffs.lmdClosed)}. The ${h.src('es-montreal-fin', 'Spanish consulates')} stopped taking new appointment requests the next day. Files whose appointment was requested in time are still being decided, at the office where the appointment was obtained, and backlogs run long. If you never asked for an appointment, this route is closed for you.</p>
${h.table(['Your situation', 'Route in 2026', 'Deadline'], [
  ['Parent Spanish on the day you were born', 'Spanish by origin, birth registration', 'None, but see the 3-year keep rule'],
  ['Parent born in Spain as a Spaniard, not Spanish at your birth', 'Option, art. 20.1.b', 'None'],
  ['Parent became Spanish while you were a minor', 'Option, art. 20.1.a', `Before age ${K.cutoffs.optionAge}`],
  ['Grandparent only', 'Residence in Spain (1 year)', 'Democratic Memory route closed'],
], 'Spanish Civil Code, arts. 17, 20, 22 and 24; Law 20/2022, eighth additional provision.', ['l', 'l', 'l'])}
<h2>Spanish by origin through a parent</h2>
<p>Article 17 of the ${h.src('es-cc', 'Civil Code')} makes Spanish by origin anyone born to a father or mother who was Spanish at the time of the birth, wherever the birth took place. Nothing needs to be granted: the consular civil registry enters your birth and issues a Spanish birth certificate. The text has no generation limit, but article 24.3 adds a trap for families settled abroad. If you were born and live abroad, hold US nationality from birth, and are Spanish only because your Spanish parent was also born abroad, you lose Spanish nationality unless you told the civil registry within ${K.cutoffs.keepYears} years of turning 18 that you wanted to keep it. An American in their thirties whose Spanish father was born in New York has usually lost it already. Recovery is possible under article 26, and the ${h.src('es-ny-recuperacion', 'consulate')} notes that the requirement to live in Spain does not apply to emigrants and their children.</p>
<h2>The option for children of Spanish-born parents</h2>
<p>Many Spaniards who emigrated to the United States took US citizenship, and with it stopped being Spanish. A child born after that naturalization was not Spanish at birth. Article 20.1.b gives that child, at any age and with no deadline, the right to opt for Spanish nationality, provided the parent was originally Spanish and born in Spain. A grandparent born in Spain does not open this door by itself. Nationality acquired by option is not nationality by origin, which matters for later transmission and for dual citizenship.</p>
<p>The ${h.src('es-ny-opcion', 'New York consulate')} describes the steps. You send a scan of your documents to the civil registry by email for a first check. You then come in person, which is mandatory for anyone over 14, to sign the option, swear or promise allegiance to the King and obedience to the Constitution, and, as a US national, declare that you renounce your previous nationality. The acquisition is then entered in the civil registry. There is no language test and no residence requirement.</p>
<h2>Documents</h2>
<p>For the option the consulate asks for your long-form birth certificate issued by the state health department (the hospital certificate is not accepted), the literal Spanish birth certificate of your Spanish-born parent issued less than a year before filing, your parent's US naturalization certificate, the birth certificate of your other parent, your parents' marriage certificate, a valid passport and proof that you live in the consular district. New York does not ask for a translation of documents in English or Spanish. Certificates from a third country need an apostille. A US naturalization certificate is a federal document, so when an apostille is needed it comes from the US Department of State, not from a state office. The ${h.a('documents', 'document guide')} explains how to order each record, and the ${h.a('cost', 'cost calculator')} totals copies and apostilles.</p>
<h2>Fee and waiting time</h2>
<p>Civil registry procedures at Spanish consulates are ${K.fee.amount === 0 ? 'free' : h.cur(K.fee.amount, 'EUR')}: the option, the recovery and the registration of a birth carry no fee. New York gives ${K.time.text}. For pending Democratic Memory files the same consulate warns that issuing appointment credentials can take several months, and the ${h.src('es-ny-lmd', 'Democratic Memory page')} keeps the instructions for those who requested in time.</p>
<h2>Keeping your US passport</h2>
<p>A Spaniard by origin who also holds US nationality from birth keeps both. The renunciation applies to the option and to naturalization, because the United States is not one of the countries Spain exempts, a list that covers the Ibero-American countries, Andorra, the Philippines, Equatorial Guinea, Portugal and France. The Democratic Memory route did not require it. How a Spanish renunciation is viewed in the United States is a separate matter, covered on the ${h.a('dual', 'US dual citizenship page')}. The ${h.a('countries-dual', 'country comparison')} shows which other countries ask for something similar, and ${h.a('dual-taxes', 'the tax page')} explains what changes for a dual citizen filing US returns. If Spain is closed to your family, the ${h.a('portugal', 'Portuguese')} and ${h.a('italy', 'Italian')} pages cover neighboring routes, and the ${h.a('second-passport', 'second passport overview')} compares the options.</p>`;
    },
  },
});
