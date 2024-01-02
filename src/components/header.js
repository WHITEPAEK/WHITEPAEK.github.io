import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="fixed bg-white inset-x-0 top-0 z-50 border-b border-gray-900/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between py-6 px-8 sm:px-1" aria-label="Global">
        <div className="flex sm:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/*<img className="h-8 w-auto" src="#" alt="" />*/}
            <h1 className="font-black">WHITEPAEK</h1>
          </Link>
        </div>
        <div className="flex sm:hidden">
          <button type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          <Link to="/posts" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-black">POSTS</Link>
          {/*<Link to="#" className="text-sm font-semibold leading-6 text-gray-900">About</Link>*/}
        </div>
      </nav>

      {/*<div className="sm:hidden" role="dialog" aria-modal="true">*/}
      <div className="hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/*<img className="h-8 w-auto" src="#" alt="" />*/}
              <h1 className="font-black">WHITEPAEK</h1>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/posts"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">POSTS</Link>
                {/*<Link to="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header