import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Layout } from "./MainLayout/Layout"
import { Layout as LandingPage } from "./LandingPage/Layout"
import { ProductPage } from "./ProductPage/ProductPage"
import { ProductList } from "./ProductList/ProductList"
import { NotFoundPage } from "./NotFoundPage"
import { CategoryPage } from "./Components/CategoryPage/CategoryPage"

export const PageRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route
            path="/products/categories/:category"
            element={<CategoryPage />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
