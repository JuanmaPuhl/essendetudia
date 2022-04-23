import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { SelectedImage } from "./SelectedImage"
import { ImageViewerItem } from "./ImageViewerItem"
import { useState } from "react"

export const ImageViewer = ({ images }: { images: string[] }) => {
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
          width: "100%",
          marginBottom: "10px",
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
