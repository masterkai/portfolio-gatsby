export default {
  // computer name
  name: 'about',
  // visible title
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "contents"
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}
