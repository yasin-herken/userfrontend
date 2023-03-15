import "./App.css";
import React from "react";
import qs from "query-string";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShopGridLeft from "./Pages/Shop/Shop-grid-left";
import {getProductByIdandCategory, getProducts} from "./Services/productService";
import {getCategories} from "./Services/categoryService";
import RootLayout from "./Layout/RootLayout";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product/Product";

const loaderShopGrid = async () => {
  const data = await getProducts({});
  const categories = await getCategories();
  return {
    products: data,
    categories,
  }
}
const loaderShopGridQuery = async ({request}) => {
  const criteria = {};
  const url = new URL(request.url);
  const searchParams = qs.parse(url.search);
  if (searchParams["size"]) {
    if (typeof searchParams["size"] === "string") {
      criteria.eq = {
        ...criteria.eq,
        size: [searchParams["size"]],
      }
    } else {
      criteria.eq = {
        ...criteria.eq,
        size: [...searchParams["size"]],
      }
    }
  }
  if (searchParams["color"]) {
    criteria.eq = {
      ...criteria.eq,
      color: searchParams["color"],
    }
  }
  if (searchParams["category"]) {
    criteria.eq = {
      ...criteria.eq,
      category: searchParams["category"],
    }
  }
  const data = await getProducts({criteria: criteria});
  const categories = await getCategories();
  return {
    products: data,
    categories,
  }
}
const loaderShopCategoryById = async ({params}) => {
  const data = await getProductByIdandCategory({category: params.categories, id: params.id});
  return {
    product: data,
  };
}
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="shop" element={<ShopGridLeft/>} loader={loaderShopGrid}/>
    <Route path={"shop/query?"} element={<ShopGridLeft/>} loader={loaderShopGridQuery}/>
    <Route path={"shop/:categories/:id"} element={<Product/>} loader={loaderShopCategoryById}/>
    <Route path={"cart"} element={<Cart/>}/>
    <Route path={"checkout"} element={<Checkout/>}/>
  </Route>
));

function App() {
  return <RouterProvider router={router}/>
}

export default App;
