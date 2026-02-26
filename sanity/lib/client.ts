import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'bb2zybf9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance
  perspective: 'published', // Only fetch published documents
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
