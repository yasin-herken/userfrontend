import React from 'react';
import Stepper, {Step, StepBody, StepHeader} from "../../Context/Stepper";
import Detail from "../../Component/Checkout/Detail";
import Shipping from "../../Component/Checkout/Shipping";
import Payment from "../../Component/Checkout/Payment";
import Review from "../../Component/Checkout/Review";
import {useSelector} from "react-redux";
import {selectCart} from "../../Features/Cart/cartSlice";
import {calculatePrice, getTotal} from "../../Utility/Utility";
import {Link} from "react-router-dom";
import {createStore, StateMachineProvider} from "little-state-machine";

createStore({
  customer: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  shipping: {
    courier: "on",
  },
  payment: {
    creditCardNumber: "",
    creditCardName: "",
    creditCardExpiry: "",
    creditCardCvv: "",
  },
})
const Checkout = () => {
  const cart = useSelector(selectCart);
  const [step, setStep] = React.useState(1);

  const steps = React.useMemo(() => {
    return [{
      label: "Cart", body: <></>, image: "czi-cart"
    }, {
      label: "Details", body: <Detail setStep={setStep}/>, image: "czi-user-circle"
    }, {
      label: "Shipping", body: <Shipping setStep={setStep}/>, image: "czi-package"
    }, {
      label: "Payment", body: <Payment setStep={setStep}/>, image: "czi-card"
    }, {
      label: "Review", body: <Review setStep={setStep}/>, image: "czi-check-circle"
    }]
  }, [])
  const totalPrice = calculatePrice(getTotal(cart).totalPrice);
  return (<React.Fragment>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="czi-home"/>Home</a>
                </li>
                <li className="breadcrumb-item text-nowrap"><a href="shop-grid-ls.html">Shop</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-0">Checkout</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <section className="col-lg-8">
            <StateMachineProvider>
              <Stepper activeStep={step} setActiveStep={setStep}>
                <StepHeader>
                  {steps?.map((step) => {
                    return <Step key={step.id} label={step.label} image={step.image}>
                      <StepBody>
                        {step.body}
                      </StepBody>
                    </Step>
                  })}
                </StepHeader>
              </Stepper>
            </StateMachineProvider>
          </section>
          {/* Sidebar*/}
          <aside className="col-lg-4 pt-4 pt-lg-0">
            <div className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
              <div className="widget mb-3">
                <h2 className="widget-title text-center">Order summary</h2>
                {cart?.map((item) => {
                  const calculatedPrice = calculatePrice(item.price);
                  return <div className="media align-items-center pb-2 border-bottom">
                    <Link className="d-block mr-2" to={"/shop/product/" + item.id}>
                      <img width={64} src={item.image} alt="Product"/>
                    </Link>
                    <div className="media-body">
                      <h6 className="widget-product-title">
                        <Link to={"/shop/product/" + item.id}>{item.title}</Link>
                      </h6>
                      <div className="widget-product-meta"><span
                        className="text-accent mr-2">${calculatedPrice.dollar}.
                      <small>{calculatedPrice.cent}</small>
                    </span>
                        <span className="text-muted">x {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                })}
              </div>
              <ul className="list-unstyled font-size-sm pb-2 border-bottom">
                <li className="d-flex justify-content-between align-items-center"><span
                  className="mr-2">Subtotal:</span>
                  <span className="text-right">${totalPrice.dollar}.
                    <small>{totalPrice.cent}</small>
                  </span>
                </li>
              </ul>
              <h3 className="font-weight-normal text-center my-4">${totalPrice.dollar}.
                <small>{totalPrice.cent}</small>
              </h3>
              <form className="needs-validation" method="post" noValidate>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Promo code" required/>
                  <div className="invalid-feedback">Please provide promo code.</div>
                </div>
                <button className="btn btn-outline-primary btn-block" type="submit">Apply promo code</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </React.Fragment>

  );
};

export default Checkout;