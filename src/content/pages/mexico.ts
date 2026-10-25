import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mexico',
  group: 'countries',
  order: 280,
  country: 'mx',
  tool: { kind: 'mini:mx-steps' },
  mini: { kind: 'cost', props: { country: 'mx' } },
  related: ['documents', 'dual', 'countries-dual', 'cost', 'home'],
  sources: ['mx-cpeum', 'mx-dof-2021', 'mx-lnac', 'mx-consulmex-atlanta'],
  en: {
    slug: 'mexican-citizenship-by-descent',
    nav: 'Mexican citizenship by descent',
    card: 'A Mexican parent is enough, wherever they were born since the 2021 reform: free birth registration at a consulate, generation by generation.',
    title: 'Mexican citizenship by descent: consulate birth registration',
    description: 'Mexican citizenship by descent and dual Mexican American status: any Mexican parent since May 2021, free consular birth registration and the papers to bring.',
    h1: 'Mexican citizenship by descent and dual Mexican American status',
    intro: 'Choose your closest Mexican-born relative and how many people in between already hold a Mexican birth record: the tool counts the registrations left.',
    resume: (h) => {
      const K = h.C('mx');
      return `Mexican citizenship by descent is the most direct route on this site. Under ${h.src('mx-cpeum', 'article 30 of the Mexican Constitution')}, a person born abroad to a Mexican mother or a Mexican father is Mexican by birth, whether that parent is Mexican by birth or by naturalization. Until 2021 the parent also had to be born in Mexico, which stopped the line after one generation born in the United States. The ${h.src('mx-dof-2021', 'decree published on May 17, 2021')} removed that condition from May 18, 2021. Grandchildren and great-grandchildren now qualify step by step: your parent registers their birth at a Mexican consulate, then you register yours using your parent's new record. The Atlanta consulate does it for ${K.fee.amount === 0 ? 'no fee' : h.usd(K.fee.amount)}, with one certified copy included and ${h.usd(K.feeCopy.amount)} for each extra copy. A Mexican by birth can never be deprived of that nationality, so it sits alongside US citizenship.`;
    },
    faqs: (h) => [
      { q: 'My grandmother was born in Jalisco but my father was born in Texas. Can I still become Mexican?', a: 'Yes, in two steps. Since May 18, 2021 your father counts as Mexican by birth even though he was born in Texas, because his mother was Mexican. He registers his birth at a consulate first. With his Mexican birth record, you register yours at your own appointment. If your father has died, ask the consulate how it handles his record.' },
      { q: 'Does dual Mexican American citizenship mean using a Mexican passport in Mexico?', a: 'Mexico expects its nationals to enter and leave the country as Mexicans, with Mexican documents, and its nationality law provides a fine for those who do not. Your US passport is still the one you show when you leave or return to the United States. Carry both when you travel between the two countries.' },
      { q: 'Do I need an apostille on my US birth certificate for the consulate?', a: `The Atlanta consulate's July 2026 list asks for the original long-form US birth certificate without an apostille. A birth certificate from a third country needs an apostille or legalization and a Spanish translation by a certified expert translator. Requirements differ from one consulate to another, so read your own consulate's list before the appointment.` },
      { q: 'Is there an age limit to register my birth as a Mexican?', a: 'The rules read for this site set no upper age. Adults register themselves at the consulate for their address, with their parents\' documents. On the Atlanta list, living parents normally attend too, and in some cases their marriage certificate replaces that presence.' },
    ],
    body: (h) => {
      const K = h.C('mx');
      return `
<h2>Who is Mexican by birth</h2>
<p>Article 30 of the Constitution lists who is Mexican by birth. Section A, part II, covers people born abroad to Mexican parents: a Mexican mother or a Mexican father is enough, and the Constitution sets no condition about the parents' marriage. Part III extends it to children born abroad to a parent who became Mexican by naturalization. Mother and father count the same way, with no cut-off date for either of them.</p>
${h.table(['Your situation', 'Before May 18, 2021', 'Since May 18, 2021'], [
  ['Parent born in Mexico', 'Mexican by birth', 'Mexican by birth'],
  ['Parent born in the US to a Mexican parent', 'Not covered', 'Mexican by birth, after your parent registers'],
  ['Great-grandparent born in Mexico', 'Not covered', 'Each generation registers in turn'],
], 'Constitution, art. 30 A, before and after the decree of May 17, 2021.', ['l', 'l', 'l'])}
<p>The reform did not create a new procedure; it removed a condition. Before it, part II required that the Mexican parent be born in Mexican territory. Now the only question is whether your parent is Mexican, and a parent born in the United States to a Mexican parent is. In practice that means one registration per generation, in order, because the consulate wants the Mexican birth record of the parent through whom you claim.</p>
<h2>An ancestor who took US citizenship</h2>
<p>A Mexican by birth cannot be deprived of Mexican nationality under article 37 A of the Constitution, as it reads today, so a parent who naturalized in the United States recently is still Mexican. Older naturalizations are a point to check. The ${h.src('mx-lnac', 'Nationality Law')} dates from 1998, and a relative who took US citizenship before then, and before the next child in your line was born, may need a closer look by the consulate. The tool flags that case as one to confirm.</p>
<h2>How the consular registration works</h2>
<p>You book an appointment for a birth registration for dual nationality at the Mexican consulate for your US address, then attend in person with originals. The consular civil registry records your birth and issues a Mexican birth certificate. That record is the proof of nationality named in the Nationality Law and the document used later for a Mexican passport. An alternative called inscription copies your foreign birth certificate literally into the Mexican register. The authority is the Ministry of Foreign Affairs, through ${K.authority}.</p>
<h2>Documents to bring</h2>
<p>The ${h.src('mx-consulmex-atlanta', 'Atlanta consulate\'s list of July 30, 2026')} is the one read in full for this page. It asks for:</p>
<ul>
<li>your long-form US birth certificate showing the place of birth and your parents' names, as an original${K.docs.apostille ? ', with an apostille' : '; no apostille is asked for US births'};</li>
<li>the Mexican birth certificate of your Mexican mother or father, as an original;</li>
<li>an official photo ID for each person taking part, and the parents' presence or, in some cases, their marriage certificate if they married at least 180 days before your birth.</li>
</ul>
<p>Someone born in a third country brings a birth certificate with an apostille or legalization and a Spanish translation by a certified expert translator. ${K.docs.translation ? '' : 'US records in English need no translation on the Atlanta list.'} Other consulates publish their own lists, which can differ. The ${h.a('documents', 'document checklist')} explains how to order long-form certificates from a US state.</p>
<h2>Fee and waiting time</h2>
<p>At Atlanta the registration costs ${K.fee.amount === 0 ? 'nothing' : h.usd(K.fee.amount)} and includes one certified copy. Each extra certified copy costs ${h.usd(K.feeCopy.amount)}. No consulate publishes a processing time, and the wait that matters is the appointment itself, which can be hard to obtain in busy districts. The ${h.a('cost', 'cost calculator')} adds the price of your US records, which is where most of the money goes.</p>
<h2>A worked example across three generations</h2>
<p>Take a family where the great-grandfather was born in Michoacán, the grandmother in California, the father in Arizona and the reader in Illinois. Before May 18, 2021, only the grandmother could claim Mexican nationality, because her father was born in Mexico. Since the reform, the line runs all the way down, but the paperwork still follows the generations. The grandmother registers first, with her father's Mexican birth record. Once she holds her own Mexican record, the father registers with it. Only then can the reader book an appointment and register, using the father's new record. Each step is a separate appointment, and each one produces the document the next person needs.</p>
<p>Two habits save time. First, order every US birth certificate in its long form at the start, since a short abstract that leaves out the parents' names does not meet the long-form requirement. Second, check that names are spelled the same way across records; a grandmother listed under her married name on one certificate and her maiden name on another may need an extra document to link the two. The tool above counts how many registrations your family still has ahead of it.</p>
<h2>Dual Mexican and American citizenship</h2>
<p>Mexico accepts that its nationals by birth hold another nationality, and the United States allows a second citizenship too. Two practical rules follow. In Mexico you are Mexican: under the Nationality Law, you enter and leave the country as a Mexican, with Mexican documents. In the United States you remain fully American and use your US passport at the border. The ${h.a('dual', 'dual citizenship page')} covers US law, the ${h.a('dual-taxes', 'tax page')} covers foreign bank accounts, and the ${h.a('countries-dual', 'country table')} compares Mexico with the other routes. To test other branches of your family, use the ${h.a('home', 'family tree checker')}.</p>`;
    },
  },
});
