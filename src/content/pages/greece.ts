import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'greece',
  group: 'countries',
  order: 250,
  country: 'gr',
  tool: { kind: 'mini:gr-line' },
  mini: { kind: 'cost', props: { country: 'gr' } },
  related: ['hungary', 'portugal', 'documents', 'cost', 'dual'],
  sources: ['gr-kei-2025', 'gr-circular-16-2026', 'gr-mfa-usa-citizenship', 'gr-mfa-usa-services', 'gr-mfa-japan'],
  en: {
    slug: 'greek-citizenship-by-descent',
    nav: 'Greek citizenship by descent',
    card: 'Father, mother or grandparent: how Greece registers descendants born in the US, the 1984 mother rule and the €100 art. 26 file.',
    title: 'Greek citizenship by descent: parents, grandparents, 1984',
    description: 'Greek citizenship by descent for Americans: registration through a Greek father or mother, the pre-1984 mother declaration, the €100 art. 26 file, US records.',
    h1: 'Greek citizenship by descent for Americans',
    intro: 'Say how far back your Greek ancestor is, which parent carries the line and your birth year: the tool names the Greek route that fits.',
    resume: (h) => {
      const K = h.C('gr');
      return `Greek citizenship by descent is less a grant than a paperwork exercise: a child of a Greek parent is Greek from birth, and the task is to get each generation written into a municipal register (dimotologio) in Greece. The ${h.src('gr-kei-2025', 'Greek Citizenship Code')}, codified again in 2025, sets three paths for an American family. If the Greek parent was already Greek when you were born, you register your parents' marriage and your birth, and the consulate sends them to Greece. If you were born before 1984 to a Greek mother married to a non-Greek, you make a simple declaration at the consulate, with no deadline. If your parent was recognized as Greek only after you were born, you file a determination under article 26, which costs ${h.cur(K.feeArt26.amount, 'EUR')}. Taking US citizenship did not, under the Code, end Greek citizenship without the Interior Minister's permission, so many emigrant lines are still intact. No waiting time is published.`;
    },
    faqs: (h) => [
      { q: 'My Greek grandfather became a US citizen. Did that break the line?', a: 'Under the current Code, acquiring another citizenship does not end Greek citizenship unless the Minister of the Interior gave permission. Most emigrants never asked for that, so their children usually stayed Greek. Losses under the older laws in force before 2004 are checked case by case by the regional citizenship directorate that reviews the file.' },
      { q: 'Can my children register at the same time as me?', a: 'They follow you, not the Greek ancestor. Once you are written into the municipal register, a child of yours who is a minor and unmarried can be added through you. Under the pre-1984 mother declaration, minor unmarried children of the person who declares also become Greek automatically. Adult children file on their own after your registration.' },
      { q: 'What happens if no Greek route works for my family?', a: `People of Greek origin living abroad can still ask for naturalization under article 10 of the Code. The file goes through the consulate, includes a declaration before the consul with two Greek citizens as witnesses, and costs ${h.cur(h.C('gr').feeArt26.amount, 'EUR')}. The Ministry of the Interior decides, and the outcome is discretionary.` },
      { q: 'Does it matter that my Greek parent has died?', a: 'Not by itself. The Code lets the child claim through a parent who has died, as long as that parent\'s own Greek status is complete and the parent appears in a municipal family record in Greece, even if the entry is marked as deleted because of the death. If the parent was never registered, that step comes first.' },
    ],
    body: (h) => {
      const K = h.C('gr');
      return `
<h2>Who is Greek from birth</h2>
<p>Since May 8, 1984, a child of a Greek father or of a Greek mother is Greek at birth, wherever the child is born and whether or not the parents were married. Before that date the father carried the line. A child born to a Greek father was Greek, and a child born to a Greek mother was Greek only when no father was legally established. Both rules sit in ${h.src('gr-kei-2025', 'articles 1 and 14 of the Code')}. The table shows how the dates sort an American family.</p>
${h.table(['Your situation', 'Route', 'Fee in the Code'], [
  ['Greek father, or Greek parent at your birth after May 8, 1984', 'Registration of your birth', K.fee.amount === 0 ? 'None' : h.cur(K.fee.amount, 'EUR')],
  ['Born before May 8, 1984 to a Greek mother married to a non-Greek', 'Declaration at the consulate (art. 14)', 'None'],
  ['Parent recognized as Greek after your birth', 'Determination (art. 26)', h.cur(K.feeArt26.amount, 'EUR')],
  ['Line cannot be shown, Greek origin can', 'Naturalization of a person of Greek origin (art. 10)', h.cur(K.feeArt26.amount, 'EUR')],
], 'Greek Citizenship Code as codified in 2025, arts. 1, 10, 14 and 26.', ['l', 'l', 'r'])}
<p>A Greek father who was not married to the mother passes citizenship only if he legally recognized the child while the child was still a minor. Recognition in adulthood does not carry it. And citizenship claimed through an uncle, aunt or sibling does not count: those decisions were held unlawful, so each link must run parent to child.</p>
<h2>Grandparents and great-grandparents</h2>
<p>Greece has no separate grandchild route. A grandchild is Greek because the parent was Greek, so the work starts one generation up. If your father or mother was already Greek on the day you were born, even without ever being registered, you are Greek by birth, and the parent is registered first, then you. The same logic goes back as far as the documents allow. There is no generation limit in the Code, only the need to register each person in order.</p>
<p>The exception is the parent whose Greek status was settled by a decision issued after your birth. The ${h.src('gr-circular-16-2026', 'Interior Ministry circular of July 31, 2026')} explains that article 26, as rewritten in 2024, now covers exactly that case: a child born in wedlock to parents recognized later, or born out of wedlock to a mother recognized later. The file goes to the consul, who forwards it to a regional citizenship directorate. The pre-1984 mother declaration cannot be used when the Greek parent was only recognized after you were born.</p>
<h2>The ancestor who naturalized in the United States</h2>
<p>Many Greek emigrants took US citizenship in the 1920s or later. Under the Code, acquiring a foreign citizenship ends Greek citizenship only with the permission of the Interior Minister, which few emigrants ever sought. That is why Greek lines through naturalized grandparents often still work, unlike in countries where the oath in an American court ended the old nationality on the spot. Losses under the laws in force before the 2004 Code are not covered by the current text, and the directorate looks at them case by case. The ${h.a('home', 'family tree checker')} flags a line that needs that review.</p>
<h2>Documents and translations</h2>
<p>The starting point is the Greek parent's or grandparent's certificate from the municipal register, if one exists. Then come your parents' marriage certificate and your own birth certificate, which have to be entered in the Greek civil registry before a municipal registration can follow. US records are long-form certified copies with an apostille from the issuing state and a Greek translation. For the article 10 naturalization the Code lists a passport copy, an apostilled and translated birth certificate and a criminal record from your country. The ${h.a('documents', 'document checklist')} explains where each US record comes from, and the ${h.a('cost', 'cost calculator')} prices the copies, apostilles and translations.</p>
<p>The checklists of the Greek consulates in the United States could not be read for this page, so ask your consulate which certificates it wants for your case before you order anything. The ${h.src('gr-mfa-usa-services', 'embassy services page')} lists the consular offices.</p>
<h2>Fee and waiting time</h2>
<p>Registering someone who is Greek from birth carries no fee in the Code. A determination under article 26 costs ${h.cur(K.feeArt26.amount, 'EUR')}, and so does the naturalization of a person of Greek origin. US consulates may add their own charges for certified translations or certificates; none are quoted here because none could be confirmed. No processing time is published, either by the Ministry of the Interior or by the ${h.src('gr-mfa-usa-citizenship', 'Greek missions in the US')}. The 2026 circular ordered pending files on automatic acquisition to be sent to the municipal registers without delay.</p>
<h2>Keeping your US passport</h2>
<p>Greece does not ask you to give up US citizenship, and a Greek who takes another citizenship stays Greek unless the minister agrees otherwise (${h.src('gr-mfa-japan', 'Greek embassy guidance')}). The United States does not object either: see ${h.a('dual', 'the US position on dual citizenship')} and ${h.a('countries-dual', 'how each country treats it')}. Greek men have military obligations. The consulates have an armed forces office that issues certificates for Greeks permanently living abroad, and the exact rules for dual nationals living in the United States are something to confirm with them before a long stay in Greece. Taxes are a separate question, covered on the ${h.a('dual-taxes', 'dual citizen taxes page')}, and a Greek passport is one way to a ${h.a('second-passport', 'second passport')} that also opens EU residence.</p>`;
    },
  },
});
