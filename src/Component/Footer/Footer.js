import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      {/* Footer*/}
      <footer className="bg-dark pt-5">
        <div className="container">
          <div className="row pb-2">
            <div className="col-md-4 col-sm-6">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Shop departments</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Sneakers &amp; Athletic
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Athletic Apparel
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Sandals
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Jeans
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Shirts &amp; Tops
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Shorts
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      T-Shirts
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Swimwear
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Clogs &amp; Mules
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Bags &amp; Wallets
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Accessories
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Sunglasses &amp; Eyewear
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Watches
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">
                  Account &amp; shipping info
                </h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Your account
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Shipping rates &amp; policies
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Refunds &amp; replacements
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Order tracking
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Delivery info
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Taxes &amp; fees
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">About us</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      About company
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Our team
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget pb-2 mb-4">
                <h3 className="widget-title text-light pb-1">Stay informed</h3>
                <form
                  className="validate"
                  action="https://studio.us12.list-manage.com/subscribe/post-json?u=c7103e2c981361a6639545bd5&amp;id=29ca296126&c=?"
                  method="get"
                  name="mc-embedded-subscribe-form"
                  id="mc-embedded-subscribe-form"
                >
                  <div className="input-group input-group-overlay flex-nowrap">
                    <div className="input-group-prepend-overlay">
                      <span className="input-group-text text-muted font-size-base">
                        <i className="czi-mail" />
                      </span>
                    </div>
                    <input
                      className="form-control prepended-form-control"
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      defaultValue
                      placeholder="Your email"
                      required
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                      >
                        Subscribe*
                      </button>
                    </div>
                  </div>
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_c7103e2c981361a6639545bd5_29ca296126"
                      tabIndex={-1}
                    />
                  </div>
                  <small
                    className="form-text text-light opacity-50"
                    id="mc-helper"
                  >
                    *Subscribe to our newsletter to receive early discount
                    offers, updates and new products info.
                  </small>
                  <div className="subscribe-status" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
