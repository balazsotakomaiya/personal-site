import type { CSSProperties } from 'react'

/* Static tweet card. Content is passed in as props rather than pulled
   from X's embed script, so it renders instantly, carries no tracking,
   and keeps working if the tweet or the platform changes. Base styles
   are inline (like the other MDX components); only hover lives in
   global.css under `.tweet`. */

type TweetProps = {
  url: string
  name: string
  handle: string
  avatar?: string
  date: string
  text: string
}

const mono = 'var(--font-geist-mono), monospace'

const s: Record<string, CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    margin: '2rem 0',
    padding: '20px 22px 16px',
    border: '1px solid var(--border-hover)',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--bg-subtle)',
    color: 'var(--text-primary)',
    textDecoration: 'none',
  },
  head: { display: 'flex', alignItems: 'center', gap: 12 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    flexShrink: 0,
    objectFit: 'cover',
    background: 'var(--bg-elevated)',
    margin: 0,
  },
  fallback: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    color: 'var(--text-secondary)',
  },
  who: { display: 'flex', flexDirection: 'column', lineHeight: 1.3, minWidth: 0 },
  name: { fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' },
  handle: { fontSize: 13, color: 'var(--text-tertiary)' },
  x: { marginLeft: 'auto', flexShrink: 0, color: 'var(--text-tertiary)' },
  text: {
    fontSize: 'clamp(17px, 2.4vw, 19px)',
    lineHeight: 1.5,
    letterSpacing: -0.1,
    color: 'var(--text-primary)',
  },
  foot: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 12,
    paddingTop: 12,
    borderTop: '1px solid var(--border)',
    fontFamily: mono,
    fontSize: 12,
    color: 'var(--text-tertiary)',
  },
}

export function Tweet({ url, name, handle, avatar, date, text }: TweetProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tweet" style={s.card}>
      <span style={s.head}>
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt="" width={40} height={40} loading="lazy" style={s.avatar} />
        ) : (
          <span style={{ ...s.avatar, ...s.fallback }}>{name.charAt(0)}</span>
        )}
        <span style={s.who}>
          <span style={s.name}>{name}</span>
          <span style={s.handle}>@{handle}</span>
        </span>
        <svg className="tweet-x" viewBox="0 0 24 24" width="18" height="18" aria-label="X" style={s.x}>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      </span>
      <span style={s.text}>{text}</span>
      <span style={s.foot}>
        <span>{date}</span>
        <span className="tweet-view">View on X →</span>
      </span>
    </a>
  )
}
