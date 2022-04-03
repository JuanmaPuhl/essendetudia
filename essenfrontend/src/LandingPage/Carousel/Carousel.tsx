import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation" // Navigation module
import "swiper/css/pagination" // Pagination module
import { CarouselItem } from "./CarouselItem"
import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../httpManager/httpManager"

type Header = {
  id: string
  attributes: {
    title: string
    image: string
    description: string
    url: string
  }
}

export const Carousel = () => {
  const [headers, setHeaders] = useState<Header[]>([])
  useEffect(() => {
    get("/headers?populate=image", {
      fieldsToFetch: ["title", "description", "url"],
    }).then((result) => {
      setHeaders(result.data.data)
      console.log(headers)
    })
  }, [])

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
          loop={headers.length > 1}
        >
          {headers.map((header) => {
            console.log(header)
            return (
              <SwiperSlide key={header.id}>
                <CarouselItem
                  title={header.attributes.title}
                  description={header.attributes.description}
                  url={header.attributes.url}
                />
              </SwiperSlide>
            )
          })}
        </StyledSlider>
      </Grid>
      <Grid item md={2} xs={0}></Grid>
    </Grid>
  )
}

const StyledSlider = styled(Swiper)``
