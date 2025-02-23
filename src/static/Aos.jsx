/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 3000,
      delay: 300,
      once: true,
    });
  }, []);

  return <>{children}</>;
};
