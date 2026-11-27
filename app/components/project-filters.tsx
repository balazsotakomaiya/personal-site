'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects, statusLabels } from 'app/projects/data'
import type { Project } from 'app/projects/data'
import { SectionHead } from 'app/components/section-head'
import { SecretCard } from 'app/components/secret-card'
import { ProjectVisual } from 'app/components/project-visuals'

type Filter = 'all' | Project['category']

const allFilters: { key: Filter; label: string; count: number }[] = [
  { key: 'all', label: 'All', count: projects.length },
  { key: 'mobile', label: 'Mobile', count: projects.filter((p) => p.category === 'mobile').length },
  { key: 'web', label: 'Web', count: projects.filter((p) => p.category === 'web').length },
  { key: 'cpp', label: 'C++', count: projects.filter((p) => p.category === 'cpp').length },
  { key: 'ai', label: 'AI', count: projects.filter((p) => p.category === 'ai').length },
]

const filters = allFilters.filter((f) => f.count > 0 || f.key === 'all')

function trackSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function StatusDot({ status }: { status: Project['status'] }) {
  const color =
    status === 'completed'
      ? 'bg-emerald-500'
      : status === 'in-progress'
        ? 'bg-amber-400'
        : 'bg-[var(--text-tertiary)]'
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${color}`} />
}

/* A bento tile: its drawing on top, or beside the words on a wide tile,
   and stretched to fill a tall one. */
function ProjectCard({ p, className = '', side = false }: { p: Project; className?: string; side?: boolean }) {
  return (
    <div
      onMouseMove={trackSpotlight}
      className={`spot-card bento-card ${side ? 'bento-side' : ''} ${p.rows === 2 ? 'bento-tall' : ''} ${className}`}
    >
      {p.visual && <ProjectVisual name={p.visual} />}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <StatusDot status={p.status} />
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
            {statusLabels[p.status]}
          </span>
          {p.toy && (
            <span className="font-[family-name:var(--font-mono)] text-[10px] px-1.5 py-0.5 rounded-full border border-amber-800/50 text-amber-400/80">
              Toy
            </span>
          )}
          {p.openSource && (
            <span className="font-[family-name:var(--font-mono)] text-[10px] px-1.5 py-0.5 rounded-full border border-emerald-800/50 text-emerald-400/80">
              OSS
            </span>
          )}
        </div>
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[var(--text-primary)] hover:underline underline-offset-3 inline-block mb-1"
          >
            {p.title}
          </a>
        ) : (
          <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{p.title}</h3>
        )}
        <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {p.tech.map((t) => (
            <span
              key={t}
              className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--text-tertiary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* The bento's large tile: the project gets its mark, room to breathe and a
   screenshot that runs off the card's bottom-right corner. */
function FeaturedCard({ p, className = '' }: { p: Project; className?: string }) {
  return (
    <div onMouseMove={trackSpotlight} className={`spot-card featured-card ${className}`}>
      <div className="relative z-[1] p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          {p.mark && <img src={p.mark} alt="" aria-hidden="true" className="featured-mark" />}
          <StatusDot status={p.status} />
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
            {statusLabels[p.status]}
          </span>
          {p.openSource && (
            <span className="font-[family-name:var(--font-mono)] text-[10px] px-1.5 py-0.5 rounded-full border border-emerald-800/50 text-emerald-400/80">
              OSS
            </span>
          )}
          {p.year && (
            <span className="ml-auto font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-tertiary)] tracking-wider">
              {p.year}
            </span>
          )}
        </div>
        <h3 className="font-[family-name:var(--font-serif)] italic text-[34px] leading-none text-[var(--text-primary)] mb-3">
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-1">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[400px]">{p.description}</p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="chip-link">
              {p.url.replace(/^https?:\/\//, '')}
              <span className="chip-arrow" aria-hidden="true">↗</span>
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="chip-link">
              Source
              <span className="chip-arrow" aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
      {p.shot && (
        <div className="featured-shot">
          <Image
            src={p.shot}
            alt={`${p.title}: agents' work on a board, up next, running and needing you`}
            width={1200}
            height={1149}
            sizes="(min-width: 640px) 420px, 90vw"
            className="block w-full"
          />
        </div>
      )}
    </div>
  )
}

/* Spans out of six columns. "All" gets the bento as the data lays it out.
   A filtered list is two-up, or, when it holds the featured project,
   that project beside narrow cards. */
const COLS = { 2: 'sm:col-span-2', 3: 'sm:col-span-3', 4: 'sm:col-span-4', 6: 'sm:col-span-6' }

function spanClass(p: Project, bento: boolean, hasFeatured: boolean) {
  if (p.featured) return bento ? 'sm:col-span-4 sm:row-span-2' : 'sm:col-span-4'
  if (!bento) return hasFeatured ? 'sm:col-span-2' : 'sm:col-span-3'
  return `${COLS[p.span ?? 3]} ${p.rows === 2 ? 'sm:row-span-2' : ''}`
}

/* A wide, one-row tile puts its drawing beside the words. */
function isSide(p: Project, bento: boolean) {
  return bento && (p.span ?? 3) >= 4 && p.rows !== 2
}

export function ProjectFilters() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <SectionHead index="03" title="Projects" meta={`${projects.length} built`} />
      <div className="flex items-center gap-1.5 sm:gap-2 mb-5 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md transition-all ${
              filter === f.key
                ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-hover)]'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] border border-transparent'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 sm:grid-flow-dense gap-3">
        {filtered.map((p) => {
          const span = spanClass(p, filter === 'all', filtered.some((f) => f.featured))
          if (p.featured) return <FeaturedCard key={p.title} p={p} className={span} />
          if (p.secret) return <SecretCard key={p.title} p={p} className={span} />
          return <ProjectCard key={p.title} p={p} className={span} side={isSide(p, filter === 'all')} />
        })}
        {filtered.length === 0 && (
          <p className="sm:col-span-6 text-sm text-[var(--text-tertiary)] text-center py-8">No projects here yet.</p>
        )}
      </div>
    </>
  )
}
