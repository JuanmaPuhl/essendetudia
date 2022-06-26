import { Typography } from "@material-ui/core"
import { Grid, Link } from "@mui/material"
import { useEffect, useState } from "react"
import { get } from "../../httpManager/httpManager"
import { Product } from "../../httpManager/model"
import { PageHeader } from "../PageHeader/PageHeader"
import { SkeletonLoader } from "../SkeletonLoader"

export const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    get("/products?populate=Images,line,type", {
      fieldsToFetch: ["Title", "ShortDescription"],
      filters: {},
    }).then((result) => {
      console.log("Respuesta")
      setProducts(result?.data.data)
      console.log(result)
      const totalProducts = result?.data.meta.pagination.total
      const totalPages = Math.ceil(totalProducts / 5)
    })
  }, [])

  return (
    <>
      <PageHeader
        title="Aqua"
        image=""
        breadcrumbs={[
          <Link underline="hover" key="1" color="inherit" href="/">
            Inicio
          </Link>,
          <Link underline="hover" key="1" color="inherit" href="/products">
            Productos
          </Link>,
          <Typography key="2">Aqua</Typography>,
        ]}
      />

      <Typography>Galeria de imagenes</Typography>
    </>
  )
}
