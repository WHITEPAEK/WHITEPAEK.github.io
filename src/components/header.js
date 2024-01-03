import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleToggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="fixed bg-white inset-x-0 top-0 z-50 border-b border-gray-900/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between py-6 px-8 sm:px-1" aria-label="Global">
        <div className="flex sm:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <StaticImage className="h-8 w-auto"
                         layout="fixed"
                         src="../images/whitepaek-w-icon.png"
                         wdith={30}
                         height={30}
                         alt="logo"
            />
          </Link>
        </div>
        <div className="flex sm:hidden">
          <button type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={handleToggleMobileNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          <Link to="/posts"
                className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-red-600"
          >
            포스트
          </Link>
          <Link to="/diaries"
                className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-red-600"
          >
            다이어리
          </Link>
        </div>
      </nav>

      <div className={isMobileNavOpen ? 'block' : 'hidden'} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <StaticImage className="h-8 w-auto"
                           layout="fixed"
                           src="../images/whitepaek-w-icon.png"
                           wdith={30}
                           height={30}
                           alt="logo"
              />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={handleToggleMobileNav}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                   aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/posts"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  포스트
                </Link>
                <Link to="/diaries"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  다이어리
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header