import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { CarouselItem } from "./CarouselItem"
import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../httpManager/httpManager"
import { Image } from "../../httpManager/model"

type Header = {
  id: string
  attributes: {
    title: string
    image: {
      data: Image
    }
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
      <Grid item md={0} xs={0}></Grid>
      <Grid item md={12} xs={12}>
        <StyledSlider
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          loop={headers.length > 1}
        >
          {headers.length > 0 ? (
            headers.map((header) => {
              return (
                <SwiperSlide key={header.id}>
                  <CarouselItem
                    title={header.attributes.title}
                    description={header.attributes.description}
                    url={header.attributes.url}
                    image={header.attributes.image.data.attributes.url}
                  />
                </SwiperSlide>
              )
            })
          ) : (
            <SwiperSlide>
              <CarouselItem
                title={"Bienvenidos a Essendetudia"}
                description={""}
                url={""}
                image={
                  "https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/12/509541.jpg"
                }
              />
            </SwiperSlide>
          )}
        </StyledSlider>
      </Grid>
      <Grid item md={0} xs={0}></Grid>
    </Grid>
  )
}

const StyledSlider = styled(Swiper)`
  // height: 500px;
`
