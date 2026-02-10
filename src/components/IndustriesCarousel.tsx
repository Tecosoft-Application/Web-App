"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IndustriesCarouselProps {
  children: React.ReactNode[];
}

export function IndustriesCarousel({ children }: IndustriesCarouselProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="industries-swiper"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .industries-swiper {
          padding-bottom: 50px;
        }
        
        .industries-swiper .swiper-button-next,
        .industries-swiper .swiper-button-prev {
          color: #007AAA;
        }
        
        .industries-swiper .swiper-pagination-bullet {
          background: #007AAA;
        }
        
        .industries-swiper .swiper-pagination-bullet-active {
          background: #07af40;
        }
      `}</style>
    </div>
  );
}
