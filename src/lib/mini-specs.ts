/**
 * Mini-tools of the pages (RECETTE §9.3): one file per tool in `lib/minis/<kind>.ts`, default export
 * a MiniSpec. Each reads params-2026.json or the site's engines (lib/engine), never a second formula.
 */
import type { MiniSpec } from './mini-types';
const mods = import.meta.glob<{ default: MiniSpec }>('./minis/*.ts', { eager: true });
const SPECS: Record<string, MiniSpec> = Object.fromEntries(Object.entries(mods).map(([f, m]) => [f.split('/').pop()!.replace(/\.ts$/, ''), m.default]));
export function getSpec(kind: string, _lang: 'en' | 'fr' = 'en'): MiniSpec {
  const s = SPECS[kind];
  if (!s) throw new Error(`Unknown mini-tool: ${kind}`);
  return s;
}
export const SPEC_KINDS = Object.keys(SPECS);
