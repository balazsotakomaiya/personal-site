import Link from 'next/link'

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
}

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-100 w-full px-5 sm:px-8 md:px-6 py-4 mb-16"
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex items-center justify-between max-w-[680px] mx-auto">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-xl italic text-[var(--text-primary)] hover:opacity-80 transition-opacity"
        >
          Otakomaiya
        </Link>
        <div className="flex items-center gap-6">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {name}
            </Link>
          ))}
          <a
            href="https://github.com/balazsotakomaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors px-2.5 py-1 rounded-md border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-white/[0.03]"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
