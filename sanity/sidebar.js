import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import {MdStore} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Max's Portfolio Site`)
    .items([
      // create new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <MdStore/>)
        .child(
          S.editor()
            .schemaType('homeSettings')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('portfolio-home')
        ),
      S.listItem()
        .title('About Page')
        .icon(() => <BsFillPersonFill/>)
        .child(
          S.editor()
            .schemaType('about')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('about-max')
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems()
        .filter(
          item => item.getId() !== 'about'
        ).filter(
          item => item.getId() !== 'homeSettings'
        ),
    ]);
}
