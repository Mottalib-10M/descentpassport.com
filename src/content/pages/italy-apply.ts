import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy-apply',
  group: 'italy',
  order: 150,
  country: 'it',
  tool: { kind: 'mini:it-when' },
  related: ['italy', 'italy-requirements', 'cost', 'italy-in-italy', 'documents'],
  sources: ['it-law-11-2026', 'it-dlgs-71-2011-art10', 'it-cons-ny-iure', 'it-cons-sf-iure', 'it-cons-ny-tariffe', 'it-cons-ny-minori'],
  en: {
    slug: 'italian-citizenship-application',
    nav: 'How to apply',
    card: 'Prenot@mi appointments, the consulate for your state, the yearly cap until 2028 and filing by post in Rome from 2029.',
    title: 'Italian citizenship application: consulate, Rome, 36 months',
    description: 'How to apply for Italian citizenship by descent from the US in 2026: consulate by state, Prenot@mi, the yearly cap of Law 11/2026, filing in Rome from 2029.',
    h1: 'Applying for Italian citizenship by descent from the US',
    intro: 'Enter the year you expect to file: the tool says where the file goes, how, and the legal time limit.',
    resume: (h) => `An application for Italian citizenship by descent from the United States goes, until the end of 2028, to the Italian consulate whose district covers your home address: New York for New York, Connecticut and part of New Jersey, San Francisco for northern California and several western states, and so on. You book through the Foreign Ministry's Prenot@mi system, then on the appointment day mail the complete file with the fee of ${h.cur(h.C('it').fee.amount, 'EUR')} per adult, paid by money order at the quarterly dollar rate. ${h.src('it-law-11-2026', 'Law 11/2026')} changed the outlook: each consulate takes a capped number of adult files each year until 2028, the legal time limit becomes 36 months, and from January 1, 2029 adults living abroad file by post with a central office of the Foreign Ministry in Rome. Minors' declarations stay with the consulates. New York's waiting list is closed to new registrations.`,
    faqs: (h) => [
      { q: 'Can I apply for Italian citizenship online?', a: 'Booking is online through Prenot@mi, but the file itself is paper: forms with notarized signatures, certified records with apostilles and translations, sent by mail to the consulate on the day of your appointment. From 2029 the central office in Rome also works by post. No consulate accepts a fully digital application.' },
      { q: 'Which consulate is mine if I move during the process?', a: `The one covering your residence when you file; you prove it with a driver's license, a utility bill or a recent federal tax statement (${h.src('it-cons-ny-iure', 'New York requirements')}). If you move after filing, tell the consulate: it may transfer the file or ask you to restart where you now live.` },
      { q: 'How do I apply for my minor child?', a: `If you are Italian by birth, both parents can declare the child within three years of birth, free of charge since January 1, 2026; children who were minors on May 24, 2025 and whose parent applied in time have until May 31, 2029. The ${h.src('it-cons-ny-minori', 'New York page on minors')} describes the request by e-mail, then the appointment.` },
    ],
    body: (h) => `
<h2>Step by step</h2>
<ol>
<li><strong>Check the line</strong> against article 3-bis with the ${h.a('home', 'family tree checker')}: since March 28, 2025 a great-grandparent no longer qualifies.</li>
<li><strong>Order the records</strong> listed on the ${h.a('italy-requirements', 'requirements page')}: Italian birth extract, US long-form records, naturalization or non-existence proof.</li>
<li><strong>Apostille and translate</strong> every US record; check names and dates match across the chain.</li>
<li><strong>Book</strong> on Prenot@mi with the consulate for your address, or join its list if one is open.</li>
<li><strong>Send</strong> the complete file by mail on your appointment day, with the money order for the fee.</li>
<li><strong>Wait</strong> for the decision; once recognized, the consulate asks your ancestor's comune to transcribe your records, and you can apply for a passport.</li>
</ol>
<!--tool:frise|{"preset":"it-consulate"}-->
<h2>The consulate for your state</h2>
<p>Italy has consulates general in several US cities, each covering a list of states or counties. The ${h.src('it-cons-ny-iure', 'New York consulate')} covers New York, Connecticut and thirteen New Jersey counties; ${h.src('it-cons-sf-iure', 'San Francisco')} covers northern and central California, Alaska, Hawaii, Idaho, Montana, Oregon, Utah and Washington. Each publishes its own document list and booking rules, and they differ on details such as divorce records or the form of the money order, so follow the page of yours.</p>
<h2>Caps until 2028, Rome from 2029</h2>
<p>Law 11/2026, in force since February 19, 2026, rewrote article 10 of the decree on consular functions (${h.src('it-dlgs-71-2011-art10', 'D.Lgs. 71/2011, art. 10')}). Until 2028, each consulate accepts adult files up to the number it concluded the year before the law, with a floor of 100 a year. Some consulates abroad have stopped giving new adult appointments; New York's list is closed to new names. From January 1, 2029, adults living abroad send their file by post to a central office of the Foreign Ministry, and the legal time limit is 36 months.</p>
<h2>Fee and payment</h2>
<p>The fee is set in euros and converted every quarter. At New York it is ${h.usd(h.C('it').usdFee.amount)} from October 1 to December 31, 2026 (${h.src('it-cons-ny-tariffe', 'consular fee table')}). It is charged per adult and not refunded if the application is refused. The ${h.a('cost', 'cost calculator')} adds it to the price of records, apostilles and translations.</p>
<h2>After recognition</h2>
<p>Recognition is followed by the transcription of your birth, and marriage if any, in the civil registers of the comune your ancestor came from, and by registration in the register of Italians abroad at your consulate. You can then apply for an Italian passport. If you later move to Italy, the ${h.a('italy-in-italy', 'page on life in Italy')} covers the residence routes.</p>`,
  },
});
