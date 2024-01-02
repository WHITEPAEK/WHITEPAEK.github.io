import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"
import Comments from "./comments"

const Post = ({ data: { previous, next, site, markdownRemark: post } }) => {
  return (
    <Layout>
      <div className="xl:relative">
        <div className="mx-auto max-w-4xl px-6 sm:px-1 py-24 sm:py-32">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                {post.frontmatter.title}
              </h1>
              <time
                dateTime={post.frontmatter.date}
                className="order-first flex items-center text-base text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                <span className="ml-3">{post.frontmatter.date}</span>
              </time>
            </header>
            <div className="mt-8 prose" dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </article>
          <Comments />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const Head = ({
                       data: {
                         markdownRemark: post
                       }
                     }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query PostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`