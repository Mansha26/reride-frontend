import React from "react";
import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  return (
    <>
      <section className="flex flex-col bg-white py-14">
        <div className="pb-2 text-center">
          <h1 className="text-3xl font-semibold text-secondary md:text-5xl pb-3">
            It's not just us.
          </h1>
          <p className="text-xl text-secondary md:text-2xl pb-3">
            Here's what others have to say about us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
