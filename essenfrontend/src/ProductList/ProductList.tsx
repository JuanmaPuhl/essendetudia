import { Typography } from "@material-ui/core"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Chip,
  Grid,
  Link,
  Skeleton,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
import { FiltersList } from "./FiltersList"
import { CustomPagination } from "./Pagination"
import { isMobile } from "../Theme/theme"
import { Box } from "@mui/system"
import { PageHeader } from "../Components/PageHeader/PageHeader"
import { SkeletonLoader } from "../Components/SkeletonLoader"
export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pages, setPages] = useState<number>(0)
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const search = useLocation().search
  const [originalProductList, setOriginalProductList] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedFilter, selectFilter] = useState("")
  const [currentFilter, setCurrentFilter] = useState<any>(null)

  useEffect(() => {
    const selectedCategory = localStorage.getItem("category") || ""
    console.log("Encontre el selected filter")
    console.log(selectedCategory)
    if (selectedCategory) {
      setCurrentFilter({
        filters: {
          line: {
            Title: {
              $eq: selectedCategory,
            },
          },
        },
      })
      selectFilter(currentFilter)
    }
    //localStorage.removeItem("category")
  }, [])

  const getProducts = (filters?: any, goToFirstPage?: boolean) => {
    if (goToFirstPage) setSelectedPage(1)
    console.log("filters:", filters)
    if (filters) setCurrentFilter(filters)
    else {
      if (currentFilter) filters = currentFilter
    }

    setLoading(true)
    get("/products?populate=Images,line,type", {
      fieldsToFetch: ["Title", "ShortDescription"],
      filters,
      pagination: {
        page: selectedPage,
        pageSize: 5,
      },
    }).then((result) => {
      console.log("Respuesta")
      setProducts(result?.data.data)
      setOriginalProductList(result?.data.data)
      console.log(result)
      const totalProducts = result?.data.meta.pagination.total
      const totalPages = Math.ceil(totalProducts / 5)
      setPages(totalPages)
      setLoading(false)
    })
  }

  useEffect(() => {
    getProducts()
  }, [selectedPage, currentFilter, selectedFilter])

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setSelectedPage(page)
  }
  return (
    <>
      <PageHeader
        title="Productos"
        breadcrumbs={[
          <Link underline="hover" key="1" color="inherit" href="/">
            Inicio
          </Link>,
          <Typography key="2">Productos</Typography>,
        ]}
        image="https://www.essen.com.ar/contenido/editor/Image/aqua.jpg"
      />
      <Grid container justifyContent={" center"} sx={{ marginTop: "20px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: { md: "none", lg: "none", xl: "none" } }}
        >
          <Accordion style={{ margin: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                margin: 0,
                border: 0,
                boxShadow: "none",
                borderWidth: "0",
              }}
            >
              <div style={{ display: "flex" }}>
                <Typography>Filtros</Typography>
                <FilterListIcon style={{ marginLeft: "5px" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails
              style={{
                margin: 0,
                border: 0,
                boxShadow: "none",
                borderWidth: "0",
              }}
            ></AccordionDetails>

            <FiltersList
              variant="lineas"
              displayName="Lineas"
              id="line"
              filterProducts={originalProductList}
              setProducts={getProducts}
              selectFilter={selectFilter}
              selectedFilter={selectedFilter}
            />
            {/* <FiltersList
              displayName="Tipos"
              variant="types"
              id="type"
              filterProducts={originalProductList}
              setProducts={getProducts}
              selectFilter={selectFilter}
              selectedFilter={selectedFilter}
            /> */}
          </Accordion>
        </Grid>
        <Grid
          item
          md={2}
          sx={{
            textAlign: "center",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
          rowSpacing={2}
        >
          <Typography>Filtros</Typography>
          <FiltersList
            variant="lineas"
            displayName="Lineas"
            id="line"
            filterProducts={originalProductList}
            setProducts={getProducts}
            selectFilter={selectFilter}
            selectedFilter={selectedFilter}
          />
          {/* <FiltersList
            displayName="Tipos"
            variant="types"
            id="type"
            filterProducts={originalProductList}
            setProducts={getProducts}
            selectFilter={selectFilter}
            selectedFilter={selectedFilter}
          /> */}
        </Grid>
        <Grid item md={7} xs={12} sm={12} sx={{ zIndex: 1 }}>
          <Grid container direction={"column"}>
            <Grid container>
              {loading ? (
                <SkeletonLoader />
              ) : products.length ? (
                products.map((product: Product) => (
                  <Grid
                    item
                    key={product.id}
                    md={4}
                    xs={12}
                    sm={6}
                    lg={3}
                    sx={{ padding: "5px" }}
                  >
                    <ProductCard
                      id={product.id}
                      key={product.id}
                      title={product.attributes.Title}
                      shortDescription={product.attributes.ShortDescription}
                      image={getImageUrl(
                        product.attributes.Images.data?.[0].attributes.url,
                      )}
                    />
                  </Grid>
                ))
              ) : (
                <Typography>No se encontraron productos</Typography>
              )}
            </Grid>
            <CustomPagination
              page={selectedPage}
              cantPages={pages}
              changePage={onChangePage}
              visibility={products.length > 0}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
