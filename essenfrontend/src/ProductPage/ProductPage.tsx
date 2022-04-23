import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Share } from "../Components/Share"
import { SelectedImage } from "../Components/ImageViewer/SelectedImage"
import { ImageViewer } from "../Components/ImageViewer/ImageViewer"

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    get(`/products/${id}?populate=Images`).then((result: any) => {
      if (result.data.data) setProduct(result.data.data)
      console.log(result)
    })
  }, [id])
  return (
    <>
      {product && (
        <>
          <Grid
            container
            justifyContent={"center"}
            paddingTop="30px"
            minHeight="500px"
          >
            <Grid item md={4} xs={12}>
              <ImageViewer />
            </Grid>
            <Grid item md={6} xs={12} sx={{}}>
              <h2>{product?.attributes.Title}</h2>
              <p>{product?.attributes.ShortDescription}</p>
              <Button>Me interesa</Button>
            </Grid>
          </Grid>
          <Share urlToShare={`${window.location.href}`} />
        </>
      )}
    </>
  )
}
