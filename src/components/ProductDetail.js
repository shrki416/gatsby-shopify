import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import { StoreContext } from "../context/SourceContext"
import Img from "gatsby-image"

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])
  const { client } = useContext(StoreContext)

  const addToCart = async variantId => {
    const newCheckout = await client.checkout.create()
    const lineItems = [
      {
        variantId: variantId.replace("Shopify__ProductVariant__", ""),
        quantity: 1,
      },
    ]
    const addItems = await client.checkout.addLineItems(
      newCheckout.id,
      lineItems
    )
    window.open(addItems.webUrl, "_blank")
    console.log("addItems", addItems.webUrl)
  }

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
      <button onClick={() => addToCart(selectedVariant.id)}>Buy Now</button>
    </Layout>
  )
}

export default ProductDetail
