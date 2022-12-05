import React from "react";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="py-sm-2">
        <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden mb-4 rounded-lg">
          <div className="py-4 my-2 my-md-0 py-md-5 px-4 ml-md-3 text-center text-sm-left">
            <h4 className="font-size-lg font-weight-light mb-2">
              Converse All Star
            </h4>
            <h3 className="mb-4">Make Your Day Comfortable</h3>
            <a className="btn btn-primary btn-shadow btn-sm" href="#">
              Shop Now
            </a>
          </div>
          <img
            className="d-block ml-auto"
            src="img/shop/catalog/banner.jpg"
            alt="Shop Converse"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
