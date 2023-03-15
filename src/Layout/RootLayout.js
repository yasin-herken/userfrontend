import React from 'react';

import {Outlet} from "react-router-dom";
import Login from "../Component/Header/LoginModal/Login";
import QuickViewModal from "../Component/QuickViewModal/QuickViewModal";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Login/>
      <QuickViewModal/>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  );
};

export default RootLayout;