import * as React from "react"
import {graphql} from "gatsby";
import PostList from '../components/PostList';
import Link from "../components/Link";
import {Title} from "../components/Title";
import {CategoriesFilter} from '../components/CategoriesFilter';
import SEO from "../components/SEO";

export default function BlogPage ({data, pageContext, location}) {
  const posts = data.posts.nodes
  const pathname = location.pathname

  return (
    <><SEO
      title={
        pageContext.category
          ? `Blogs With ${pageContext.category}`
          : `All Blogs`
      }
    />
      <div style={{paddingTop: '2rem'}}>
        <Link to="/">Go to the main page</Link>
        <Title title={'Blog'}/>
        <CategoriesFilter activeCategory={pageContext.category} pathname={pathname}/>
        <PostList posts={posts}/>
      </div>
    </>
  )
}

export const query = graphql`
  query PostQuery($categoryRegex: String) {
  posts: allSanityPost(
      filter: { categories: { elemMatch: { name: { regex: $categoryRegex } } } }
    ) {
    nodes {
      id
      contents
      publishedAt(formatString: "YYYY/MMM/DD/dd hh:m:sec")
      mainImage {
        asset {
          metadata {
              lqip
            }
          id
          url
        }
      }
      title
      slug {
        current
      }
      categories {
        name
        id
      }
      author {
        name
        image {
          asset {
            id
            url
          }
        }
      }
    }
  }
}
`
