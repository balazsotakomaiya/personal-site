import { BlogPosts } from 'app/components/posts'
import { ProjectFilters } from 'app/components/project-filters'
import { experiences, ventures } from 'app/projects/data'

export default function Page() {
  return (
    <section>
      {/* Hero */}
      <div className="mb-4 hero-animate">
        <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight">
          <span className="text-[var(--text-secondary)]">Nice to meet you, I'm </span>
          <span className="font-[family-name:var(--font-serif)] italic text-[var(--text-primary)]">
            Balazs
          </span>
        </h1>
        <h1 className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight mb-5">
          <span className="font-[family-name:var(--font-serif)] italic text-[var(--text-primary)]">
            Otakomaiya
          </span>
        </h1>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
          Taste <span className="font-[family-name:var(--font-serif)] italic text-[var(--text-primary)]">×</span> engineering <span className="font-[family-name:var(--font-serif)] italic text-[var(--text-primary)]">×</span> business — I work at the intersection. 8 years of
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
          shipping: Booking.com, Typeform, OTP Bank. Deep in React/TS and Flutter.
        </p>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
           Increasingly deep in AI — pipelines, integrations, fine-tuning.
        </p>
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
