"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Navigation } from "swiper/modules";

const reviews = Array.from({ length: 18 }, (_, i) => `review${i + 1}.png`);

export default function ReviewSlider() {
  return (
    <div role="region" aria-label="Отзывы участников курса">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        grabCursor={true}
        modules={[Navigation]}
        breakpoints={{
          // когда экран >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // когда экран >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <div className="px-10">
          {reviews.map((src, index) => (
            <SwiperSlide key={index} className="md:px-0 px-12">
              <img
                src={`/img/reviews/${src}`}
                alt={`Отзыв участника курса №${index + 1}`}
                className="rounded-2xl w-full"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
