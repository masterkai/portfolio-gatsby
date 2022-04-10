export default {
  name: 'topics',
  // visible title
  title: 'Topic Name',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Topic Name',
      type: 'string',
      description: 'Name of the Topic',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ]
}
