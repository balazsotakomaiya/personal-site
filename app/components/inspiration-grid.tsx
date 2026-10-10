import Image from 'next/image'
import type { CSSProperties } from 'react'
import { kindLabels, type Inspiration } from 'app/inspirations/data'


/* A salon hang rather than a grid of cards: plates alternate wide and
   narrow (with different crops) on a 6-column wall, every second plate
   in a row drops a little, and a lone last plate runs as a panorama. */
const RHYTHM: { span: number; aspect: string }[] = [
  { span: 4, aspect: '16 / 10' },
  { span: 2, aspect: '4 / 5' },
  { span: 2, aspect: '4 / 5' },
  { span: 4, aspect: '16 / 10' },
  { span: 3, aspect: '4 / 3' },
  { span: 3, aspect: '4 / 3' },
]

const ROMAN: [number, string][] = [
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

function roman(n: number) {
  let out = ''
  for (const [v, s] of ROMAN) {
    while (n >= v) {
      out += s
      n -= v
    }
  }
  return out
}

function displayUrl(url: string) {
  const { hostname, pathname } = new URL(url)
  return hostname.replace(/^www\./, '') + pathname.replace(/\/$/, '')
}

function Plate({
  item,
  index,
  total,
}: {
  item: Inspiration
  index: number
  total: number
}) {
  const lone = index === total - 1 && index % 2 === 0 && total > 1
  const { span, aspect } = lone ? { span: 6, aspect: '21 / 9' } : RHYTHM[index % RHYTHM.length]

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="plate"
      data-span={span}
      data-drop={(index % 2 === 1 && !lone) || undefined}
      style={{ '--aspect': aspect } as CSSProperties}
    >
      <span className="plate-img">
        {item.image ? (
          <Image src={item.image} alt="" fill sizes={span >= 4 ? '(min-width: 640px) 720px, 100vw' : '(min-width: 640px) 360px, 100vw'} />
        ) : (
          <span className="plate-empty">{item.name}</span>
        )}
      </span>
      <span className="plate-cap">
        <span className="plate-row">
          <span className="plate-no">Pl. {roman(index + 1)}</span>
          <span className="plate-meta">
            {kindLabels[item.kind]} · {displayUrl(item.url)}
          </span>
        </span>
        <span className="plate-name">
          {item.name}
          <span className="plate-arrow" aria-hidden="true">
            ↗
          </span>
        </span>
        {item.note && <span className="plate-note">{item.note}</span>}
      </span>
    </a>
  )
}

export function InspirationGrid({ items }: { items: Inspiration[] }) {
  return (
    <div className="plate-wall">
      {items.map((item, i) => (
        <Plate key={item.url} item={item} index={i} total={items.length} />
      ))}
    </div>
  )
}
