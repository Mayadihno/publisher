import React, { useState } from "react";
import image from "../../assets/logo.png";
import { footerData, quickMenu, socialMedia } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { ICONS } from "../../static/icons/icons";
const Footer = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("accessToken", user?.user?.accessToken);
      setLoading(false);
      setShow(false);
      navigate("/admin-dashboard", { replace: true });
      e.target.reset();
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Incorrect Email or Password");
        setLoading(false);
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="bg-[#171717] w-full h-fit text-white">
        <div className="flex justify-center flex-col items-center pt-10">
          <Link to={"/"} className="w-[100px] h-[100px]">
            <img
              src={image}
              alt=""
              className=" w-full h-full object-contain rounded-full"
            />
          </Link>
          <h3 className="md:text-2xl text-xl font-[500] leading-8 pt-3">
            Caligata Publishing Company Limited
          </h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:pt-10 pt-8 ml-6 md:max-w-7xl md:mx-auto">
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
          <div className="md:ml-[-100px] ml-0 my-8 md:my-0">
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
            <h5
              onClick={() => setShow(true)}
              className="text-white pt-4 newsreader cursor-pointer text-base font-[600] hover:text-[#DC143C]"
            >
              Admin Login
            </h5>
          </div>
          <div className="">
            <h2 className="pb-5 text-xl">SOCIAL MEDIA</h2>
            <div className="flex flex-row space-x-8">
              {socialMedia.map((item) => (
                <Link
                  to={item.link}
                  className="flex items-center"
                  key={item.id}
                  target="_blank"
                >
                  <div className="w-[40px] text-[#DC143C] hover:text-[#fff] hover:border-[#DC143C] hover:bg-[#DC143C] flex justify-center items-center h-[40px] border-2 border-[#fff] rounded-full p-3">
                    <item.icon size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" border-t-[1px] md:mt-10 mt-5 border-[#fff] max-w-9xl mx-auto">
          <p className="text-center md:text-sm text-xs text-gray-400 py-5">
            Copyright © {new Date().getFullYear()} CALIGATA PUBLISHING COMPANY
            LIMITED. All Rights Reserved
          </p>
        </div>
      </div>
      {show && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-80 flex justify-center items-center">
          <div className="relative w-[95%] md:w-[30%] h-[40vh] md:h-[50vh] bg-white rounded-md p-4 shadow-sm md:mt-0 mt-[-50px] ">
            <ICONS.close
              size={30}
              className="absolute cursor-pointer right-3 top-3 z-50"
              onClick={() => setShow(false)}
            />

            <div className="pt-10">
              <h3 className="text-xl font-[500] text-center text-black">
                Admin Login
              </h3>
              <form onSubmit={handleLogin} className="pt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative pt-6">
                  <input
                    type={!visible ? "password" : "text"}
                    autoComplete="current-password"
                    placeholder="Password"
                    className="px-4 py-3 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <ICONS.eyelock
                      className="absolute top-9 right-2 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <ICONS.eye
                      className="absolute top-9 right-2 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                {error && (
                  <div className="text-red-500 text-sm py-1">{error}</div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="checked"
                      className="md:mt-1 mt-0 w-[15px] h-[15px]"
                    />
                    <p className="pl-2 md:text-sm text-xs">Remember me</p>
                  </div>
                  <h3 className="text-sm cursor-pointer font-[500] text-[#DE324D]">
                    Forget Password?
                  </h3>
                </div>
                <div className="md:mt-5 mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                  >
                    {loading ? "Please wait..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
