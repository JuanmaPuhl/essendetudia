import { Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { get } from "../httpManager/httpManager"
import { Filter, Product } from "../httpManager/model"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
export const FiltersList = ({
  variant,
  id,
  displayName,
  filterProducts,
  setProducts,
}: {
  variant: string
  id: string
  filterProducts: Product[]
  setProducts: (parameter?: any) => void
  displayName: string
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
      <Accordion
        sx={{ elevation: 0, border: 0 }}
        style={{ margin: 0, border: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{displayName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {filters.map((filter) => {
            return (
              <Box
                key={filter.id}
                sx={{
                  ":hover": { cursor: "pointer", backgroundColor: "lightGray" },
                }}
              >
                <Typography
                  variant="body1"
                  onClick={() => {
                    console.log("perron")
                    console.log(filterProducts)
                    setProducts({
                      filters: {
                        line: {
                          Title: {
                            $eq:
                              id === "line"
                                ? filter.attributes.Title
                                : undefined,
                          },
                        },
                        type: {
                          Title: {
                            $eq:
                              id === "type"
                                ? filter.attributes.Title
                                : undefined,
                          },
                        },
                      },
                    })
                  }}
                  key={filter.id}
                >
                  {filter.attributes.Title}
                </Typography>
              </Box>
            )
          })}
        </AccordionDetails>
      </Accordion>

      {/* {filters.map((filter) => {
        return (
          <Typography
            variant="body1"
            onClick={() => {
              console.log("perron")
              console.log(filterProducts)
              if (id !== "line" && id !== "type") setProducts()
              else {
                console.log(id)
                console.log("caso general")
                console.log(filter.attributes.Title)
                setProducts({
                  filters: {
                    line: {
                      Title: {
                        $eq:
                          id === "line" ? filter.attributes.Title : undefined,
                      },
                    },
                    type: {
                      Title: {
                        $eq:
                          id === "type" ? filter.attributes.Title : undefined,
                      },
                    },
                  },
                })
              }
            }}
            key={filter.id}
          >
            {filter.attributes.Title}
          </Typography>
        )
      })} */}
    </>
  )
}
