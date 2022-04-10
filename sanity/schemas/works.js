export default {
  // Computer Name
  name: 'works',
  // visible title
  title: 'Project Name',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the Project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'stack',
      title: 'Stack Name',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'href',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Tell us the summary of this project',
    },
    {
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "projectDescription"
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      stack0: 'stack.0.name',
      stack1: 'stack.1.name',
      stack2: 'stack.2.name',
      stack3: 'stack.3.name',
    },
    prepare: ({title,media,...stacks}) => {
      // 1. Filter undefined technologies out
      const techs = Object.values(stacks).filter(Boolean);
      // 2. return the preview object for the tech
      return {
        title,
        media,
        subtitle: techs.join(', '),
      };
    },
  },
}
