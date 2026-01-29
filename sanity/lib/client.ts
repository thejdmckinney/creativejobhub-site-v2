import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'bb2zybf9',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disabled CDN to get fresh data for debugging
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
