import { Carousel } from "./Carousel/Carousel"
import { FeaturedProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import ResponsiveAppBar from "./Navbar"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { Subscribe } from "./Subscribe"
import { WhatsappButton } from "./WhatsappButton"
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Grape nuts"].join(","),
  },
})

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <WhatsappButton />
      <ResponsiveAppBar />
      <Carousel />
      <FeaturedProducts />
      <Subscribe />
      <Footer />
    </ThemeProvider>
  )
}
