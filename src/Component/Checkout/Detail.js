import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "../InputFields/InputText";
import InputSelect from "../InputFields/InputSelect";
import {countries} from "../../Constants/Constants";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  company: yup.string().required("Company name is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  zip: yup.string().required("Zip code is required"),
})

const Detail = ({setStep}) => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
  });
  const {actions, state} = useStateMachine({updateAction});

  const {customer} = state;
  const submitHandler = (data) => {
    actions.updateAction({
      ...state,
      customer: {
        ...data
      }
    });
    setStep(prev => prev + 1);
  }

  return (<>
    <form className={"needs-validation"} onSubmit={handleSubmit(submitHandler)} noValidate>
      <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>
      <div className="row">
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.firstName}
            name="firstName"
            id="checkout-fn"
            label="First Name"
            error={errors["firstName"]?.message ? errors.firstName.message : null}
            register={register}/>
        </div>
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.lastName}
            name="lastName"
            id="checkout-ln"
            label="Last Name"
            error={errors["lastName"]?.message ? errors.lastName.message : null}
            register={register}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.email}
            name="email"
            type={"email"}
            id="checkout-email"
            label="E-mail Address"
            error={errors["email"]?.message ? errors.email.message : null}
            register={register}
          />
        </div>
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.phone}
            name="phone"
            id="checkout-phone"
            label="Phone Number"
            error={errors["phone"]?.message ? errors.phone.message : null}
            register={register}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.company}
            name="company"
            id="checkout-company"
            label="Company"
            error={errors["company"]?.message ? errors.company.message : null}
            register={register}
          />
        </div>
        <div className="col-sm-6">
          <InputSelect
            defaultValue={customer.country}
            options={countries}
            label="Country"
            id="checkout-country"
            name={"country"}
            error={errors["country"]?.message ? errors.country.message : null}
            register={register}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputSelect
            defaultValue={customer.city}
            options={countries}
            label="City"
            id="checkout-city"
            error={errors["city"]?.message ? errors.city.message : null}
            name={"city"}
            register={register}
          />
        </div>
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.zip}
            name="zip"
            id="checkout-zip"
            label="ZIP Code"
            error={errors["zip"]?.message ? errors.zip.message : null}
            register={register}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputText
            defaultValue={customer.address}
            name="address"
            id="checkout-address"
            label="Address"
            error={errors["address"]?.message ? errors.address.message : null}
            register={register}
          />
        </div>
      </div>
      <div className="d-none d-lg-flex pt-4 mt-3">
        <div className="w-50 pr-3">
          <Link className="btn btn-secondary btn-block" to="/cart">
            <i className="czi-arrow-left mt-sm-0 mr-1"/>
            <span className="d-none d-sm-inline">
            Back to Cart
          </span>
            <span className="d-inline d-sm-none">
            Back
          </span>
          </Link>
        </div>
        <div className="w-50 pl-2">
          <button type="submit" className="btn btn-primary btn-block" disabled={!isValid}>
            <span className="d-none d-sm-inline">Proceed to Shipping</span>
            <span className="d-inline d-sm-none">
            Next
          </span>
            <i className="czi-arrow-right mt-sm-0 ml-1"/>
          </button>
        </div>
      </div>
    </form>
  </>);
};

export default Detail;