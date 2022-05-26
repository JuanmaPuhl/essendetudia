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
    <div style={{ maxHeight: "80vh", width: "100%" }}>
      <Image cover aspectRatio={16 / 9} src={getImageUrl(image)} style={{}} />
    </div>
  )
}
