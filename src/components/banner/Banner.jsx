import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { bannerData } from "./data";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="relative z-0">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full md:h-[540px] h-[400px]">
                <img
                  src={item.image}
                  alt={`carousel image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h4 className="text-3xl font-semibold pb-4">{item.title}</h4>
                  <h3 className="text-2xl font-[400] leading-9 newsreader md:w-1/2 w-full text-center">
                    {item.text}
                  </h3>
                  <div className="mt-6">
                    <button
                      onClick={() => navigate("/store")}
                      className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                    >
                      Discover your next book
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Banner;
