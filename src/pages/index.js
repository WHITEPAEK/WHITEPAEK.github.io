import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = () => {

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="px-6 py-24 sm:py-32 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">준비 중</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                블로그를 준비하고 있습니다.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <ul role="list" className="space-y-6">
              <li className="relative flex gap-x-4">
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <svg className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd" />
                </svg>
                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-xs leading-5 text-gray-500">
                      <span className="font-medium text-gray-900">준비 중..</span>
                    </div>
                    <time dateTime="2024-01-01" className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                      2024.01 - today
                    </time>
                  </div>
                  {/*<p className="text-sm leading-6 text-gray-500">
                    잠시만 기다려주세요 :)
                  </p>*/}
                </div>
              </li>

              <li className="relative flex gap-x-4">
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">SKT - Adot Studio</span>
                </p>
                <time dateTime="2023-12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                  2022.08 - 2023.12
                </time>
              </li>
              <li className="relative flex gap-x-4">
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">SKT - ifland Studio</span>
                </p>
                <time dateTime="2023-12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                  2021.04 - 2023.12
                </time>
              </li>
              <li className="relative flex gap-x-4">
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">SKT - JUMP</span>
                </p>
                <time dateTime="2021-04" className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                  2020.01 - 2021.04
                </time>
              </li>
              <li className="relative flex gap-x-4">
                <div className="absolute left-0 top-0 flex w-6 justify-center -h-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">LG - Quick Help</span>
                </p>
                <time dateTime="2021-02" className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                  2020.12 - 2021.02
                </time>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const Head = () => <Seo title="Home" />