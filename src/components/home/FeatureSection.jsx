import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {Link } from 'react-router'
import {ArrowRight} from 'lucide-react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import FeaturedCard from "./FeaturedCard";

const FeatureSection = () => {
  return (
    <>
      <section className="flex flex-col max-w-6xl overflow-hidden mx-auto py-14">
        <div className="flex flex-col justify-center items-center py-4">
          <div className="flex justify-start items-center w-full  ">
            <p className="text-4xl font-medium text-secondary">Fresh Arrivals</p>
          </div>
          <div className="flex w-full justify-between text-secondary">
            <p>Handpicked bikes verified for quality and price.</p>
            <Link to="/buy" className="flex">
              View All Inventory <ArrowRight/>
            </Link>
          </div>
        </div>
        <br />
        <div className="px-20 flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiper.autoplay.start();
            }}
          >
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
