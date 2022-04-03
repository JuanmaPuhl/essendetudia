import styled from "@emotion/styled"
import { Button, Grid } from "@mui/material"
import Image from "material-ui-image"
export const CarouselItem = ({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) => {
  return (
    <Grid container>
      <Grid item md={8} xs={12} sm={12}>
        <Image
          cover
          aspectRatio={16 / 9}
          src="https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/12/509541.jpg"
        />
      </Grid>
      <Grid item md={4} xs={12} sm={12} sx={{ backgroundColor: "#afdbda" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>Ver mas</Button>
      </Grid>
    </Grid>
  )
}

const StyledContainer = styled.div`
  background-color: #f00;
`
