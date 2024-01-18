import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Comments from "../components/comments"

const Post = (props) => {
  const post = props.data.markdownRemark
  const previous = props.data.previous
  const next = props.data.next

  return (
    <Layout>
      <div className="xl:relative">
        <div className="mx-auto max-w-4xl px-6 sm:px-1 py-24 sm:py-32">
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                {post.frontmatter.title}
              </h1>
              <time
                dateTime={post.frontmatter.createdAt}
                className="order-first flex items-center text-base text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                <span className="ml-3">{post.frontmatter.createdAt}</span>
              </time>
            </header>
            <div className="mt-8 prose" dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </article>

          <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1 truncate group">
              {previous && (
                <Link to={previous.fields.slug}
                      rel={"prev"}
                      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 group-hover:border-red-500 group-hover:text-red-600">
                  <svg className="mr-3 h-5 w-5 text-gray-500 group-hover:text-red-600" viewBox="0 0 20 20"
                       fill="currentColor"
                       aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                          clipRule="evenodd" />
                  </svg>
                  {previous.frontmatter.title}
                </Link>
              )}
            </div>

            <div className="-mt-px flex w-0 flex-1 justify-end truncate group">
              {next && (
                <Link to={next.fields.slug}
                      rel={"next"}
                      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 group-hover:border-red-500 group-hover:text-red-600">
                  {next.frontmatter.title}
                  <svg className="ml-3 h-5 w-5 text-gray-500 group-hover:text-red-600" viewBox="0 0 20 20"
                       fill="currentColor"
                       aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                          clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          </nav>

          <Comments />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const Head = (props) => {
  const post = props.data.markdownRemark
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query ($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        createdAt(formatString: "YYYY-MM-DD")
        editedAt(formatString: "YYYY-MM-DD")
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