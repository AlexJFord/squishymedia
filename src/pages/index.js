import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Login from "../components/login"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="flex items-center justify-center h-screen">
      <Login />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
