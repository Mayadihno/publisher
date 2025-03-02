import React from "react";
import { discoveryData } from "./data";
import { iconsData } from "../../static/data";
import { Link } from "react-router-dom";

const Discovery = () => {
  const data = discoveryData.map((item) => item).splice(0, 8);
  return (
    <React.Fragment>
      <div className="my-20">
        <h2 className="md:text-5xl text-3xl text-center font-[400]">
          Discover Your Next Book
        </h2>
        <div className="w-[80px] my-5 mx-auto h-[2px] bg-[#DC143C]"></div>

        <div className="grid grid-cols-1 md:mx-8 mx-2 md:grid-cols-4 gap-4 my-16 newsreader">
          {data.map((item) => {
            return (
              <Link
                to={`/book-details/${item.id}`}
                key={item.id}
                className="cursor-pointer bg-[#f4f4f4] p-3 shadow-md rounded-md"
              >
                <div className="w-full h-[450px]">
                  <img
                    src={item.image}
                    alt={`book image ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-base font-[500]">{item.title}</h4>
                  <div className="pt-2">
                    <p className="text-sm font-[400]">
                      Author: <span>{item.author}</span>
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-xs font-[400]">
                        Publisher: <span>{item.publisher}</span>
                      </p>
                      <p className="text-xs font-[400]">
                        Genre: <span>{item.genre}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white">
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
