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
import {Link} from "react-router-dom";

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
              if (product?.price) {
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
                    <Link className="card-img-top d-block" to="#">
                      <img src={product?.images[0]?.url} alt="Product"/>
                    </Link>
                    <div className="card-body py-2">
                      <Link
                        className="product-meta d-block font-size-xs pb-1"
                        to="#"
                      >
                        {product?.category.name}
                      </Link>
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
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })
            }
            <AiOutlineRightCircle className="next"/>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSwiper;
