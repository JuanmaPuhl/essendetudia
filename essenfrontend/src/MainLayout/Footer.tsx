import { Box, Grid } from "@mui/material"
import { Typography } from "@material-ui/core"

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
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid item>
        <Typography variant="h6">Seguime en mis redes sociales</Typography>
      </Grid>

      <Grid item>
        <Box>
          <Typography
            component={"a"}
            href="https://www.facebook.com/essenpaulita"
            color={"textPrimary"}
          >
            <FacebookIcon />
          </Typography>
          <Typography
            component={"a"}
            href="https://www.instagram.com/essendetudia/"
            color={"textPrimary"}
          >
            <InstagramIcon />
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        sx={{
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Typography>
          2022 © Todos los derechos reservados. Diseñado por &nbsp;
          <Typography
            component={"a"}
            color={"textPrimary"}
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
