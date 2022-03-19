import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Layout } from "./LandingPage/Layout"
import { ProductPage } from "./ProductPage/ProductPage"

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}
