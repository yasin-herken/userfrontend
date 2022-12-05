import React from "react";
import CustomPage from "../../Component/CustomPage/CustomPage";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Login from "../../Component/Header/LoginModal/Login";
import QuickViewModal from "../../Component/QuickViewModal/QuickViewModal";
import SingleProduct from "../../Component/Product/Product";

const Product = () => {
  return (
    <React.Fragment>
      <Login />
      <QuickViewModal />
      <Header />
      <CustomPage />
      <SingleProduct />
      <Footer />
    </React.Fragment>
  );
};

export default Product;
