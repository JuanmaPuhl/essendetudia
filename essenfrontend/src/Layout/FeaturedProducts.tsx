import { Typography } from "@mui/material"
import { get } from "../httpManager/httpManager"
export const FeaturedProducts = () => {
  get("/api/products", {
    headers: {
      Authorization: "bearer ",
    },
  }).then((result) => {
    console.log("featuredProducts", result)
  })
  return (
    <>
      <Typography variant="h5">Featured Products</Typography>
    </>
  )
}
