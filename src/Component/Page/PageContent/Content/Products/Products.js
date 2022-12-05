import React from "react";

const Products = () => {
  return (
    <React.Fragment>
      <div className="row mx-n2">
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/07.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Women's Swimwear
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Two-Piece Bikini in Print</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $18.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size4"
                    id="xs3"
                    defaultChecked
                  />
                  <label className="custom-option-label" htmlFor="xs3">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size4"
                    id="s3"
                  />
                  <label className="custom-option-label" htmlFor="s3">
                    S
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size4"
                    id="m3"
                  />
                  <label className="custom-option-label" htmlFor="m3">
                    M
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/08.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Kid's Toys
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Soft Panda Teddy Bear</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $14.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/09.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Cosmetics
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Metallic Lipstick (Crimson)</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $12.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color2"
                    id="crimson"
                    defaultChecked
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="crimson"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#bd3c82" }}
                    />
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color2"
                    id="creamy"
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="creamy"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#ebae81" }}
                    />
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color2"
                    id="palm"
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="palm"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#ca8799" }}
                    />
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/10.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s Accessories
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">5-Pack Multicolor Bracelets</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $7.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/11.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s Sandals
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Soft Footbed Sandals</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $99.<small>50</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color1"
                    id="blue2"
                    defaultChecked
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="blue2"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#879fb3" }}
                    />
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color1"
                    id="brown"
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="brown"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#9c6d4a" }}
                    />
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="color1"
                    id="black"
                  />
                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="black"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{ backgroundColor: "#333333" }}
                    />
                  </label>
                </div>
              </div>
              <div className="d-flex mb-2">
                <select className="custom-select custom-select-sm mr-2">
                  <option>9.5</option>
                  <option>10</option>
                  <option>10.5</option>
                  <option>11</option>
                  <option>11.5</option>
                </select>
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  data-toggle="toast"
                  data-target="#cart-toast"
                >
                  <i className="czi-cart font-size-sm mr-1" />
                  Add to Cart
                </button>
              </div>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/12.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s Hats
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $25.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size5"
                    id="s4"
                    defaultChecked
                  />
                  <label className="custom-option-label" htmlFor="s4">
                    S
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size5"
                    id="m4"
                  />
                  <label className="custom-option-label" htmlFor="m4">
                    M
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size5"
                    id="l4"
                  />
                  <label className="custom-option-label" htmlFor="l4">
                    L
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <span className="badge badge-danger badge-shadow">Sale</span>
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/13.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s T-shirts
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $11.<small>50</small>
                  </span>
                  <del className="font-size-sm text-muted">
                    $13.<small>50</small>
                  </del>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size6"
                    id="s5"
                  />
                  <label className="custom-option-label" htmlFor="s5">
                    S
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size6"
                    id="m5"
                  />
                  <label className="custom-option-label" htmlFor="m5">
                    M
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size6"
                    id="l5"
                    defaultChecked
                  />
                  <label className="custom-option-label" htmlFor="l5">
                    L
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size6"
                    id="xl5"
                  />
                  <label className="custom-option-label" htmlFor="xl5">
                    XL
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/14.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s Jeans
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Slim Taper Fit Jeans</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $58.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size7"
                    id="s6"
                  />
                  <label className="custom-option-label" htmlFor="s6">
                    S
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size7"
                    id="m6"
                  />
                  <label className="custom-option-label" htmlFor="m6">
                    M
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size7"
                    id="l6"
                    defaultChecked
                  />
                  <label className="custom-option-label" htmlFor="l6">
                    L
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size7"
                    id="xl6"
                  />
                  <label className="custom-option-label" htmlFor="xl6">
                    XL
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
          <hr className="d-sm-none" />
        </div>
        {/* Product*/}
        <div className="col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
            >
              <i className="czi-heart" />
            </button>
            <a
              className="card-img-top d-block overflow-hidden"
              href="shop-single-v1.html"
            >
              <img src="assets/img/shop/catalog/15.jpg" alt="Product" />
            </a>
            <div className="card-body py-2">
              <a className="product-meta d-block font-size-xs pb-1" href="#">
                Men’s Waistcoats
              </a>
              <h3 className="product-title font-size-sm">
                <a href="shop-single-v1.html">Single-breasted Trenchcoat</a>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="product-price">
                  <span className="text-accent">
                    $79.<small>99</small>
                  </span>
                </div>
                <div className="star-rating">
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star-filled active" />
                  <i className="sr-star czi-star" />
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size8"
                    id="m7"
                  />
                  <label className="custom-option-label" htmlFor="m7">
                    M
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size8"
                    id="l7"
                    defaultChecked
                  />
                  <label className="custom-option-label" htmlFor="l7">
                    L
                  </label>
                </div>
                <div className="custom-control custom-option custom-control-inline mb-2">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="size8"
                    id="xl7"
                  />
                  <label className="custom-option-label" htmlFor="xl7">
                    XL
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary btn-sm btn-block mb-2"
                type="button"
                data-toggle="toast"
                data-target="#cart-toast"
              >
                <i className="czi-cart font-size-sm mr-1" />
                Add to Cart
              </button>
              <div className="text-center">
                <a
                  className="nav-link-style font-size-ms"
                  href="#quick-view"
                  data-toggle="modal"
                >
                  <i className="czi-eye align-middle mr-1" />
                  Quick view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
