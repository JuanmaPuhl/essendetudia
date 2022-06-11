import { Typography } from "@material-ui/core"
import { Breadcrumbs, Grid, Link } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
import { FiltersList } from "./FiltersList"
import { CustomPagination } from "./Pagination"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { isMobile } from "../Theme/theme"
export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pages, setPages] = useState<number>(0)
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const search = useLocation().search
  const [originalProductList, setOriginalProductList] = useState<Product[]>([])

  const getProducts = (filters?: any) => {
    get("/products?populate=Images,line", {
      fieldsToFetch: ["Title", "ShortDescription"],
      filters,
      pagination: {
        page: selectedPage,
        pageSize: 12,
      },
    }).then((result) => {
      setProducts(result?.data.data)
      setOriginalProductList(result?.data.data)
      console.log(result)
      const totalProducts = result?.data.meta.pagination.total
      const totalPages = Math.ceil(totalProducts / 12)
      setPages(totalPages)
    })
  }

  useEffect(() => {
    getProducts()
  }, [selectedPage])

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setSelectedPage(page)
  }

  const handleClick = () => {}
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Inicio
    </Link>,
    <Typography key="2">Productos</Typography>,
  ]
  const mobile = isMobile()

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
              Productos
            </Typography>
          </div>
        </div>
        <img
          src="https://www.essen.com.ar/contenido/editor/Image/aqua.jpg"
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "red",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <Grid container justifyContent={" center"} sx={{ marginTop: "20px" }}>
        <Grid
          item
          md={2}
          xs={12}
          sm={12}
          sx={{ backgroundColor: "#F6F6F6", textAlign: "center" }}
          rowSpacing={2}
        >
          <Typography variant="h6">Lineas</Typography>
          <FiltersList
            variant="lineas"
            id="lines"
            filterProducts={originalProductList}
            setProducts={getProducts}
          />
          <Typography variant="h6">Tipos</Typography>
          <FiltersList
            variant="types"
            id="types"
            filterProducts={originalProductList}
            setProducts={setProducts}
          />
        </Grid>
        <Grid item md={7} xs={12} sm={12} sx={{ zIndex: 1 }}>
          <Grid container direction={"column"}>
            <Grid container>
              {products.map((product: Product) => (
                <Grid
                  item
                  key={product.id}
                  md={3}
                  xs={12}
                  sm={6}
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
              ))}
            </Grid>
            <CustomPagination
              page={selectedPage}
              cantPages={pages}
              changePage={onChangePage}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
