'use client'

import { useState } from 'react'
import { projects, statusLabels } from 'app/projects/data'
import type { Project } from 'app/projects/data'

type Filter = 'all' | Project['category']

const allFilters: { key: Filter; label: string; count: number }[] = [
  { key: 'all', label: 'All', count: projects.length },
  { key: 'mobile', label: 'Mobile', count: projects.filter((p) => p.category === 'mobile').length },
  { key: 'web', label: 'Web', count: projects.filter((p) => p.category === 'web').length },
  { key: 'cpp', label: 'C++', count: projects.filter((p) => p.category === 'cpp').length },
  { key: 'ai', label: 'AI', count: projects.filter((p) => p.category === 'ai').length },
]

const filters = allFilters.filter((f) => f.count > 0 || f.key === 'all')

function StatusDot({ status }: { status: Project['status'] }) {
  const color =
    status === 'completed'
      ? 'bg-emerald-500'
      : status === 'in-progress'
        ? 'bg-amber-400'
        : 'bg-[var(--text-tertiary)]'
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${color}`} />
}

export function ProjectFilters() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <p className="eyebrow font-[family-name:var(--font-mono)] !mb-0 mr-2">Projects</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 transition-all hover:border-[var(--border-hover)]"
          >
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
                className="text-[15px] font-semibold text-[var(--text-primary)] hover:underline underline-offset-3 inline-block mb-1"
              >
                {p.title}
              </a>
            ) : (
              <h3 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">{p.title}</h3>
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
        ))}
        {filtered.length === 0 && (
          <p className="col-span-2 text-sm text-[var(--text-tertiary)] text-center py-8">No projects here yet.</p>
        )}
      </div>
    </>
  )
}
