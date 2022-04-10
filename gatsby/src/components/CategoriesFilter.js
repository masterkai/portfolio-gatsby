import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from 'styled-components';
import Link from './Link'

const CategoryStyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
`

function countPostsInCategories(posts) {
  // return the posts with counts
  const counts = posts.map(post => post.categories)
    .flat()
    .reduce((acc, category) => {
      // check if this is an existing category
      const existingCategory = acc[category.id]
      // if it is, increment by one
      if (existingCategory) {
        existingCategory.count += 1
      } else {
        // Otherwise create a new entry in our acc and set it to one
        acc[category.id] = {
          id: category.id,
          name: category.name,
          count: 1
        }
      }
      return acc
    }, {})
  // sort them based on their count
  const sortedCategories = Object.values(counts).sort(((a, b) => b.count - a.count))
  return sortedCategories
}

export function CategoriesFilter({activeCategory, pathname}) {
  // get a list of all the categories
  const {categories, posts} = useStaticQuery(graphql`
    query CategoryQuery {
      categories: allSanityCategory {
        nodes {
          id
          name
        }
      }
      posts: allSanityPost {
        nodes {
          categories {
              id
              name
            }
          }
      }
    }
  `)
  // get a list of all the posts and its categories
  // Count how many posts are in this category
  // loop Over the list of categories and display the category and the counts of post in that category
  // link it up .....
  console.clear()
  const categoriesWithCounts = countPostsInCategories(posts.nodes)
  const match = new RegExp('blog')
  return (
    <CategoryStyle>
      <Typography variant={'body1'} children={'Search blog by topics'}/>
      <Link to="/blog">
        <Chip color={'primary'} label={`all(${posts.nodes.length})`} clickable
              variant={match.test(pathname) ? 'filled' : "outlined"}/>
      </Link>
      {categoriesWithCounts.map(item => (
        <Link to={`/category/${item.name}`} key={item.id}>
          <Chip color={'primary'} clickable label={`${item.name}(${item.count})`}
                variant={activeCategory === item.name ? 'filled' : "outlined"}/>
        </Link>
      ))}
    </CategoryStyle>
  )
}
