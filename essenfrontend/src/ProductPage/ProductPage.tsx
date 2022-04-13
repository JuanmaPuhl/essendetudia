import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../httpManager/httpManager"
import { Product } from "../httpManager/model"
import ProductCard from "../Components/Products/ProductCard"

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    get(`/products/${id}`).then((result) => {
      if (result.data.data) setProduct(result.data.data)
    })
  }, [id])
  return (
    <>
      {product && (
        <ProductCard
          title={product.attributes.Title}
          shortDescription={product.attributes.ShortDescription}
          image={product.attributes.Images?.data[0].attributes.url}
        />
      )}
    </>
  )
}
