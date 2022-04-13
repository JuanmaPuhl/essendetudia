import { Typography } from "@material-ui/core"
import { Grid, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
      pagination: {
        page: 1,
        pageSize: 8,
      },
    }).then((result) => {
      setProducts(result.data.data)
    })
  }, [])

  return (
    <>
      <Grid
        container
        columns={12}
        marginTop="20px"
        sx={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}
      >
        <Grid item md={11}>
          <Typography variant="h5">Novedades</Typography>
        </Grid>
        <Grid item md={1}>
          <Button>Ver todo</Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        columns={12}
        marginTop="5px"
        sx={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}
      >
        {products.map((product) => (
          <Grid key={product.id} item md={3} xs={12} sm={6}>
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
