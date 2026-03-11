import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Jeremy McKinney - Crew Ops Pro',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Field Service Software', value: 'Field Service Software' },
          { title: 'Contractor Business Tips', value: 'Contractor Business Tips' },
          { title: 'Technology & Tools', value: 'Technology & Tools' },
          { title: 'Cost Savings', value: 'Cost Savings' },
          { title: 'Product Updates', value: 'Product Updates' },
          { title: 'Case Studies', value: 'Case Studies' },
          { title: 'Field Notes', value: 'Field Notes' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Meta Title)',
      type: 'string',
      description: 'Optional: Custom title for search engines. If left blank, the post title will be used. Keep under 60 characters.',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (Meta Description)',
      type: 'text',
      rows: 3,
      description: 'Optional: Custom description for search engines. If left blank, the regular description will be used. Keep between 150-160 characters.',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
        {
          type: 'callToAction',
        },
      ],
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '5 min read',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
    },
  },
})
