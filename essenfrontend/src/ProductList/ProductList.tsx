import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../LandingPage/ProductCard"

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
      pagination: {
        page: 1,
        pageSize: 12,
      },
    }).then((result) => {
      setProducts(result.data.data)
    })
  }, [])

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item md={2} xs={12} sm={12} sx={{ backgroundColor: "yellow" }}>
          Selector
        </Grid>
        <Grid item md={7} xs={12} sm={12} sx={{ backgroundColor: "cyan" }}>
          <Grid container>
            {products.map((product: Product) => (
              <Grid item key={product.id} md={3} xs={12} sm={6}>
                <ProductCard
                  key={product.id}
                  title={product.attributes.Title}
                  shortDescription={product.attributes.ShortDescription}
                  image={getImageUrl(
                    product.attributes.Images.data?.[0].attributes.url,
                  )}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
