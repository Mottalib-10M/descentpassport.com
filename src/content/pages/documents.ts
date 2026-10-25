import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'documents',
  group: 'paperwork',
  order: 510,
  tool: { kind: 'mini:doc-rules' },
  related: ['cost', 'italy-requirements', 'home', 'second-passport', 'dual'],
  sources: ['hcch-us-competent-authorities', 'us-dos-authentications', 'us-nara-naturalization', 'us-uscis-genealogy-faq', 'us-uscis-g1566', 'ie-dfa-fbr', 'it-cons-ny-doclist'],
  en: {
    slug: 'citizenship-by-descent-documents',
    nav: 'Document checklist',
    card: 'Birth, marriage, death and naturalization records, who apostilles what in the US, and which countries want translations.',
    title: 'Citizenship by descent documents: checklist for Americans',
    description: 'Documents for citizenship by descent from the US: long-form records, naturalization proof from USCIS or the Archives, apostilles by state, translations.',
    h1: 'The document checklist, country by country',
    intro: 'Pick a country: the tool says whether it wants apostilles and translations on US records, who decides and what it charges.',
    resume: (h) => `Every citizenship by descent file rests on the same backbone: one birth record for each person from the foreign-born ancestor down to you, the marriage records that link them, death records for those who died, and proof of what the ancestor did about US citizenship. Consulates want long-form certified copies issued by a vital records office, not hospital certificates or family copies. What varies is the formality. Countries bound by the Hague Convention may ask for an apostille on each US record: the state that issued a birth, marriage or death certificate places it, generally through its Secretary of State, while the State Department's Office of Authentications apostilles federal documents such as USCIS letters (${h.src('hcch-us-competent-authorities', 'Hague Conference')}). Italy, Poland, France and Portugal want apostilles and translations; Ireland takes original records without apostilles (${h.src('ie-dfa-fbr', 'Department of Foreign Affairs')}); Canada and the United Kingdom ask for neither on the pages read.`,
    faqs: (h) => [
      { q: 'Where do I find my great-grandfather\'s naturalization record?', a: `Before September 27, 1906, any court could naturalize, so look in county and state court records; federal court files sit at the National Archives facility for that state (${h.src('us-nara-naturalization', 'National Archives')}). After 1906, USCIS holds a copy of the certificate file, which its genealogy program can find from a name and date of birth.` },
      { q: 'What is a certificate of non-existence and who needs one?', a: `It is a USCIS letter stating that no naturalization record exists for a person (${h.src('us-uscis-g1566', 'Form G-1566')}). Italian consulates ask for it to prove an ancestor never naturalized, which since 2025 is what lets a grandparent pass citizenship. National Archives letters are only negative search letters and do not replace it.` },
      { q: 'Do I need an apostille on an apostille\'s translation?', a: 'Countries that require translations want the apostille translated too, since it is part of the document. The translation itself usually needs no apostille when done by a sworn or certified translator accepted by the consulate. Always follow the consulate\'s own list, which settles who may translate.' },
    ],
    body: (h) => `
<h2>The backbone of every file</h2>
${h.table(['Record', 'For whom', 'Where to order it'], [
  ['Birth record, long form', 'Each person in the line, you included', 'State or county vital records'],
  ['Marriage record', 'The ancestor and each person below', 'County clerk or state vital records'],
  ['Death record', 'Each deceased person in the line', 'State or county vital records'],
  ['Naturalization record', 'The ancestor, if naturalized', 'Court, National Archives or USCIS'],
  ['No-record proof', 'The ancestor, if never naturalized', 'USCIS (certificate of non-existence)'],
  ['Foreign birth or baptism record', 'The ancestor', 'Civil registry or parish abroad'],
], 'What consulates in the US ask for, in substance; each publishes its own list.', ['l', 'l', 'l'])}
<h2>Who apostilles what</h2>
<p>An apostille certifies the signature of the official who issued a document. In the United States, the authority depends on the issuer. State documents, which include birth, marriage and death certificates and county court records, are apostilled by the competent authority of that state, generally the Secretary of State. Federal documents, such as a USCIS certificate or a National Archives letter, are apostilled by the ${h.src('us-dos-authentications', 'State Department\'s Office of Authentications')} for ${h.usd(h.P.us.apostille.federal.fee)} each. Federal court records are apostilled by the clerks of those courts.</p>
<!--tool:frise|{"preset":"us-apostille"}-->
<h2>Naturalization records, the hardest piece</h2>
<p>The ${h.src('us-uscis-genealogy-faq', 'USCIS genealogy program')} sends photocopies of naturalization certificate files from 1906 to 1956, after an index search and a record request; it cannot certify them. The National Archives issues certified copies of the federal court records it holds. Italian consulates accept a National Archives certified copy without apostille, but want an apostille on county court copies and on no-record letters (${h.src('it-cons-ny-doclist', 'New York list')}). For Germany and Poland, the date of naturalization decides whether the line holds, so the record matters as much as for Italy.</p>
<h2>Names that change along the chain</h2>
<p>Immigrant names were often anglicized, misspelled or shortened: Wojciech became Albert, Concetta became Connie. Consulates match people across records using dates, places and parents' names. Small variations usually pass; contradictions on key data, such as a different father's name or a birth year off by several years, may need an amendment by the issuing state before you file. Compare each record with the next before ordering apostilles.</p>
<h2>Country requirements at a glance</h2>
<p>Pick a country in the tool above. Where the official pages do not say whether an apostille is required, the tool says to ask the consulate rather than guess. The ${h.a('cost', 'cost calculator')} then prices the whole file, and the ${h.a('italy-requirements', 'Italian requirements page')} walks through the most demanding list item by item. If you are still choosing a line, start with the ${h.a('home', 'family tree checker')}.</p>`,
  },
});
