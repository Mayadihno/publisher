import React from "react";
import image from "../../assets/logo.png";
import { footerData, quickMenu, socialMedia } from "./data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-[#171717] w-full h-fit text-white">
        <div className="flex justify-center flex-col items-center pt-10">
          <div className=" w-[100px] h-[100px]">
            <img
              src={image}
              alt=""
              className=" w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="text-2xl font-[500] leading-8 pt-3">
            Caligata Publishing Company Limited
          </h3>
        </div>

        <div className="flex justify-between pt-10 max-w-7xl mx-auto">
          <div className="">
            <h2 className="pb-5 text-xl">LET’S GET TOGETHER</h2>
            <div className="flex flex-col space-y-3">
              {footerData.map((item) => (
                <div className="flex items-center" key={item.id}>
                  <item.icon size={20} color="#DC143C" />
                  <h6 className="text-sm md:w-[80%] w-full newsreader pl-2">
                    {item.text}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className="md:ml-[-100px] ml-0">
            <h2 className="pb-5 text-xl">QUICK MENU</h2>
            <div className="flex flex-col space-y-4">
              {quickMenu.map((item) => (
                <Link
                  to={item.link}
                  className="flex items-center hover:text-[#DC143C]"
                  key={item.id}
                >
                  <h6 className="text-base font-[600] leading-6 newsreader">
                    {item.text}
                  </h6>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="pb-5 text-xl">SOCIAL MEDIA</h2>
            <div className="flex flex-row space-x-8">
              {socialMedia.map((item) => (
                <Link
                  to={item.link}
                  className="flex items-center"
                  key={item.id}
                >
                  <div className="w-[40px] text-[#DC143C] hover:text-[#fff] hover:border-[#DC143C] hover:bg-[#DC143C] flex justify-center items-center h-[40px] border-2 border-[#fff] rounded-full p-3">
                    <item.icon size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" border-t-[1px] mt-10 border-[#fff] max-w-9xl mx-auto">
          <p className="text-center text-sm text-gray-400 py-5">
            Copyright {new Date().getFullYear()} © Theme Created By{" "}
            <a
              href="https://mayadihno.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC143C] hover:underline"
            >
              Mayadihno
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
