/**
 * Countries and dual citizenship for a US citizen: filter by answer and by descent route, search by
 * name. Rows from params-2026.json (`dualTable`), each with the official page it was read on.
 * First render = every row (RECETTE §17.5); nothing leaves the browser.
 */
import { useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import P from '../../data/params-2026.json';

interface Row { code: string; name: string; status: 'yes' | 'conditional' | 'no'; note: string; descent: string; src: string; page?: string }
interface Props { idPrefix?: string; primary?: boolean }
const ROWS = (P as unknown as { dualTable: Row[] }).dualTable;
const SRC = P.sources as Record<string, { url: string }>;
const LABEL = { yes: 'Yes', conditional: 'With conditions', no: 'No' };
const TONE = { yes: 'text-green-800', conditional: 'text-amber-800', no: 'text-red-800' };

export default function DualTable({ idPrefix = 't', primary = false }: Props) {
  const [status, setStatus] = useState('all');
  const [scope, setScope] = useState('all');
  const [q, setQ] = useState('');
  const rows = useMemo(() => ROWS.filter((r) => (status === 'all' || r.status === status) && (scope === 'all' || (scope === 'checker' ? !!r.page : !r.page)) && r.name.toLowerCase().includes(q.trim().toLowerCase())), [status, scope, q]);
  const n = (s: string) => ROWS.filter((r) => r.status === s).length;
  const id = (s: string) => `${idPrefix}-dual-${s}`;
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <form className="grid gap-3 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
        <SelectField id={id('status')} label="Can you keep US citizenship?" value={status} onChange={setStatus} options={[{ value: 'all', label: `All answers (${ROWS.length})` }, { value: 'yes', label: `Yes (${n('yes')})` }, { value: 'conditional', label: `With conditions (${n('conditional')})` }, { value: 'no', label: `No (${n('no')})` }]} />
        <SelectField id={id('scope')} label="Countries" value={scope} onChange={setScope} options={[{ value: 'all', label: 'All countries' }, { value: 'checker', label: 'In the family tree checker' }, { value: 'other', label: 'Others' }]} />
        <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
          <label htmlFor={id('q')} className="mb-1 block text-sm font-medium text-navy-700">Find a country</label>
          <input id={id('q')} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name" className="h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20" />
        </div>
      </form>
      <p aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="mt-4 text-sm font-medium text-navy-700">{rows.length} {rows.length === 1 ? 'country' : 'countries'} shown</p>
      <div className="mt-2 max-h-[34rem] overflow-auto rounded-lg border border-navy-200">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-navy-50"><tr>
            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-navy-700">Country</th>
            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-navy-700">Keep US citizenship</th>
            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-navy-700">By descent</th>
          </tr></thead>
          <tbody className="divide-y divide-navy-100">
            {rows.map((r) => (
              <tr key={r.code} className="align-top">
                <td className="px-3 py-2 font-medium text-navy-900">{r.page ? <a href={r.page} className="text-accent-700 hover:underline">{r.name}</a> : r.name}</td>
                <td className="px-3 py-2"><span className={`font-semibold ${TONE[r.status]}`}>{LABEL[r.status]}</span><span className="block text-navy-700">{r.note} {SRC[r.src] && <a href={SRC[r.src].url} target="_blank" rel="nofollow noopener noreferrer" className="text-accent-700 underline">source</a>}</span></td>
                <td className="px-3 py-2 text-navy-700">{r.descent || "Not covered by the source quoted"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-navy-600">The United States does not ask you to choose; the other country's law decides whether you keep its citizenship.</p>
    </div>
  );
}
