import React from "react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
const Women = () => {
  return (
    <React.Fragment>
      {/* Category (Women)*/}
      <section className="container pt-lg-3 mb-4 mb-sm-5">
        <div className="row">
          {/* Banner with controls*/}
          <div className="col-md-5">
            <div
              className="d-flex flex-column h-100 overflow-hidden rounded-lg"
              style={{ backgroundColor: "#f6f8fb" }}
            >
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div>
                  <h3 className="mb-1">For Women</h3>
                  <a className="font-size-md" href="shop-grid-ls.html">
                    Shop for women
                    <i className="czi-arrow-right font-size-xs align-middle ml-1" />
                  </a>
                </div>
              </div>
              <a className="d-none d-md-block mt-auto" href="shop-grid-ls.html">
                <img
                  className="d-block w-100"
                  src="assets/img/home/categories/cat-lg02.jpg"
                  alt="For Women"
                />
              </a>
            </div>
          </div>
          {/* Product grid (carousel)*/}
          <div className="col-md-7 pt-4 pt-md-0">
            <Swiper
              className="cz-carousel-inner"
              modules={[Autoplay, Navigation, A11y, Pagination]}
              slidesPerView={1}
              pagination
              navigation
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
                          src="assets/img/shop/catalog/09.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Cosmetics
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Metallic Lipstick (Crimson)
                          </a>
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
                          src="assets/img/shop/catalog/27.jpg"
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
                            Textile Platform Sneakers
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $59.<small>99</small>
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
                      <span className="badge badge-danger badge-shadow">
                        Sale
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
                          src="assets/img/shop/catalog/27.jpg"
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
                              $17.<small>99</small>
                            </span>
                            <del className="font-size-sm text-muted">
                              28.<small>99</small>
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
                          src="assets/img/shop/catalog/28.jpg"
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
                            Leather Platform Sandals
                          </a>
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
                          src="assets/img/shop/catalog/29.jpg"
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
                          <a href="shop-single-v1.html">Short Chino Shorts</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.<small>99</small>
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
                          src="assets/img/shop/catalog/30.jpg"
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
                          <a href="shop-single-v1.html">T-shirt with Motif</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $13.<small>99</small>
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
                          src="assets/img/shop/catalog/01.jpg"
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
                          <a href="shop-single-v1.html">Colorblock Sneakers</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $154.<small>99</small>
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
                          src="assets/img/shop/catalog/02.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Blouse
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Cotton Lace Blouse</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $37.<small>50</small>
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
                          src="assets/img/shop/catalog/03.jpg"
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
                            Mom High Waist Shorts
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $39.<small>50</small>
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
                          src="assets/img/shop/catalog/04.jpg"
                          alt="Product"
                        />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Sportswear
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Sports Jacket</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $68.<small>40</small>
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
                          src="assets/img/shop/catalog/32.jpg"
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
                            Leather Platform Sandals
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $67.<small>95</small>
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
                          src="assets/img/shop/catalog/07.jpg"
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
                          <a href="shop-single-v1.html">Two-Piece Bikini</a>
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

export default Women;
