import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="isolate flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout