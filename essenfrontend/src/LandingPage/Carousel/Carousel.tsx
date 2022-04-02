import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation" // Navigation module
import "swiper/css/pagination" // Pagination module
import { CarouselItem } from "./CarouselItem"
import styled from "@emotion/styled"
import { Grid } from "@mui/material"
export const Carousel = () => {
  return (
    <Grid container>
      <Grid item md={2} xs={0}></Grid>
      <Grid item md={8} xs={12}>
        <StyledSlider
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          loop
        >
          <SwiperSlide>
            <CarouselItem />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </StyledSlider>
      </Grid>
      <Grid item md={2} xs={0}></Grid>
    </Grid>
  )
}

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #f0f;
  justify-content: center;
  text-align: center;
`

const StyledSlider = styled(Swiper)``
