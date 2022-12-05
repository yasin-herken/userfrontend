import React from "react";

const CustomContainer = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="bg-light box-shadow-lg rounded-lg">
          {/* Tabs*/}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link p-4 active"
                href="#general"
                data-toggle="tab"
                role="tab"
              >
                General Info
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4"
                href="#specs"
                data-toggle="tab"
                role="tab"
              >
                Tech Specs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4"
                href="#reviews"
                data-toggle="tab"
                role="tab"
              >
                Reviews <span className="font-size-sm opacity-60">(74)</span>
              </a>
            </li>
          </ul>
          <div className="px-4 pt-lg-3 pb-3 mb-5">
            <div className="tab-content px-lg-3">
              {/* General info tab*/}
              <div
                className="tab-pane fade show active"
                id="general"
                role="tabpanel"
              >
                <div className="row">
                  {/* Product gallery*/}
                  <div className="col-lg-7 pr-lg-0">
                    <div className="cz-product-gallery">
                      <div className="cz-preview order-sm-2">
                        <div className="cz-preview-item active" id="first">
                          <img
                            className="cz-image-zoom"
                            src="assets/img/shop/single/gallery/05.jpg"
                            data-zoom="assets/img/shop/single/gallery/05.jpg"
                            alt="Product image"
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="second">
                          <img
                            className="cz-image-zoom"
                            src="assets/img/shop/single/gallery/06.jpg"
                            data-zoom="assets/img/shop/single/gallery/06.jpg"
                            alt="Product image"
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="third">
                          <img
                            className="cz-image-zoom"
                            src="assets/img/shop/single/gallery/07.jpg"
                            data-zoom="assets/img/shop/single/gallery/07.jpg"
                            alt="Product image"
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="fourth">
                          <img
                            className="cz-image-zoom"
                            src="assets/img/shop/single/gallery/08.jpg"
                            data-zoom="assets/img/shop/single/gallery/08.jpg"
                            alt="Product image"
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                      </div>
                      <div className="cz-thumblist order-sm-1">
                        <a className="cz-thumblist-item active" href="#first">
                          <img
                            src="assets/img/shop/single/gallery/th05.jpg"
                            alt="Product thumb"
                          />
                        </a>
                        <a className="cz-thumblist-item" href="#second">
                          <img
                            src="assets/img/shop/single/gallery/th06.jpg"
                            alt="Product thumb"
                          />
                        </a>
                        <a className="cz-thumblist-item" href="#third">
                          <img
                            src="assets/img/shop/single/gallery/th07.jpg"
                            alt="Product thumb"
                          />
                        </a>
                        <a className="cz-thumblist-item" href="#fourth">
                          <img
                            src="assets/img/shop/single/gallery/th08.jpg"
                            alt="Product thumb"
                          />
                        </a>
                        <a
                          className="cz-thumblist-item video-item"
                          href="https://www.youtube.com/watch?v=nrQevwouWn0"
                        >
                          <div className="cz-thumblist-item-text">
                            <i className="czi-video" />
                            Video
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Product details*/}
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <div className="product-details ml-auto pb-3">
                      <div className="h3 font-weight-normal text-accent mb-3 mr-1">
                        $124.<small>99</small>
                      </div>
                      <div className="font-size-sm mb-4">
                        <span className="text-heading font-weight-medium mr-1">
                          Color:
                        </span>
                        <span className="text-muted">Dark blue/Orange</span>
                      </div>
                      <div className="position-relative mr-n4 mb-3">
                        <div className="custom-control custom-option custom-control-inline mb-2">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="color"
                            id="color1"
                            defaultChecked
                          />
                          <label
                            className="custom-option-label rounded-circle"
                            htmlFor="color1"
                          >
                            <span
                              className="custom-option-color rounded-circle"
                              style={{ backgroundColor: "#f25540" }}
                            />
                          </label>
                        </div>
                        <div className="custom-control custom-option custom-control-inline mb-2">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="color"
                            id="color2"
                          />
                          <label
                            className="custom-option-label rounded-circle"
                            htmlFor="color2"
                          >
                            <span
                              className="custom-option-color rounded-circle"
                              style={{ backgroundColor: "#65805b" }}
                            />
                          </label>
                        </div>
                        <div className="custom-control custom-option custom-control-inline mb-2">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="color"
                            id="color3"
                          />
                          <label
                            className="custom-option-label rounded-circle"
                            htmlFor="color3"
                          >
                            <span
                              className="custom-option-color rounded-circle"
                              style={{ backgroundColor: "#f5f5f5" }}
                            />
                          </label>
                        </div>
                        <div className="custom-control custom-option custom-control-inline mb-2">
                          <input
                            className="custom-control-input"
                            type="radio"
                            name="color"
                            id="color4"
                          />
                          <label
                            className="custom-option-label rounded-circle"
                            htmlFor="color4"
                          >
                            <span
                              className="custom-option-color rounded-circle"
                              style={{ backgroundColor: "#333" }}
                            />
                          </label>
                        </div>
                        <div className="product-badge product-available mt-n1">
                          <i className="czi-security-check" />
                          Product available
                        </div>
                      </div>
                      <div className="d-flex align-items-center pt-2 pb-4">
                        <select
                          className="custom-select mr-3"
                          style={{ width: "5rem" }}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <button
                          className="btn btn-primary btn-shadow btn-block"
                          type="button"
                        >
                          <i className="czi-cart font-size-lg mr-2" />
                          Add to Cart
                        </button>
                      </div>
                      <div className="d-flex mb-4">
                        <div className="w-100 mr-3">
                          <button
                            className="btn btn-secondary btn-block"
                            type="button"
                          >
                            <i className="czi-heart font-size-lg mr-2" />
                            <span className="d-none d-sm-inline">Add to </span>
                            Wishlist
                          </button>
                        </div>
                        <div className="w-100">
                          <button
                            className="btn btn-secondary btn-block"
                            type="button"
                          >
                            <i className="czi-compare font-size-lg mr-2" />
                            Compare
                          </button>
                        </div>
                      </div>
                      {/* Product panels*/}
                      <div className="accordion mb-4" id="productPanels">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="accordion-heading">
                              <a
                                href="#shippingOptions"
                                role="button"
                                data-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="shippingOptions"
                              >
                                <i className="czi-delivery text-muted lead align-middle mt-n1 mr-2" />
                                Shipping options
                                <span className="accordion-indicator">
                                  <i data-feather="chevron-up" />
                                </span>
                              </a>
                            </h3>
                          </div>
                          <div
                            className="collapse show"
                            id="shippingOptions"
                            data-parent="#productPanels"
                          >
                            <div className="card-body font-size-sm">
                              <div className="d-flex justify-content-between border-bottom pb-2">
                                <div>
                                  <div className="font-weight-semibold text-dark">
                                    Local courier shipping
                                  </div>
                                  <div className="font-size-sm text-muted">
                                    2 - 4 days
                                  </div>
                                </div>
                                <div>$16.50</div>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2">
                                <div>
                                  <div className="font-weight-semibold text-dark">
                                    UPS ground shipping
                                  </div>
                                  <div className="font-size-sm text-muted">
                                    4 - 6 days
                                  </div>
                                </div>
                                <div>$19.00</div>
                              </div>
                              <div className="d-flex justify-content-between pt-2">
                                <div>
                                  <div className="font-weight-semibold text-dark">
                                    Local pickup from store
                                  </div>
                                  <div className="font-size-sm text-muted">
                                    —
                                  </div>
                                </div>
                                <div>$0.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h3 className="accordion-heading">
                              <a
                                className="collapsed"
                                href="#localStore"
                                role="button"
                                data-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="localStore"
                              >
                                <i className="czi-location text-muted font-size-lg align-middle mt-n1 mr-2" />
                                Find in local store
                                <span className="accordion-indicator">
                                  <i data-feather="chevron-up" />
                                </span>
                              </a>
                            </h3>
                          </div>
                          <div
                            className="collapse"
                            id="localStore"
                            data-parent="#productPanels"
                          >
                            <div className="card-body">
                              <select className="custom-select">
                                <option value>Select your country</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Belgium">Belgium</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Spain">Spain</option>
                                <option value="UK">United Kingdom</option>
                                <option value="USA">USA</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Sharing*/}
                      <h6 className="d-inline-block align-middle font-size-base my-2 mr-2">
                        Share:
                      </h6>
                      <a className="share-btn sb-twitter mr-2 my-2" href="#">
                        <i className="czi-twitter" />
                        Twitter
                      </a>
                      <a className="share-btn sb-instagram mr-2 my-2" href="#">
                        <i className="czi-instagram" />
                        Instagram
                      </a>
                      <a className="share-btn sb-facebook my-2" href="#">
                        <i className="czi-facebook" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tech specs tab*/}
              <div className="tab-pane fade" id="specs" role="tabpanel">
                <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                  <div className="media align-items-center mr-md-3">
                    <img
                      src="assets/img/shop/single/gallery/th05.jpg"
                      width={90}
                      alt="Product thumb"
                    />
                    <div className="mdeia-body pl-3">
                      <h6 className="font-size-base mb-2">
                        Smartwatch Youth Edition
                      </h6>
                      <div className="h4 font-weight-normal text-accent">
                        $124.<small>99</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-3">
                    <select
                      className="custom-select mr-2"
                      style={{ width: "5rem" }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    <button
                      className="btn btn-primary btn-shadow mr-2"
                      type="button"
                    >
                      <i className="czi-cart font-size-lg mr-sm-2" />
                      <span className="d-none d-sm-inline">Add to Cart</span>
                    </button>
                    <div className="mr-2">
                      <button
                        className="btn btn-secondary btn-icon"
                        type="button"
                        data-toggle="tooltip"
                        title="Add to Wishlist"
                      >
                        <i className="czi-heart font-size-lg" />
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-secondary btn-icon"
                        type="button"
                        data-toggle="tooltip"
                        title="Compare"
                      >
                        <i className="czi-compare font-size-lg" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Specs table*/}
                <div className="row pt-2">
                  <div className="col-lg-5 col-sm-6">
                    <h3 className="h6">General specs</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Model:</span>
                        <span>Amazfit Smartwatch</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Gender:</span>
                        <span>Unisex</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Smartphone app:</span>
                        <span>Amazfit Watch</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">OS campitibility:</span>
                        <span>Android / iOS</span>
                      </li>
                    </ul>
                    <h3 className="h6">Physical specs</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Shape:</span>
                        <span>Rectangular</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Body material:</span>
                        <span>Plastics / Ceramics</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Band material:</span>
                        <span>Silicone</span>
                      </li>
                    </ul>
                    <h3 className="h6">Display</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Display type:</span>
                        <span>Color</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Display size:</span>
                        <span>1.28"</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Screen resolution:</span>
                        <span>176 x 176</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Touch screen:</span>
                        <span>No</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-sm-6 offset-lg-1">
                    <h3 className="h6">Functions</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Phone calls:</span>
                        <span>Incoming call notification</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Monitoring:</span>
                        <span>Heart rate / Physical activity</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">GPS support:</span>
                        <span>Yes</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Sensors:</span>
                        <span>
                          Heart rate, Gyroscope, Geomagnetic, Light sensor
                        </span>
                      </li>
                    </ul>
                    <h3 className="h6">Battery</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Battery:</span>
                        <span>Li-Pol</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Battery capacity:</span>
                        <span>190 mAh</span>
                      </li>
                    </ul>
                    <h3 className="h6">Dimensions</h3>
                    <ul className="list-unstyled font-size-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Dimensions:</span>
                        <span>195 x 20 mm</span>
                      </li>
                      <li className="d-flex justify-content-between pb-2 border-bottom">
                        <span className="text-muted">Weight:</span>
                        <span>32 g</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Reviews tab*/}
              <div className="tab-pane fade" id="reviews" role="tabpanel">
                <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                  <div className="media align-items-center mr-md-3">
                    <img
                      src="assets/img/shop/single/gallery/th05.jpg"
                      width={90}
                      alt="Product thumb"
                    />
                    <div className="mdeia-body pl-3">
                      <h6 className="font-size-base mb-2">
                        Smartwatch Youth Edition
                      </h6>
                      <div className="h4 font-weight-normal text-accent">
                        $124.<small>99</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-3">
                    <select
                      className="custom-select mr-2"
                      style={{ width: "5rem" }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    <button
                      className="btn btn-primary btn-shadow mr-2"
                      type="button"
                    >
                      <i className="czi-cart font-size-lg mr-sm-2" />
                      <span className="d-none d-sm-inline">Add to Cart</span>
                    </button>
                    <div className="mr-2">
                      <button
                        className="btn btn-secondary btn-icon"
                        type="button"
                        data-toggle="tooltip"
                        title="Add to Wishlist"
                      >
                        <i className="czi-heart font-size-lg" />
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-secondary btn-icon"
                        type="button"
                        data-toggle="tooltip"
                        title="Compare"
                      >
                        <i className="czi-compare font-size-lg" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Reviews*/}
                <div className="row pt-2 pb-3">
                  <div className="col-lg-4 col-md-5">
                    <h2 className="h3 mb-4">74 Reviews</h2>
                    <div className="star-rating mr-2">
                      <i className="czi-star-filled font-size-sm text-accent mr-1" />
                      <i className="czi-star-filled font-size-sm text-accent mr-1" />
                      <i className="czi-star-filled font-size-sm text-accent mr-1" />
                      <i className="czi-star-filled font-size-sm text-accent mr-1" />
                      <i className="czi-star font-size-sm text-muted mr-1" />
                    </div>
                    <span className="d-inline-block align-middle">
                      4.1 Overall rating
                    </span>
                    <p className="pt-3 font-size-sm text-muted">
                      58 out of 74 (77%)
                      <br />
                      Customers recommended this product
                    </p>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-nowrap mr-3">
                        <span className="d-inline-block align-middle text-muted">
                          5
                        </span>
                        <i className="czi-star-filled font-size-xs ml-1" />
                      </div>
                      <div className="w-100">
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <span className="text-muted ml-3">43</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-nowrap mr-3">
                        <span className="d-inline-block align-middle text-muted">
                          4
                        </span>
                        <i className="czi-star-filled font-size-xs ml-1" />
                      </div>
                      <div className="w-100">
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "27%", backgroundColor: "#a7e453" }}
                            aria-valuenow={27}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <span className="text-muted ml-3">16</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-nowrap mr-3">
                        <span className="d-inline-block align-middle text-muted">
                          3
                        </span>
                        <i className="czi-star-filled font-size-xs ml-1" />
                      </div>
                      <div className="w-100">
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "17%", backgroundColor: "#ffda75" }}
                            aria-valuenow={17}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <span className="text-muted ml-3">9</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-nowrap mr-3">
                        <span className="d-inline-block align-middle text-muted">
                          2
                        </span>
                        <i className="czi-star-filled font-size-xs ml-1" />
                      </div>
                      <div className="w-100">
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "9%", backgroundColor: "#fea569" }}
                            aria-valuenow={9}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <span className="text-muted ml-3">4</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="text-nowrap mr-3">
                        <span className="d-inline-block align-middle text-muted">
                          1
                        </span>
                        <i className="czi-star-filled font-size-xs ml-1" />
                      </div>
                      <div className="w-100">
                        <div className="progress" style={{ height: "4px" }}>
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "4%" }}
                            aria-valuenow={4}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <span className="text-muted ml-3">2</span>
                    </div>
                  </div>
                </div>
                <hr className="mt-4 pb-4 mb-3" />
                <div className="row pb-4">
                  {/* Reviews list*/}
                  <div className="col-md-7">
                    <div className="d-flex justify-content-end pb-4">
                      <div className="form-inline flex-nowrap">
                        <label
                          className="text-muted text-nowrap mr-2 d-none d-sm-block"
                          htmlFor="sort-reviews"
                        >
                          Sort by:
                        </label>
                        <select
                          className="custom-select custom-select-sm"
                          id="sort-reviews"
                        >
                          <option>Newest</option>
                          <option>Oldest</option>
                          <option>Popular</option>
                          <option>High rating</option>
                          <option>Low rating</option>
                        </select>
                      </div>
                    </div>
                    {/* Review*/}
                    <div className="product-review pb-4 mb-4 border-bottom">
                      <div className="d-flex mb-3">
                        <div className="media media-ie-fix align-items-center mr-4 pr-2">
                          <img
                            className="rounded-circle"
                            width={50}
                            src="assets/img/shop/reviews/01.jpg"
                            alt="Rafael Marquez"
                          />
                          <div className="media-body pl-3">
                            <h6 className="font-size-sm mb-0">
                              Rafael Marquez
                            </h6>
                            <span className="font-size-ms text-muted">
                              June 28, 2019
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="star-rating">
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star" />
                          </div>
                          <div className="font-size-ms text-muted">
                            83% of users found this review helpful
                          </div>
                        </div>
                      </div>
                      <p className="font-size-md mb-2">
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est...
                      </p>
                      <ul className="list-unstyled font-size-ms pt-1">
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Pros:&nbsp;
                          </span>
                          Consequuntur magni, voluptatem sequi, tempora
                        </li>
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Cons:&nbsp;
                          </span>
                          Architecto beatae, quis autem
                        </li>
                      </ul>
                      <div className="text-nowrap">
                        <button className="btn-like" type="button">
                          15
                        </button>
                        <button className="btn-dislike" type="button">
                          3
                        </button>
                      </div>
                    </div>
                    {/* Review*/}
                    <div className="product-review pb-4 mb-4 border-bottom">
                      <div className="d-flex mb-3">
                        <div className="media media-ie-fix align-items-center mr-4 pr-2">
                          <img
                            className="rounded-circle"
                            width={50}
                            src="assets/img/shop/reviews/02.jpg"
                            alt="Barbara Palson"
                          />
                          <div className="media-body pl-3">
                            <h6 className="font-size-sm mb-0">
                              Barbara Palson
                            </h6>
                            <span className="font-size-ms text-muted">
                              May 17, 2019
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="star-rating">
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                          </div>
                          <div className="font-size-ms text-muted">
                            99% of users found this review helpful
                          </div>
                        </div>
                      </div>
                      <p className="font-size-md mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <ul className="list-unstyled font-size-ms pt-1">
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Pros:&nbsp;
                          </span>
                          Consequuntur magni, voluptatem sequi, tempora
                        </li>
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Cons:&nbsp;
                          </span>
                          Architecto beatae, quis autem
                        </li>
                      </ul>
                      <div className="text-nowrap">
                        <button className="btn-like" type="button">
                          34
                        </button>
                        <button className="btn-dislike" type="button">
                          1
                        </button>
                      </div>
                    </div>
                    {/* Review*/}
                    <div className="product-review pb-4 mb-4 border-bottom">
                      <div className="d-flex mb-3">
                        <div className="media media-ie-fix align-items-center mr-4 pr-2">
                          <img
                            className="rounded-circle"
                            width={50}
                            src="assets/img/shop/reviews/03.jpg"
                            alt="Daniel Adams"
                          />
                          <div className="media-body pl-3">
                            <h6 className="font-size-sm mb-0">Daniel Adams</h6>
                            <span className="font-size-ms text-muted">
                              May 8, 2019
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="star-rating">
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star-filled active" />
                            <i className="sr-star czi-star" />
                            <i className="sr-star czi-star" />
                          </div>
                          <div className="font-size-ms text-muted">
                            75% of users found this review helpful
                          </div>
                        </div>
                      </div>
                      <p className="font-size-md mb-2">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem.
                      </p>
                      <ul className="list-unstyled font-size-ms pt-1">
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Pros:&nbsp;
                          </span>
                          Consequuntur magni, voluptatem sequi
                        </li>
                        <li className="mb-1">
                          <span className="font-weight-medium">
                            Cons:&nbsp;
                          </span>
                          Architecto beatae, quis autem, voluptatem sequ
                        </li>
                      </ul>
                      <div className="text-nowrap">
                        <button className="btn-like" type="button">
                          26
                        </button>
                        <button className="btn-dislike" type="button">
                          9
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-outline-accent" type="button">
                        <i className="czi-reload mr-2" />
                        Load more reviews
                      </button>
                    </div>
                  </div>
                  {/* Leave review form*/}
                  <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
                    <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-lg">
                      <h3 className="h4 pb-2">Write a review</h3>
                      <form
                        className="needs-validation"
                        method="post"
                        noValidate
                      >
                        <div className="form-group">
                          <label htmlFor="review-name">
                            Your name<span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            id="review-name"
                          />
                          <div className="invalid-feedback">
                            Please enter your name!
                          </div>
                          <small className="form-text text-muted">
                            Will be displayed on the comment.
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="review-email">
                            Your email<span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            required
                            id="review-email"
                          />
                          <div className="invalid-feedback">
                            Please provide valid email address!
                          </div>
                          <small className="form-text text-muted">
                            Authentication only - we won't spam you.
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="review-rating">
                            Rating<span className="text-danger">*</span>
                          </label>
                          <select
                            className="custom-select"
                            required
                            id="review-rating"
                          >
                            <option value>Choose rating</option>
                            <option value={5}>5 stars</option>
                            <option value={4}>4 stars</option>
                            <option value={3}>3 stars</option>
                            <option value={2}>2 stars</option>
                            <option value={1}>1 star</option>
                          </select>
                          <div className="invalid-feedback">
                            Please choose rating!
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="review-text">
                            Review<span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={6}
                            required
                            id="review-text"
                            defaultValue={""}
                          />
                          <div className="invalid-feedback">
                            Please write a review!
                          </div>
                          <small className="form-text text-muted">
                            Your review must be at least 50 characters.
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="review-pros">Pros</label>
                          <textarea
                            className="form-control"
                            rows={2}
                            placeholder="Separated by commas"
                            id="review-pros"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="review-cons">Cons</label>
                          <textarea
                            className="form-control"
                            rows={2}
                            placeholder="Separated by commas"
                            id="review-cons"
                            defaultValue={""}
                          />
                        </div>
                        <button
                          className="btn btn-primary btn-shadow btn-block"
                          type="submit"
                        >
                          Submit a Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomContainer;
