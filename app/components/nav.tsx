'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
}

const names = ['Balazs', 'Otakomaiya']
const CYCLE_INTERVAL = 4000

export function Navbar() {
  const [nameIndex, setNameIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setNameIndex((i) => (i + 1) % names.length)
        setIsAnimating(false)
      }, 180)
    }, CYCLE_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav
      className="sticky top-0 z-100 w-full px-8 md:px-6 py-4 mb-16"
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateY(-80%);
            opacity: 0;
          }
          70% {
            transform: translateY(4%);
            opacity: 1;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(80%);
            opacity: 0;
          }
        }
        .name-slide-in {
          animation: slideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .name-slide-out {
          animation: slideOut 0.18s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }
      `}</style>
      <div className="flex items-center justify-between max-w-[680px] mx-auto">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-xl italic text-[var(--text-primary)] hover:opacity-80 transition-opacity relative overflow-hidden"
          style={{ height: '1.75rem', display: 'inline-flex', alignItems: 'center' }}
        >
          <span
            key={nameIndex}
            className={isAnimating ? 'name-slide-out' : 'name-slide-in'}
            style={{ display: 'inline-block' }}
          >
            {names[nameIndex]}
          </span>
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
