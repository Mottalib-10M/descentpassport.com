import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ireland-dual',
  group: 'countries',
  order: 211,
  country: 'ie',
  tool: { kind: 'mini:ie-dual' },
  related: ['ireland', 'dual', 'countries-dual', 'dual-taxes', 'second-passport'],
  sources: ['ie-ci-right', 'ie-dfa-fbr', 'ie-isb-1956-s7', 'ie-ci-fbr', 'ie-ci-descent'],
  en: {
    slug: 'irish-dual-citizenship',
    nav: 'Irish dual citizenship',
    card: 'Keeping US citizenship as an Irish citizen, registration versus passport, and the order in which a family should register.',
    title: 'Irish dual citizenship for Americans: FBR and passport',
    description: 'Irish dual citizenship with US citizenship: no renunciation, the Foreign Births Register before the passport, family fees and why the order of steps matters.',
    h1: 'Irish dual citizenship for American families',
    intro: 'Enter how many adults and children in your family would register and how the Irish-born relative is linked to you: the tool adds up the fees.',
    resume: (h) => {
      const K = h.C('ie');
      return `Irish dual citizenship is open to Americans without any trade-off: ${h.src('ie-ci-right', 'Ireland allows dual citizenship')}, and the United States does not make you choose. What people often mix up is the order of the steps. An Irish passport is proof of citizenship you already hold; it is not how you become Irish. If your parent was born on the island of Ireland, you are Irish from birth and go straight to the passport. If the Irish-born relative is a grandparent, you first enter the ${h.src('ie-dfa-fbr', 'Foreign Births Register')}, which costs ${h.cur(K.fee.amount, 'EUR')} per adult and ${h.cur(K.feeMinor.amount, 'EUR')} per child and takes about ${K.time.minMonths} months, and only then apply for the passport. Registration makes you Irish from the date of entry, not from birth, so a child born before the parent registers cannot follow through that parent. Families with plans for children gain by registering early.`;
    },
    faqs: (h) => [
      { q: 'Is there a difference between Irish dual citizenship and Irish dual nationality?', a: 'No. Both phrases describe the same situation: you hold Irish citizenship and another one at the same time. Irish law speaks of nationality and citizenship together, in the title of the 1956 Act itself. For an American, it means one Irish passport and one US passport, each valid on its own.' },
      { q: 'Should my children register at the same time as me?', a: `It depends on the relative. If the Irish-born ancestor is your grandparent, your children are great-grandchildren and can register only through you, after your own entry. A child born before your registration date has no route through you, while one born afterwards does. Each child then pays the under-18 fee of ${h.cur(h.C('ie').feeMinor.amount, 'EUR')}.` },
      { q: 'Do I have to travel to Ireland or swear an oath to become an Irish dual citizen?', a: 'No. The Foreign Births Register is handled by mail and online from Dublin, with no interview, no oath, no language test and no residence. You visit no consulate for the registration. A witness near your home signs the form and photos, and the original documents travel by tracked mail.' },
    ],
    body: (h) => {
      const K = h.C('ie');
      return `
<h2>Registration first, passport second</h2>
${h.table(['Irish-born relative', 'Step 1', 'Step 2', 'Irish from'], [
  ['Parent', 'None', 'Passport', 'Birth'],
  ['Grandparent', `Foreign Births Register, ${h.cur(K.fee.amount, 'EUR')} adult`, 'Passport', 'Date of registration'],
  ['Great-grandparent (parent registered before your birth)', 'Foreign Births Register', 'Passport', 'Date of registration'],
], 'Irish Nationality and Citizenship Act 1956, s. 7; Department of Foreign Affairs.', ['l', 'l', 'l', 'l'])}
<p>The passport office only issues passports to people who are already Irish. For someone with an Irish-born parent, the Irish birth record of that parent and the US long-form birth certificate are the proof. For everyone else, the proof is the Foreign Birth Registration certificate mailed by the ${h.src('ie-dfa-fbr', 'Department of Foreign Affairs')} at the end of the registration. Without that certificate, a grandchild has nothing to prove Irish citizenship with. The ${h.a('ireland', 'Irish citizenship by descent page')} sets out the documents for each step.</p>
<h2>What the US side says</h2>
<p>The United States lets its citizens acquire another nationality without losing their own, as long as they do not set out to give up US citizenship. The ${h.a('dual', 'US dual citizenship page')} explains the rules on entering and leaving the country with your US passport, which remain the same once you are Irish. On the Irish side, ${h.src('ie-ci-right', 'Citizens Information')} confirms that Ireland allows dual citizenship and asks you to renounce nothing. You can hold both for life and pass both to children born afterwards, subject to each country's own rules for people born abroad.</p>
<p>Being Irish also makes you a citizen of the European Union, with the right to live, study and work in any member state. That is the main practical gain for most American families. The ${h.a('second-passport', 'second passport guide')} compares Ireland with other European routes and the ${h.a('countries-dual', 'dual citizenship table')} shows which countries ask for renunciation.</p>
<!--tool:mini:ie-dual-->
<h2>Why the date of registration matters</h2>
<p>For entries made after July 1, 1986, ${h.src('ie-isb-1956-s7', 'section 7 of the 1956 Act')} makes the person an Irish citizen from the day of registration. This single rule shapes family planning. Suppose your grandmother was born in County Mayo. You can register through her. Your daughter, born in 2015, is her great-granddaughter: she can register only if you were already in the register when she was born. If you register in 2026, she has no route through you, but a child born to you in 2028 would. The ${h.src('ie-ci-fbr', 'Citizens Information page on the register')} makes the same point and suggests that expectant parents mention a pregnancy on their application.</p>
<p>When the Irish-born relative is your parent, the question does not arise for you: you are Irish from birth, so your children born at any time are children of an Irish citizen and can register through you.</p>
<h2>What a family pays</h2>
<p>Each person files a separate application and pays a separate fee: ${h.cur(K.fee.amount, 'EUR')} from age 18 and ${h.cur(K.feeMinor.amount, 'EUR')} below, postage included. The Department publishes a wait of about ${K.time.minMonths} months in strict date order. Passports are a second set of fees once the registrations are done, which this page does not price. US records add their own cost: long-form birth and marriage certificates for each link, which the ${h.a('cost', 'cost calculator')} estimates.</p>
<h2>Taxes and paperwork after you become Irish</h2>
<p>Irish citizenship does not change your US tax position. The United States taxes its citizens on worldwide income wherever they live, so an Irish bank account or a job in Dublin brings US reporting with it. The ${h.a('dual-taxes', 'dual citizen tax page')} goes through the foreign bank account report and the other forms that apply.</p>`;
    },
  },
});
