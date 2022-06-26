import { Grid, Skeleton } from "@mui/material"
import { isMobile } from "../Theme/theme"

export const SkeletonLoader = () => {
  const mobile = isMobile()

  return (
    <>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
      <Grid item md={3} xs={12} sm={6} sx={{ padding: "5px" }}>
        <Skeleton variant="rectangular" height={mobile ? "200px" : "400px"} />
      </Grid>
    </>
  )
}
