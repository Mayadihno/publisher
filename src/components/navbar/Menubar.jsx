/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const Menubar = ({ setShow }) => {
  return (
    <div className="flex flex-col space-y-2 mt-3">
      {navItems.map((item) => (
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          key={item.id}
          className={`${
            location.pathname === item.link
              ? "text-[#DC143C] bg-[#f1f1f1]"
              : "text-black"
          } text-lg font-semibold py-2.5 px-4 hover:text-[#DC143C]`}
        >
          <Link onClick={() => setShow(false)} to={item.link}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menubar;
