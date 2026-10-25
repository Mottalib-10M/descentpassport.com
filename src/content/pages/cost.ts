import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'cost',
  group: 'paperwork',
  order: 500,
  tool: { kind: 'cost', props: { country: 'it' } },
  related: ['documents', 'italy-requirements', 'second-passport', 'home', 'italy-apply'],
  sources: ['ca-cdph-fees', 'us-ca-sos-apostille', 'us-ecfr-22-cfr-22-1', 'us-uscis-g1055', 'us-nara-dual-citizenship-faq', 'it-cons-ny-tariffe'],
  en: {
    slug: 'citizenship-by-descent-cost',
    nav: 'Cost calculator',
    card: 'Records, apostilles, naturalization proof, translations and the country fee, priced for your line with official US fees.',
    title: 'Citizenship by descent cost: records, apostilles and fees',
    description: 'What a citizenship by descent file costs in 2026: US certified records, state and federal apostilles, USCIS and National Archives fees, translations, fees.',
    h1: 'What a citizenship by descent file costs',
    intro: 'Choose the country and the ancestor, adjust prices to your state if you know them: the US side is totaled in dollars, the country fee shown in its currency.',
    resume: (h) => {
      const R = h.P.us.records, A = h.P.us.apostille;
      return `The cost of citizenship by descent is mostly paperwork on the US side, plus a fee that ranges from nothing to several hundred dollars. Certified copies of vital records are priced by each state: in California, ${h.usd(R.californiaBirth.fee)} for a birth record, ${h.usd(R.californiaMarriage.fee)} for a marriage and ${h.usd(R.californiaDeath.fee)} for a death since January 1, 2026 (${h.src('ca-cdph-fees', 'CDPH')}). Countries that want apostilles add the state's fee per document, ${h.usd(A.californiaSos.fee)} at the California Secretary of State, and ${h.usd(A.federal.fee)} at the State Department for federal documents such as USCIS letters (${h.src('us-ecfr-22-cfr-22-1', '22 CFR 22.1')}). Proof about the ancestor's naturalization costs ${h.usd(R.naraNaturalization.fee)} for a National Archives certified copy, or ${h.usd(R.uscisNonExistenceOnline.fee)} online for a USCIS certificate that no record exists. Translations are quoted by translators. The country fee comes last: free in Germany's declaration, ${h.cur(h.C('ie').fee.amount, 'EUR')} for an Irish adult, ${h.usd(h.C('it').usdFee.amount)} at Italy's New York consulate.`;
    },
    faqs: (h) => [
      { q: 'Why is the Italian file so much more expensive than the Irish one?', a: 'Because Italy wants an apostille and a translation on every US record and proof of the ancestor\'s naturalization status, while Ireland takes original records in English without apostilles. With the same number of records, the formalities alone can double the US side, before the consular fee, which is also higher.' },
      { q: 'Can I use photocopies of old certificates I already have?', a: 'Rarely. Consulates ask for certified copies issued by the vital records office, often recent ones, and an apostille can only be placed on a certified copy. Family originals help to find dates and places; ordering new certified copies is usually the first real expense.' },
      { q: 'Are USCIS genealogy searches needed in every case?', a: `No. They serve to find an ancestor's naturalization file when the date or court is unknown: ${h.usd(h.P.us.records.uscisIndexOnline.fee)} online for the index search, then the same for the record (${h.src('us-uscis-g1055', 'USCIS fee schedule')}). If you already know the court, a certified copy from the National Archives or the county is cheaper and certified.` },
    ],
    body: (h) => `
<h2>Line by line</h2>
${h.table(['Item', 'Official price', 'Who issues it'], [
  ['Certified birth record (California)', h.usd(h.P.us.records.californiaBirth.fee), 'State or county vital records'],
  ['Certified marriage record (California)', h.usd(h.P.us.records.californiaMarriage.fee), 'State or county vital records'],
  ['Certified death record (California)', h.usd(h.P.us.records.californiaDeath.fee), 'State or county vital records'],
  ['State apostille (California)', h.usd(h.P.us.apostille.californiaSos.fee), 'Secretary of State'],
  ['Federal apostille', h.usd(h.P.us.apostille.federal.fee), 'State Department, Office of Authentications'],
  ['Naturalization record, certified', h.usd(h.P.us.records.naraNaturalization.fee), 'National Archives'],
  ['Certificate of non-existence', `${h.usd(h.P.us.records.uscisNonExistenceOnline.fee)} online, ${h.usd(h.P.us.records.uscisNonExistenceOnline.paper)} paper`, 'USCIS'],
], 'California prices by default; other states set their own.', ['l', 'r', 'l'])}
<h2>How the calculator counts</h2>
<p>For an ancestor who is your parent, grandparent or great-grandparent, the calculator counts one US birth record for each person born in the United States in the line, you included, one marriage record for the ancestor and each person below, and a death record for each deceased person. You can add records for divorces, name changes or corrections. Records from the old country, such as an Italian birth extract or an Irish civil birth certificate, are not counted: they are ordered abroad and priced there.</p>
<p>Apostilles are counted only for countries that ask for them on US records: Italy, Poland, France, Portugal, Greece, Hungary, the Czech Republic and Austria for your own records. Ireland, the United Kingdom, Canada and Mexico do not ask for them on the pages read. For the others the calculator counts them and tells you to ask the consulate. The ${h.a('documents', 'checklist')} shows each country's rule.</p>
<h2>Translations</h2>
<p>No official price exists: enter your translator's quote per document. Italy, Poland, France, Portugal, Greece, Hungary and the Czech Republic want translations of English records; Germany, Austria and Spain accept English in most cases; Ireland, the United Kingdom and Canada work in English. Some countries require a sworn translator from their own list, which costs more than a general translator.</p>
<h2>The country fee</h2>
<p>Fees are shown in the currency the country sets. Italy's is ${h.cur(h.C('it').fee.amount, 'EUR')} per adult, charged in dollars at a rate fixed each quarter, ${h.usd(h.C('it').usdFee.amount)} at New York until December 31, 2026 (${h.src('it-cons-ny-tariffe', 'fee table')}). Poland's consular fee is ${h.usd(h.C('pl').fee.amount)}, the Czech declaration ${h.usd(h.C('cz').usdFee.amount)} at the October 2026 rate. Germany's declaration and naturalization for descendants of persecuted people are free.</p>
<h2>Saving money without cutting corners</h2>
<p>Check the line with the ${h.a('home', 'family tree checker')} before ordering anything, then order records in the order of the chain and compare each one with the next before paying for apostilles. The ${h.a('documents', 'document checklist')} lists what each country wants, and the ${h.a('italy-requirements', 'Italian requirements page')} details the most demanding file.</p>`,
  },
});
