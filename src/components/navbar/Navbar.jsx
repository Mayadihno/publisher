import React, { useState } from "react";
import NavItems from "./Navitems";
import { ICONS } from "../../static/icons/icons";
import image from "../../assets/logo-1.webp";
import Menubar from "./Menubar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="w-full h-fit md:px-24 px-5 pb-5 md:pb-0 shadow-xl"
      >
        <div className="flex justify-between items-center md:pt-0 pt-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="w-[120px] md:h-[80px] "
          >
            <img
              src={image}
              alt="logo image"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1700"
            className="md:block hidden"
          >
            <NavItems />
          </div>
          <div className="block md:hidden" onClick={() => setShow(!show)}>
            {show ? (
              <ICONS.close size={25} color="#DC143C" />
            ) : (
              <ICONS.menu size={25} color="#DC143C" />
            )}
          </div>
        </div>
      </div>
      {show && (
        <div className="mt-1 shadow-md h-fit block md:hidden">
          <div>
            <Menubar setShow={setShow} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
