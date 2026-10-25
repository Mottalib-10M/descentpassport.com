import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lithuania',
  group: 'countries',
  order: 285,
  country: 'lt',
  tool: { kind: 'mini:lt-reinstate' },
  mini: { kind: 'cost', props: { country: 'lt' } },
  related: ['latvia', 'poland', 'documents', 'countries-dual', 'cost'],
  sources: ['lt-embassy-usa-reinstatement', 'lt-migration-fees', 'lt-law-citizenship-en', 'us-dos-authentications'],
  en: {
    slug: 'lithuanian-citizenship-by-descent',
    nav: 'Lithuanian citizenship by descent',
    card: 'Reinstatement for children, grandchildren and great-grandchildren of pre-1940 citizens, the March 1990 rule for keeping US citizenship, the EUR 120 fee.',
    title: 'Lithuanian citizenship by descent: reinstatement and dual',
    description: 'Lithuanian citizenship by descent: reinstatement for great-grandchildren of citizens before June 15, 1940, when you keep US citizenship, MIGRIS, EUR 120 fee.',
    h1: 'Lithuanian citizenship by descent: reinstating a pre-war line',
    intro: 'Say how far back your Lithuanian ancestor is and when they left: the tool tells you whether reinstatement is open and whether you keep US citizenship.',
    resume: (h) => {
      const K = h.C('lt');
      return `Lithuanian citizenship by descent for Americans goes through reinstatement, a procedure for families whose ancestor held citizenship of the Republic of Lithuania before June 15, 1940, the day the Soviet occupation began. According to the ${h.src('lt-embassy-usa-reinstatement', 'Lithuanian embassy in Washington')}, that person's children, grandchildren and great-grandchildren have a right to reinstate citizenship with no deadline, wherever they live. Two limits matter. The ancestor must have held Lithuanian citizenship, which the interwar republic created in 1918: an emigrant who left the Russian Empire before then never had it. And Lithuania accepts dual citizenship only in listed cases. For descendants, the case is an ancestor who was exiled from occupied Lithuania or left the country before March 11, 1990, the day independence was restored. When it applies you keep US citizenship; when it does not, Lithuania asks you to give it up. The state fee for examining the application is ${h.cur(K.fee.amount, 'EUR')} (${h.src('lt-migration-fees', 'Migration Department')}), and the file is lodged online in MIGRIS.`;
    },
    faqs: (h) => [
      { q: 'My great-grandfather left Lithuania in 1905. Can I reinstate citizenship?', a: 'Almost certainly not by reinstatement. The right belongs to descendants of people who held citizenship of the Republic of Lithuania before June 15, 1940, and that republic dates from 1918. Someone who emigrated from the Russian Empire in 1905 and naturalized in the United States never held it, unless records show they registered as a Lithuanian citizen later.' },
      { q: 'Do I have to give up my US citizenship?', a: `Not if your ancestor was exiled or left Lithuania before March 11, 1990, which covers families who fled in 1944 and, on the embassy's wording, those who left between the wars. The ${h.src('lt-embassy-usa-reinstatement', 'embassy page')} lists those cases as exceptions to the renunciation rule; outside them, Lithuania asks for proof that you gave up the other citizenship.` },
      { q: 'Is there a language test for reinstatement?', a: 'No language or history test is listed for reinstatement on the embassy page. What is asked for is paper: proof that the ancestor was a Lithuanian citizen before June 1940, records linking each generation to you, and documents explaining every change of name, each apostilled and translated into Lithuanian.' },
      { q: 'How long does reinstatement take?', a: 'No decision time is published on the pages read. The steps are known: an online application in MIGRIS with scanned documents, a pre-check by the Migration Department, then a visit to a Lithuanian consulate within four months to hand in the originals, and finally the decision and the oath organized by the Ministry of the Interior.' },
    ],
    body: (h) => {
      const K = h.C('lt');
      return `
<h2>Who can reinstate Lithuanian citizenship</h2>
<p>Reinstatement is not a naturalization. It restores a status the family lost through occupation and emigration, and for that reason it asks for no residence in Lithuania. The ${h.src('lt-law-citizenship-en', 'Law on Citizenship')} defines the people it has in mind: citizens of the Republic of Lithuania before June 15, 1940 and their descendants, including those who left the present territory of Lithuania before March 11, 1990 to live permanently in another country. The embassy page sets the generations: children, grandchildren or great-grandchildren of the pre-1940 citizen. A great-great-grandchild has no right of reinstatement of their own, but may become Lithuanian through a parent who reinstates first.</p>
${h.table(['Ancestor', 'Right to reinstate', 'Keep US citizenship'], [
  ['Left before 1918', 'No: never a citizen of the republic', 'Not applicable'],
  ['Citizen, left 1918 to June 1940', 'Yes, up to great-grandchildren', 'Covered by the embassy wording; confirm'],
  ['Citizen, fled or exiled 1940 to 1990', 'Yes, up to great-grandchildren', 'Yes'],
], 'Lithuanian embassy in the US, reinstatement page; Law on Citizenship, art. 2.', ['l', 'l', 'l'])}
<h2>Proving the ancestor was a Lithuanian citizen</h2>
<p>The key document shows directly that the ancestor held Lithuanian citizenship before June 15, 1940. Families usually look for an interwar Lithuanian passport or identity document, or an entry in Lithuanian archives from the 1920s and 1930s. A US naturalization certificate that names Lithuania as the country of former allegiance helps tell the story, but on its own it does not prove citizenship of the republic. Then comes the chain: birth certificates linking each generation, and every document explaining a change of name, such as marriage certificates, court decisions or naturalization records.</p>
<p>Every foreign document, except passports, needs an official translation into Lithuanian and an apostille. State records get theirs from the secretary of state of the issuing state; federal records, such as a naturalization certificate, from the ${h.src('us-dos-authentications', 'State Department')}. Notarized copies are accepted if they carry an apostille too. The ${h.a('documents', 'document checklist')} explains how to order each US record.</p>
<h2>How to apply from the United States</h2>
<ol>
<li><strong>Open a MIGRIS account</strong> and file the reinstatement application online, personally, with scans of every document.</li>
<li><strong>Pay the state fee</strong> of ${h.cur(K.fee.amount, 'EUR')} for the examination of the application.</li>
<li><strong>Wait for the pre-check.</strong> The Migration Department tells you through MIGRIS when the documents have been assessed.</li>
<li><strong>Visit the consulate within four months</strong> of that message to hand in the originals, or send them to the Migration Department.</li>
<li><strong>Take the oath</strong> once citizenship is reinstated, then apply for a Lithuanian passport.</li>
</ol>
<p>The embassy insists that the application be submitted only with all supporting documents: a file sent with gaps is not held open while you look for the rest. People who are not ready to apply can ask for a certificate confirming the right to reinstate, a separate service listed at ${h.cur((K as any).feeCertificate.amount, 'EUR')} on the ${h.src('lt-migration-fees', 'Migration Department fee list')}.</p>
<h2>Dual citizenship: the March 11, 1990 rule</h2>
<p>Lithuania's constitution makes dual citizenship the exception, allowed only in the cases the citizenship law lists. For American families the useful case is the one the embassy spells out: people exiled from occupied Lithuania before March 11, 1990, people who left Lithuania before that date, and their children, grandchildren and great-grandchildren can hold both citizenships. Most Lithuanian-American lines fall into it, whether the ancestor arrived in the 1920s or as a displaced person after 1945. Families whose case is unclear should ask the embassy before filing, because outside the exception reinstatement means giving up US citizenship, which the United States treats as a separate, formal act (${h.a('dual', 'dual citizenship for Americans')}).</p>
<h2>Lithuanian, Polish or Russian Empire?</h2>
<p>Borders around Vilnius changed several times between the wars, and many families from the region were recorded as Polish or Russian subjects. An ancestor from the Vilnius area who held Polish citizenship between 1920 and 1939 may open the ${h.a('poland', 'Polish route')} rather than the Lithuanian one. The citizenship held at the time, not the town's present country, decides. Neighboring Latvia has its own rules for descendants of citizens on June 17, 1940, described on the ${h.a('latvia', 'Latvian page')}, and the ${h.a('countries-dual', 'country table')} compares the dual citizenship rules of the region.</p>`;
    },
  },
});
