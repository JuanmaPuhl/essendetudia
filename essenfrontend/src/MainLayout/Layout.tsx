import { ThemeProvider } from "@material-ui/core/styles"
import {
  createContext,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react"
import { theme } from "../Theme/theme"
import { Footer } from "./Footer"
import ResponsiveAppBar from "./Navbar"
import { WhatsappButton } from "./WhatsappButton"

export const context = createContext({
  footerStyle: {},
  setFooterStyle: (value: any) => {},
  pageHeight: 0,
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
  const [footerStyle, setFooterStyle] = useState({})
  const [pageHeight, setPageHeight] = useState(0)

  useEffect(() => {
    setPageHeight(document.body.clientHeight)
  })

  return (
    <context.Provider
      value={{
        footerStyle,
        setFooterStyle: (value) => {
          setFooterStyle(value)
        },
        pageHeight,
      }}
    >
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
        <div style={footerStyle}>
          <Footer />
        </div>
        <WhatsappButton />
      </ThemeProvider>
    </context.Provider>
  )
}
