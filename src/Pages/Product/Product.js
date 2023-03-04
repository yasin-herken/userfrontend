import React from "react";
import CustomPage from "../../Component/CustomPage/CustomPage";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Login from "../../Component/Header/LoginModal/Login";
import QuickViewModal from "../../Component/QuickViewModal/QuickViewModal";
import SingleProduct from "../../Component/Product/Product";
import {useLoaderData} from "react-router-dom";

const Product = () => {
  const {product} = useLoaderData();
  return (
    <React.Fragment>
      <Header/>
      <Login/>
      <QuickViewModal/>
      <CustomPage product={product}/>
      <SingleProduct description={product.description}/>
      <Footer/>
    </React.Fragment>
  );
};

export default Product;
