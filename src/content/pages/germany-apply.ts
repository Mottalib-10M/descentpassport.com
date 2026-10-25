import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'germany-apply',
  group: 'countries',
  order: 231,
  country: 'de',
  tool: { kind: 'mini:de-s5' },
  related: ['germany', 'documents', 'cost', 'dual', 'austria'],
  sources: ['de-stag-5', 'de-bva-eer', 'de-bva-eer-anleitung', 'de-bva-eer-merkblatt-en', 'de-bva-eer-dauer', 'de-bva-eer-gebuehren', 'de-gi-s5', 'de-gi-certificate', 'de-bva-2021'],
  en: {
    slug: 'german-citizenship-by-descent/apply',
    nav: 'Apply for German citizenship',
    card: 'Certificate of citizenship or section 5 declaration: which forms, where to send them, and the August 19, 2031 deadline.',
    title: 'Apply for German citizenship by descent: forms and deadline',
    description: 'How to apply for German citizenship by descent from the US: certificate of citizenship or s. 5 declaration, BVA forms, certified copies, the 2031 deadline.',
    h1: 'How to apply for German citizenship by descent',
    intro: 'Pick the situation of the person in your line who was left out, then type the year they were born: the tool says which application applies.',
    resume: (h) => {
      const K = h.C('de');
      return `Applying for German citizenship by descent from the United States means choosing between two different files, both decided by the Federal Office of Administration in Cologne. If every person in your line was German when the next one was born, you are German already and you apply for a certificate of citizenship, which costs ${h.cur(K.fee.amount, 'EUR')} and takes two to three years according to the German missions. If the line was cut by the old rules against mothers married to foreigners, or against unmarried fathers, you file a declaration under ${h.src('de-stag-5', 'section 5 of the Nationality Act')}. That declaration is free, needs no German and no residence, and must reach the Federal Office by ${h.date(K.cutoffs.s5Deadline)}. Citizenship begins the day it arrives. People born before May 23, 1949 in the same situation cannot use section 5; they apply for discretionary naturalization, which asks for German. Forms are in German and documents must be certified copies.`;
    },
    faqs: (h) => [
      { q: 'Is the August 2031 deadline a postmark date?', a: `No. The ${h.src('de-bva-eer-merkblatt-en', 'Federal Office leaflet')} ties the deadline to receipt: the declaration has to be in Cologne by the last day, and one that arrives later does not give citizenship. Mail from the United States, or forwarding through a mission, can take weeks, so plan to send it well before 2031 rather than in the final months.` },
      { q: 'Can my children file the section 5 declaration with me?', a: 'They can file at the same time, but not on your form. Section 5 covers the person who was left out and every descendant of that person, and each of them makes a separate declaration with a separate set of annexes. A declaration filed for a parent does not by itself make an adult child German, so each adult in the family needs to send one before the deadline.' },
      { q: 'Do I need to visit a German consulate to apply?', a: `Not for section 5: the Federal Office accepts the declaration by mail, or forwarded by a mission. For a certificate of citizenship, the ${h.src('de-gi-certificate', 'missions in the United States')} ask for a short questionnaire first, then forward the full file to Cologne, and they hand over the certificate at the end. A passport is always a separate appointment.` },
    ],
    body: (h) => {
      const K = h.C('de');
      return `
<h2>Which application is yours</h2>
<p>Before filling in anything, run your line through the ${h.a('germany', 'main Germany page')} or the ${h.a('home', 'family tree checker')}. The result sends you to one of three files.</p>
${h.table(['Your situation', 'File', 'Fee'], [
  ['Every link was German at the next birth', 'Certificate of citizenship (forms F and V)', h.cur(K.fee.amount, 'EUR')],
  ['A link was cut by the mother rule before 1975 or the unmarried father rule before July 1993, birth after May 23, 1949', 'Declaration under section 5 (form EER)', 'Free'],
  ['Same situation, birth before May 23, 1949', 'Discretionary naturalization (section 14)', 'Not free, German required'],
], 'Federal Office of Administration, procedures for people living abroad, October 2026.', ['l', 'l', 'l'])}

<h2>The section 5 declaration step by step</h2>
<p>The Federal Office publishes a ${h.src('de-bva-eer-anleitung', 'step-by-step guide')} for the declaration, which it calls Erklärungserwerb. The core form is EER, the declaration itself, signed by the person who becomes German. Annex EER describes the German ancestor and the reason citizenship was not passed on, and annex AV lists the line of descent, person by person. All three are in German. Write names exactly as they appear on the birth records, including the maiden names of women in the line.</p>
<p>The file then needs the evidence. That means the birth certificate of every person from the German ancestor down to you, the marriage records that explain each birth, and proof that the ancestor was German when the relevant child was born. Typical proof is a German birth record from before 1914, an old German passport or a record showing the ancestor never naturalized before that birth. Add a current criminal record certificate from your country of residence, which in the United States the FBI issues, and a copy of your passport.</p>
<p>The leaflet asks for certified copies, not plain photocopies. A notary, the registrar who issued the record or a German mission can certify a copy. The Federal Office's ${h.src('de-bva-eer-merkblatt-en', 'English leaflet')} says foreign public documents carry a Hague apostille as a rule and that foreign-language documents need a sworn translation, while the German missions in the United States say English records usually need neither. When in doubt, ask the mission or follow the Federal Office's request for missing items. The ${h.a('documents', 'US documents guide')} lists where each apostille comes from.</p>

<h2>Where to send it and what happens next</h2>
<p>The declaration goes to the Federal Office of Administration in Cologne, either directly by mail or through the German mission for your area. The office checks each link, may ask for more documents and then sends a certificate confirming that you acquired German citizenship on the day your declaration arrived. On the ${h.src('de-bva-eer-dauer', 'length of the procedure')} it gives no figure: files are handled in order of receipt and the time depends on the case. There is no fee (${h.src('de-bva-eer-gebuehren', 'fee page')}).</p>
<p>The rule that started all this came into force on August 20, 2021 (${h.src('de-bva-2021', 'Federal Office notice')}), with a ten-year window. The deadline is ${h.date(K.cutoffs.s5Deadline)}, and it is a date of receipt.</p>

<h2>If you are already German</h2>
<p>For a certificate of citizenship the path starts with the German mission, not with Cologne. The ${h.src('de-gi-certificate', 'missions in the United States')} ask for a questionnaire about the line, look at it and then tell you whether a full application is worth filing. The full file uses form F for you and annex V for each ancestor back to the person who held German papers or was born in Germany before 1914. The fee is ${h.cur(K.fee.amount, 'EUR')} and the missions give two to three years. Once you hold the certificate you can apply for a German passport at the same mission.</p>

<h2>After citizenship: passport, taxes, the next generation</h2>
<p>A German passport application is a separate appointment at a mission, with its own fee. US citizenship is not affected: Germany has accepted dual citizenship since June 2024, and the ${h.a('dual', 'US rules on dual nationality')} raise no objection. Your future children born abroad are German through you, but if you were born abroad after 1999 their births must be registered within a year. The ${h.a('cost', 'cost calculator')} adds up the US records, and the ${h.a('austria', 'Austria page')} covers a related route for families persecuted between 1933 and 1945.</p>`;
    },
  },
});
