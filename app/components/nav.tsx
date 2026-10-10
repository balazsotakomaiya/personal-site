'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/blog', name: 'Writing' },
  { href: '/inspirations', name: 'Inspirations' },
]

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

// Pages that morph the column wider (see :root[data-wide] in global.css).
const WIDE_ROUTES = ['/inspirations']

type Section = { id: string; title: string }

/* On long posts (2+ sections) the capsule turns into a reading nav:
   current section, progress and time left, plus a contents list.
   Everywhere else this returns no sections and the nav stays plain. */
function useReading(pathname: string) {
  const [sections, setSections] = useState<Section[]>([])
  const [section, setSection] = useState(-1)
  const [progress, setProgress] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    setSections([])
    setSection(-1)
    setProgress(0)

    const article = document.querySelector<HTMLElement>('article.prose')
    if (!article) return
    const heads = Array.from(article.querySelectorAll<HTMLElement>('h2[id]'))
    if (heads.length < 2) return

    setSections(heads.map((h) => ({ id: h.id, title: h.textContent?.trim() ?? '' })))
    setMinutes(Math.max(1, Math.round((article.textContent ?? '').split(/\s+/).length / 230)))

    let raf = 0
    const compute = () => {
      raf = 0
      const vh = window.innerHeight
      const a = article.getBoundingClientRect()
      setProgress(Math.min(1, Math.max(0, (vh * 0.25 - a.top) / Math.max(1, a.height - vh * 0.6))))
      let current = -1
      heads.forEach((h, i) => {
        if (h.getBoundingClientRect().top < vh * 0.35) current = i
      })
      setSection(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return { sections, section, progress, minutes }
}

/* The active pill is one element that slides between links. It moves
   on click (before the route commits) so the pick feels instant, and
   snaps without animating on first paint and on resize. */
function useActivePill(activeHref: string | null) {
  const listRef = useRef<HTMLSpanElement>(null)
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    const measure = () => {
      const el = activeHref ? list.querySelector<HTMLElement>(`[data-href="${activeHref}"]`) : null
      setPill(el ? { x: el.offsetLeft, w: el.offsetWidth } : null)
    }
    measure()
    const raf = requestAnimationFrame(() => setReady(true))
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [activeHref])

  return { listRef, pill, ready }
}

const pad = (n: number) => String(n).padStart(2, '0')
const RING = 2 * Math.PI * 7

export function Navbar() {
  const pathname = usePathname()
  const { sections, section, progress, minutes } = useReading(pathname)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [picked, setPicked] = useState<string | null>(null)
  const activeHref = picked ?? navItems.find(({ href }) => isActive(pathname, href))?.href ?? null
  const { listRef, pill, ready } = useActivePill(activeHref)

  const reading = section >= 0
  const left = Math.max(1, Math.ceil(minutes * (1 - progress)))

  useEffect(() => {
    setOpen(false)
    setPicked(null)
    document.documentElement.toggleAttribute('data-wide', WIDE_ROUTES.some((r) => pathname.startsWith(r)))
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) close()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('scroll', close, { passive: true, once: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('scroll', close)
    }
  }, [open])

  const jumpTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    setOpen(false)
    history.replaceState(null, '', `#${id}`)
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-100 w-full px-3 sm:px-8 pt-3 sm:pt-4 mb-14 sm:mb-20">
      <div ref={wrapRef} className="relative mx-auto" style={{ maxWidth: 'calc(var(--content-width) + 32px)' }}>
        <div className="nav-capsule flex items-center justify-between">
          <span className="nav-swap">
            <span className="nav-swap-item" data-on={!reading || undefined} inert={reading}>
              <Link href="/" aria-label="Balazs Otakomaiya — home" className="nav-brand">
                <span className="text-[14px] font-medium tracking-[-0.2px] text-[var(--text-primary)] whitespace-nowrap">
                  Balazs<span className="hidden min-[420px]:inline"> Otakomaiya</span>
                </span>
              </Link>
            </span>
            <button
              type="button"
              className="nav-swap-item nav-chapter"
              data-on={reading || undefined}
              inert={!reading}
              aria-expanded={open}
              aria-controls="nav-toc"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="nav-chapter-n">
                {pad(section + 1)} / {pad(sections.length)}
              </span>
              <span key={section} className="nav-chapter-title">
                {sections[section]?.title}
              </span>
              <span className="nav-caret" aria-hidden="true">
                ▾
              </span>
            </button>
          </span>

          <span className="nav-swap nav-swap-end">
            <span className="nav-swap-item flex items-center gap-1" data-on={!reading || undefined} inert={reading}>
              <span ref={listRef} className="nav-links" data-ready={ready || undefined}>
                <span
                  className="nav-pill"
                  aria-hidden="true"
                  style={pill ? { width: pill.w, transform: `translateX(${pill.x}px)` } : { opacity: 0 }}
                />
                {navItems.map(({ href, name }) => (
                  <Link
                    key={href}
                    href={href}
                    className="nav-link"
                    data-href={href}
                    data-active={href === activeHref || undefined}
                    aria-current={isActive(pathname, href) ? 'page' : undefined}
                    onClick={() => setPicked(href)}
                  >
                    {name}
                  </Link>
                ))}
              </span>
              <span className="w-px h-4 bg-white/10 mx-1.5" aria-hidden="true" />
              <a
                href="https://github.com/balazsotakomaiya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="nav-icon"
              >
                <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </span>
            <span
              className="nav-swap-item nav-progress"
              data-on={reading || undefined}
              aria-hidden={!reading}
              aria-label={reading ? `${left} minutes left` : undefined}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="7" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2" />
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  fill="none"
                  stroke="var(--text-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={RING}
                  strokeDashoffset={RING * (1 - progress)}
                  transform="rotate(-90 9 9)"
                />
              </svg>
              <span>
                {left} min<span className="nav-progress-left"> left</span>
              </span>
            </span>
          </span>
        </div>

        {open && reading && (
          <div id="nav-toc" className="nav-toc">
            <p className="nav-toc-head">Contents</p>
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className="nav-toc-item"
                data-on={i === section || undefined}
                onClick={() => jumpTo(s.id)}
              >
                <span className="nav-toc-n">{pad(i + 1)}</span>
                {s.title}
              </button>
            ))}
            <Link href="/blog" className="nav-toc-foot">
              ← All writing
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
