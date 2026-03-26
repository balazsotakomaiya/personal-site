const links = [
  { label: 'RSS', href: '/rss' },
  { label: 'GitHub', href: 'https://github.com/balazsotakomaiya' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/balazsotakomaiya/' },
  { label: 'Email', href: 'mailto:balazs@otakomaiya.com' },
]

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="section-divider" />
      <div className="flex flex-col items-center gap-5 py-10">
        <p
          className="font-[family-name:var(--font-display)] text-[15px] text-[var(--text-tertiary)] tracking-[-0.3px]"
        >
          my den
        </p>
        <div className="flex items-center gap-0 text-[var(--text-tertiary)]">
          {links.map(({ label, href }, i) => (
            <span key={label} className="flex items-center">
              {i > 0 && <span className="mx-2.5 text-[10px]">&middot;</span>}
              <a
                href={href}
                target={href.startsWith('/') || href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('/') || href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {label}
              </a>
            </span>
          ))}
        </div>
        <p>
          <span className="text-[13px] text-[var(--text-tertiary)]">Made by </span>
          <a
            href="/"
            className="font-[family-name:var(--font-serif)] italic text-[18px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Balazs Otakomaiya
          </a>
        </p>
      </div>
    </footer>
  )
}
