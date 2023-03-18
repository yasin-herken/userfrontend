import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useStateMachine} from "little-state-machine";
import updateAction from "../../updateAction";

const schema = yup.object().shape({
  courier: yup.string().oneOf(["on", null]),
})

const Shipping = ({setStep}) => {
  const {actions, state} = useStateMachine({updateAction});

  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });
  const submitHandler = (e) => {
    actions.updateAction({
      ...state,
      shipping: {
        ...e
      }
    });
    setStep(prev => prev + 1);
  }
  return (<form className={"needs-validation"} onSubmit={handleSubmit(submitHandler)} noValidate>
    <h2 className="h6 pb-3 mb-2">Choose shipping method</h2>
    <div className="table-responsive">
      <table className="table table-hover font-size-sm border-bottom">
        <thead>
        <tr>
          <th className="align-middle"/>
          <th className="align-middle">Shipping method</th>
          <th className="align-middle">Delivery time</th>
          <th className="align-middle">Handling fee</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div className="custom-control custom-radio mb-4">
              <input
                className="custom-control-input"
                {...register("courier")}
                type="radio"
                id="courier"
                name="courier"
                defaultChecked
              />
              <label className="custom-control-label" htmlFor="courier"/>
            </div>
          </td>
          <td className="align-middle"><span className="text-dark font-weight-medium">Courier</span><br/><span
            className="text-muted">All addresses (default zone), United States &amp; Canada</span></td>
          <td className="align-middle">2 - 4 days</td>
          <td className="align-middle">$26.50</td>
        </tr>
        </tbody>
      </table>
    </div>
    {/* Navigation (desktop)*/}
    <div className="d-none d-lg-flex pt-4">
      <div className="w-50 pr-3">
        <button className="btn btn-secondary btn-block" onClick={() => setStep(prev => prev - 1)}>
          <i
            className="czi-arrow-left mt-sm-0 mr-1"/>
          <span className="d-none d-sm-inline">
                  Back to Adresses
                  </span>
          <span className="d-inline d-sm-none">
                  Back
                  </span>
        </button>
      </div>
      <div className="w-50 pl-2">
        <button className="btn btn-primary btn-block" type={"submit"}>
                  <span className="d-none d-sm-inline">
                  Proceed to Payment
                  </span>
          <span className="d-inline d-sm-none">
                  Next
                  </span>
          <i className="czi-arrow-right mt-sm-0 ml-1"/>
        </button>
      </div>
    </div>
  </form>);
};

export default Shipping;