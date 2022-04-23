import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { SelectedImage } from "./SelectedImage"
import { ImageViewerItem } from "./ImageViewerItem"
import { useState } from "react"

export const ImageViewer = () => {
  const images = [
    "https://http2.mlstatic.com/D_NQ_NP_778966-MLA49552399028_042022-W.jpg",
    "https://ollasessen.com.ar/wp-content/uploads/2020/09/wok-essen-2-scaled.jpg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          width: "100%",
          flex: 1,
        }}
      >
        <SelectedImage
          urls={images.map((image) => ({ src: image }))}
          curImg={currentImage}
          changeImage={setCurrentImage}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          spaceBetween={5}
        >
          {images.map((image, index) => (
            <>
              <SwiperSlide
                key={index}
                onClick={() => {
                  console.log(image)
                  setCurrentImage(index)
                }}
              >
                <ImageViewerItem url={image} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
