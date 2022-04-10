export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School Name',
      type: 'string',
    },
    {
      name: 'major',
      title: 'Major',
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
      name: "educationDescription"
    },
  ],
}
