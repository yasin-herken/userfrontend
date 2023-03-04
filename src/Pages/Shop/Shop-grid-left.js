import React from 'react'
import Header from '../../Component/Header/Header'
import Login from '../../Component/Header/LoginModal/Login'
import QuickViewModal from '../../Component/QuickViewModal/QuickViewModal'
import Page from '../../Component/Page/Page';
import AddedToCart from "../../Component/AddedToCart/AddedToCart";
import Footer from '../../Component/Footer/Footer';
import {useLoaderData} from "react-router-dom";
const ShopGridLeft = () => {
    const {products, categories} = useLoaderData();
  return (
    <React.Fragment>
        <Login />
        <QuickViewModal />
        <Header path="/shopGridLeft"/>
        <Page products={products} categories={categories} />
        <AddedToCart />
        <Footer />
    </React.Fragment>
  )
}

export default ShopGridLeft;