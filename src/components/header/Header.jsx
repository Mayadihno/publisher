import React from "react";
import { ICONS } from "../../static/icons/icons";

const Header = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F9F9F9] px-5 py-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-normal text-[#797979]">
            Welcome to our Publishing House!
          </h3>
          <div className="flex justify-between items-center">
            <h5 className="text-[#797979] text-base font-semibold">Login</h5>
            <div className="flex space-x-7 border-l-2 border-r-2 border-[#DEDEDE] mx-6 px-3 h-6">
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
            <div className="flex items-center space-x-1">
              <ICONS.phone size={20} color="797979" className="mt-2" />
              <h5 className="text-[#797979] text-base font-medium">
                Free call:{" "}
                <span className="font-bold text-xl text-[#DE324D]">
                  123-456-789
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
