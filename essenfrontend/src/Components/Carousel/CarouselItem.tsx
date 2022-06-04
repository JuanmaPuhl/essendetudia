import { Typography, useTheme } from "@material-ui/core"
import { Button, Grid } from "@mui/material"
import Image from "material-ui-image"
import { getImageUrl } from "../../httpManager/httpManager"
import { isMobile } from "../../Theme/theme"
export const CarouselItem = ({
  title,
  description,
  url,
  image,
}: {
  title: string
  description: string
  url: string
  image: string
}) => {
  const theme = useTheme()
  const aspectRatio = isMobile() ? 1 : 16 / 9
  const headerSize = isMobile() ? "h3" : "h1"
  const descriptionSize = isMobile() ? "h6" : "h4"

  return (
    <div style={{ maxHeight: "60vh", width: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#0000005A",
          top: 0,
          left: 0,
          zIndex: 1,
          color: "white",
        }}
      >
        <Grid container style={{ height: "100%" }}>
          <Grid item md={6}></Grid>
          <Grid
            item
            md={6}
            justifyContent="center"
            alignItems={"center"}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              verticalAlign: "bottom",
            }}
          >
            <Typography variant={headerSize} style={{ flexWrap: "wrap" }}>
              {title}
            </Typography>
            <Typography variant={descriptionSize} style={{ flexWrap: "wrap" }}>
              {description}
            </Typography>
            <Button
              variant="contained"
              style={{
                width: "200px",
                height: "auto",
                backgroundColor: "#439d98",
              }}
            >
              Conoce mas
            </Button>
          </Grid>
        </Grid>
      </div>
      <Image
        cover
        aspectRatio={aspectRatio}
        src={getImageUrl(image)}
        style={{}}
      />
    </div>
  )
}
