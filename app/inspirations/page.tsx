import { InspirationGrid } from 'app/components/inspiration-grid'
import { inspirations } from './data'

export const metadata = {
  title: 'Inspirations',
  description: 'Brands, products and sites that set the bar.',
}

export default function Page() {
  return (
    <section>
      <p className="eyebrow font-[family-name:var(--font-mono)]">Inspirations</p>
      <h1 className="font-[family-name:var(--font-serif)] italic text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-3">
        Things I borrow taste from
      </h1>
      <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] max-w-[480px] mb-8">
        Brands, apps, sites and objects that set the bar. A running list, in no particular order.
      </p>

      <InspirationGrid items={inspirations} />
    </section>
  )
}
