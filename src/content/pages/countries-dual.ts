import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'countries-dual',
  group: 'dual',
  order: 410,
  tool: { kind: 'dualtable' },
  related: ['dual', 'second-passport', 'dual-taxes', 'home', 'us-canada'],
  sources: ['dos-dual', 'usc-1481', 'at-bmeia-dual', 'sk-act-40-1993', 'es-ny-opcion', 'de-bva-2024'],
  en: {
    slug: 'countries-that-allow-dual-citizenship',
    nav: 'Countries that allow dual citizenship',
    card: 'A filterable table: which countries let a US citizen keep both, which set conditions, and which make you choose, each with its source.',
    title: 'Countries that allow dual citizenship with the US: table',
    description: 'Countries that allow dual citizenship for US citizens, in a filterable table: yes, with conditions or no, and whether descendants born abroad can claim it.',
    h1: 'Which countries allow dual citizenship with the US',
    intro: 'Filter the table by answer, or type a country: each row says whether you keep US citizenship and how descent works there.',
    resume: (h) => {
      const rows = (h.P as any).dualTable as Array<{ status: string }>;
      const n = rows.length, yes = rows.filter((r) => r.status === 'yes').length, cond = rows.filter((r) => r.status === 'conditional').length, no = rows.filter((r) => r.status === 'no').length;
      return `Countries that allow dual citizenship let you become their citizen without giving up the one you have, and keep theirs when you take another. For a US citizen, only the other country's rule matters: the United States does not make anyone choose (${h.src('dos-dual', 'State Department')}). Of the ${n} countries in this table, read on their own laws and ministry pages in October 2026, ${yes} accept dual citizenship outright, ${cond} accept it with conditions and ${no} ask you to choose. Conditions take several forms. Austria lets descendants of people persecuted by the Nazi regime keep US citizenship, but withdraws Austrian citizenship from anyone who takes another one later (${h.src('at-bmeia-dual', 'Austrian foreign ministry')}). Slovakia does the same for citizens who naturalize abroad without five years of residence there. Spain asks people who opt for its nationality to declare that they renounce US nationality. Germany, which made people choose until June 27, 2024, now accepts multiple citizenship.`;
    },
    faqs: (h) => [
      { q: 'Does "allows dual citizenship" mean a country will give me its citizenship?', a: 'No. It only means the country lets its citizens hold another citizenship. Whether you can become a citizen is a separate question: descent rules, residence, marriage. The table shows both: the right-hand column says how a descendant born abroad can claim, and the family tree checker tests your own line.' },
      { q: 'What happens if I take a citizenship from a country that forbids dual citizenship?', a: `The United States does not take away your citizenship for it, unless you act with the intent to give it up (${h.src('usc-1481', '8 U.S.C. 1481')}). The other country may require proof that you renounced, or treat its own citizenship as lost when you keep another, which is why these countries are rarely a descent option for Americans.` },
      { q: 'Did any country change its dual citizenship rule recently?', a: `Yes. Germany accepts multiple citizenship since June 27, 2024 and no longer withdraws it from Germans who naturalize abroad, but losses before that date stand (${h.src('de-bva-2024', 'Federal Office of Administration')}). Norway lifted its ban on January 1, 2020, Sweden on July 1, 2001, and the Czech Republic on January 1, 2014.` },
    ],
    body: (h) => `
<h2>Reading the table</h2>
<ul>
<li><strong>Yes</strong>: the country's law lets its citizens hold another citizenship, and does not ask a US citizen to renounce when acquiring its own.</li>
<li><strong>With conditions</strong>: dual citizenship is allowed for some routes only, or the country's citizenship is lost if you take another later.</li>
<li><strong>No</strong>: the country asks new citizens to give up their other citizenship, or ends its own when a citizen naturalizes elsewhere.</li>
</ul>
<p>Countries with a name in blue are in the ${h.a('home', 'family tree checker')}: their descent rules are modeled line by line, with fees and waiting times on their own page. The others are listed for their dual citizenship rule and a short note on descent.</p>
<h2>Why the date of a change matters</h2>
<p>A rule that allows dual citizenship today does not undo losses that happened under an older rule. A German emigrant who naturalized in the United States in 1925 lost German citizenship that day, and the child born in 1930 was born to a non-German. The same logic applies to Norway before 2020, Sweden before July 2001 and the Czech Republic before 2014. This is why the checker asks the year the ancestor naturalized: it compares that year with the rule in force then, not with today's.</p>
<h2>Conditions worth reading twice</h2>
<p><strong>Austria.</strong> The declaration for descendants of persecuted people (section 58c) does not ask you to give up US citizenship, but Austria withdraws its citizenship retroactively if you acquire another one after filing. Families planning several passports take the others first. <strong>Slovakia.</strong> The grant to descendants does not require renouncing, but a Slovak citizen who later naturalizes abroad loses Slovak citizenship unless an exception applies (${h.src('sk-act-40-1993', 'Act 40/1993')}). <strong>Spain.</strong> The option open to children of Spaniards born in Spain asks for a declaration renouncing US nationality before Spanish authorities (${h.src('es-ny-opcion', 'New York consulate')}); under US law, that declaration alone does not end US citizenship.</p>
<h2>The US side, in one paragraph</h2>
<p>US law does not require a choice, does not require permission and does not end citizenship without a voluntary act and the intention to give it up. You enter and leave the United States on your US passport and keep filing US tax returns. The ${h.a('dual', 'page on dual citizenship for Americans')} explains each point, and the ${h.a('dual-taxes', 'tax page')} covers foreign accounts.</p>
<h2>From the table to a passport</h2>
<p>Allowing dual citizenship is the first filter; descent is the second. The ${h.a('second-passport', 'second citizenship page')} ranks the routes Americans use most, from an Irish grandparent to a Polish chain of citizens, and the ${h.a('us-canada', 'US and Canadian page')} covers the most common pair on the continent.</p>`,
  },
});
