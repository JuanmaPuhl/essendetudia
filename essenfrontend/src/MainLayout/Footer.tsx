import { Box, Grid, IconButton } from "@mui/material"
import { Typography } from "@material-ui/core"

import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
export const Footer = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        backgroundColor: "#439d98",
        maxWidth: "100%",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid item>
        <Typography color="textSecondary" variant="h6">
          Seguime en mis redes sociales
        </Typography>
      </Grid>

      <Grid item>
        <Box>
          <IconButton href="https://www.facebook.com/essenpaulita">
            <FacebookIcon fontSize="large" sx={{ color: "#006CB9" }} />
          </IconButton>
          <IconButton href="https://www.instagram.com/essendetudia/">
            <InstagramIcon fontSize="large" sx={{ color: "#006CB9" }} />
          </IconButton>
        </Box>
      </Grid>

      <Grid
        item
        sx={{
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Typography color="textSecondary">
          2022 © Todos los derechos reservados. Diseñado por &nbsp;
          <Typography
            component={"a"}
            color="textSecondary"
            href="https://www.juanmanuelpuhl.com.ar"
            style={{ textDecoration: "none" }}
          >
            Juan Manuel Puhl
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}
