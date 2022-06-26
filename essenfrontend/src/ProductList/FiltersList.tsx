import { Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { get } from "../httpManager/httpManager"
import { Filter, Product } from "../httpManager/model"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

export const FiltersList = ({
  variant,
  id,
  displayName,
  filterProducts,
  setProducts,
  selectFilter,
  selectedFilter,
}: {
  variant: string
  id: string
  filterProducts: Product[]
  setProducts: (filters?: any, goToFirstPage?: boolean) => void
  displayName: string
  selectFilter: (parameter: string) => void
  selectedFilter: string
}) => {
  const [filters, setFilters] = useState<Filter[]>([])
  const [expanded, setExpanded] = useState(true)
  useEffect(() => {
    get(variant).then((result) => {
      setFilters(result?.data.data)
      console.log(result?.data.data)
      console.log(filters)
    })
  }, [])
  console.log(selectedFilter)
  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={(event, expanded) => setExpanded(expanded)}
        sx={{}}
        style={{ margin: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ margin: 0, border: 0, boxShadow: "none", borderWidth: "0" }}
        >
          <Typography>{displayName}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ margin: 0, border: 0, boxShadow: "none", borderWidth: "0" }}
        >
          {filters.map((filter) => {
            return (
              <Box
                key={filter.id}
                sx={{
                  ":hover": { cursor: "pointer", backgroundColor: "lightGray" },
                  display: "flex",
                  justifyContent: "center",
                  padding: "0",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor:
                    selectedFilter === filter.attributes.Title
                      ? "lightGray"
                      : "white",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    margin: 0,
                    flex: 1,
                    height: "100%",
                    width: "100%",
                    padding: 5,
                  }}
                  onClick={() => {
                    console.log(
                      "el filtro seleccionado es: ",
                      filter.attributes.Title,
                    )
                    selectFilter(filter.attributes.Title)
                    setProducts(
                      {
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
                      },
                      true,
                    )
                  }}
                  key={filter.id}
                >
                  {filter.attributes.Title}
                </Typography>
                <Button
                  variant="text"
                  onClick={() => {
                    selectFilter("")
                    setProducts()
                  }}
                  sx={{
                    visibility:
                      selectedFilter === filter.attributes.Title
                        ? "visible"
                        : "hidden",
                    color: "gray",
                    zIndex: "2",
                    ":hover": { color: "black" },
                  }}
                >
                  <HighlightOffIcon />
                </Button>
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
