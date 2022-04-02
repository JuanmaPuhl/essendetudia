import { Carousel } from "./Carousel/Carousel"
import { FeaturedProducts } from "./FeaturedProducts"
import ResponsiveAppBar from "./Navbar"

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Carousel />
      <FeaturedProducts />
    </>
  )
}
