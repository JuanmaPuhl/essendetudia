import { useCallback, useState } from "react"
import ImgsViewer from "react-images-viewer"
import Image from "material-ui-image"

type ImagesUrls = {
  src: string
}

export const SelectedImage = ({
  urls,
  curImg,
  changeImage,
}: {
  urls: ImagesUrls[]
  curImg: number
  changeImage: (index: number) => void
}) => {
  const [currentImage, setCurrentImage] = useState(curImg)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = urls

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      <ImgsViewer
        imgs={images}
        showThumbnails={true}
        currImg={currentImage}
        isOpen={isViewerOpen}
        onClose={() => {
          closeImageViewer()
        }}
        onClickThumbnail={(index: number) => {
          changeImage(index)
          setCurrentImage(index)
        }}
        onClickPrev={() => {
          changeImage(currentImage - 1)
          setCurrentImage(currentImage - 1)
        }}
        onClickNext={() => {
          changeImage(currentImage + 1)
          setCurrentImage(currentImage + 1)
        }}
      />
      <Image
        aspectRatio={16 / 9}
        width="100%"
        height="100%"
        src={urls[curImg].src}
        onClick={() => {
          openImageViewer(0)
        }}
      />
    </>
  )
}
