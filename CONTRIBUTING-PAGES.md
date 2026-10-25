# Adding or editing a page

One page = one file: `src/content/pages/<id>.ts` (the file name is the `id`). English only (US site).
Model to copy: `src/content/pages/italy.ts`.

## The file

```ts
import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'ireland', group: 'countries', order: 210, country: 'ie',
  tool: { kind: 'mini:ie-fbr' },              // first-screen tool (required): mini:<kind>, checker, cost, dualtable, fbar
  mini: { kind: 'cost', props: { country: 'ie' } }, // optional second tool, under the citable block
  related: ['ireland-dual', 'documents', 'cost'],   // page ids (or 'home')
  sources: ['ie-dfa-fbr', 'ie-act-1956-revised'],   // keys of src/data/params-2026.json "sources"
  en: { slug, nav, card, title, description, h1, intro, resume: (h) => '', faqs: (h) => [], body: (h) => '' },
});
```

- `group`: `countries`, `italy`, `dual` or `paperwork`. `order`: menus sort on it.
- `slug`: path after `/en/` (one optional sub-level: `irish-citizenship-by-descent/dual`).
- `title`: 50 to 60 characters, the searched term first. `description`: 150 to 160 characters.
  Both are blocking checks (`scripts/check-snippets.py`).
- `intro`: one sentence telling the reader what to type in the tool.
- `resume(h)`: ONE paragraph of 120 to 170 words that answers the page's question with dated
  figures. It is folded to its first sentences on screen; never split it.
- `faqs(h)`: 3 to 5 questions that no other page asks, answers of 40 to 90 words.
- `body(h)`: HTML, at least 500 words (900 or more for a country's main page), `<h2>` sections,
  one table at most above the fold of the body. `<!--tool:frise|{"preset":"ie-fbr"}-->` or
  `<!--tool:mini:ie-fbr-->` places a tool inside the body.

## Helpers `h`

- `h.a('page-id', 'text')`: internal link (unknown id = build error).
- `h.src('source-key', 'text')`: link to an official source of params-2026.json.
- `h.C('ie')`: country data (`fee`, `time`, `dual`, `law`, `cutoffs`, `docs`…), `h.P`: all params.
- `h.usd(n)`, `h.cur(n, 'EUR')`, `h.num(n)`, `h.date('2026-10-25')`, `h.table(headers, rows, caption, align)`.

## Mini-tools

One file per tool: `src/lib/minis/<kind>.ts`, default export a `MiniSpec` (see `lib/minis/it-gen.ts`).
Inputs are numbers or selects (`options` with string values of numbers; `opts([...])` in
`lib/mini-kit.ts`). The result reads params or the engines: `typical(country, gen, {...})` runs
the family tree engine (`lib/engine/descent.ts`) on a typical line. No second formula.
Timelines: `src/lib/frises/<preset>.ts` (see `it-consulate.ts`); a step without a published time
is `unknown: true`.

## Writing rules

- Every figure and date comes from params-2026.json (through `h`) or a sourced sentence; if a
  value is not on an official page, say it is not published. Never invent a fee or a delay.
- Not legal advice, no lawyer, agency or service recommended, no contact form, no link to other
  sites of the publisher. Never say "official" about this site, never name search engines or
  competitors.
- Text is written for this site only: never reuse sentences from another site.
- Plain US English, short sentences, no em dash runs, no exclamation marks.
- After a change: `python3 scripts/build-params.py` (if params changed), `npm run check`.
