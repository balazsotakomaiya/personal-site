export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <p className="eyebrow font-[family-name:var(--font-mono)]">404</p>
      <h1 className="font-[family-name:var(--font-serif)] italic text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-[15px] text-[var(--text-secondary)]">
        The page you are looking for does not exist.
      </p>
    </section>
  )
}
