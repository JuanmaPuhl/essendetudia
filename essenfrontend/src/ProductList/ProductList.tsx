import { Typography } from "@material-ui/core"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { get, getImageUrl } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"
import { FiltersList } from "./FiltersList"
import { CustomPagination } from "./Pagination"

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pages, setPages] = useState<number>(0)
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const search = useLocation().search

  useEffect(() => {
    get("/products?populate=Images", {
      fieldsToFetch: ["Title", "ShortDescription"],
      pagination: {
        page: selectedPage,
        pageSize: 12,
      },
    }).then((result) => {
      setProducts(result?.data.data)
      console.log(result)
      const totalProducts = result?.data.meta.pagination.total
      const totalPages = Math.ceil(totalProducts / 12)
      setPages(totalPages)
    })
  }, [selectedPage])

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setSelectedPage(page)
  }

  return (
    <>
      <Grid container justifyContent={"center"} sx={{ marginTop: "20px" }}>
        <Grid
          item
          md={2}
          xs={12}
          sm={12}
          sx={{ backgroundColor: "#F6F6F6", textAlign: "center" }}
          rowSpacing={2}
        >
          <Typography variant="h6">Filtros</Typography>
          <FiltersList />
        </Grid>
        <Grid item md={7} xs={12} sm={12} sx={{ zIndex: 1 }}>
          <Grid container direction={"column"}>
            <Grid container>
              {products.map((product: Product) => (
                <Grid item key={product.id} md={3} xs={12} sm={6}>
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
