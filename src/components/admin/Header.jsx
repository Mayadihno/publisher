import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import image from "../../assets/logo.png";

const AdminNavbar = () => {
  return (
    <nav
      className={`py-4 md:px-24 px-5 shadow-md flex items-center justify-between bg-white text-gray-900 `}
    >
      <div className="flex items-center gap-4">
        <button className="text-2xl p-2 focus:outline-none">
          <FiMenu />
        </button>
        <Link to={"/admin-dashboard"} className="w-[50] md:h-[50px]">
          <img
            src={image}
            alt="logo image"
            className="w-full h-full object-contain rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/admin-dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/admin-books" className="hover:text-blue-600">
          Books
        </Link>
        <Link to="/admin-upload" className="hover:text-blue-600">
          Upload Books
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
