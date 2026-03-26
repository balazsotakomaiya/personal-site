import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex items-baseline justify-between gap-4 py-3"
            href={`/blog/${post.slug}`}
            style={{
              borderBottom: '1px solid var(--border)',
            }}
          >
            <p className="text-[15px] text-[var(--text-primary)] group-hover:underline underline-offset-3 tracking-tight">
              {post.metadata.title}
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-tertiary)] tabular-nums shrink-0">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          </Link>
        ))}
    </div>
  )
}
