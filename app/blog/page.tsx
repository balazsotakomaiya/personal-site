import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <p className="eyebrow font-[family-name:var(--font-mono)]">Writing</p>
      <h1 className="font-[family-name:var(--font-serif)] italic text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-8">
        Blog
      </h1>
      <BlogPosts />
    </section>
  )
}
