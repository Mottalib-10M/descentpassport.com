import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'second-passport',
  group: 'dual',
  order: 440,
  tool: { kind: 'checker', props: { country: 'ie', rel: 'FM' } },
  related: ['home', 'countries-dual', 'dual', 'cost', 'documents'],
  sources: ['ie-dfa-fbr', 'pl-consulate-usa', 'ca-rules-2025', 'it-law-91-art3bis', 'de-stag-5', 'mx-dof-2021', 'es-montreal-fin'],
  en: {
    slug: 'second-citizenship',
    nav: 'Second citizenship by descent',
    card: 'Which ancestry routes still give Americans a second passport in 2026, ranked by how far back they reach and what they cost.',
    title: 'Second citizenship by descent: the routes open to Americans',
    description: 'Second citizenship for Americans through ancestry in 2026: how far back each country reaches, which routes closed, fees and waiting times, no investment.',
    h1: 'A second citizenship through your ancestors',
    intro: 'Start with the ancestor you know best: country, relationship and years. Add up to two more lines to compare.',
    resume: (h) => `A second citizenship by descent costs a few hundred dollars in records and fees, needs no investment and no move abroad, and lasts for life. In 2026 the open routes for Americans fall into three groups. Some reach far back: Poland confirms a chain of citizens with no generation limit (${h.src('pl-consulate-usa', 'consular fee')} ${h.usd(h.C('pl').fee.amount)}), Canada recognizes people born abroad before December 15, 2025 in any generation since Bill C-3, Mexico lets each generation register in turn since 2021, and Germany repairs old discrimination against mothers with a free declaration until 2031. Some stop at the grandparent: Ireland registers grandchildren of people born on the island in its Foreign Births Register (${h.src('ie-dfa-fbr', 'EUR 278')}), and Italy since March 28, 2025 accepts only a parent or a grandparent who held Italian citizenship alone. Others stop at the parent, as in the United Kingdom, Norway or Sweden. And some routes closed: Spain's Democratic Memory Law ended on October 22, 2025.`,
    faqs: (h) => [
      { q: 'Which country is the easiest second citizenship for an American?', a: 'The one your own tree opens. Among descent routes, Ireland through a grandparent born on the island is the simplest file: one form, original records, no apostilles, a fee and about a year of waiting. Canada can be simpler still for people born before December 15, 2025 to a Canadian parent: they are citizens already and only ask for proof.' },
      { q: 'Can I get a second citizenship without any ancestors from that country?', a: 'Yes, but not by descent: by residence and naturalization after years of living there, by marriage, or in a few countries by investment, which this site does not cover. Descent is the only route that requires neither moving nor paying beyond the fees and records, which is why it is worth checking every line of the family.' },
      { q: 'Does a second citizenship pass to my children?', a: 'It depends on the country and on where they are born. Ireland and Poland pass it to children born after you become a citizen; Italy since 2025 asks whether you held only Italian citizenship or lived in Italy before their birth; the United Kingdom stops after one generation born abroad. Register children promptly where a deadline applies.' },
    ],
    body: (h) => `
<h2>How far back each country reaches</h2>
${h.table(['Country', 'Ancestor who still counts', 'Official fee'], [
  ['Poland', 'Any generation, unbroken chain', h.usd(h.C('pl').fee.amount)],
  ['Canada', 'Any generation, born before Dec. 15, 2025', h.cur(h.C('ca').fee.amount, 'CAD')],
  ['Mexico', 'Any generation, registered in turn', 'Free registration'],
  ['Ireland', 'Grandparent born on the island', h.cur(h.C('ie').fee.amount, 'EUR')],
  ['Italy', 'Parent or grandparent, with conditions', h.cur(h.C('it').fee.amount, 'EUR')],
  ['United Kingdom', 'Parent born in the UK', h.cur(h.C('gb').fee.amount, 'GBP') + ' or none'],
], 'Fees read on consulate and ministry pages in October 2026.', ['l', 'l', 'r'])}
<h2>Routes that changed in 2025 and 2026</h2>
<p>Four reforms reshaped the map in less than two years. Italy limited transmission for people born abroad with another citizenship from March 28, 2025 (${h.src('it-law-91-art3bis', 'art. 3-bis')}). Canada removed the first-generation limit for people born before December 15, 2025 and set a 1,095-day test for later births (${h.src('ca-rules-2025', 'IRCC')}). Spain's window for grandchildren closed on October 22, 2025 (${h.src('es-montreal-fin', 'Spanish consulate')}). Portugal added a language and culture test for grandchildren from May 19, 2026. Lists written before these dates are wrong for at least one of the countries families ask about most.</p>
<h2>Choosing between several lines</h2>
<p>Many American families have two or three foreign-born ancestors. Three questions sort them. Which line reaches you under today's law? The checker answers it for each line. Which one needs the fewest records? A grandparent line needs fewer than a great-grandparent line, and some countries, such as Ireland or Canada, ask for no apostilles. And which passport serves your plans? Every country in the European Union gives the right to live and work in all of them, so an Irish or Polish passport opens Italy too.</p>
<h2>What it costs and how long it takes</h2>
<p>Expect US records at state prices, apostilles where required, translations where the language is not English, and the country's fee, from nothing in Germany's declaration to ${h.cur(h.C('it').fee.amount, 'EUR')} per adult in Italy. The ${h.a('cost', 'cost calculator')} adds them up for your line and the ${h.a('documents', 'document checklist')} lists what each country wants. Waiting times run from months in Norway to two or three years for a German certificate.</p>
<h2>Keeping your US citizenship</h2>
<p>The United States does not make you choose. The ${h.a('dual', 'page on US law')} explains why a descent claim never puts US citizenship at risk, and the ${h.a('countries-dual', 'table of countries')} shows which ones set conditions on their side.</p>`,
  },
});
