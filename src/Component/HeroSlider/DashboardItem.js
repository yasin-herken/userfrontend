import React from "react";

const DashboardItem = ({
  img,
  subtitle,
  title,
  text,
  btn,
  btnLink,
  btnIcon,
}) => {
  return (
    <React.Fragment>
      {/* Item*/}
      <div className="px-lg-5" style={{ backgroundColor: "#f5b1b0" }} >
        <div className="d-lg-flex justify-content-between align-items-center pl-lg-4">
          <img
            className="d-block order-lg-2 mr-lg-n5 flex-shrink-0"
            src={img}
            alt={title}
          />
          <div
            className="position-relative mx-auto mr-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
            style={{ maxWidth: "42rem", zIndex: 10 }}
          >
            <div className="pb-lg-5 mb-lg-5 text-center text-lg-left text-lg-nowrap">
              <h2 className="text-light font-weight-light pb-1 from-bottom">
                {subtitle}
              </h2>
              <h1 className="text-light display-4 from-bottom delay-1">
                {title}
              </h1>
              <p className="font-size-lg text-light pb-3 from-bottom delay-2">
                {text}
              </p>
              <a className="btn btn-primary scale-up delay-4" href={btnLink}>
                {btn}
                <i className={`${btnIcon} ml-2 mr-n1`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardItem;
