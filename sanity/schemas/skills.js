export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      skill0: 'skills.0.name',
      skill1: 'skills.1.name',
      skill2: 'skills.2.name',
      skill3: 'skills.3.name',
    },
    prepare: ({title,...skills}) => {
      // 1. Filter undefined technologies out
      const techs = Object.values(skills).filter(Boolean);
      // 2. return the preview object for the tech
      return {
        title,
        subtitle: techs.join(', '),
      };
    },
  },

}
