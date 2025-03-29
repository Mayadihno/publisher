import React from "react";
import { discoveryData } from "./data";
import { iconsData } from "../../static/data";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { formatCurrency } from "../../static/currencyConverter/format";

const Discovery = () => {
  const data = discoveryData.map((item) => item).splice(0, 8);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="my-20">
        <h2 className="md:text-5xl text-3xl text-center font-[400]">
          Discover Your Next Book
        </h2>
        <div className="w-[80px] my-5 mx-auto h-[2px] bg-[#DC143C]"></div>

        <div className="md:mx-12 mx-2 gap-4 my-16 newsreader">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#f4f4f4] md:py-2">
                    <Link
                      to={`/book-details/${item.id}`}
                      key={item.id}
                      className="cursor-pointer shadow-md"
                    >
                      <div className="w-full md:h-[250px] h-[460px]">
                        <img
                          src={item.image}
                          alt={`book image ${item.id}`}
                          className="w-full h-full md:object-contain object-cover transition-transform md:shadow-sm shadow-2xl duration-300 ease-in-out transform perspective-3000 md:rotate-y-30 hover:rotate-y-3"
                        />
                      </div>
                      <div className="bg-[#f4f4f4] p-3 rounded-md">
                        <h4 className="text-base font-[500]">{item.title}</h4>
                        <div className="pt-3 flex justify-between items-center">
                          <p className="text-sm font-[400]">
                            Author: <span>{item.author}</span>
                          </p>
                          <p className="text-sm font-[400]">
                            Price: <span>{formatCurrency(item.price)}</span>
                          </p>
                        </div>
                        <div className="pt-3">
                          <button className="bg-[#DC143C] w-full rounded-md cursor-pointer py-2 px-4 text-white">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={() => navigate("/store")}
            className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
          >
            Discover more books
          </button>
        </div>
      </div>
      <div className="w-full h-fit bg-[#f4f4f4] py-6">
        <div className="py-5">
          <h2 className="md:text-5xl text-3xl text-center font-[400]">
            What we do
          </h2>
          <div className="w-[80px] my-5 mx-auto h-[2px] bg-[#DC143C]"></div>
        </div>
        <div
          // data-aos="fade-left"
          // data-aos-duration="1800"
          className="grid grid-cols-2 gap-y-6 md:gap-y-0 md:grid-cols-5 newsreader"
        >
          {iconsData.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer flex justify-center items-center flex-col"
              >
                <div className="md:w-1/2 w-[30%] md:h-2/3 h-[50%]">
                  <img
                    src={item.icons}
                    alt={`book image ${item.id}`}
                    className="w-full h-full object-cotain icon-red"
                  />
                </div>
                <h3 className="text-xl pt-4 font-[500]">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Discovery;
