import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "./ProductCard"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
    }).then((result) => {
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
