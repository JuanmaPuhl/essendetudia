import { Container } from "@mui/material"
import { Carousel } from "./Carousel/Carousel"
import { FeaturedProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import ResponsiveAppBar from "./Navbar"

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Carousel />
      <FeaturedProducts />
      <Footer />
    </>
  )
}
