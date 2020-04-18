import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsListing />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
