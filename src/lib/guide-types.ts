/**
 * One page = ONE data file in `src/content/pages/<id>.ts` (English only: a US site). How to add a page:
 * CONTRIBUTING-PAGES.md.
 */
import type { Helpers } from './helpers';

export type Lang = 'en';
/** Section of a page: menus, footer and home lists follow it. */
export type Group = 'countries' | 'italy' | 'dual' | 'paperwork';
export interface FAQ { q: string; a: string }
/**
 * `checker` (family tree checker, props: country, gen, rel), `cost` (paperwork cost), `dualtable`
 * (filterable country table), `fbar` (FBAR / Form 8938 thresholds), `frise` (steps in time, props:
 * preset) or `mini:<spec>` from `lib/mini-specs.ts`.
 */
export interface ToolDef { kind: string; props?: Record<string, string | number | boolean> }
export interface PageText {
  /** Path after /en/, without slashes at the ends; may hold one "/" (italy/1948-rule). */
  slug: string; nav: string; card: string;
  /** 50–60 characters, key term first (RECETTE §11). */
  title: string;
  /** 150–160 characters. */
  description: string;
  h1: string; intro: string;
  /** Citable block, one paragraph of 120 words or more (RECETTE §21), folded after its first sentence. */
  resume: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  /** HTML; `<!--tool:mini:spec-->` places a tool in the body. */
  body: (h: Helpers) => string;
}
export interface PageDef {
  id: string; group: Group; order: number;
  /** Country code of the page (it, ie, ca…) when it is a country page. */
  country?: string;
  tool?: ToolDef; mini?: ToolDef;
  related: string[];
  /** Keys of `data/params-2026.json` sources. */
  sources: string[];
  en: PageText;
}
export const definePage = (g: PageDef): PageDef => g;
