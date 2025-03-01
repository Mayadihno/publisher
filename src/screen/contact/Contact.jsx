import React, { useState } from "react";
import MapComponent from "../../static/map/Map";
import { socialMedia } from "../../components/footer/data";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    checked: false,
  });
  const [error, setError] = useState("");

  const address =
    "No 9, Adedeji Okubadejo Street, Molete-Challenge, Scout Camp Road, Ibadan, Oyo State.";
  const position = [7.3696, 3.8836];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.checked) {
      setError("You must agree to data collection before submitting.");
      return;
    }
    console.log("Form Submitted:", formData);
    setFormData({});
    setError("");
  };

  return (
    <React.Fragment>
      <div className="bg-[#000] py-10 text-center text-white">
        <h3 className="text-5xl">Contacts</h3>
      </div>
      <div className="">
        <MapComponent address={address} position={position} />
        <div className="md:max-w-7xl md:mx-auto mx-4 my-16">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div
              className="col-span-1"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="md:text-5xl text-3xl font-[400]">Contact Us</h2>
              <div className="w-[80px] my-2 h-[2px] bg-[#DC143C]"></div>
              <div className="my-6 space-y-5 newsreader text-lg font-[500] leading-8">
                <h3>
                  No 9, Adedeji Okubadejo Street,Molete-Challenge, Scout Camp
                  Road, Ibadan, Oyo State.
                </h3>
                <h3>0803-344-3562</h3>
                <h3>caligatapub@yahoo.co.uk</h3>
                <div className="flex flex-row space-x-8">
                  {socialMedia.map((item) => (
                    <Link
                      to={item.link}
                      className="flex items-center"
                      key={item.id}
                    >
                      <div className="w-[40px] text-[#DC143C] hover:text-[#fff] hover:border-[#DC143C] hover:bg-[#DC143C] flex justify-center items-center h-[40px] border-2 border-[#fff] rounded-full p-1">
                        <item.icon size={25} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-span-2"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col items-center justify-center md:space-y-0 space-x-0 space-y-7 md:space-x-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex md:flex-row my-8 flex-col items-center justify-center md:space-y-0 space-x-0 space-y-7 md:space-x-5">
                  <input
                    type="tel"
                    placeholder="Mobile Phone number"
                    className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="w-full h-[150px] p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4]"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="checked"
                      className="md:mt-1 mt-0 w-[15px] h-[15px]"
                      checked={formData.checked}
                      onChange={handleChange}
                    />
                    <p className="pl-2 md:text-sm text-xs">
                      I agree that my submitted data is being collected and
                      stored.
                    </p>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="md:mt-10 mt-8 md:justify-start flex justify-center">
                  <button
                    type="submit"
                    className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
