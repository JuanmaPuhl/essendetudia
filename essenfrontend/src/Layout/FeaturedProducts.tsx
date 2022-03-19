import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import ProductCard from "./ProductCard"

declare type Image = {
  id: string
  attributes: {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: any
    url: string
  }
}

declare type Product = {
  id: string
  attributes: {
    Title: string
    ShortDescription: string
    LongDescription: string
    Images: {
      data: Image[]
    }
  }
}

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images").then((result) => {
      setProducts(result.data.data)
    })
  }, [])

  return (
    <>
      <Typography variant="h5">Featured Products</Typography>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.attributes.Title}
          image={getImageUrl(
            product.attributes.Images.data?.[0].attributes.url,
          )}
          shortDescription={product.attributes.ShortDescription}
        />
      ))}
    </>
  )
}
