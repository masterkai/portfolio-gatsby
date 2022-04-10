import {MdStore as icon} from 'react-icons/md'

export default {
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  icon,
  fields: [
    // {
    //   name: 'name',
    //   title: 'Portfolio Name',
    //   type: 'string',
    //   description: 'Name of the Portfolio',
    // },
    {
      name: 'opening',
      title: 'Opening',
      type: 'string',
    },
    {
      name: 'typingStrings',
      title: 'Typing strings',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'typingItem'}]},
      ]
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
    }
  ]
}
