export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'job',
      title: 'Job',
      type: 'string',
    },
    {
      name: 'from',
      title: 'From',
      type: 'datetime',
    },
    {
      name: 'to',
      title: 'To',
      type: 'datetime',
    },
    {
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "experienceDescription",
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],

  preview: {
    select: {
      title: 'company',
      subtitle: 'job',
    },
  },
}
