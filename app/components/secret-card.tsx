'use client'

import { useState, type MouseEvent } from 'react'
import type { Project } from 'app/projects/data'
import s from './secret-card.module.css'

function Lock() {
  return (
    <svg className={s.lock} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="1.5" y="4.5" width="7" height="5" rx="1" />
      <path d="M3 4.5V3a2 2 0 0 1 4 0v1.5" />
    </svg>
  )
}

function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/* A project that isn't announced yet. The card stays dark and the cursor
   lights it like a torch; on touch, the first tap reveals it and the
   second follows the link. */
export function SecretCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false)

  const onClick = (e: MouseEvent) => {
    if (!open && window.matchMedia('(hover: none)').matches) {
      e.preventDefault()
      setOpen(true)
    }
  }

  const body = (
    <>
      <span className={s.glow} aria-hidden="true" />
      <span className={s.hint} aria-hidden="true">
        Something’s in here
      </span>
      <div className={s.body}>
        <div className={s.meta}>
          <Lock />
          Unannounced
          <span className={s.when}>Soon</span>
        </div>
        <span className={s.title}>{p.title}</span>
        <p className={s.desc}>{p.description}</p>
        <div className={s.chips}>
          {p.tech.map((t) => (
            <span key={t} className={s.chip}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  return p.url ? (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={s.card}
      data-open={open || undefined}
      onClick={onClick}
      onMouseMove={trackPointer}
    >
      {body}
    </a>
  ) : (
    <div className={s.card} data-open={open || undefined} onClick={() => setOpen(true)} onMouseMove={trackPointer}>
      {body}
    </div>
  )
}
