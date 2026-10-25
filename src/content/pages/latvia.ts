import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'latvia',
  group: 'countries',
  order: 286,
  country: 'lv',
  tool: { kind: 'mini:lv-route' },
  mini: { kind: 'cost', props: { country: 'lv' } },
  related: ['lithuania', 'poland', 'documents', 'countries-dual', 'second-passport'],
  sources: ['lv-citizenship-law', 'lv-pmlp-exiles', 'lv-pmlp-1940', 'lv-pmlp-dual', 'lv-embassy-usa'],
  en: {
    slug: 'latvian-citizenship-by-descent',
    nav: 'Latvian citizenship by descent',
    card: 'Any generation from a citizen on June 17, 1940: the exile route, the continuity route for earlier emigrants, no fee and decisions in 1 to 4 months.',
    title: 'Latvian citizenship by descent: exiles and 1940 citizens',
    description: 'Latvian citizenship by descent for Americans: the exile route, the route for descendants of citizens on June 17, 1940, documents, no state fee, 1 to 4 months.',
    h1: 'Latvian citizenship by descent: the June 17, 1940 test',
    intro: 'Say when your Latvian ancestor left and the year you were born: the tool picks the route, the decision time and the dual citizenship answer.',
    resume: (h) => {
      const K = h.C('lv');
      return `Latvian citizenship by descent turns on a single date: June 17, 1940, the day Soviet troops entered Latvia. Under section 2 of the ${h.src('lv-citizenship-law', 'Citizenship Law')}, a person who was a Latvian citizen on that day, and that person's descendants, are Latvian citizens, with no limit on the number of generations. Americans use one of two routes. The exile route covers descendants of a citizen who fled the Soviet or German occupation or was deported between June 17, 1940 and May 4, 1990 and could not return: they register as Latvian and keep any other citizenship, provided they were born before October 1, 2014 (${h.src('lv-pmlp-exiles', 'Office of Citizenship and Migration Affairs')}). Families whose ancestor emigrated earlier but was still a Latvian citizen on June 17, 1940 use a second route built by the courts on the continuity of the Latvian state, and a US citizen keeps US citizenship there too. The office decides within ${K.time.maxMonths} months on the exile route and within ${K.time.minMonths} month on the second, from complete documents. No state fee for registration is listed on its pages.`;
    },
    faqs: (h) => [
      { q: 'My grandmother left Latvia in 1944 as a refugee. Am I eligible?', a: 'Very likely, through the exile route. A Latvian citizen who fled the occupation between 1940 and 1990 and could not return counts as an exile, and descendants born before October 1, 2014 can register in any generation. You need proof of her citizenship on June 17, 1940, of her flight, and of each link down to you.' },
      { q: 'What if my ancestor emigrated to the US in the 1920s?', a: `Then the exile route does not fit, but the second route may. If records show the ancestor was still a Latvian citizen on June 17, 1940, the ${h.src('lv-pmlp-1940', 'office')} presumes Latvian citizenship passed down the line. An ancestor who took US citizenship before that date had usually stopped being Latvian, which is the point the office checks.` },
      { q: 'Do I need to speak Latvian?', a: 'Not for the exile route or the route for descendants of citizens on June 17, 1940. A language test applies only to a third route, for ethnic Latvians or Livs whose ancestor lived in Latvia in 1881 or later, which asks for fluency in Latvian under section 20 of the law. Forms are in Latvian, and any fluent speaker may translate your records with a signed statement.' },
      { q: 'Can my children become Latvian too?', a: 'A child under 15 can acquire Latvian citizenship together with a parent who applies under the second route, and a parent registers a child on the exile route. Descendants born on or after October 1, 2014 are not covered by the exile route themselves, but become Latvian by birth through a parent who is already a Latvian citizen.' },
    ],
    body: (h) => {
      const K = h.C('lv');
      return `
<h2>Two routes for American families</h2>
${h.table(['', 'Exile route', 'Descendant of a 1940 citizen'], [
  ['Ancestor', 'Citizen on June 17, 1940 who fled or was deported, 1940 to 1990', 'Citizen on June 17, 1940, left earlier or later'],
  ['Generations', 'Any, born before Oct. 1, 2014', 'Any'],
  ['Keep US citizenship', 'Yes, any citizenship', 'Yes, the US is a NATO member'],
  ['Decision', `Within ${K.time.maxMonths} months`, `Within ${K.time.minMonths} month`],
], 'Office of Citizenship and Migration Affairs pages; Citizenship Law, s. 2.', ['l', 'l', 'l'])}
<p>The ${h.src('lv-pmlp-exiles', 'exile route')} asks for three things together: the ancestor was a Latvian citizen on June 17, 1940, or descends from one; fled the Soviet or German occupation regime or was deported between June 17, 1940 and May 4, 1990; and for that reason could not return to live in Latvia before May 4, 1990. The thousands of Latvians who reached the United States through displaced persons camps after 1945 are the typical case.</p>
<p>The ${h.src('lv-pmlp-1940', 'second route')} rests on case law. Latvia holds that its state, and therefore its citizenship, continued through the occupation. If an ancestor was a Latvian citizen on June 17, 1940, the office presumes that one of your parents was a Latvian citizen when you were born, and you acquire citizenship under section 2(1)(2) of the law. This is the route for families who left between the wars without giving up Latvian citizenship.</p>
<h2>When the line breaks</h2>
<p>Latvia became an independent state in 1918, so an ancestor who emigrated from the Russian Empire before then was never a Latvian citizen and opens neither route. An ancestor who naturalized in the United States before June 17, 1940 usually had lost Latvian citizenship by that date; the office checks the records case by case. And the exile route closes to descendants born on or after October 1, 2014, who become Latvian through a parent instead.</p>
<h2>Documents</h2>
<ul>
<li>The application in Latvian, with a separate form for a child under 15, and on the exile route the exile confirmation form.</li>
<li>A copy of your passport data page, which needs no notarization.</li>
<li>Proof that the ancestor was a Latvian citizen on June 17, 1940: a pre-war Latvian passport, a Latvian civil registry record, the 1935 census, or tax and military records held by the State Historical Archives.</li>
<li>Your birth certificate, marriage or divorce records, your children's birth certificates and the records linking each generation to the ancestor.</li>
</ul>
<p>US records need an apostille from the secretary of state of the issuing state, and a translation into Latvian; the ${h.src('lv-embassy-usa', 'embassy in Washington')} accepts a translation by any person fluent in Latvian with a signed statement of accuracy. Copies sent must be notarized and apostilled, except the passport copy. The ${h.a('documents', 'document checklist')} covers ordering each US record and the ${h.a('cost', 'cost calculator')} adds up apostilles and translations.</p>
<h2>Sending the file</h2>
<p>The file goes by post to the Office of Citizenship and Migration Affairs in Riga, or through the embassy after contacting it. Originals are returned with the decision for ${h.cur((K as any).feeReturn.amount, 'EUR')} plus postage. No state fee for registration is listed on the office's pages. Once registered, you receive a Latvian personal identity number and can apply for a passport.</p>
<h2>Dual citizenship and later citizenships</h2>
<p>Exiles and their descendants keep any other citizenship. Descendants who use the second route keep citizenship of an EU, EFTA or NATO country, of Australia, Brazil or New Zealand, which includes the United States (${h.src('lv-pmlp-dual', 'office page on dual citizenship')}). After registering, a new citizenship can only be taken under those general rules, by permission of the Cabinet, or automatically through marriage or adoption. The United States does not ask you to choose (${h.a('dual', 'US rules')}). For neighboring routes, see the ${h.a('lithuania', 'Lithuanian page')} and the ${h.a('countries-dual', 'country table')}.</p>`;
    },
  },
});
