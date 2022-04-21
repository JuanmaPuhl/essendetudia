import { useCallback, useState } from "react"
import ImgsViewer from "react-images-viewer"
import Image from "material-ui-image"

export const SelectedImage = ({ url }: { url: string }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const images = [
    { src: url },
    { src: "http://placeimg.com/1200/800/nature" },
    { src: "http://placeimg.com/1200/800/nature" },
    { src: "http://placeimg.com/1200/800/nature" },
  ]

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
      ></ImgsViewer>
      <Image
        cover
        aspectRatio={16 / 9}
        alt="Holi"
        src={url}
        onClick={() => {
          openImageViewer(0)
        }}
      ></Image>
    </>
  )
}
