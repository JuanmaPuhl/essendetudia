import { createTheme, useMediaQuery } from "@material-ui/core"
import json2mq from "json2mq"
export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Grape nuts"].join(","),
  },
  palette: {
    primary: {
      main: "#439d98",
    },
    secondary: {
      main: "#8d0032",
    },
    text: {
      primary: "black",
      secondary: "white",
    },
    background: {
      default: "white",
    },
  },
})

export const isMobile = () =>
  useMediaQuery(
    json2mq({
      maxWidth: 768,
    }),
  )
