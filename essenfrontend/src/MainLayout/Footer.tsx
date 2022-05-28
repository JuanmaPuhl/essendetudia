import { Box, Grid, IconButton } from "@mui/material"
import { Typography, useTheme } from "@material-ui/core"

import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
export const Footer = () => {
  const theme = useTheme()

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
          <IconButton
            href="https://www.facebook.com/essenpaulita"
            target="_blank"
          >
            <FacebookIcon
              fontSize="medium"
              sx={{ color: theme.palette.text.secondary }}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/essendetudia/"
            target="_blank"
          >
            <InstagramIcon
              fontSize="medium"
              sx={{ color: theme.palette.text.secondary }}
            />
          </IconButton>
        </Box>
      </Grid>

      <Grid
        item
        sx={{
          marginBottom: 2,
        }}
      >
        <Typography color="textSecondary" variant="body2">
          2022 © Todos los derechos reservados. Diseñado por &nbsp;
          <Typography
            component={"a"}
            color="textSecondary"
            href="https://www.juanmanuelpuhl.com.ar"
            style={{ textDecoration: "none" }}
            variant="body2"
          >
            Juan Manuel Puhl
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}
