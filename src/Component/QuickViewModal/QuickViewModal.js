import React from "react";

const QuickViewModal = () => {
  return (
    <React.Fragment>
      {/* Quick View Modal*/}
      <div
        className="modal-quick-view modal fade"
        id="quick-view-electro"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title product-title">
                <a
                  href="shop-single-v2.html"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Go to product page"
                >
                  Smartwatch Youth Edition
                  <i className="czi-arrow-right font-size-lg ml-2" />
                </a>
              </h4>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                {/* Product gallery*/}
                <div className="col-lg-7 pr-lg-0">
                  <div className="cz-product-gallery">
                    <div className="cz-preview order-sm-2">
                      <div className="cz-preview-item active" id="first">
                        <img
                          className="cz-image-zoom"
                          src="img/shop/single/gallery/05.jpg"
                          data-zoom="img/shop/single/gallery/05.jpg"
                          alt="Product image"
                        />
                        <div className="cz-image-zoom-pane" />
                      </div>
                      <div className="cz-preview-item" id="second">
                        <img
                          className="cz-image-zoom"
                          src="img/shop/single/gallery/06.jpg"
                          data-zoom="img/shop/single/gallery/06.jpg"
                          alt="Product image"
                        />
                        <div className="cz-image-zoom-pane" />
                      </div>
                      <div className="cz-preview-item" id="third">
                        <img
                          className="cz-image-zoom"
                          src="img/shop/single/gallery/07.jpg"
                          data-zoom="img/shop/single/gallery/07.jpg"
                          alt="Product image"
                        />
                        <div className="cz-image-zoom-pane" />
                      </div>
                      <div className="cz-preview-item" id="fourth">
                        <img
                          className="cz-image-zoom"
                          src="img/shop/single/gallery/08.jpg"
                          data-zoom="img/shop/single/gallery/08.jpg"
                          alt="Product image"
                        />
                        <div className="cz-image-zoom-pane" />
                      </div>
                    </div>
                    <div className="cz-thumblist order-sm-1">
                      <a className="cz-thumblist-item active" href="#first">
                        <img
                          src="img/shop/single/gallery/th05.jpg"
                          alt="Product thumb"
                        />
                      </a>
                      <a className="cz-thumblist-item" href="#second">
                        <img
                          src="img/shop/single/gallery/th06.jpg"
                          alt="Product thumb"
                        />
                      </a>
                      <a className="cz-thumblist-item" href="#third">
                        <img
                          src="img/shop/single/gallery/th07.jpg"
                          alt="Product thumb"
                        />
                      </a>
                      <a className="cz-thumblist-item" href="#fourth">
                        <img
                          src="img/shop/single/gallery/th08.jpg"
                          alt="Product thumb"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Product details*/}
                <div className="col-lg-5 pt-4 pt-lg-0 cz-image-zoom-pane">
                  <div className="product-details ml-auto pb-3">
                    <div className="mb-2">
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star-filled active" />
                        <i className="sr-star czi-star" />
                      </div>
                      <span className="d-inline-block font-size-sm text-body align-middle mt-1 ml-1">
                        74 Reviews
                      </span>
                    </div>
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
                    <h5 className="h6 mb-3 py-2 border-bottom">
                      <i className="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2" />
                      Product info
                    </h5>
                    <h6 className="font-size-sm mb-2">General</h6>
                    <ul className="font-size-sm pb-2">
                      <li>
                        <span className="text-muted">Model: </span>Amazfit
                        Smartwatch
                      </li>
                      <li>
                        <span className="text-muted">Gender: </span>Unisex
                      </li>
                      <li>
                        <span className="text-muted">OS campitibility: </span>
                        Android / iOS
                      </li>
                    </ul>
                    <h6 className="font-size-sm mb-2">Physical specs</h6>
                    <ul className="font-size-sm pb-2">
                      <li>
                        <span className="text-muted">Shape: </span>Rectangular
                      </li>
                      <li>
                        <span className="text-muted">Body material: </span>
                        Plastics / Ceramics
                      </li>
                      <li>
                        <span className="text-muted">Band material: </span>
                        Silicone
                      </li>
                    </ul>
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

export default QuickViewModal;
