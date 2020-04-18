import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import { StoreContext } from "../context/SourceContext"
import Img from "gatsby-image"

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])
  const { client } = useContext(StoreContext)
  console.log("client", client)

  return (
    <Layout>
      <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>{product.description}</p>
      <p>${selectedVariant.price}</p>
      <div id="button"></div>
      <select
        onChange={e => {
          const selected = product.variants.filter(
            variant => variant.sku === e.target.value
          )
          setVariant(selected[0])
        }}
        value={selectedVariant.sku}
      >
        {product.variants.map(variant => (
          <option key={variant.id} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select>
    </Layout>
  )
}

export default ProductDetail
