import React from "react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
const Kids = () => {
  return (
    <React.Fragment>
      {/* Category (Kids)*/}
      <section className="container pt-lg-4 mb-4 mb-md-5">
        <div className="row">
          {/* Banner with controls*/}
          <div className="col-md-5">
            <div
              className="d-flex flex-column h-100 overflow-hidden rounded-lg"
              style={{ backgroundColor: "#f6f8fb" }}
            >
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div>
                  <h3 className="mb-1">For Kids</h3>
                  <a className="font-size-md" href="shop-grid-ls.html">
                    Shop for kids
                    <i className="czi-arrow-right font-size-xs align-middle ml-1" />
                  </a>
                </div>
                <div className="cz-custom-controls" id="for-kids">
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
                  src="assets/img/home/categories/cat-lg03.jpg"
                  alt="For Kids"
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
                        <img src="assets/img/shop/catalog/40.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Clothing
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Girl’s Denim Jacket</a>
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
                            <i className="sr-star czi-star-filled active" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
                      <span className="badge badge-success badge-shadow">
                        Trending
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
                        <img src="assets/img/shop/catalog/41.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Shoes
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Textile Ballet Flats</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $16.<small>50</small>
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
                        <img src="assets/img/shop/catalog/42.jpg" alt="Product" />
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
                            Boys T-shirt with Motif
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $17.<small>99</small>
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
                        <img src="assets/img/shop/catalog/43.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Accessories
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Dotted Shoulder Bag</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $23.<small>00</small>
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
                        <img src="assets/img/shop/catalog/44.jpg" alt="Product" />
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
                            2-pack Cotton Sun Hats
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $18.<small>00</small>
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
                        <img src="assets/img/shop/catalog/08.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Toys
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Soft Panda Teddy Bear
                          </a>
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
                        <img src="assets/img/shop/catalog/45.jpg" alt="Product" />
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
                            Outlined Star Chevron Tee
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $10.<small>99</small>
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
                        <img src="assets/img/shop/catalog/46.jpg" alt="Product" />
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
                            Banana Embroidery Cap
                          </a>
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
                        <img src="assets/img/shop/catalog/47.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Shoes
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Big Kid Sneakers</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $42.<small>50</small>
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
                        <img src="assets/img/shop/catalog/48.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Clothing
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Boy's Printed Shorts</a>
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
                        <img src="assets/img/shop/catalog/49.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Toys
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">Unicorn Soft Toy</a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $22.<small>50</small>
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
                        <img src="assets/img/shop/catalog/50.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <a
                          className="product-meta d-block font-size-xs pb-1"
                          href="#"
                        >
                          Swimwear
                        </a>
                        <h3 className="product-title font-size-sm">
                          <a href="shop-single-v1.html">
                            Pool Santorini Tankini
                          </a>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $20.<small>00</small>
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

export default Kids;
