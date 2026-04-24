import { BlogPosts } from 'app/components/posts'
import { ProjectFilters } from 'app/components/project-filters'
import { experiences, ventures } from 'app/projects/data'
import Image from 'next/image'

type Seg = { t: string; c?: string }

const SERIF = 'font-[family-name:var(--font-serif)] italic text-[var(--text-primary)]'
const MUTED = 'text-[var(--text-secondary)]'
const STAGGER = 30

function renderWords(segments: Seg[], startIdx: number): { nodes: React.ReactNode[]; nextIdx: number } {
  let idx = startIdx
  const nodes: React.ReactNode[] = []
  segments.forEach((seg, sIdx) => {
    const parts = seg.t.split(' ').filter(Boolean)
    parts.forEach((w, i) => {
      nodes.push(
        <span
          key={`w-${sIdx}-${i}-${idx}`}
          className={seg.c ? `word ${seg.c}` : 'word'}
          style={{ animationDelay: `${idx * STAGGER}ms` }}
        >
          {w}
        </span>,
      )
      idx++
      if (i < parts.length - 1) nodes.push(' ')
    })
    if (sIdx < segments.length - 1) nodes.push(' ')
  })
  return { nodes, nextIdx: idx }
}

export default function Page() {
  // Desktop word sequence
  let di = 0
  const d1 = renderWords([{ t: "Nice to meet you, I'm", c: MUTED }, { t: 'Balazs', c: SERIF }], di); di = d1.nextIdx
  const d2 = renderWords([{ t: 'Otakomaiya', c: SERIF }], di); di = d2.nextIdx
  const d3 = renderWords(
    [
      { t: 'Taste' },
      { t: '×', c: SERIF },
      { t: 'engineering' },
      { t: '×', c: SERIF },
      { t: 'business — I work at the intersection. 8 years of shipping: Booking.com, Typeform, OTP\u00a0Bank. Deep in React/TS and Flutter.' },
    ],
    di,
  ); di = d3.nextIdx
  const d4 = renderWords([{ t: 'Increasingly deep in AI — pipelines, integrations, fine-tuning.' }], di); di = d4.nextIdx

  // Mobile word sequence (preserves manual line breaks)
  let mi = 0
  const m1 = renderWords([{ t: "Nice to meet you, I'm", c: MUTED }, { t: 'Balazs', c: SERIF }], mi); mi = m1.nextIdx
  const m2 = renderWords([{ t: 'Otakomaiya', c: SERIF }], mi); mi = m2.nextIdx
  const m3 = renderWords(
    [
      { t: 'Taste' },
      { t: '×', c: SERIF },
      { t: 'engineering' },
      { t: '×', c: SERIF },
      { t: 'business — I work at the' },
    ],
    mi,
  ); mi = m3.nextIdx
  const m4 = renderWords([{ t: 'intersection. 8 years of shipping: Booking.com,' }], mi); mi = m4.nextIdx
  const m5 = renderWords([{ t: 'Typeform, OTP\u00a0Bank. Deep in React/TS and Flutter.' }], mi); mi = m5.nextIdx
  const m6 = renderWords([{ t: 'Increasingly deep in AI — pipelines, integrations, fine-tuning.' }], mi); mi = m6.nextIdx

  return (
    <section>
      {/* Hero */}
      <div className="relative mb-4 sm:grid sm:grid-cols-[1fr_200px] sm:gap-10 sm:items-start">
        {/* Hero – Desktop */}
        <div className="hidden sm:block">
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight">
            {d1.nodes}
          </h1>
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight mb-5">
            {d2.nodes}
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[440px]">
            {d3.nodes}
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[440px]">
            {d4.nodes}
          </p>
        </div>

        {/* Hero – Mobile */}
        <div className="sm:hidden">
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight">
            {m1.nodes}
          </h1>
          <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight mb-5">
            {m2.nodes}
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {m3.nodes}
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {m4.nodes}
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {m5.nodes}
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {m6.nodes}
          </p>
        </div>

        {/* Portrait */}
        <div className="portrait-reveal relative ml-auto sm:ml-0 mt-6 sm:mt-1 w-[140px] sm:w-[200px]">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[1.5px] text-[var(--text-tertiary)] mb-2">
            Fig. I
          </p>
          <div className="portrait-frame">
            <Image
              src="/me.png"
              alt="Balazs Otakomaiya"
              width={545}
              height={743}
              priority
              sizes="(min-width: 640px) 200px, 140px"
              className="portrait-img w-full h-auto block"
            />
          </div>
          <p className="font-[family-name:var(--font-serif)] italic text-[13px] text-[var(--text-tertiary)] mt-2 text-right">
            b.o. — MMXXVI
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3 mb-0">
        {[
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/balazsotakomaiya/' },
          // { label: 'LeetCode', href: 'https://leetcode.com/u/balazsotakomaiya/' },
          { label: 'Email', href: 'mailto:balazs@otakomaiya.com' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="section-divider" />

      {/* Career */}
      <div className="mb-0">
        <p className="eyebrow font-[family-name:var(--font-mono)]">Career</p>
        <div className="space-y-0">
          {experiences.map((exp, i) => {
            const isCurrent = i === 0
            return (
              <div
                key={exp.company}
                className="group py-4"
                style={{
                  borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : undefined,
                }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2.5">
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    )}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-[var(--text-primary)] hover:underline underline-offset-3"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-tertiary)] shrink-0 tabular-nums">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed pl-0">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--text-tertiary)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="section-divider" />

      {/* Projects */}
      <div className="mb-0">
        <ProjectFilters />
      </div>

      <div className="section-divider" />

      {/* Venture */}
      {ventures.map((v) => (
        <div
          key={v.name}
          className="mb-0 py-5 px-5 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)]"
        >
          <p className="eyebrow font-[family-name:var(--font-mono)]">Venture</p>
          <a
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-semibold text-[var(--text-primary)] hover:underline underline-offset-3"
          >
            {v.name}
          </a>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mt-1">
            {v.description}
          </p>
        </div>
      ))}

      <div className="section-divider" />

      {/* Blog */}
      <div>
        <p className="eyebrow font-[family-name:var(--font-mono)] mb-6">Recent Writing</p>
        <BlogPosts />
      </div>
    </section>
  )
}
