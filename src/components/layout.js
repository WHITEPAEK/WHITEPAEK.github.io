import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <main className="isolate h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout