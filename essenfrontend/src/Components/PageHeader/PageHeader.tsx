import { Typography } from "@material-ui/core"
import { Breadcrumbs } from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { ReactComponentElement } from "react"

export const PageHeader = ({
  breadcrumbs,
  title,
  image,
}: {
  breadcrumbs: any[]
  title: string
  image: string
}) => {
  return (
    <>
      <div style={{ height: "350px", width: "100%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "#0000005A",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              height: "100%",
              verticalAlign: "middle",
              justifyContent: "center",
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              style={{
                marginLeft: "5px",
                color: "white",
              }}
            >
              {breadcrumbs}
            </Breadcrumbs>
            <Typography variant="h2" style={{ color: "white" }}>
              {title}
            </Typography>
          </div>
        </div>
        <img
          src={image}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "red",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </>
  )
}
