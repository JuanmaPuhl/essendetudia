import { Typography, useTheme } from "@material-ui/core"
import { Box, Button, Grid, TextField } from "@mui/material"

export const Subscribe = () => {
  const theme = useTheme()

  return (
    <Box
      marginTop={"20px"}
      sx={{ backgroundColor: "#F6F6F6", paddingBottom: "30px" }}
    >
      <Typography
        variant="h6"
        align="center"
        style={{
          marginBottom: "10px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        Suscribete para recibir notificaciones en tu mail
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        // rowSpacing={{ xs: 10, s: 0, md: 0 }}
      >
        <Grid item md={4} sx={{ height: "50px" }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ height: "50px" }}
          />
        </Grid>
        <Grid item md={1} sx={{ height: "50px" }}>
          <Button
            variant="contained"
            sx={{
              height: "55px",
              verticalAlign: "middle",
              backgroundColor: theme.palette.primary.main,
              ":hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Suscribirme
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
