import { Typography, useTheme } from "@material-ui/core"
import { Button, Grid } from "@mui/material"
import Image from "material-ui-image"
import { getImageUrl } from "../../httpManager/httpManager"
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
  console.log(theme.palette.background.default)
  return (
    <Grid container>
      <Grid item md={8} xs={12} sm={12}>
        <Image cover aspectRatio={16 / 9} src={getImageUrl(image)} />
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sm={12}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Typography component="h3">{title}</Typography>
        <Typography>{description}</Typography>
        <Button>
          <Typography>Ver mas</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
