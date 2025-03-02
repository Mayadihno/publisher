/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import { socialMedia } from "../footer/data";
import React from "react";

const Menubar = ({ setShow }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col mt-3 border-t-[1px] border-gray-500">
        {navItems.map((item) => (
          <div
            // data-aos="fade-left"
            // data-aos-delay="600"
            key={item.id}
            className={`${
              location.pathname === item.link ? "text-[#DC143C]" : "text-white"
            } text-lg mt-6 newsreader font-semibold px-4 hover:text-[#DC143C]`}
          >
            <Link onClick={() => setShow(false)} to={item.link}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-gray-500 mt-4">
        <div className="flex flex-row space-x-8 mt-4 pl-4">
          {socialMedia.map((item) => (
            <Link to={item.link} className="flex items-center" key={item.id}>
              <div className="w-[40px] text-[#DC143C] hover:text-[#fff] hover:border-[#DC143C] hover:bg-[#DC143C] flex justify-center items-center h-[40px] border-2 border-[#fff] rounded-full p-3">
                <item.icon size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menubar;
