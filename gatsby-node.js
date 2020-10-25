const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query MyQuery {
      allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            id
            slug
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `)
  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  blogresult.data.allContentfulBlogPost.edges.forEach(({node, next, previous})=>{
    createPage({
      path: `/blog/post/${node.slug}/`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.id,
        next,
        previous,
      }
    })
  })

  const blogPostsPerPages = 6;
  const blogPosts = blogresult.data.allContentfulBlogPost.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostsPerPages)

  Array.from({length:blogPages},(_, i)=>{
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i+1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostsPerPages * i,
        limit: blogPostsPerPages,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      }
    })
  })
}
