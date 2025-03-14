import React, { useState } from "react";
import { ICONS } from "../../static/icons/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";

const Header = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
      {location.pathname.includes("/admin") ? null : (
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
              <h5
                onClick={() => setShow(true)}
                className="text-white bg-[#DE324D] rounded-sm shadow-md px-3 py-1 cursor-pointer text-base font-semibold"
              >
                Login
              </h5>
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
      )}
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

export default Header;
