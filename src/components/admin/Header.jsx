import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };
  return (
    <nav
      className={`py-4 md:px-24 px-2 shadow-md flex items-center justify-between bg-white text-gray-900 `}
    >
      <div className="flex items-center gap-4">
        <button className="text-2xl p-2 focus:outline-none md;block hidden">
          <FiMenu />
        </button>
        <Link to={"/admin-dashboard"} className="w-[60px] h-[40px] md:h-[50px]">
          <img
            src={image}
            alt="logo image"
            className="w-full h-full object-contain rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center md:gap-6 gap-3">
        <Link to="/admin-dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/admin-books" className="hover:text-blue-600">
          Books
        </Link>
        <Link to="/admin-upload" className="hover:text-blue-600">
          Upload Books
        </Link>
        <button
          className="bg-black py-2 cursor-pointer px-3 text-white rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
