import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "./ProductCard"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
      pagination: {
        page: 1,
        pageSize: 10,
      },
    }).then((result) => {
      setProducts(result.data.data)
    })
  }, [])

  return (
    <>
      <Typography variant="h5">Novedades</Typography>
      <Grid
        container
        justifyContent={"center"}
        spacing={2}
        columns={12}
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {products.map((product) => (
          <Grid key={product.id} item md={4} xs={12} sm={6}>
            <ProductCard
              key={product.id}
              title={product.attributes.Title}
              image={getImageUrl(
                product.attributes.Images.data?.[0].attributes.url,
              )}
              shortDescription={product.attributes.ShortDescription}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
