import Link from 'next/link'
import { getPosts } from '@/lib/ghost'
import { formatDate } from '@/lib/utils'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="font-mono">
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-8 text-xs text-muted-foreground mb-4">
        <div>date</div>
        <div>title</div>
        <div>views</div>
      </div>
      <div className="divide-y divide-border">
        {posts.map(post => {
          const year = new Date(post.published_at).getFullYear()
          // This is a placeholder since Ghost API doesn't provide views
          const views = Math.floor(Math.random() * 100000)
          
          return (
            <div 
              key={post.slug} 
              className="grid grid-cols-[auto_1fr_auto] gap-x-8 py-4 text-sm"
            >
              <div className="text-muted-foreground whitespace-nowrap">
                {year}
              </div>
              <Link 
                href={`/posts/${post.slug}`}
                className="font-medium hover:underline"
              >
                {post.title}
              </Link>
              <div className="text-muted-foreground tabular-nums text-right">
                {views.toLocaleString()}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

