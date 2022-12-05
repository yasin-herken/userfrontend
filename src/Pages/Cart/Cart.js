import React from 'react'
import Header from '../../Component/Header/Header'
import Login from '../../Component/Header/LoginModal/Login'
import QuickViewModal from '../../Component/QuickViewModal/QuickViewModal'
import CartComponent from '../../Component/Cart/Cart'
import Footer from '../../Component/Footer/Footer'
const Cart = () => {
  return (
    <React.Fragment>
        <Login />
        <QuickViewModal />
        <Header path="/cart" />
        <CartComponent />
        <Footer />
    </React.Fragment>
  )
}

export default Cart