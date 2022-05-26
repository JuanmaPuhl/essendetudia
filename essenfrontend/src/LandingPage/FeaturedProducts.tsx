import { Typography } from "@material-ui/core"
import { Grid, Button, Container, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
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
    <Container>
      <Grid
        container
        columns={12}
        marginTop="20px"
        sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
      >
        <Grid item md={11}>
          <Typography variant="h5">Productos</Typography>
        </Grid>
        <Grid item md={1}>
          <Button>Ver todo</Button>
        </Grid>
      </Grid>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={() => {}}
        navigation
        centerInsufficientSlides
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
        }}
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
  )
}
