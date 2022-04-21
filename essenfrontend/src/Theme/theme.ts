import { createTheme } from "@material-ui/core"

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
    }
  })