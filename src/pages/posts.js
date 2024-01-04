import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Posts = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 pl-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-32 border-b-4 border-red-600">
                포스트
              </h2>
              {/*<p className="mt-2 text-m leading-8 text-gray-500"></p>*/}
            </div>
            {posts.map((post, index) => {
              return (
                <Link to={post.fields.slug} key={index}>
                  <div className="mb-8 p-3 hover:bg-zinc-50 hover:rounded-2xl">
                    <article className="flex max-w-4xl flex-col items-start justify-between">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.frontmatter.date} className="text-gray-500">
                          {post.frontmatter.date}
                        </time>
                        {/*<Link to="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                              Marketing
                            </Link>*/}
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 sm:text-2xl group-hover:text-gray-600">
                            <span className="absolute inset-0"></span>
                            {post.frontmatter.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600"
                           dangerouslySetInnerHTML={{
                             __html: post.frontmatter.description || post.excerpt
                           }}
                        />
                        <div className="mt-3 gap-x-4 text-xs font-medium text-red-600">
                          Read more >
                        </div>
                      </div>
                    </article>
                  </div>
                </Link>
              )})
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Posts

export const Head = () => <Seo title="포스트" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt(format: PLAIN, pruneLength: 320, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`