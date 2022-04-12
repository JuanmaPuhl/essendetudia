import { Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { get } from "../httpManager/httpManager"
import { Filter } from "../httpManager/model"

export const FiltersList = () => {
  const [filters, setFilters] = useState<Filter[]>([])

  useEffect(() => {
    get("/types").then((result) => {
      setFilters(result.data.data)
      console.log(result.data.data)
      console.log(filters)
    })
  }, [])

  return (
    <>
      {filters.map((filter) => {
        return (
          <Typography key={filter.id}>
            {filter.attributes.Description}
          </Typography>
        )
      })}
    </>
  )
}
