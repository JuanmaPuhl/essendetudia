import { Carousel } from "./Carousel/Carousel"
import { FeaturedProducts } from "./FeaturedProducts"
import { Subscribe } from "./Subscribe"

export const Layout = () => {
  return (
    <>
      <Carousel />
      <FeaturedProducts />
      <Subscribe />
    </>
  )
}
