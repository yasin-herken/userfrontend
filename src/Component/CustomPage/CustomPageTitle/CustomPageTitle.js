import React from "react";
import { capitalizeFirstLetter } from "../../../Utility/Utility";
import {Link} from "react-router-dom";

const CustomPageTitle = ({ product }) => {
  return (
    <React.Fragment>
      {/* Custom page title*/}
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to="/">
                    <i className="czi-home" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <Link to="#">Shop</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  {capitalizeFirstLetter(product?.category?.name)}
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 text-light mb-2">{product?.title}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomPageTitle;
