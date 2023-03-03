import "./App.css";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShopGridLeft from "./Pages/Shop/Shop-grid-left";
import Product from "./Pages/Product/Product";
import {getProductByIdandCategory, getProducts} from "./Services/productService";
import {getCategories} from "./Services/categoryService";
import qs from "query-string";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/shopGridLeft",
    loader: async () => {
      const data = await getProducts({});
      const categories = await getCategories();
      return {
        products: data,
        categories,
      }
    },
    element: <ShopGridLeft/>,
  },
  {
    path: "/shopGridLeft/query?",
    loader: async ({request, params}) => {
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
      if( searchParams["color"]){
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
    },
    element: <ShopGridLeft/>,
  },
  {
    path: "/shop/:categories/:id",
    loader: async ({params}) => {
      const data = await getProductByIdandCategory({category: params.categories, id: params.id});
      return {
        product: data,
      };
    },
    element: <Product/>,
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
