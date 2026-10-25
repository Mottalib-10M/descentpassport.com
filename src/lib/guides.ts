/** Registry of pages: every file of `src/content/pages/` is loaded here. */
import type { PageDef } from './guide-types';
const mods = import.meta.glob<{ default: PageDef }>('../content/pages/*.ts', { eager: true });
export const PAGES: PageDef[] = Object.entries(mods)
  .map(([file, m]) => {
    const g = m.default;
    const base = file.split('/').pop()!.replace(/\.ts$/, '');
    if (g.id !== base) throw new Error(`${file}: id “${g.id}” differs from the file name`);
    return g;
  })
  .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
export const pageById = (id: string) => PAGES.find((p) => p.id === id);
/** The main page of a country (its `country` field and the lowest order). */
export const countryPageId = (code: string) => PAGES.filter((p) => p.country === code).sort((a, b) => a.order - b.order)[0]?.id;
