import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../static/data";

const NavItems = () => {
  const location = useLocation();

  return (
    <div className="flex space-x-16">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`${
            location.pathname === item.link
              ? "text-[#DC143C] border-b-[2px]"
              : "text-black"
          } text-lg font-semibold hover:text-[#DC143C]`}
        >
          <Link to={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
