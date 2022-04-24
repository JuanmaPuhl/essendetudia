import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import { Container, Grid, IconButton } from "@mui/material"
import { Button } from "@mui/material"
import { Share } from "../Components/Share"
import { ImageViewer } from "../Components/ImageViewer/ImageViewer"
import { MarkdownViewer } from "../Components/MarkdownViewer/MarkdownViewer"
import { isMobile } from "react-device-detect"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { useTheme } from "@material-ui/core"

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    get(`/products/${id}?populate=Images`).then((result: any) => {
      if (result.data.data) {
        setProduct(result.data.data)
        console.log(result)
        document.title = result.data.data.attributes.Title
      }
    })
  }, [id])

  const theme = useTheme()

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
                  images={product.attributes.Images.data.map((image) =>
                    getImageUrl(image.attributes.url),
                  )}
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Container>
                <h2>{product?.attributes.Title}</h2>
                <MarkdownViewer
                  markdownText={product?.attributes.LongDescription}
                />
                <Button
                  variant="contained"
                  title="Consultar"
                  endIcon={<WhatsAppIcon />}
                  href={`https://api.whatsapp.com/send?phone=+5492914670881&text=Hola, quiero conocer más sobre ${window.location.href}`}
                  target="_blank"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    ":hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Consultame
                </Button>
              </Container>
            </Grid>
          </Grid>
          <Share urlToShare={`${window.location.href}`} />
        </>
      )}
    </>
  )
}
