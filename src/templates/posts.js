import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Posts = (props) => {
  const posts = props.data.allMarkdownRemark.nodes
  const { currentPage, numPages } = props.pageContext // 페이징 처리를 위한 변수
  const isFirst = currentPage === 0 // 현재 페이지가 첫 페이지인지
  const isLast = currentPage === (numPages - 1) // 현재 페이지가 마지막 페이지인지
  const prevPage = currentPage === 1 ? `/posts` : `/posts/${currentPage - 1}` // 이전 페이지
  const nextPage = `/posts/${currentPage + 1}` // 다음 페이지
  const perPage = 7, startPageIndex = 3 // 화면에 보여지는 최대 페이지 개수 / 현재 페이지 표시 위치

  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 pl-3">
              <h2
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-32 border-b-4 border-red-600">
                포스트
              </h2>
              {/*<p className="mt-2 text-m leading-8 text-gray-500"></p>*/}
            </div>
            <div className="mb-10">
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
                          <h3
                            className="mt-3 text-lg font-semibold leading-6 text-gray-900 sm:text-2xl group-hover:text-gray-600">
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
                )
              })
              }
            </div>

            <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
              <div className="-mt-px flex w-0 flex-1">
                {!isFirst && (
                  <Link to={prevPage}
                        rel={"prev"}
                        className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                            clipRule="evenodd" />
                    </svg>
                    이전
                  </Link>
                )}
              </div>

              <div className="hidden sm:-mt-px sm:flex">
                {
                  (currentPage < startPageIndex + 1 || numPages < perPage + 1) ?
                    Array.from({ length: numPages > perPage ? perPage : numPages }).map((_, index) => {
                      return (
                        <Link to={index === 0 ? `/posts` : `/posts/${index}`}
                              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${index === currentPage ? "border-red-500 text-red-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                              key={index}
                        >
                          {index + 1}
                        </Link>
                      )
                    }) :
                    Array.from({ length: perPage }).map((_, index) => {
                      const pageNum = (numPages - currentPage > startPageIndex) ? (currentPage + index - startPageIndex) : (numPages + index - perPage)

                      return (
                        <Link to={pageNum === 0 ? `/posts` : `/posts/${pageNum}`}
                              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${pageNum === currentPage ? "border-red-500 text-red-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
                              key={index}
                        >
                          {pageNum + 1}
                        </Link>
                      )
                    })
                }
              </div>

              <div className="-mt-px flex w-0 flex-1 justify-end">
                {!isLast && (
                  <Link to={nextPage}
                        rel={"next"}
                        className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    다음
                    <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                            clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Posts

export const Head = () => <Seo title="포스트" />

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
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