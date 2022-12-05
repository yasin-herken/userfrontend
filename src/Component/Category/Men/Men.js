import React from "react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Men = () => {
  return (
    <React.Fragment>
      {/* Category (Men)*/}
      <section className="container pt-lg-4 mb-4 mb-sm-5">
        <div className="row">
          {/* Banner with controls*/}
          <div className="col-md-5 order-md-2">
            <div
              className="d-flex flex-column h-100 overflow-hidden rounded-lg"
              style={{ backgroundColor: "#f6f8fb" }}
            >
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div className="order-md-2">
                  <h3 className="mb-1">For Men</h3>
                  <a className="font-size-md" href="shop-grid-ls.html">
                    Shop for men
                    <i className="czi-arrow-right font-size-xs align-middle ml-1" />
                  </a>
                </div>
                <div className="cz-custom-controls order-md-1" id="for-men">
                  <button type="button">
                    <i className="czi-arrow-left" />
                  </button>
                  <button type="button">
                    <i className="czi-arrow-right" />
                  </button>
                </div>
              </div>
              <a className="d-none d-md-block mt-auto" href="shop-grid-ls.html">
                <img
                  className="d-block w-100"
                  src="assets/img/home/categories/cat-lg01.jpg"
                  alt="For Men"
                />
              </a>
            </div>
          </div>
          {/* Product grid (carousel)*/}
          <div className="col-md-7 pt-4 pt-md-0 order-md-1">
            <Swiper
              className="cz-carousel-inner"
              modules={[Autoplay, Navigation, A11y, Pagination]}
              slidesPerView={1}
              navigation
              pagination
              a11y
            >
              <SwiperSlide>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/32.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Cap with Appliqué</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $15.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/33.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          T-shirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Regular Fit Cotton Shirt
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $19.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/34.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Accessories
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Polarized Sunglasses</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $37.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/35.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Shoes
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Leather Men’s Sneakers
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $45.<small>99</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
                      <span className="badge badge-info badge-shadow">
                        Popular
                      </span>
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
                        <img
                          src="assets/img/shop/catalog/36.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Bags
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Swedish Backpack</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $68.<small>95</small>
                            </span>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/37.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Accessories
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Stainless Steel Watches
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $542.<small>80</small>
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/11.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Sandals
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/38.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Shorts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Silver Ringe Cargo Short
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $45.<small>00</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/10.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Shorts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Multicolor Bracelets</a>
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
                            <i className="sr-star czi-star" />
                            <i className="sr-star czi-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/39.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          T-shirts
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            3-pack T-shirts Slim Fit
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $21.<small>70</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/12.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            3-Color Sun Stash Hat
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $25.<small>9</small>
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
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
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
                        <img
                          src="assets/img/shop/catalog/06.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Bags
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            TH Jeans City Backpack
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $79.<small>50</small>
                            </span>
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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Men;
