import React from "react";
import { ICONS } from "../../static/icons/icons";

const Story = () => {
  return (
    <React.Fragment>
      <div className="bg w-full pt-[200px]">
        <div className="flex md:flex-row flex-col justify-between md:p-10 p-3">
          <div className="">
            <h2 className="md:text-5xl text-3xl text-white text-center font-[400]">
              Bringing Stories Alive
            </h2>
            <div className="w-[80px] my-5 mx-auto h-[2px] bg-[#DC143C]"></div>
            <div className="">
              <h3 className="text-white text-xl">
                Visit Our Store to Find Out Inspiration books from the best
                Authors
              </h3>
              <div className="mt-10 flex items-center justify-center">
                <button className="px-8 uppercase py-4 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white">
                  View Our Store
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="md:text-5xl text-3xl text-white text-center font-[400]">
              Stay in Touch with Our Updates
            </h2>
            <div className="w-[80px] my-5 mx-auto h-[2px] bg-[#DC143C]"></div>
            <div className="flex items-center">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
                className="px-2 py-4 rounded-sm bg-white outline-none w-2/3"
              />
              <div className="flex ml-3 items-center justify-center">
                <button className="px-8 flex items-center uppercase py-4 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white">
                  <ICONS.send size={20} className="mr-3" />
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Story;
