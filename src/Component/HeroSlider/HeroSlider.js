import React from "react";
import { Navigation, A11y, Autoplay, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import DashboardItem from "./DashboardItem";
import { dashboardImg } from "../../Common/dashboard.js";
const HeroSlider = () => {
  return (
    <React.Fragment>
      {/* Hero slider*/}
      <section className="cz-carouse cz-controls-lg mb-4 mb-lg-5">
        <Swiper
          className="cz-carousel-inner"
          modules={[Autoplay, Navigation, A11y, Pagination]}
          speed={1200}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
          {dashboardImg.map((item,index) => (
            <SwiperSlide key={index}>
              <DashboardItem {...item}/>
            </SwiperSlide>
          ))}
          <AiOutlineRightCircle className="next" />
        </Swiper>
      </section>
    </React.Fragment>
  );
};

export default HeroSlider;
