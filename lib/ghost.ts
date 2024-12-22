import GhostContentAPI from '@tryghost/content-api'

// Create API instance with Ghost credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
})

// Fetch all posts
export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: ['tags', 'authors'],
      fields: ['title', 'slug', 'excerpt', 'published_at', 'feature_image', 'reading_time']
    })
    .catch(err => {
      console.error(err)
      return []
    })
}

// Get a single post by slug
export async function getPost(slug: string) {
  return await api.posts
    .read({ slug }, { include: ['tags', 'authors'] })
    .catch(err => {
      console.error(err)
      return null
    })
}

