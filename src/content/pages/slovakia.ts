import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'slovakia',
  group: 'countries',
  order: 291,
  country: 'sk',
  tool: { kind: 'mini:sk-grant' },
  mini: { kind: 'cost', props: { country: 'sk' } },
  related: ['czech', 'home', 'countries-dual', 'documents', 'cost'],
  sources: ['sk-act-40-1993', 'sk-act-145-1995', 'sk-act-474-2005', 'sk-act-40-1993-2022'],
  en: {
    slug: 'slovak-citizenship-by-descent',
    nav: 'Slovak citizenship by descent',
    card: 'The 2022 route for descendants of Czechoslovak citizens born in Slovakia, up to great-grandchildren: no language test, a €30 fee.',
    title: 'Slovak citizenship by descent: the 2022 ancestry route',
    description: 'Slovak citizenship by descent: a grant for great-grandchildren of Czechoslovak citizens born in Slovakia, no language test, EUR 30 fee, 24-month legal limit.',
    h1: 'Slovak citizenship by descent for Americans',
    intro: 'Pick the generation of your Slovak-born ancestor and confirm they held Czechoslovak citizenship: the tool says whether section 7(8) applies.',
    resume: (h) => {
      const K = h.C('sk');
      return `Slovak citizenship by descent works differently from most European routes: it is a grant, not a recognition. Since April 1, 2022, section 7(8) of ${h.src('sk-act-40-1993', 'Act 40/1993')} allows the Ministry of the Interior to grant citizenship to a person whose parent, grandparent or great-grandparent was a Czechoslovak citizen born on the territory of today's Slovakia. The applicant does not need to live in Slovakia or pass a Slovak language test, but must show a clean criminal record in every country of citizenship or residence over the last 15 years. The fee is ${h.cur(K.fee.amount, 'EUR')} and the Ministry must decide within ${K.time.maxMonths} months of receiving the file. Because Czechoslovakia only existed from October 28, 1918, an ancestor who left Austria-Hungary earlier and never held its citizenship does not open this door. A US citizen keeps US citizenship when Slovakia grants its own, but a Slovak who later naturalizes abroad can lose it.`;
    },
    faqs: (h) => [
      { q: 'My grandmother left Slovakia in 1910. Does she count for the Slovak grant?', a: 'Probably not under section 7(8). The ancestor must have been a Czechoslovak citizen, and Czechoslovakia was founded on October 28, 1918. Someone who emigrated from the Kingdom of Hungary before that date and never returned usually never held Czechoslovak citizenship. Families sometimes find later records, such as a passport issued by Czechoslovakia, that change the answer.' },
      { q: 'Is the Slovak living abroad certificate the same as citizenship?', a: `No. The certificate under ${h.src('sk-act-474-2005', 'Act 474/2005')} recognizes a person with Slovak roots who lives outside Slovakia, and it brings some practical benefits, but it is not citizenship and gives no passport. A holder who applies for citizenship on that basis still needs residence in Slovakia and pays ${h.cur(h.C('sk').feeAbroad.amount, 'EUR')}, far more than the ancestry route.` },
      { q: 'Which criminal record checks does a Slovak application need from an American?', a: 'An extract from every country where you held citizenship and every country where you had permitted residence in the last 15 years, each no older than six months when you file. For most Americans that means an FBI identity history summary, plus records from any country where they studied or worked. Missing checks are a common reason for delay.' },
    ],
    body: (h) => {
      const K = h.C('sk');
      return `
<h2>A grant, not an automatic right</h2>
<p>Slovak law uses the words "may be granted" for this route. That makes it different from the Czech declaration or from Polish confirmation, where an office recognizes a status that already exists. The ${h.src('sk-act-40-1993', 'current text of Act 40/1993')} lists who can apply without residence in Slovakia, and section 7(8), added by Act 72/2022 with effect from April 1, 2022, is the provision for descendants. It was absent from the version in force on January 1, 2022, which is why older guides say Slovakia has no descent route.</p>
${h.table(['Your ancestor', 'Section 7(8)', 'Why'], [
  ['Parent, grandparent or great-grandparent, Czechoslovak citizen born in Slovakia', 'Can apply', 'Up to three generations back'],
  ['Great-great-grandparent', 'No', 'Beyond the list in the Act'],
  ['Left before October 28, 1918 and never Czechoslovak', 'No', 'Czechoslovakia did not exist yet'],
  ['Czechoslovak citizen born in today\'s Czech Republic', 'No', 'Look at the Czech route'],
], 'Act 40/1993 on Slovak citizenship, s. 7(8), consolidated text of July 15, 2026.', ['l', 'l', 'l'])}
<p>Three conditions sit at the core: the ancestor's Czechoslovak citizenship, the ancestor's birth on what is now Slovak territory, and the family link from that person to you. The Ministry still checks the general conditions of the Act, such as the absence of a criminal record or pending criminal proceedings, and it keeps a margin of discretion. Applicants are spared the residence period and the Slovak language test that ordinary naturalization requires.</p>
<!--tool:mini:sk-grant-->
<h2>Other routes in the same Act</h2>
<p>Former Czechoslovak citizens, as well as people whose Hungarian-era or Czechoslovak citizenship ended under older laws or treaties, can also be granted citizenship without residence, at the same fee. A separate entitlement exists for people who lost Slovak citizenship by acquiring another between July 17, 2010 and March 31, 2022: if they had at least five years of permitted residence in that country at the time, the Ministry must grant it back. This last case concerns Slovaks who naturalized in the United States in those years, not their descendants.</p>
<p>Once one generation becomes Slovak, the rule at birth takes over: a child is Slovak if at least one parent is Slovak, wherever the birth takes place. A child born after your grant is therefore Slovak from birth, while children born before it need their own application.</p>
<h2>What to file and where</h2>
<p>The application is made in person, either at a district office in a regional capital of Slovakia or at a Slovak embassy or consulate, and the Ministry of the Interior decides. The file contains a signed structured CV, an identity document, your birth certificate and civil status records, the applicant questionnaire annexed to the Act, the criminal record extracts described above, and the evidence for the ancestor: one or more documents proving both the birth on Slovak territory and the Czechoslovak citizenship, together with the birth and marriage records that link each generation down to you. For minors, both parents sign the questionnaire or the other parent gives notarized consent.</p>
<p>The rules for US records are not spelled out in the Act. ${K.docs.apostille === null ? 'Whether an apostille and a Slovak translation are required for each US record is not published in the sources read for this page, so ask the embassy before you order anything.' : ''} Slovakia and the United States are both parties to the Hague Apostille Convention, and the ${h.a('documents', 'document checklist')} explains how to obtain an apostille in each state if one is requested. The ${h.a('cost', 'cost calculator')} estimates the records, apostilles and translations once you know what the embassy wants.</p>
<h2>Fee and the legal time limit</h2>
<p>The ${h.src('sk-act-145-1995', 'administrative fees act')} sets ${h.cur(K.fee.amount, 'EUR')} for a grant to a person whose parent, grandparent or great-grandparent was a Czechoslovak citizen, the same amount as for former citizens. By comparison, a holder of the Slovak living abroad certificate pays ${h.cur(K.feeAbroad.amount, 'EUR')}. The Ministry must decide within ${K.time.maxMonths} months of receiving the application, but the clock stops while it waits for opinions from other authorities. No average processing time is published. When the answer is yes, you take an oath and receive the certificate of citizenship; it must be collected within six months of the invitation or the case is closed.</p>
<h2>Keeping your US citizenship</h2>
<p>Slovakia does not ask a US citizen to renounce US citizenship before a grant, and the documents listed in the Act include no renunciation. The risk runs the other way: a Slovak citizen who later takes another citizenship by an express act loses Slovak citizenship that day, unless the new citizenship comes through marriage, birth, adoption or as a minor, or the person had at least five years of permitted residence in that country. In those cases the acquisition must be reported to a district office within 90 days. The ${h.a('countries-dual', 'country table')} sets this beside other countries' rules, the ${h.a('dual', 'dual citizenship page')} gives the US position, and the ${h.a('dual-taxes', 'tax page')} covers the US filings that follow you abroad.</p>
<h2>Czech or Slovak?</h2>
<p>Families often know only that a grandparent was "Czechoslovak". The place of birth decides which country to look at first. An ancestor born in Bohemia, Moravia or Czech Silesia points to the ${h.a('czech', 'Czech declaration')}, which is an entitlement for children and grandchildren. An ancestor born in Slovakia points here. The Czech route is closed to Slovak citizens, so a family with both options usually completes the Czech filing first. The ${h.a('home', 'family tree checker')} runs every country in your tree side by side, and the ${h.a('second-passport', 'second passport overview')} lists the other routes open to Americans.</p>`;
    },
  },
});
