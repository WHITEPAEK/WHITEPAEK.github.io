import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = () => {

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 sm:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          접속하신 주소를 확인해 주세요!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          지금 입력하신 주소의 페이지는 삭제 또는 변경된 거 같습니다.<br />
          주소를 다시 한번 확인해 주세요.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Link to="/"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            홈으로 이동
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Not Found" />