const path = require('path')

async function turnPostsIntoPages({graphql, actions}) {
  // 1. Get the templates for this page
  const postTemplate = path.resolve('./src/templates/Post.js')
  // 2. Query all posts
  const {data} = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
            title
            slug {
              current
            }
          }
        }
      }
  `)
  // 3. Loop over each post and create a page for that post
  data.posts.nodes.forEach(post => {
    // What is the URL of the page
    actions.createPage({
      path: `/blog/${post.slug.current}`,
      component: postTemplate,
      context: {slug: post.slug.current},
    })
  })
}

async function turnCategoryIntoPages({graphql, actions}) {
// 1. Get the templates for this page
  const categoryTemplate = path.resolve('./src/pages/blog.js')
// 2. Query all category
  const {data} = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `)
// 3. Loop over each post and create a page for that category
  data.categories.nodes.forEach(category => {
    actions.createPage({
      path: `/category/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
        // TODO regex for category
        categoryRegex: `/${category.name}/i`
      },
    })
  })
}

async function turnWorksIntoPages({graphql, actions}) {
  // 1.query all works
  const {data} = await graphql(`
    query {
        works: allSanityWorks {
        totalCount
        nodes {      
          id
          name
          slug {
            current
          }
        }
      }
    }
  `)
  // TODO: 2.turn all works into their own page
  data.works.nodes.forEach(work => {
    actions.createPage({
      path: `/works/${work.slug.current}`,
      component: path.resolve('./src/templates/Work.js'),
      context: {
        slug: work.slug.current,
      }
    })
  })
  // 3.Figure out how many pages there are based on how many works are there, and how many per pages
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
  const pageCount = Math.ceil(data.works.totalCount / pageSize)
  console.log('pageCount', pageCount);
  // 4.Loop from 1 to N and render the page for them
  Array.from({length:pageCount}).forEach((_,i)=>{
    actions.createPage({
      path: `/works/${i+1}`,
      component: path.resolve('./src/pages/works.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize
      }
    })
  })
}

exports.createPages = async (params) => {
  // await all the promise to be resolved before finishing this function
  await Promise.all([
    turnPostsIntoPages(params),
    turnCategoryIntoPages(params),
    turnWorksIntoPages(params)
  ])
  // creating pages dynamically
  // 1.Posts
  // 2.categories
  // 3.works
}
