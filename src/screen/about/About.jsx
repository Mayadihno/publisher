import React from "react";
import { iconsData } from "../../static/data";

const About = () => {
  return (
    <React.Fragment>
      <div className="bg-[#000] py-10 text-center text-white">
        <h3 className="text-5xl">About Us</h3>
      </div>
      <div className="my-10 md:max-w-5xl md:mx-auto mx-5">
        <p className="text-lg pt-6 text-neutral-500 text-center newsreader leading-8">
          At Caligata Publishing Company, we are passionate about preserving and
          sharing the stories that shape our world. Specialising in the
          publication of autobiographies, biographies, memoirs, scholarly works,
          and religious books, we are dedicated to bringing exceptional
          narratives to life. Our mission is to provide a platform for authors
          to share their unique voices, insights, and experiences. Quality is
          our watchword. From the manuscripts to the published books, we uphold
          the highest standards of excellence in every aspect of our work. Our
          team of experienced publishing professionals is committed to ensuring
          that every book we produce is of the highest quality. We believe that
          every work deserves to be executed with care and we never compromise
          on quality. Whether it is a deeply personal memoir, a meticulously
          researched autobiography/biography, a groundbreaking scholarly work,
          or an inspiring religious text, we treat each project with the
          attention and dedication it deserves. Our collaborative approach
          ensures that authors’ perspectives and opinions are respected
          throughout the publishing process. Your work matters. Let us
          contribute in sharing it.
        </p>
      </div>
      <div className="my-10 md:max-w-5xl md:mx-auto mx-5">
        <h2 className="md:text-5xl newsreader text-3xl text-center font-[400]">
          Our Mission
        </h2>
        <div className="w-[80px] my-3 mx-auto h-[2px] bg-[#DC143C]"></div>
        <p className="text-lg pt-6 text-neutral-500 text-center newsreader leading-8">
          Our mission is to publish high-quality books that inspire, educate and
          entertain, while making a meaningful contribution to the improvement
          of the reading culture in our society. We believe in the
          transformative power of books and are committed to producing works
          that meet the highest standards. By prioritising quality in every
          aspect of our work, we aim to publish books that are durable and
          appealing.
        </p>
      </div>
      <div className="md:max-w-6xl md:mx-auto mx-5 my-7">
        <div className="flex justify-between md:flex-row flex-col items-center my-10">
          <div className="">
            <h2 className="text-4xl font-[600]">Who We Are</h2>
            <h3 className="text-lg font-[500] text-neutral-500 italic">
              Team of book-loving professionals
            </h3>
            <p className="md:w-[80%] w-full text-base font-normal leading-8 text-gray-700 pt-3">
              Our dedicated team of publishing professionals is committed to
              helping authors realize their very best work and to finding
              innovative new ways of bringing stories and ideas to audiences
              worldwide.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center md:my-10 gap-10 my-20">
          <div className="w-full md:w-[40%] text-right md:pt-0 pt-7 transform scale-x-[1] md:ml-auto">
            <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
            <h3 className="text-lg font-medium text-neutral-500 italic">
              Finding new ways of bringing stories
            </h3>
            <p className="text-base font-normal leading-8 text-gray-700 pt-3">
              We scan the new media landscape and spot budding authors indeed,
              many have done so and have already brought new talent to the
              market with number one bestsellers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 md:gap-y-0 md:grid-cols-5 my-20">
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
      {/* <Leader /> */}
    </React.Fragment>
  );
};

export default About;
