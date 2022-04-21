import { ThemeProvider } from "@material-ui/core/styles"
import { ReactChild, ReactFragment, ReactPortal } from "react"
import { theme } from "../Theme/theme"
import { Footer } from "./Footer"
import ResponsiveAppBar from "./Navbar"
import { WhatsappButton } from "./WhatsappButton"

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
      <div
        id="content"
        style={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        {props.children}
      </div>
      <Footer />
      <WhatsappButton />
    </ThemeProvider>
  )
}
