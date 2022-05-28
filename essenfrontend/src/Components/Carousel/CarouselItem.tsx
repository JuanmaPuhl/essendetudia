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
  return (
    <div style={{ maxHeight: "60vh", width: "100%" }}>
      <Image
        cover
        aspectRatio={aspectRatio}
        src={getImageUrl(image)}
        style={{}}
      />
    </div>
  )
}
