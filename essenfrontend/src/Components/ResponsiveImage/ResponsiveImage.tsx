export const ResponsiveImage = ({
  src,
  onClick,
}: {
  src: string
  onClick: () => void
}) => {
  return (
    <img
      src={src}
      onClick={onClick}
      style={{
        width: "auto",
        maxWidth: "100%",
        height: "300px",
        maxHeight: "300px",
        objectFit: "contain",
      }}
    />
  )
}
