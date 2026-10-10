export function SectionHead({
  index,
  title,
  meta,
}: {
  index: string
  title: string
  meta?: string
}) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" aria-hidden="true" />
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  )
}
