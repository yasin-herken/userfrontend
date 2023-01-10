import React, { useEffect, useState } from "react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Product from "../Product/Product";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const LeftCategory = ({ category }) => {
  const [swiperSlideCount, setSwiperSlideCount] = useState(0);
  useEffect(() => {
    if (!category) return null;
    setSwiperSlideCount(Math.ceil(category?.categoryProducts.length / 6));
  }, [category]);

  return (
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
                <h3 className="mb-1">{category?.categoryName}</h3>
                <a className="font-size-md" href={category?.categoryLink}>
                  {category?.categoryLinkName}
                  <i className="czi-arrow-right font-size-xs align-middle ml-1" />
                </a>
              </div>
            </div>
            <a
              className="d-none d-md-block mt-auto"
              href={category?.categoryLink}
            >
              <img
                className="d-block w-100"
                src={category?.categoryImage}
                alt={category?.categoryImageAlt}
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
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            pagination={{
              clickable: true,
            }}
            a11y
          >
            <AiOutlineLeftCircle className="prev" />
            {Array(swiperSlideCount)
              .fill(0)
              .map((_, indexOuter) => {
                return (
                  <SwiperSlide key={new Date().getTime() * (indexOuter + 2)}>
                    <div className="row mx-2">
                      {category?.categoryProducts
                        ?.slice(indexOuter * 6, (indexOuter + 1) * 6)
                        .map((product, index) => {
                          return index % 6 === 0 && index & (5 === 0) ? (
                            <Product
                              product={product}
                              show={true}
                              key={product?.productId}
                            />
                          ) : (
                            <Product
                              product={product}
                              key={product?.productId}
                            />
                          );
                        })}
                    </div>
                  </SwiperSlide>
                );
              })}
            <AiOutlineRightCircle className="next" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LeftCategory;
