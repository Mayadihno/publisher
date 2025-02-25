import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { genreData } from "./data";
const Genre = () => {
  return (
    <React.Fragment>
      <div className="my-10 mx-6">
        <div className="py-5">
          <h2 className="md:text-5xl text-3xl text-center font-[400]">
            Browse Books by Genre
          </h2>
          <div className="w-[80px] my-5 mx-auto h-[2.5px] bg-[#DC143C]"></div>
        </div>
        <div className=" my-8 mx-6">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {genreData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#f4f4f4] rounded-md shadow-md cursor-pointer hover:animate-pulse">
                    <div className="w-full h-[300px]">
                      <img
                        src={item.image}
                        className=" w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg py-2 font-[500] text-center">
                      {item.title}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="">
          <div className="mt-10 flex items-center justify-center">
            <button className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white">
              Explore More Categories
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Genre;
