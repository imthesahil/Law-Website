import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

// Type definitions
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  author: string
  category: string
  featuredImage?: string
  content?: string
}

// Create and export Notion client function
function getNotionClient() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is not set')
  }
  
  return new Client({
    auth: process.env.NOTION_API_KEY,
  })
}

// Fetch published blogs
export async function getPublishedBlogs(databaseId: string): Promise<BlogPost[]> {
  try {
    const notion = getNotionClient()
    
    console.log('Fetching blogs from database:', databaseId)
    console.log('Client type:', typeof notion)
    console.log('Has databases?', !!notion.databases)
    console.log('Has query?', typeof notion.databases?.query)
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })

    console.log('Found posts:', response.results.length)

    const posts: BlogPost[] = response.results.map((page: any) => ({
      id: page.id,
      title: page.properties?.Title?.title?.[0]?.plain_text || 'Untitled',
      slug: page.properties?.Slug?.rich_text?.[0]?.plain_text || '',
      excerpt: page.properties?.Excerpt?.rich_text?.[0]?.plain_text || '',
      date: page.properties?.Date?.date?.start || new Date().toISOString(),
      author: page.properties?.Author?.rich_text?.[0]?.plain_text || 'Live Legal Team',
      category: page.properties?.Category?.select?.name || 'Uncategorized',
      featuredImage: 
        page.properties?.['Featured Image']?.files?.[0]?.file?.url || 
        page.properties?.['Featured Image']?.files?.[0]?.external?.url || 
        '',
    }))

    return posts
  } catch (error: any) {
    console.error('Error fetching blogs:', error)
    console.error('Error name:', error?.name)
    console.error('Error message:', error?.message)
    console.error('Error stack:', error?.stack)
    return []
  }
}

// Fetch single blog post
export async function getBlogPost(pageId: string): Promise<BlogPost | null> {
  try {
    const notion = getNotionClient()
    const n2m = new NotionToMarkdown({ notionClient: notion })
    
    const page: any = await notion.pages.retrieve({ page_id: pageId })
    const mdBlocks = await n2m.pageToMarkdown(pageId)
    const content = n2m.toMarkdownString(mdBlocks)

    return {
      id: page.id,
      title: page.properties?.Title?.title?.[0]?.plain_text || 'Untitled',
      slug: page.properties?.Slug?.rich_text?.[0]?.plain_text || '',
      excerpt: page.properties?.Excerpt?.rich_text?.[0]?.plain_text || '',
      date: page.properties?.Date?.date?.start || new Date().toISOString(),
      author: page.properties?.Author?.rich_text?.[0]?.plain_text || 'Live Legal Team',
      category: page.properties?.Category?.select?.name || 'Uncategorized',
      featuredImage: 
        page.properties?.['Featured Image']?.files?.[0]?.file?.url || 
        page.properties?.['Featured Image']?.files?.[0]?.external?.url || 
        '',
      content: content.parent,
    }
  } catch (error: any) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Fetch blog by slug
export async function getBlogBySlug(databaseId: string, slug: string): Promise<BlogPost | null> {
  try {
    const notion = getNotionClient()
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    return await getBlogPost(response.results[0].id)
  } catch (error: any) {
    console.error('Error fetching blog by slug:', error)
    return null
  }
}
