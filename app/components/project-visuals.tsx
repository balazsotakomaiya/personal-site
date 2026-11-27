import type { Project } from 'app/projects/data'

/* Small drawings of what each project does, for the bento's tiles. They
   are drawn rather than screenshotted so they sit in the site's dark
   palette and don't go stale when a project's own site changes. */

const MONO = 'font-[family-name:var(--font-mono)]'

function Pupil() {
  return (
    <div className="pv-pupil">
      <div className="pv-card pv-card-3" />
      <div className="pv-card pv-card-2" />
      <div className="pv-card pv-card-1">
        <span className={`${MONO} text-[9px] uppercase tracking-wider text-[var(--text-tertiary)]`}>Q · 3 of 20</span>
        <span className="text-[12px] text-[var(--text-primary)] leading-snug">Why does spacing reviews help recall?</span>
        <span className="flex gap-1 mt-auto">
          {['1d', '3d', '7d'].map((d, i) => (
            <span key={d} className={`${MONO} pv-interval ${i === 1 ? 'pv-interval-on' : ''}`}>
              {d}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

const SIGILS: { text: string; style: string }[] = [
  { text: 'BO', style: 'pv-sigil-a' },
  { text: 'AL', style: 'pv-sigil-b' },
  { text: 'SG', style: 'pv-sigil-c' },
  { text: 'PU', style: 'pv-sigil-d' },
  { text: 'OC', style: 'pv-sigil-e' },
]

function Sigil() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex -space-x-2.5">
        {SIGILS.map((s) => (
          <span key={s.text} className={`pv-sigil ${s.style}`}>
            {s.text}
          </span>
        ))}
      </div>
    </div>
  )
}

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S']
const SLOTS = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00']

function Octo() {
  return (
    <div className="flex items-start justify-center h-full pt-4">
      <div className="pv-phone">
        <span className="pv-notch" />
        <span className="text-[11px] font-semibold text-[var(--text-primary)]">Book a clean</span>
        <div className="pv-days">
          {DAYS.map((d, i) => (
            <span key={i} className={i === 1 ? 'pv-on' : ''}>
              <b>{d}</b>
              {12 + i}
            </span>
          ))}
        </div>
        <div className="pv-slots">
          {SLOTS.map((t) => (
            <span key={t} className={t === '10:00' ? 'pv-on' : t === '14:00' ? 'pv-gone' : ''}>
              {t}
            </span>
          ))}
        </div>
        <div className="pv-row">
          <span>Deep clean</span>
          <span className="text-[var(--text-tertiary)]">+ oven</span>
        </div>
        <div className="pv-row pv-row-on">
          <span>Anna K. · 4.9★</span>
          <span className="pv-check">✓</span>
        </div>
        <span className="pv-pay">Pay £64</span>
      </div>
    </div>
  )
}

function Stopwatch() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <span className="text-[30px] font-extralight tabular-nums tracking-tight text-[var(--text-primary)] leading-none">
        00:12.48
      </span>
      <span className="flex gap-10">
        <span className="pv-round">Lap</span>
        <span className="pv-round pv-round-go">Start</span>
      </span>
    </div>
  )
}

function Vector() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2.5">
      <span className="flex gap-1">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={`pv-cell ${i < 5 ? 'pv-cell-on' : ''} ${i === 5 ? 'pv-cell-next' : ''}`} />
        ))}
      </span>
      <span className={`${MONO} text-[10px] text-[var(--text-tertiary)] tracking-wide`}>
        size 5 · capacity 8 · push_back →
      </span>
    </div>
  )
}

const ROWS = [
  ['name', 'role', 'year'],
  ['Ada', 'engineer', '1843'],
  ['Grace', 'admiral', '1952'],
]

function Csv() {
  return (
    <div className="flex flex-col justify-center h-full gap-2 px-5">
      <span className={`${MONO} text-[10px] text-[var(--text-tertiary)] truncate`}>
        name,role,year⏎Ada,engineer,1843⏎Grace,&quot;admiral&quot;,1952
      </span>
      <table className={`${MONO} pv-table`}>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={i}>
              {r.map((c) => (i === 0 ? <th key={c}>{c}</th> : <td key={c}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const VISUALS: Record<NonNullable<Project['visual']>, () => React.JSX.Element> = {
  pupil: Pupil,
  sigil: Sigil,
  octo: Octo,
  stopwatch: Stopwatch,
  vector: Vector,
  csv: Csv,
}

export function ProjectVisual({ name }: { name: NonNullable<Project['visual']> }) {
  const V = VISUALS[name]
  return (
    <div className="pv" aria-hidden="true">
      <V />
    </div>
  )
}
