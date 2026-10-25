import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'italy-requirements',
  group: 'italy',
  order: 110,
  country: 'it',
  tool: { kind: 'mini:it-docs' },
  mini: { kind: 'cost', props: { country: 'it' } },
  related: ['italy', 'italy-apply', 'documents', 'cost', 'italy-1948'],
  sources: ['it-law-91-art3bis', 'it-cons-ny-iure', 'it-cons-ny-doclist', 'us-uscis-g1566', 'us-nara-dual-citizenship-faq', 'hcch-us-competent-authorities'],
  en: {
    slug: 'italian-citizenship-requirements',
    nav: 'Requirements and documents',
    card: 'The two conditions of the 2025 law, then every record a US consulate asks for, with apostilles and translations counted.',
    title: 'Italian citizenship requirements: line, records, apostilles',
    description: 'Italian citizenship requirements for Americans in 2026: the line accepted by Law 74/2025, each record a consulate wants, apostilles, translations, proof.',
    h1: 'Italian citizenship requirements, record by record',
    intro: 'Say which ancestor is Italian and how many people in the line have died: the tool counts the US records, apostilles and translations.',
    resume: (h) => `The requirements for Italian citizenship by descent come in two layers. The first is the line itself. Since the 2025 reform, a person born abroad who holds US citizenship qualifies only through a parent or grandparent who holds, or held at death, Italian citizenship alone, or through an Italian parent who lived two years in a row in Italy before the birth; files lodged by March 27, 2025 keep the old rules (${h.src('it-law-91-art3bis', 'art. 3-bis')}). The second layer is proof. The consulate wants the Italian ancestor's birth extract from the comune, then a long-form certified birth record for each person down to you, marriage records and death records, each US record carrying an apostille from the issuing state and an Italian translation. It also wants proof of the ancestor's status in the United States: a naturalization record if they naturalized, or a USCIS certificate that no record exists if they never did. No language test, oath or residence in Italy is required for recognition itself.`,
    faqs: (h) => [
      { q: 'Do I need to speak Italian to be recognized by descent?', a: 'No. Recognition by descent confirms a citizenship you are deemed to hold from birth, so there is no language test, no oath and no residence condition. Language requirements apply to naturalization by marriage or residence, which are separate routes. You will still deal with Italian forms, which the consulate publishes with instructions in English on some pages.' },
      { q: 'Why does the consulate want proof that my grandfather never naturalized?', a: `Because the 2025 law lets a grandparent pass citizenship only if he held Italian citizenship alone. The proof is a USCIS certificate of non-existence (${h.src('us-uscis-g1566', 'Form G-1566')}), with National Archives or county court no-record letters when the consulate asks for them. If he did naturalize, the line usually fails under the new rules.` },
      { q: 'Which state office apostilles a birth certificate?', a: `The authority designated by the state that issued it, generally the Secretary of State, never the federal State Department. Federal documents, such as a USCIS letter, are apostilled by the State Department's Office of Authentications. The Hague Conference keeps the ${h.src('hcch-us-competent-authorities', 'list of US competent authorities')}.` },
    ],
    body: (h) => `
<h2>Condition one: an ancestor the 2025 law still accepts</h2>
<p>Start with the line before ordering any record. The ${h.a('italy', 'main Italy page')} sets out the four situations; the short version is that a great-grandparent no longer works unless a case was filed in time, and that a parent or grandparent works only if they never took another citizenship, or if your Italian parent lived in Italy for two years before your birth. Running the ${h.a('home', 'family tree checker')} first saves the cost of a full file that cannot succeed.</p>
<h2>Condition two: a complete chain of records</h2>
${h.table(['Record', 'For whom', 'US formalities'], [
  ['Birth extract (estratto)', 'The Italian ancestor', 'Issued by the comune, within 6 months, no apostille'],
  ['Long-form birth certificate', 'Each person born in the US, you included', 'Apostille from the state, Italian translation'],
  ['Marriage certificate', 'The ancestor and each person below', 'Apostille, translation; divorce decrees too'],
  ['Death certificate', 'Each deceased person in the line', 'Apostille, translation'],
  ['Naturalization or non-existence proof', 'The ancestor', 'NARA certified copy (no apostille) or USCIS letter (apostille)'],
], 'From the document list of the Italian Consulate General in New York.', ['l', 'l', 'l'])}
<p>The ${h.src('it-cons-ny-doclist', 'New York list')} is precise about naturalization proof. A certified copy of the declaration of intention, petition and oath from the National Archives needs neither apostille nor translation. Copies from a county court need an apostille. USCIS and National Archives no-record letters need an apostille too. A USCIS genealogy copy is a photocopy, not a certified copy, and some consulates accept it only for the naturalization certificate itself.</p>
<h2>Names, dates and small errors</h2>
<p>A Giuseppe who became Joseph, a birth year that shifts by one on a census, a mother's maiden name spelled two ways: consulates look for one person across all records. Minor variations are often accepted when other data match; larger ones need a court amendment in the issuing state before you file. Check every record against the next one in the chain before paying for apostilles, since an apostille certifies a signature and not the content.</p>
<h2>Forms and proof of address</h2>
<p>Applicants fill in the application form that matches their line, sign it before a notary and, at New York, apostille it, all within six months of the appointment. Add a passport copy and proof that you live in the consulate's district, such as a driver's license or a utility bill. The fee is charged per adult applicant, so two adult siblings pay it twice.</p>
<h2>What it adds up to</h2>
<p>For a grandparent line with one deceased person, expect six or seven US records, as many apostilles and translations, plus the ancestor's naturalization proof. The ${h.a('cost', 'cost calculator')} prices each item with California's official fees by default, and the ${h.a('documents', 'checklist for all countries')} shows how Italy compares with Ireland or Poland, which ask for fewer formalities. Once the file is ready, the ${h.a('italy-apply', 'application page')} explains where to file in 2026 and after the 2029 change.</p>`,
  },
});
