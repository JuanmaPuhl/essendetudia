import { Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { get } from "../httpManager/httpManager"
import { Filter, Product } from "../httpManager/model"
import qs from "qs"

export const FiltersList = ({
  variant,
  id,
  filterProducts,
  setProducts,
}: {
  variant: string
  id: string
  filterProducts: Product[]
  setProducts: (parameter: any) => void
}) => {
  const [filters, setFilters] = useState<Filter[]>([])

  useEffect(() => {
    get(variant).then((result) => {
      setFilters(result?.data.data)
      console.log(result?.data.data)
      console.log(filters)
    })
  }, [])

  return (
    <>
      {filters.map((filter) => {
        return (
          <Typography
            variant="body1"
            onClick={() => {
              console.log("perron")
              console.log(filterProducts)

              setProducts({
                filters: {
                  line: {
                    Title: {
                      $eq: filter.attributes.Title,
                    },
                  },
                },
              })

              console.log(filterProducts)
            }}
            key={filter.id}
          >
            {filter.attributes.Title}
          </Typography>
        )
      })}
    </>
  )
}
