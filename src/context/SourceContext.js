import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
  domain: "pedisource-test.myshopify.com",
  storefrontAccessToken: "6a8fae5fa0e7396213a79e6c458bb66a",
})

export const StoreContext = React.createContext({
  client,
})
