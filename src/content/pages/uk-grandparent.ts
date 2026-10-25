import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'uk-grandparent',
  group: 'countries',
  order: 241,
  country: 'gb',
  tool: { kind: 'mini:gb-double' },
  related: ['uk', 'home', 'second-passport', 'countries-dual', 'cost'],
  sources: ['gb-bna-s3', 'gb-mn1-guide', 'gb-fees', 'gb-ancestry', 'gb-ard-guide', 'gb-bna-s2'],
  en: {
    slug: 'british-citizenship-by-descent/grandparent',
    nav: 'British citizenship through a grandparent',
    card: 'Why a British grandparent alone is not enough for an adult, the double descent route for children and its £1,000 fee.',
    title: 'British citizenship by descent through a grandparent',
    description: 'British citizenship by descent through a grandparent: no route for adults, double descent registration for children under 18, the 3-year rule and a £1,000 fee.',
    h1: 'British citizenship through a grandparent',
    intro: 'Enter the child\'s age and whether the British parent lived in the UK for 3 years before the birth: the tool says whether form MN1 applies.',
    resume: (h) => {
      const K = h.C('gb');
      return `British citizenship by descent through a grandparent is the question most Americans with an English or Scottish grandmother ask, and the answer depends on age. For an adult, a grandparent born in the UK opens no route as of right: citizenship passes automatically one generation abroad, so your parent was British but you are not. For a child under 18, ${h.src('gb-bna-s3', 'section 3(2)')} of the 1981 Act allows registration, sometimes called double descent, if the parent who is British by descent lived in the UK for ${K.cutoffs.parentResidenceYears} years in a row at some point before the child's birth, with no more than 270 days away. The application is made on form MN1, costs ${h.cur(K.feeChild.amount, 'GBP')} and must be filed before the 18th birthday. The child then becomes British by descent. The UK Ancestry visa is a different thing: a work visa open only to Commonwealth citizens, not to someone who holds US citizenship alone.`;
    },
    faqs: (h) => [
      { q: 'What does double descent mean in British nationality?', a: 'It is an informal name for registering a child two generations away from a British-born ancestor. The grandparent was British in their own right, the parent is British by descent, and the child can be registered under section 3(2) if the parent once lived in the UK for three years. The phrase does not appear in the Act.' },
      { q: 'My child turns 18 next year. Is it too late to apply on form MN1?', a: `Not yet, but the application must reach the Home Office while the child is still under 18; the date of application is the date it is received. If the child turns 18 before the decision, an extra ${h.cur(h.C('gb').fee.amount, 'GBP')} ceremony fee is due at that point, on top of the ${h.cur(h.C('gb').feeChild.amount, 'GBP')} registration fee.` },
      { q: 'Can my parent\'s college years in London count toward the 3 years?', a: 'Yes, if they add up to a continuous period of 3 years before the child was born, with absences of no more than 270 days in total over that period. The guidance gives no discretion on the 270-day limit. Time spent in the UK after the child\'s birth does not help that child.' },
      { q: 'I am an adult with a British grandmother. Is there anything I can apply for?', a: `Not as of right. If an old rule against women passing on citizenship kept your parent or you from becoming British, section 4C or the discretionary ${h.src('gb-ard-guide', 'section 4L route on form ARD')} may help. Otherwise the remaining paths are a visa that leads to settlement, then naturalization after years of residence.` },
    ],
    body: (h) => {
      const K = h.C('gb');
      return `
<h2>Why the grandparent alone does not pass it on</h2>
<p>${h.src('gb-bna-s2', 'Section 2 of the 1981 Act')} gives citizenship by descent to a child born abroad when a parent is British "otherwise than by descent", which means born, adopted, naturalized or registered in the UK. Your parent, born in the United States to a British-born grandparent, received citizenship by descent under that rule. A citizen by descent does not pass it on automatically. So the chain stops one step before you, whatever the strength of the family ties.</p>
${h.table(['Who', 'Age', 'Route', 'Fee'], [
  ['Grandchild', 'Under 18', `Section 3(2), parent lived ${K.cutoffs.parentResidenceYears} years in the UK before the birth`, h.cur(K.feeChild.amount, 'GBP')],
  ['Grandchild', 'Under 18', 'Section 3(5), child and parents living in the UK for 3 years now', h.cur(K.feeChild.amount, 'GBP')],
  ['Grandchild', '18 or over', 'No route as of right', 'Not applicable'],
], 'British Nationality Act 1981, s. 3; form MN1 guidance; Home Office fee table.', ['l', 'l', 'l', 'r'])}
<h2>The section 3(2) conditions</h2>
<p>The ${h.src('gb-mn1-guide', 'form MN1 guidance')} sets three conditions. The child was born abroad to a parent who is a British citizen by descent. That parent's own parent, your child's grandparent, was British otherwise than by descent when the parent was born. And the British parent lived in the UK for a continuous period of 3 years at any time before the child's birth, with absences of no more than 270 days. The application must be made while the child is under 18. A child aged 10 or over must also be of good character.</p>
<p>A typical American case: a grandfather born in Leeds, a mother born in Boston who is British by descent and spent three years in the UK after college, and a daughter born in Boston afterwards. The daughter can be registered. Had the mother's three years come after the daughter's birth, they would not count for that child.</p>
<p>A child registered this way becomes a British citizen by descent, not otherwise than by descent. That means the child, in turn, will not pass citizenship automatically to their own children born outside the UK.</p>
<!--tool:mini:gb-double-->
<h2>Section 3(5): moving to the UK as a family</h2>
<p>When the parent never lived in the UK before the birth, ${h.src('gb-bna-s3', 'section 3(5)')} offers another door, but it requires a move. The child and both parents must have lived in the UK for the 3 years ending on the date of application, with no more than 270 days of absence each, and the Home Office has no discretion to overlook longer absences. If the parents have separated, only the child and one parent need to meet the residence test. A child registered under section 3(5) becomes British otherwise than by descent. Section 3(1) also lets the Home Secretary register any child at discretion when there are compelling reasons.</p>
<h2>Fee, time and ceremony</h2>
<p>The ${h.src('gb-fees', 'fee table')} sets ${h.cur(K.feeChild.amount, 'GBP')} for registering a child under 18, with an extra ${h.cur(K.fee.amount, 'GBP')} if the child turns 18 during the process and must then attend a ceremony. The Home Office usually decides within ${K.time.maxMonths} months. A child under 18 becomes British on the date the application is approved, with no ceremony required, and can then apply for a British passport.</p>
<h2>The Ancestry visa is not citizenship</h2>
<p>The ${h.src('gb-ancestry', 'UK Ancestry visa')} is often confused with citizenship by descent. It lets a person with a grandparent born in the UK live and work there for a period, and it is open only to Commonwealth citizens and certain British nationals. A person who is only a US citizen cannot apply. Adults with no registration route are left with ordinary immigration routes and, after years of residence, naturalization. The ${h.a('uk', 'British citizenship by descent page')} covers adults whose own parent was born in the UK, the ${h.a('second-passport', 'second passport guide')} compares other European routes, and the ${h.a('home', 'family tree checker')} tests every branch at once.</p>`;
    },
  },
});
