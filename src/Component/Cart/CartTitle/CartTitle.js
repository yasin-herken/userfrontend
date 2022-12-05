import React from 'react'

const CartTitle = () => {
  return (
    <React.Fragment>
        {/* Page Title (Shop)*/}
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="czi-home" />Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="shop-grid-ls.html">Shop</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Your cart</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartTitle