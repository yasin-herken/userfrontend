import React, {useEffect, useState} from "react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai";
import {getProducts} from "../../../Services/productService";
import {calculatePrice} from "../../../Utility/Utility";

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductsForSwiper = async () => {
      const response = await getProducts({pageSize: 10, page: 0, sortBy: "createdAt", direction: "desc"});
      setProducts(response);
    }
    getProductsForSwiper();
  }, [])
  return (
    <React.Fragment>
      {/* Product carousel (You may also like)*/}
      <div className="container pt-lg-2 pb-5 mb-md-3">
        <h2 className="h3 text-center pb-4">You may also like</h2>
        <div className="cz-controls-static cz-controls-outside">
          <Swiper
            className="cz-carousel-inner"
            modules={[Autoplay, Navigation, A11y, Pagination]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              992: {
                width: 992,
                slidesPerView: 4,
              },
            }}
            a11y
            loop
          >
            <AiOutlineLeftCircle className="prev"/>
            {products.map((product) => {
              let price = {
                dollar: 0,
                cent: 0,
              }
              if(product?.price) {
                price = calculatePrice(product?.price?.price);
              }
              return <SwiperSlide>
                {/* Product*/}
                <div>
                  <div className="card product-card card-static">
                    <button
                      className="btn-wishlist btn-sm"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to wishlist"
                    >
                      <i className="czi-heart"/>
                    </button>
                    <a className="card-img-top d-block" href="#">
                      <img src={product?.images[0]?.url} alt="Product"/>
                    </a>
                    <div className="card-body py-2">
                      <a
                        className="product-meta d-block font-size-xs pb-1"
                        href="#"
                      >
                        {product?.category.name}
                      </a>
                      <h3 className="product-title font-size-sm">
                        <a href="#">{product?.title}</a>
                      </h3>
                      <div className="d-flex justify-content-between">
                        <div className="product-price">
                        <span className="text-accent">
                          {product?.price && `$${price.dollar}.`}
                          {product?.price && <small>{price.cent}</small>}
                        </span>
                        </div>
                        <div className="star-rating">
                          <i className="sr-star czi-star-filled active"/>
                          <i className="sr-star czi-star-filled active"/>
                          <i className="sr-star czi-star-filled active"/>
                          <i className="sr-star czi-star-filled active"/>
                          <i className="sr-star czi-star"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })
            }
            {/*<SwiperSlide>
               Product
              <div>
                <div className="card product-card card-static">
                  <button
                    className="btn-wishlist btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to wishlist"
                  >
                    <i className="czi-heart"/>
                  </button>
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="assets/img/shop/catalog/66.jpg" alt="Product"/>
                  </a>
                  <div className="card-body py-2">
                    <a
                      className="product-meta d-block font-size-xs pb-1"
                      href="#"
                    >
                      Smartwatches
                    </a>
                    <h3 className="product-title font-size-sm">
                      <a href="#">Health &amp; Fitness Smartwatch</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $250.<small>00</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               Product
              <div>
                <div className="card product-card card-static">
                  <button
                    className="btn-wishlist btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to wishlist"
                  >
                    <i className="czi-heart"/>
                  </button>
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="assets/img/shop/catalog/67.jpg" alt="Product"/>
                  </a>
                  <div className="card-body py-2">
                    <a
                      className="product-meta d-block font-size-xs pb-1"
                      href="#"
                    >
                      Smartwatches
                    </a>
                    <h3 className="product-title font-size-sm">
                      <a href="#">Heart Rate &amp; Activity Tracker</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $26.<small>99</small>
                      </div>
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star"/>
                        <i className="sr-star czi-star"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               Product
              <div>
                <div className="card product-card card-static">
                  <button
                    className="btn-wishlist btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to wishlist"
                  >
                    <i className="czi-heart"/>
                  </button>
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="assets/img/shop/catalog/64.jpg" alt="Product"/>
                  </a>
                  <div className="card-body py-2">
                    <a
                      className="product-meta d-block font-size-xs pb-1"
                      href="#"
                    >
                      Smartwatches
                    </a>
                    <h3 className="product-title font-size-sm">
                      <a href="#">Smart Watch Series 5, Aluminium</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $349.<small>99</small>
                      </div>
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               Product
              <div>
                <div className="card product-card card-static">
                  <button
                    className="btn-wishlist btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to wishlist"
                  >
                    <i className="czi-heart"/>
                  </button>
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="assets/img/shop/catalog/68.jpg" alt="Product"/>
                  </a>
                  <div className="card-body py-2">
                    <a
                      className="product-meta d-block font-size-xs pb-1"
                      href="#"
                    >
                      Smartwatches
                    </a>
                    <h3 className="product-title font-size-sm">
                      <a href="#">Health &amp; Fitness Smartwatch</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $118.<small>00</small>
                      </div>
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               Product
              <div>
                <div className="card product-card card-static">
                  <button
                    className="btn-wishlist btn-sm"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to wishlist"
                  >
                    <i className="czi-heart"/>
                  </button>
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="assets/img/shop/catalog/69.jpg" alt="Product"/>
                  </a>
                  <div className="card-body py-2">
                    <a
                      className="product-meta d-block font-size-xs pb-1"
                      href="#"
                    >
                      Smartwatches
                    </a>
                    <h3 className="product-title font-size-sm">
                      <a href="#">Heart Rate &amp; Activity Tracker</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $25.<small>00</small>
                      </div>
                      <div className="star-rating">
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star-filled active"/>
                        <i className="sr-star czi-star"/>
                        <i className="sr-star czi-star"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>*/}
            <AiOutlineRightCircle className="next"/>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSwiper;
