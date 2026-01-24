import { defineType } from 'sanity'

export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to Action Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: 'url',
      title: 'Button URL',
      type: 'string',
      validation: (Rule) => Rule.required().uri({
        allowRelative: true,
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    },
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Blue)', value: 'primary' },
          { title: 'Secondary (Gray)', value: 'secondary' },
          { title: 'Success (Green)', value: 'success' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      text: 'text',
      style: 'style',
    },
    prepare({ text, style }) {
      return {
        title: text || 'Button',
        subtitle: `${style} button`,
      }
    },
  },
})
