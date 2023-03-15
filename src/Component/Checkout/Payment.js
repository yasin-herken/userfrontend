import React from 'react';
import {Link} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import valid from 'card-validator';
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";

const schema = yup.object().shape({
  creditCardNumber: yup.string()
    .test('test-number', // this is used internally by yup
      'Credit Card number is invalid', //validation message
      value => valid.number(value).isValid) // return true false based on validation
    .required(), creditCardName: yup.string()
    .required("Full name is required"), creditCardExpiry: yup.string()
    .test('test-expiry', // this is used internally by yup
      'Expiry date is invalid', //validation message
      value => valid.expirationDate(value).isValid)// return true false based on validation
    .required(), creditCardCvv: yup.string()
    .test('test-cvv', // this is used internally by yup
      'CVV is invalid', //validation message
      value => valid.cvv(value).isValid)// return true false based on validation
    .required(),
})
const Payment = ({setStep}) => {

  const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm({
    mode: 'onChange', resolver: yupResolver(schema),
  })
  const {actions, state} = useStateMachine({updateAction});

  const {payment} = state;
  const submitHandler = (data) => {
    actions.updateAction({
      ...state, payment: {
        ...data
      }
    });
    setStep(prev => prev + 1);
  }

  return (<React.Fragment>
    <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
    <div className="accordion mb-2" id="payment-method" role="tablist">
      <div className="card">
        <div className="card-header" role="tab">
          <h3 className="accordion-heading"><a href="#card" data-toggle="collapse"><i
            className="czi-card font-size-lg mr-2 mt-n1 align-middle"/>Pay with Credit Card<span
            className="accordion-indicator"><i data-feather="chevron-up"/></span></a></h3>
        </div>
        <div className="collapse show" id="card" data-parent="#payment-method" role="tabpanel">
          <div className="card-body">
            <div className="card-wrapper"/>
            <form className="interactive-credit-card row">
              <div className="form-group col-sm-6">
                <input
                  className={`form-control ${errors.creditCardNumber ? 'is-invalid' : ''}`}
                  type="text"
                  name="creditCardNumber"
                  placeholder="Card Number"
                  defaultValue={payment.creditCardNumber}
                  {...register("creditCardNumber")}
                />
                {errors.creditCardNumber && <div className="invalid-feedback">{errors.creditCardNumber.message}</div>}
              </div>
              <div className="form-group col-sm-6">
                <input
                  className={`form-control ${errors.creditCardName ? 'is-invalid' : ''}`}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  defaultValue={payment.creditCardName}
                  {...register("creditCardName")}
                />
                {errors.creditCardName && <div className="invalid-feedback">{errors.creditCardName.message}</div>}
              </div>
              <div className="form-group col-sm-3">
                <input
                  className={`form-control ${errors.creditCardExpiry ? 'is-invalid' : ''}`}
                  type="text"
                  name="creditCardExpiry"
                  placeholder="MM/YY"
                  defaultValue={payment.creditCardExpiry}
                  {...register("creditCardExpiry")}
                />
              </div>
              <div className="form-group col-sm-3">
                <input
                  className={`form-control ${errors.creditCardCvv ? 'is-invalid' : ''}`}
                  type="text"
                  name="creditCardCvv"
                  placeholder="CVC"
                  defaultValue={payment.creditCardCvv}
                  {...register("creditCardCvv")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Navigation (desktop)*/}
    <div className="d-none d-lg-flex pt-4">
      <div className="w-50 pr-3">
        <Link className="btn btn-secondary btn-block" to={""} onClick={() => setStep(prev => prev - 1)}>
          <i className="czi-arrow-left mt-sm-0 mr-1"/>
          <span className="d-none d-sm-inline">
              Back to Shipping
            </span>
          <span className="d-inline d-sm-none">
              Back
            </span>
        </Link>
      </div>
      <div className="w-50 pl-2">
        <button className="btn btn-primary btn-block" onClick={handleSubmit(submitHandler)}
                disabled={!isValid}>
            <span className="d-none d-sm-inline">
              Review your order
            </span>
          <span className="d-inline d-sm-none">
              Review order
            </span>
          <i className="czi-arrow-right mt-sm-0 ml-1"/>
        </button>
      </div>
    </div>
  </React.Fragment>);
};

export default Payment;