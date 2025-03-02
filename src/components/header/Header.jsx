import React from "react";
import { ICONS } from "../../static/icons/icons";

const Header = () => {
  return (
    <React.Fragment>
      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="bg-[#F9F9F9] md:py-4 py-2 w-full md:px-24 px-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-normal text-[#797979]">
            Welcome to our Publishing House!
          </h3>
          <div className="flex justify-between items-center">
            <h5 className="text-[#797979] text-base font-semibold">Login</h5>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="md:flex md:space-x-7 hidden space-x-2 border-l-2 border-r-2 border-[#DEDEDE] mx-6 px-3 h-6"
            >
              <div
                className={`cursor-pointer rounded-full flex justify-center items-center`}
              >
                <ICONS.facebook size={17} color="black" />
              </div>
              <div
                className={`cursor-pointer rounded-full flex justify-center items-center`}
              >
                <ICONS.x size={17} color="black" />
              </div>
              <div
                className={`cursor-pointer rounded-full flex justify-center items-center `}
              >
                <ICONS.instagram size={17} color="black" />
              </div>
              <div
                className={`cursor-pointer rounded-full flex justify-center items-center`}
              >
                <ICONS.whatsapp size={17} color="black" />
              </div>
            </div>
            <div className="md:flex hidden items-center space-x-1">
              <ICONS.phone size={20} color="#797979" />
              <h5 className="text-[#797979] text-base font-medium">
                Free call:{" "}
                <span className="font-bold newsreader text-xl text-[#DE324D]">
                  +234-803-344-3562
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="flex md:hidden justify-center items-center pt-1 space-x-1">
          <ICONS.phone size={20} color="#797979" />
          <h5 className="text-[#797979] text-base font-medium">
            Free call:{" "}
            <span className="font-bold newsreader text-xl text-[#DE324D]">
              +234-803-344-3562
            </span>
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
