import React, {useEffect, useState} from "react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Product from "../Product/Product";
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai";
import {Link, useLocation} from "react-router-dom";
import qs from "query-string";
import {getProducts} from "../../../Services/productService";

const LeftCategory = ({category}) => {
  const [swiperSlideCount] = useState(2);
  const location = useLocation();
  const queryParam = qs.parse(location.search);
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const data = await getProducts({
        pageSize: 10,
        criteria: {
          eq: {
            gender: category.name
          }
        }
      })
    setProducts(data);
    }
    fetchData();
  }, [category?.name]);
  return (
    <section className="container pt-lg-3 mb-4 mb-sm-5">
      <div className="row">
        {/* Banner with controls*/}
        <div className="col-md-5">
          <div
            className="d-flex flex-column h-100 overflow-hidden rounded-lg"
            style={{backgroundColor: "#f6f8fb"}}
          >
            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
              <div>
                <h3 className="mb-1">{category?.categoryName}</h3>
                <Link className="font-size-md" to={{
                  pathname: category.link,
                  search: qs.stringify({
                    ...queryParam,
                    category: category.name
                  })
                }}>
                  {category?.categoryLinkName}
                  <i className="czi-arrow-right font-size-xs align-middle ml-1"/>
                </Link>
              </div>
            </div>
            <a
              className="d-none d-md-block mt-auto"
              href={category?.link}
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
            <AiOutlineLeftCircle className="prev"/>
            {Array(swiperSlideCount)
              .fill(0)
              .map((_, indexOuter) => {
                return (
                  <SwiperSlide key={new Date().getTime() * (indexOuter + 2)}>
                    <div className="row mx-2">
                      {products
                        ?.slice(indexOuter * 6, (indexOuter + 1) * 6)
                        .map((product, index) => {
                          return index % 6 === 0 && index & (5 === 0) ? (
                            <Product
                              product={product}
                              show={true}
                              key={product?.id}
                            />
                          ) : (
                            <Product
                              product={product}
                              key={product?.id}
                            />
                          );
                        })}
                    </div>
                  </SwiperSlide>
                );
              })}
            <AiOutlineRightCircle className="next"/>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LeftCategory;
