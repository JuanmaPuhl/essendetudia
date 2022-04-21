import styled from "@emotion/styled"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { ReactChild, ReactFragment, ReactPortal } from "react"
import { Footer } from "./Footer"
import ResponsiveAppBar from "./Navbar"
import { WhatsappButton } from "./WhatsappButton"

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Grape nuts"].join(","),
  },
})

export const Layout = (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <div id="content">{props.children}</div>
      <Footer />
      <WhatsappButton />
    </ThemeProvider>
  )
}
