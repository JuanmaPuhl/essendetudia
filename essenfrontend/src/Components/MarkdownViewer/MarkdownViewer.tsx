import ReactMarkdown from "react-markdown"
import { getImageUrl } from "../../httpManager/httpManager"

export const MarkdownViewer = ({ markdownText }: { markdownText: string }) => {
  const renderers = {
    p: (paragraph: any) => {
      const { node } = paragraph

      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        image.properties.src = getImageUrl(image.properties.src)
        return (
          <img
            src={image.properties.src}
            alt={image.properties.alt}
            style={{
              height: "auto",
              width: "100%",
              backgroundSize: "cover",
            }}
          />
        )
      }
      return <p>{paragraph.children}</p>
    },
  }

  return (
    <ReactMarkdown
      transformImageUri={(uri) => getImageUrl(uri)}
      components={renderers}
    >
      {markdownText}
    </ReactMarkdown>
  )
}
