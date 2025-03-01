import React from "react";
import { teamData } from "./data";

const Team = () => {
  return (
    <React.Fragment>
      <div className="bg-[#E5EAED] h-fit py-5">
        <div className="pt-5">
          <h2 className="md:text-5xl text-3xl text-center font-[400]">
            Our Team
          </h2>
          <div className="w-[80px] my-2 mx-auto h-[2px] bg-[#DC143C]"></div>
        </div>
        <h4 className="text-xl pt-2 italic font-[500] text-center">
          Book Lovers
        </h4>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-10 mb-20 mx-20">
          {teamData.map((item) => (
            <div className="" key={item.id}>
              <div className="w-full h-full">
                <img
                  src={item.image}
                  className="w-full h-full object-contain hover:animate-pulse cursor-pointer"
                  alt=""
                />
              </div>
              <h3 className="text-center text-2xl font-[500]">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
