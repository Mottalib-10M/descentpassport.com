import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ireland',
  group: 'countries',
  order: 210,
  country: 'ie',
  tool: { kind: 'mini:ie-fbr' },
  mini: { kind: 'cost', props: { country: 'ie' } },
  related: ['ireland-dual', 'documents', 'cost', 'dual', 'countries-dual'],
  sources: ['ie-dfa-fbr', 'ie-ci-fbr', 'ie-ci-descent', 'ie-ci-right', 'ie-act-1956-revised', 'ie-isb-1956-s7'],
  en: {
    slug: 'irish-citizenship-by-descent',
    nav: 'Irish citizenship by descent',
    card: 'Parent or grandparent born in Ireland, the great-grandparent exception, the Foreign Births Register fee and its 12-month wait.',
    title: 'Irish citizenship by descent: parent, grandparent, FBR',
    description: 'Irish citizenship by descent for Americans: a parent born in Ireland, a grandparent through the Foreign Births Register, the €278 fee and a 12-month wait.',
    h1: 'Irish citizenship by descent for Americans',
    intro: 'Pick the relative who was born in Ireland and say whether your parent was registered before your birth: the tool names your route, fee and wait.',
    resume: (h) => {
      const K = h.C('ie');
      return `Irish citizenship by descent rests on one question: who in your family was born on the island of Ireland, which includes Northern Ireland. If it was your parent, and that parent was an Irish citizen when you were born, you are already Irish and you simply apply for a passport. If it was a grandparent, you can become Irish by entering your birth in the ${h.src('ie-dfa-fbr', 'Foreign Births Register')}, run online by the Department of Foreign Affairs in Dublin. Your parent does not need to be registered or to hold a passport, and there is no age limit or deadline. A great-grandparent counts only when your parent was entered in the register before you were born; a later registration does not reach you. The fee is ${h.cur(K.fee.amount, 'EUR')} for an adult and ${h.cur(K.feeMinor.amount, 'EUR')} for a child under 18, postage included, and the Department states a wait of about ${K.time.minMonths} months, handled in strict date order. Ireland lets you keep US citizenship.`;
    },
    faqs: (h) => [
      { q: 'Does a grandparent born in Northern Ireland count for the Foreign Births Register?', a: 'Yes. The test is birth on the island of Ireland, so Belfast, Derry or any town in the six northern counties counts the same as Cork or Galway. What the Department needs is the grandparent\'s civil birth certificate. For a birth before civil registration began in 1864, it accepts a baptismal certificate instead.' },
      { q: 'Am I Irish from birth once my registration goes through?', a: `No. ${h.src('ie-isb-1956-s7', 'Section 7 of the 1956 Act')} makes you a citizen from the date of entry in the register, for every registration made after July 1, 1986. That date matters for your own children: a child born before your registration cannot use you to register later, while a child born afterwards can.` },
      { q: 'My Irish-born ancestor is a great-grandparent. Is there any route left?', a: 'Only if your parent was entered in the Foreign Births Register before your birth. If not, the right to register stops with your parent\'s generation. Irish associations can support a discretionary naturalization request to the Minister for Justice, but that is a grant at the Minister\'s choice, not a right.' },
      { q: 'Can I apply for an Irish passport while my registration is pending?', a: 'No. The passport service needs your Foreign Birth Registration certificate first, so the passport comes after the roughly year-long registration. People with a parent born in Ireland skip that step entirely: they are Irish already and go straight to a passport application, with the parent\'s Irish birth record as proof of the link.' },
    ],
    body: (h) => {
      const K = h.C('ie');
      return `
<h2>Who qualifies, generation by generation</h2>
${h.table(['Relative born on the island of Ireland', 'Your status', 'What you do'], [
  ['Parent (an Irish citizen when you were born)', 'Irish from birth', 'Apply for a passport'],
  ['Grandparent', 'Can register', 'Foreign Births Register'],
  ['Great-grandparent, parent registered before your birth', 'Can register', 'Foreign Births Register'],
  ['Great-grandparent, parent not registered in time', 'No right', 'Discretionary naturalization only'],
], 'Irish Nationality and Citizenship Act 1956, s. 7, and the Department of Foreign Affairs guidance.', ['l', 'l', 'l'])}
<p>The ${h.src('ie-act-1956-revised', '1956 Act')} draws a clear line. A person born abroad to an Irish citizen who was born in Ireland is Irish automatically, with nothing to register. A person born abroad to an Irish citizen who was themselves born abroad is entitled to Irish citizenship but must claim it by registration. That second rule is what opens the door to grandchildren: your parent, born in the United States to an Irish-born mother or father, was an Irish citizen at your birth even without a passport, so you can register.</p>
<p>The same mechanism explains the great-grandparent rule. Your grandparent, born abroad, became Irish only on the day of registration. If your parent registered before you were born, your parent was an Irish citizen at your birth and you can register in turn. If your parent registered after your birth, you were born to a non-citizen and the chain stops. The ${h.src('ie-ci-fbr', 'Citizens Information guide')} spells out the same point for expectant parents, who should mention a pregnancy on their own application.</p>
<p>The Department's guidance draws no distinction between an Irish-born grandmother and an Irish-born grandfather, and asks for proof of each family link through civil records. There is no language test, no residence requirement, no oath and no age limit, which is why the register is often the most direct European route open to Americans.</p>
<h2>How the Foreign Births Register works</h2>
<p>Everything starts online on the ${h.src('ie-dfa-fbr', 'Department of Foreign Affairs site')}. You fill in the form, pay by card, print the completed form and have it signed by a witness who is not a relative. The witness also signs two of your four passport photos and certifies a copy of your photo ID. Police officers, teachers, doctors, nurses, notaries and bank managers are among the professions the Department accepts. You then post the printed form and the original documents by tracked mail to the address shown on the form. The originals come back by registered post once the file is processed.</p>
<p>No consulate decides your file and there is no interview. The Foreign Births Registration section in Dublin checks the documents, enters your birth in the register and mails you a Foreign Birth Registration certificate. With that certificate in hand, you can apply for an Irish passport.</p>
<!--tool:mini:ie-fbr-->
<h2>Documents to gather</h2>
<p>The file follows the line from the Irish-born ancestor down to you. For the grandparent route you send, for yourself, your long-form birth certificate showing your parents, your marriage certificate if your name changed, a certified copy of your photo ID and two proofs of address. For your parent, the link, you send the long-form birth certificate, a marriage certificate or name-change record if relevant, and a certified copy of photo ID, or a death certificate if your parent has died. For the grandparent born in Ireland you send the Irish civil birth certificate, the marriage certificate and photo ID or a death certificate. Children under 18 add a letter from a school or family doctor showing their address.</p>
<p>${K.docs.apostille ? 'US records need an apostille.' : 'The Department\'s list does not ask for apostilles on US records.'} ${K.docs.translation ? 'Records in other languages must be translated.' : 'US records are in English, so no translation is needed.'} What it insists on is originals: civil certificates issued by the state vital records office, not hospital certificates or church records, except the pre-1864 baptism case. Copies, where allowed, carry a signed statement that they are true copies of the original. The ${h.a('documents', 'US records guide')} explains how to order long-form certificates from each state, and the ${h.a('cost', 'cost calculator')} prices them.</p>
<h2>Fee and waiting time</h2>
<p>The fee is ${h.cur(K.fee.amount, 'EUR')} for an applicant aged 18 or over and ${h.cur(K.feeMinor.amount, 'EUR')} for a child, both including the postage that returns your originals (${h.src('ie-dfa-fbr', 'Department of Foreign Affairs')}). It is paid online when you submit the form, per person: a parent and two children registering together pay three fees. The Irish passport is a separate application with its own fee once the registration is done.</p>
<p>The Department gives a processing time of about ${K.time.minMonths} months for a complete application and works in strict date order, so a file posted today joins the back of the queue. The page carries no update date, so treat the figure as the Department's current estimate rather than a promise. The ${h.a('ireland-dual', 'Irish dual citizenship page')} sets out what each family member pays and receives.</p>
<h2>Keeping your US citizenship</h2>
<p>Ireland does not ask you to give up any other citizenship: ${h.src('ie-ci-right', 'Citizens Information')} states that Ireland allows dual citizenship. The United States does not require you to choose either; the ${h.a('dual', 'US position on dual citizenship')} explains why taking a second nationality does not put your US passport at risk. You enter and leave the United States on your US passport. Once Irish, you are also an EU citizen, free to live and work across the European Union. The ${h.a('countries-dual', 'country-by-country table')} compares Ireland with the other routes, and ${h.a('dual-taxes', 'the tax page')} covers what US filing rules still apply when you open an account in Dublin.</p>
<h2>When the line does not fit</h2>
<p>If your Irish-born relative is further back than a grandparent and your parent never registered, the register is closed to you. Naturalization on the basis of Irish associations exists, but it is a discretionary decision of the Minister for Justice, with no published list of who qualifies. Living in Ireland for the standard residence period is the other path. The ${h.a('home', 'family tree checker')} can test the same line against the other countries where your family may have roots, and the ${h.a('second-passport', 'second passport guide')} compares what each route asks of you.</p>`;
    },
  },
});
