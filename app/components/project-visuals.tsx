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

/* Althar, drawn for this site: the site's own repository hands its work
   to agents from four labs. Light runs down each line to the agent it
   feeds, and the step each agent is on pulses. Below 640px the lines go
   and the agents sit two by two. */
const AGENTS: {
  model: string
  task: string
  pr: number
  step: string
  done: number
  ready?: boolean
}[] = [
  { model: 'Opus 5.5', task: 'Write the git post', pr: 6, step: 'Ready to accept', done: 4, ready: true },
  { model: 'GPT-6.1 Sol', task: 'Lay out the bento', pr: 7, step: 'Review', done: 2 },
  { model: 'Gemini 3 Pro', task: 'Update the intro', pr: 6, step: 'Security review', done: 3 },
  { model: 'Qwen3 Coder', task: 'Draw the tiles', pr: 8, step: 'Implement', done: 1 },
]

/* The lines are drawn in the tile's own pixels at the site's 680px
   column, so the light's dash keeps its length; between 640px and 680px
   they stretch a few percent, and below 640px they're hidden. Each card's
   centre follows the card row's 3.5% padding and 1.8% gaps. */
const W = 680
const CARD_X = [14.45, 38.15, 61.85, 85.55].map((x) => (x / 100) * W)

function Fork() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="4.5" cy="3.5" r="1.5" />
      <circle cx="11.5" cy="3.5" r="1.5" />
      <circle cx="8" cy="12.5" r="1.5" />
      <path d="M4.5 5v1.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V5M8 8.5V11" />
    </svg>
  )
}

function AltharArt() {
  return (
    <div className="aa">
      <svg className="aa-lines" viewBox={`0 0 ${W} 300`} preserveAspectRatio="none" aria-hidden="true">
        {CARD_X.map((x, i) => {
          const d = `M${W / 2} 64 C${W / 2} 108 ${x} 102 ${x} 150`
          return (
            <g key={x}>
              <path d={d} className="aa-line" />
              <path d={d} pathLength={1} className="aa-glint" style={{ animationDelay: `${i * 0.7}s` }} />
            </g>
          )
        })}
      </svg>

      <div className="aa-node">
        <span className="aa-fork">
          <Fork />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[13px] font-medium text-[var(--text-primary)]">otakomaiya.com</span>
          <span className="text-[11px] text-[var(--text-tertiary)]">
            <span className="text-[var(--text-secondary)]">4 agents</span> · 1 ready to accept
          </span>
        </span>
      </div>

      <div className="aa-cards">
        {AGENTS.map((a, i) => (
          <div key={a.model} className={`aa-card ${a.ready ? 'aa-card-ready' : ''}`}>
            <span className={`${MONO} flex justify-between text-[9px] text-[var(--text-tertiary)]`}>
              <span>Task {430 + i}</span>
              <span>PR #{a.pr}</span>
            </span>
            <span className="text-[13px] leading-snug text-[var(--text-primary)] mt-1.5">{a.task}</span>
            <span className="aa-bar">
              {[0, 1, 2, 3].map((n) => (
                <span key={n} className={n < a.done ? 'aa-seg-done' : n === a.done ? 'aa-seg-now' : ''} />
              ))}
            </span>
            <span className="flex items-center justify-between text-[10px] mt-1.5">
              <span className="flex items-center gap-1.5 min-w-0">
                <span className="aa-dot" />
                <span className="truncate">{a.step}</span>
              </span>
              {!a.ready && <span className="text-[var(--text-tertiary)] tabular-nums">{a.done}/4</span>}
            </span>
            <span className="text-[10px] text-[var(--text-tertiary)] mt-2.5 pt-2 border-t border-[var(--border)] truncate">
              <span className="text-[var(--text-secondary)]">{a.model}</span> leads
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

type Visual = NonNullable<Project['visual']>

/* The featured tile's drawings, which take its full width. */
const FEATURED: Partial<Record<Visual, () => React.JSX.Element>> = {
  althar: AltharArt,
}

export function FeaturedArt({ name }: { name: Visual }) {
  const A = FEATURED[name]
  return A ? <A /> : null
}

const VISUALS: Record<Exclude<Visual, 'althar'>, () => React.JSX.Element> = {
  pupil: Pupil,
  sigil: Sigil,
  octo: Octo,
  stopwatch: Stopwatch,
  vector: Vector,
  csv: Csv,
}

export function ProjectVisual({ name }: { name: Exclude<Visual, 'althar'> }) {
  const V = VISUALS[name]
  return (
    <div className="pv" aria-hidden="true">
      <V />
    </div>
  )
}
