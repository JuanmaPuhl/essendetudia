import { Pagination } from "@mui/material"
import { ChangeEvent } from "react"

export const CustomPagination = ({
  cantPages,
  changePage,
  page,
}: {
  cantPages: number
  changePage: (event: React.ChangeEvent<unknown>, page: number) => void
  page: number
}) => (
  <Pagination
    count={cantPages}
    onChange={changePage}
    page={page}
    sx={{
      alignSelf: "center",
      marginTop: "10px",
      marginBottom: "10px",
    }}
  />
)
