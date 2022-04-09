import { Box, Container, Grid, Typography } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
export const Footer = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        backgroundColor: "#afdbda",
        maxWidth: "100%",
        marginTop: 10,
      }}
    >
      <Grid item>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Seguime en mis redes sociales
        </Typography>
      </Grid>

      <Grid item>
        <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
          <Typography
            component="a"
            variant="body1"
            color="black"
            href="#"
            mr={3}
          >
            <FacebookIcon />
          </Typography>
          <Typography
            component="a"
            variant="body1"
            color="black"
            href="#"
            mr={3}
          >
            <InstagramIcon />
          </Typography>
        </Box>
      </Grid>

      <Grid item sx={{ marginTop: 5, marginBottom: 2 }}>
        <Typography variant="body1" color="black" sx={{ textAlign: "center" }}>
          2022 © Todos los derechos reservados. Disenado por Juan Manuel Puhl
        </Typography>
      </Grid>
    </Grid>
  )
}
