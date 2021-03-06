import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Typography, useTheme } from "@material-ui/core"
import { Button, CardActionArea, CardActions, Box } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { isMobile, theme } from "../../Theme/theme"
export default function ProductCard({
  id,
  title,
  shortDescription,
  image,
}: {
  id: string
  title: string
  shortDescription: string
  image: string
}) {
  const theme = useTheme()
  isMobile() ? console.log("PERRON") : console.log("GATON")
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile() ? "200px" : "400px",
        }}
      >
        <Box
          onClick={() => {
            window.location.href = `http://${window.location.host}/products/${id}`
          }}
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: isMobile() ? "200px" : "400px",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "1",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.5s ease-in",
            padding: 0,
            margin: 0,
            "&:hover": {
              transition: "background 0.5s ease-out",
              backgroundColor: "rgba(0,0,0,0.6)",
              cursor: "pointer",
            },
            borderRadius: "10px",
          }}
        >
          {title}
        </Box>
        <Button
          onClick={() => {
            window.location.href = `http://${window.location.host}/products/${id}`
          }}
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            textTransform: "none",
            position: "absolute",
            bottom: 0,
            right: 0,
            marginBottom: "10px",
            zIndex: "2",
            color: "white",
            fontFamily: theme.typography.fontFamily,
            fontWeight: "bold",
          }}
        >
          Conoc?? m??s
        </Button>
        <img
          src={image}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        ></img>
      </div>
    </>
  )
}
