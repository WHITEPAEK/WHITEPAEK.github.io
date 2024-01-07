import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Diaries = () => {
  return (
    <Layout>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 sm:px-8 text-center">
        <p className="text-base font-semibold text-red-600 pt-8">COMING SOON</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          다이어리 페이지는 준비 중입니다.
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          조금만 기다려주세요! <br />
          빠른 시일 내에 오픈하도록 하겠습니다.
        </p>
      </div>
    </Layout>
  )
}

export default Diaries

export const Head = () => <Seo title="다이어리" />