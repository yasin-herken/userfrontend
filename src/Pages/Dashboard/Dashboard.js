import React from "react";
import Brands from "../../Component/Brands/Brands";
import Categories from "../../Component/Category/Categories";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Login from "../../Component/Header/LoginModal/Login";
import HeroSlider from "../../Component/HeroSlider/HeroSlider";
import ProductWidget from "../../Component/ProductWidget/ProductWidget";
import QuickViewModal from "../../Component/QuickViewModal/QuickViewModal";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Login />
      <QuickViewModal />
      <Header path="/"/>
      <HeroSlider />
      <Categories />
      <Brands />
      <ProductWidget />
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
