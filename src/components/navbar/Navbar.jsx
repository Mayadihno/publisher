import React, { useState } from "react";
import NavItems from "./Navitems";
import { ICONS } from "../../static/icons/icons";
import image from "../../assets/logo.png";
import Menubar from "./Menubar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="w-full bg-[#FEFFFE] h-fit md:px-24 px-5 md:pb-0 sticky top-0 z-50 shadow-md"
      >
        <div className="flex justify-between items-center md:pt-0 py-2 md:py-0">
          <div className="flex flex-col items-center md:py-2 py-0">
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="w-[60px] md:h-[60px]"
            >
              <img
                src={image}
                alt="logo image"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h6
              data-aos="fade-left"
              data-aos-duration="1600"
              className="text-xs font-[400] newsreader"
            >
              <span className="md:block hidden">
                Caligata Publishing Company Limited
              </span>
            </h6>
          </div>

          <div
            data-aos="zoom-in-left"
            data-aos-duration="1700"
            className="md:block hidden"
          >
            <NavItems />
          </div>
          <div className="block md:hidden" onClick={() => setShow(!show)}>
            {!show && <ICONS.menu size={25} color="#DC143C" />}
          </div>
        </div>
      </div>
      {show && (
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1400"
          className="fixed w-full h-screen top-0 left-0 bg-[#121212] z-50 flex justify-center items-center"
        >
          <div className="relative w-[95%] overflow-y-scroll h-[85vh] rounded-md shadow-sm mt-[-80px]">
            <div className="flex justify-between items-center px-4">
              <div
                data-aos="fade-up"
                data-aos-duration="1600"
                className="w-[60px] md:h-[60px]"
              >
                <img
                  src={image}
                  alt="logo image"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <ICONS.close
                size={35}
                className="absolute right-3 top-3 z-50"
                onClick={() => setShow(false)}
                color={"white"}
              />
            </div>
            <Menubar setShow={setShow} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
