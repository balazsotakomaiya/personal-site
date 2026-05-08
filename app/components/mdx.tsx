import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { Vinyl } from './vinyl'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

function TokenScale({ items }: { items: { label: string; tokens: number; highlight?: boolean }[] }) {
  const max = Math.max(...items.map((i) => i.tokens))
  return (
    <div className="token-scale">
      {items.map(({ label, tokens, highlight }) => (
        <div key={label} className="token-row">
          <span className="token-label" style={highlight ? { color: 'var(--text-primary)', fontWeight: 500 } : undefined}>
            {label}
          </span>
          <div className="token-bar-track">
            <div
              className="token-bar-fill"
              style={{
                width: `${Math.max((tokens / max) * 100, 0.4)}%`,
                background: highlight ? 'var(--text-secondary)' : undefined,
              }}
            />
          </div>
          <span className="token-count">
            {tokens >= 1_000_000
              ? `${(tokens / 1_000_000).toFixed(1)}M`
              : tokens >= 1000
                ? `${Math.round(tokens / 1000)}K`
                : tokens}
          </span>
        </div>
      ))}
    </div>
  )
}

function Accordion({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="accordion">
      <summary className="accordion-summary">{label}</summary>
      <div className="accordion-body">{children}</div>
    </details>
  )
}

function ExtractionPipeline() {
  const box: React.CSSProperties = {
    border: '1px solid var(--border-hover)',
    borderRadius: 'var(--radius)',
    padding: '10px 14px',
    background: 'var(--bg-elevated)',
    flexShrink: 0,
  }
  const ttl: React.CSSProperties = { fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap' }
  const sub: React.CSSProperties = { fontSize: 11, color: 'var(--text-tertiary)', marginTop: 4, lineHeight: 1.6 }
  const arr: React.CSSProperties = { padding: '0 8px', paddingTop: 12, color: 'var(--text-tertiary)', fontSize: 14, flexShrink: 0, alignSelf: 'flex-start' }

  return (
    <div style={{ margin: '2rem 0' }}>
      <div className="eyebrow">Extraction pipeline</div>
      <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
        <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 0, minWidth: 'max-content' }}>
          <div style={box}>
            <div style={ttl}>Conversation batch</div>
            <div style={sub}>raw messages</div>
          </div>
          <div style={arr}>→</div>
          <div style={box}>
            <div style={ttl}>LLM extractor</div>
            <div style={sub}>add · update · reinforce<br />contradict · close_loop</div>
          </div>
          <div style={arr}>→</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={box}>
              <div style={ttl}>Write gate</div>
              <div style={sub}>confidence ≥ 0.4<br />salience ≥ 0.2<br />no near-duplicate</div>
            </div>
            <div style={{ width: 1, height: 10, background: 'var(--border)' }} />
            <div style={{ border: '1px dashed var(--border)', borderRadius: 4, padding: '3px 10px', fontSize: 11, color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
              ↓ rejected
            </div>
          </div>
          <div style={arr}>→</div>
          <div style={box}>
            <div style={ttl}>Memory DB</div>
            <div style={sub}>Postgres + pgvector</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MemoryLifecycle() {
  const box: React.CSSProperties = {
    border: '1px solid var(--border-hover)',
    borderRadius: 'var(--radius)',
    padding: '10px 14px',
    background: 'var(--bg-elevated)',
  }
  const ttl: React.CSSProperties = { fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap' }
  const sub: React.CSSProperties = { fontSize: 11, color: 'var(--text-tertiary)', marginTop: 4 }
  const txn: React.CSSProperties = { fontSize: 11, color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }

  return (
    <div style={{ margin: '2rem 0' }}>
      <div className="eyebrow">Memory lifecycle</div>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'inline-grid', gridTemplateColumns: 'auto auto auto', gap: 0, minWidth: 'max-content', alignItems: 'start' }}>
          <div style={{ ...box, gridColumn: 1, gridRow: 1 }}>
            <div style={ttl}>Active</div>
            <div style={sub}>retrieved normally</div>
          </div>
          <div style={{ gridColumn: 2, gridRow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '14px 14px 0' }}>
            <div style={{ ...txn, marginBottom: 4, textAlign: 'center' }}>contradiction</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              <span style={{ color: 'var(--text-tertiary)', fontSize: 14, marginLeft: 2 }}>→</span>
            </div>
          </div>
          <div style={{ ...box, gridColumn: 3, gridRow: 1, borderStyle: 'dashed' }}>
            <div style={ttl}>Contradicted</div>
            <div style={sub}>excluded from retrieval</div>
          </div>
          <div style={{ gridColumn: 1, gridRow: 2, padding: '5px 0 5px 16px' }}>
            <span style={txn}>↓ age / no reinforcement</span>
          </div>
          <div style={{ ...box, gridColumn: 1, gridRow: 3 }}>
            <div style={ttl}>Stale</div>
            <div style={sub}>out of retrieval pool, preserved</div>
          </div>
          <div style={{ gridColumn: 1, gridRow: 4, padding: '5px 0 5px 16px' }}>
            <span style={txn}>↓ background job</span>
          </div>
          <div style={{ ...box, gridColumn: 1, gridRow: 5 }}>
            <div style={ttl}>Archived</div>
            <div style={sub}>hard-filtered, audit trail only</div>
          </div>
        </div>
      </div>
    </div>
  )
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Vinyl,
  Accordion,
  TokenScale,
  ExtractionPipeline,
  MemoryLifecycle,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
