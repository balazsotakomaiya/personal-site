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
          <Link key={post.slug} className="post-row" href={`/blog/${post.slug}`}>
            <p className="post-title">{post.metadata.title}</p>
            <span className="post-date">{formatDate(post.metadata.publishedAt, false)}</span>
            <span className="post-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
    </div>
  )
}
