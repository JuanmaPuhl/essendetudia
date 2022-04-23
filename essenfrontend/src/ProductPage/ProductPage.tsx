import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import { Container, Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Share } from "../Components/Share"
import { ImageViewer } from "../Components/ImageViewer/ImageViewer"
import { MarkdownViewer } from "../Components/MarkdownViewer/MarkdownViewer"
import { isMobile } from "react-device-detect"

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
            paddingTop={isMobile ? "0px" : "30px"}
            minHeight="500px"
          >
            <Grid item md={4} xs={12}>
              <div>
                <ImageViewer
                  images={product.attributes.Images.data.map((image) => {
                    return getImageUrl(image.attributes.url)
                  })}
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12} sx={{}}>
              <Container>
                <h2>{product?.attributes.Title}</h2>
                <MarkdownViewer
                  markdownText={product?.attributes.LongDescription}
                />
              </Container>
              <Button>Me interesa</Button>
            </Grid>
          </Grid>
          <Share urlToShare={`${window.location.href}`} />
        </>
      )}
    </>
  )
}
