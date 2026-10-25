/** Writing helpers handed to every page: links, figures read from params-2026.json, tables. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, pct, dateL } from './format-l';
import P from '../data/params-2026.json';

export type SourceKey = keyof typeof P.sources;
export type CountryCode = keyof typeof P.countries;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  /** Link to an official source of params-2026.json. */
  const src = (k: SourceKey, text: string) => {
    const s = P.sources[k] as { url: string };
    if (!s) throw new Error(`Unknown source key: ${String(k)}`);
    return ext(s.url, text);
  };
  const num = (n: number, d = 0) => formatNumberL(n, 'en', d);
  const usd = (n: number) => money(n, 'USD');
  const cur = (n: number, c: string) => money(n, c);
  const pc = (x: number, d = 0) => pct(x, 'en', d);
  const C = (code: CountryCode) => P.countries[code];
  return {
    lang, a, ext, src, num, usd, cur, pc, P, C,
    date: (iso: string) => dateL(iso),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
  };
}
export type Helpers = ReturnType<typeof helpers>;
