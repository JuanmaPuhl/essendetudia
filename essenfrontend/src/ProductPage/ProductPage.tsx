import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Share } from "../Components/Share"

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    get(`/products/${id}`).then((result: any) => {
      if (result.data.data) setProduct(result.data.data)
    })
  }, [id])
  return (
    <>
      {/* {product && (
        <ProductCard
          id={product.id}
          title={product.attributes.Title}
          shortDescription={product.attributes.ShortDescription}
          image={product.attributes.Images?.data[0].attributes.url}
        />
      )} */}
      <Grid
        container
        justifyContent={"center"}
        marginTop="30px"
        minHeight="500px"
      >
        <Grid item md={4} sx={{ backgroundColor: "#F6F6F6" }}>
          Hola
        </Grid>
        <Grid item md={6} sx={{}}>
          <h2>{product?.attributes.Title}</h2>
          <p>{product?.attributes.ShortDescription}</p>
          <Button>Me interesa</Button>
        </Grid>
      </Grid>
      <Share urlToShare={`http://${window.location.host}/products/${id}`} />
    </>
  )
}
