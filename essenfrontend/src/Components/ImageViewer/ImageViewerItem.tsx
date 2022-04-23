import Image from "material-ui-image"

export const ImageViewerItem = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        border: "1px solid #555555",
        height: "100%",
        marginBottom: "1px",
        cursor: "pointer",
      }}
    >
      <Image cover aspectRatio={16 / 9} src={url}></Image>
    </div>
  )
}
