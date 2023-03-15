import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {selectCart} from "../../Features/Cart/cartSlice";
import {useSelector} from "react-redux";
import {calculatePrice, getTotal} from "../../Utility/Utility";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";
import {postComplete} from "../../Services/completeServices";

const Review = ({setStep}) => {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const {state} = useStateMachine({updateAction});

  const {customer, payment} = state;
  const submitHandler = async () => {
    try {
      const res = await postComplete({
        customer: customer, payment: payment, orders: cart.map((item) => {
          return {
            id: item.id, quantity: item.quantity,
          }
        }), totalAmount: getTotal(cart).totalPrice,
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (<React.Fragment>
    {/* Order details*/}
    <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Review your order</h2>
    {/* Item*/}
    {cart.map((item, index) => (<div className="d-sm-flex justify-content-between my-4 pb-3 border-bottom">
      <div className="media media-ie-fix d-block d-sm-flex text-center text-sm-left">
        <Link className="d-inline-block mx-auto mr-sm-4" to={"/shop/product/" + item.id} style={{width: '10rem'}}>
          <img src={item.image} alt="Product"/>
        </Link>
        <div className="media-body pt-2">
          <h3 className="product-title font-size-base mb-2">
            <Link to={"/shop/product/" + item.id}>{item.title}</Link>
          </h3>
          <div className="font-size-sm"><span className="text-muted mr-2">Size:</span>{item.size}</div>
          <div className="font-size-sm"><span className="text-muted mr-2">Color:</span>{item.color}</div>
          <div className="font-size-lg text-accent pt-2">
            {item.currency}{calculatePrice(item.price).dollar}.<small>{calculatePrice(item.price).cent}</small>
          </div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-right" style={{maxWidth: '9rem'}}>
        <p className="mb-0"><span
          className="text-muted font-size-sm">Quantity:</span><span>&nbsp;{item.quantity}</span></p>
        <button className="btn btn-link px-0" type="button" onClick={() => navigate("/cart")}><i
          className="czi-edit mr-2"/><span
          className="font-size-sm">Edit</span></button>
      </div>
    </div>))}
    {/* Client details*/}
    <div className="bg-secondary rounded-lg px-4 pt-4 pb-2">
      <div className="row">
        <div className="col-sm-6">
          <h4 className="h6">Shipping to:</h4>
          <ul className="list-unstyled font-size-sm">
            <li><span className="text-muted">Client:&nbsp;</span>{customer.firstName + " " + customer.lastName}</li>
            <li><span className="text-muted">Address:&nbsp;</span>{customer.address}</li>
            <li><span className="text-muted">Phone:&nbsp;</span>{customer.phone}</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h4 className="h6">Payment method:</h4>
          <ul className="list-unstyled font-size-sm">
            <li><span className="text-muted">Credit Card:&nbsp;</span>**** ****
              **** {payment.creditCardNumber?.substring(12, 16)}</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Navigation (desktop)*/}
    <div className="d-lg-flex d-sm-inline-flex pt-4">
      <div className="w-50 pr-3">
        <Link className="btn btn-secondary btn-block" to=""
              onClick={() => setStep(prev => prev - 1)}>
          <i className="czi-arrow-left mt-sm-0 mr-1"/>
          <span className="d-none d-sm-inline">
          Back to Payment</span>
          <span className="d-inline d-sm-none">
        Back
        </span>
        </Link>
      </div>
      <div className="w-50 pl-2">
        <button className="btn btn-primary btn-block"
                onClick={submitHandler}>
        <span className="d-none d-sm-inline">
          Complete order
        </span>
          <span className="d-inline d-sm-none">
          Complete
        </span>
          <i className="czi-arrow-right mt-sm-0 ml-1"/>
        </button>
      </div>
    </div>
  </React.Fragment>);
};

export default Review;