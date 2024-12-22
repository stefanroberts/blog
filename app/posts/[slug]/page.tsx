import { getPost } from '@/lib/ghost'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { ContentRenderer } from '@/components/content-renderer'

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  // Process the HTML content to extract code blocks
  const processedContent = post.html?.replace(
    /<pre><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g,
    (_, language, code) => {
      return `<CodeBlock language="${language}" code="${encodeURIComponent(code)}" />`
    }
  )

  const publishedDate = new Date(post.published_at)
  const timeAgo = Math.floor((Date.now() - publishedDate.getTime()) / (1000 * 60 * 60 * 24 * 365))

  return (
    <article className="prose dark:prose-invert max-w-none prose-sm">
      <header className="not-prose mb-12">
        <h1 className="text-3xl font-normal mb-4">{post.title}</h1>
        <div className="flex justify-between items-center font-mono text-sm text-muted-foreground">
          <div>
            <span className="text-primary">@stefanroberts</span>
            <span className="mx-2">|</span>
            <time dateTime={post.published_at}>
              {formatDate(post.published_at)} ({timeAgo}y ago)
            </time>
          </div>
          <div className="tabular-nums">
            {/* Placeholder for views - you might want to implement view tracking */}
            {Math.floor(Math.random() * 100000).toLocaleString()} views
          </div>
        </div>
      </header>
      <div className="text-sm leading-relaxed">
        <ContentRenderer content={processedContent || ''} />
      </div>
    </article>
  )
}

