import { Typography } from "@material-ui/core"
import { Grid, Button, Container, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
import { Carousel } from "../Components/Carousel/Carousel"
import { CarouselItem } from "../Components/Carousel/CarouselItem"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import SearchIcon from "@mui/icons-material/Search"
export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
      pagination: {
        page: 1,
        pageSize: 8,
      },
    }).then((result) => {
      setProducts(result?.data.data)
    })
  }, [])

  return (
    <>
      <Grid
        container
        columns={12}
        marginTop="20px"
        sx={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}
      >
        <Grid item md={11}>
          <Typography variant="h5">Productos</Typography>
        </Grid>
        <Grid item md={1}>
          <Button>Ver todo</Button>
        </Grid>
      </Grid>
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          navigation
          centerInsufficientSlides
          spaceBetween={5}
        >
          {products.map((product: Product, index: number) => (
            <SwiperSlide key={index} onClick={() => {}}>
              <ProductCard
                id={product.id}
                key={product.id}
                title={product.attributes.Title}
                image={getImageUrl(
                  product.attributes.Images.data?.[0].attributes.url,
                )}
                shortDescription={product.attributes.ShortDescription}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide
            onClick={() => {}}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "blue",
            }}
          >
            <div
              style={{
                width: "90%",
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <Grid direction={"column"} style={{}}>
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item> Ver mas</Grid>
              </Grid>
            </div>
            {/* <ProductCard
            id={"1"}
            key={1}
            title={"hohoh"}
            image={getImageUrl("")}
            shortDescription={""}
          /> */}
          </SwiperSlide>
        </Swiper>
      </Container>

      {/* <Grid
        container
        spacing={1}
        columns={12}
        marginTop="5px"
        sx={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}
      >
        {products.map((product) => (
          <Grid key={product.id} item md={3} xs={12} sm={6}>
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.attributes.Title}
              image={getImageUrl(
                product.attributes.Images.data?.[0].attributes.url,
              )}
              shortDescription={product.attributes.ShortDescription}
            />
          </Grid>
        ))}
      </Grid> */}
    </>
  )
}
