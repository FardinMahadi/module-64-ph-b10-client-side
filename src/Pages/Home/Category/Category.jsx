import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20">
      <div className="mb-12">
        <SectionTitle
          subHeading="From 11:00am to 10:00pm"
          heading="ORDER ONLINE"
        />
      </div>
      <div className="sm:w-10/12 mx-auto mb-24">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} />
            <h3 className="text-4xl text-center relative bottom-16 z-10 text-white uppercase">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} />{" "}
            <h3 className="text-4xl text-center relative bottom-16 z-10 text-white uppercase">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} />
            <h3 className="text-4xl text-center relative bottom-16 z-10 text-white uppercase">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} />{" "}
            <h3 className="text-4xl text-center relative bottom-16 z-10 text-white uppercase">
              Dessarts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} />{" "}
            <h3 className="text-4xl text-center relative bottom-16 z-10 text-white uppercase">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
