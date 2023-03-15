import React from "react";
import {useSelector} from "react-redux";
import {selectCart} from "../../../Features/Cart/cartSlice";
import {Link, useNavigate} from "react-router-dom";
import CartItem from "../CartItem";
import {calculatePrice, getTotal} from "../../../Utility/Utility";

const CardContent = () => {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  const calculatedPrice = calculatePrice(getTotal(cart).totalPrice);
  return (<React.Fragment>
    {/* Page Content*/}
    <div className="container pb-5 mb-2 mb-md-4">
      <div className="row">
        {/* List of items*/}
        <section className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 pb-sm-5 mt-1">
            <h2 className="h6 text-light mb-0">Products</h2>
            <Link
              className="btn btn-outline-primary btn-sm pl-2"
              to="/"
            >
              <i className="czi-arrow-left mr-2"/>
              Continue shopping
            </Link>
          </div>
          {/* Item*/}
          {cart?.map((item, index) => {
            return (<CartItem
              key={index}
              currency={item.currency}
              price={item.price}
              size={item.size}
              quantity={item.quantity}
              title={item.title}
              image={item.image}
              id={item.id}
            />)
          })}

          <button className="btn btn-outline-accent btn-block" type="button" onClick={() => {
            navigate('/')
          }}>
            <i className="czi-loading font-size-base mr-2"/>
            Update cart
          </button>
        </section>
        {/* Sidebar*/}

        <aside className="col-lg-4 pt-4 pt-lg-0">
          <div className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h2 className="h6 mb-3 pb-1">Subtotal</h2>
              <h3 className="font-weight-normal">
                {`$${calculatedPrice.dollar}`}.<small>{`${calculatedPrice.cent}`}</small>
              </h3>
            </div>
            <div className="form-group mb-4">
              <label className="mb-3" htmlFor="order-comments">
                  <span className="badge badge-info font-size-xs mr-2">
                    Note
                  </span>
                <span className="font-weight-medium">
                    Additional comments
                  </span>
              </label>
              <textarea
                className="form-control"
                rows={6}
                id="order-comments"
                defaultValue={""}
              />
            </div>
            <Link
              className="btn btn-primary btn-shadow btn-block mt-4"
              to="/checkout"
            >
              <i className="czi-card font-size-lg mr-2"/>
              Proceed to Checkout
            </Link>
          </div>
        </aside>
      </div>
    </div>
  </React.Fragment>);
};

export default CardContent;
