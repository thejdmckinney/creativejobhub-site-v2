import { client } from '../../sanity/lib/client';
import type { PortableTextBlock } from '@portabletext/react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  featured?: boolean;
  featuredImage?: string;
  content: PortableTextBlock[];
}

// Fetch all posts from Sanity
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    description,
    "date": publishedAt,
    category,
    author,
    readTime,
    featured,
    "featuredImage": featuredImage.asset->url,
    content
  }`;

  try {
    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    description,
    "date": publishedAt,
    category,
    author,
    readTime,
    featured,
    "featuredImage": featuredImage.asset->url,
    content[] {
      ...,
      _type == "image" => {
        ...,
        "asset": {
          "url": asset->url
        }
      }
    }
  }`;

  try {
    const post = await client.fetch(query, { slug });
    return post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const query = `*[_type == "post" && category == $category] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    description,
    "date": publishedAt,
    category,
    author,
    readTime,
    featured,
    "featuredImage": featuredImage.asset->url,
    content
  }`;

  try {
    const posts = await client.fetch(query, { category });
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}
