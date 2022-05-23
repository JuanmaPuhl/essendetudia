import { Carousel } from "../Components/Carousel/Carousel"
import { Categories } from "./Categories/Categories"
import { FeaturedProducts } from "./FeaturedProducts"
import { Subscribe } from "./Subscribe"

export const Layout = () => {
  return (
    <>
      <Carousel />
      <FeaturedProducts />
      <Categories />
      <Subscribe />
    </>
  )
}
