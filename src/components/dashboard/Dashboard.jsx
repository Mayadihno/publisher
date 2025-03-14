import { useNavigate } from "react-router-dom";
import AdminNavbar from "../admin/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminNavbar />
      <div className=" bg-gray-100 md:py-4 py-2 w-full md:px-24 px-5">
        <h1 className="text-3xl font-bold my-6 text-center">Admin Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Total Books</h2>
            <p className="text-3xl font-bold text-blue-600">50</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Total Books</h2>
            <p className="text-3xl font-bold text-blue-600">50</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-10 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              📖 <strong>John Doe</strong> uploaded a new book:{" "}
              <em>React for Beginners</em>
            </li>
            <li className="border-b pb-2">
              📝 <strong>Jane Smith</strong> updated book details for{" "}
              <em>Mastering Firebase</em>
            </li>
          </ul>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/admin-upload")}
            className="bg-blue-600 cursor-pointer text-white p-4 rounded shadow-md text-lg font-semibold hover:bg-blue-700"
          >
            📤 Upload Book
          </button>
          <button
            onClick={() => navigate("/admin-books")}
            className="bg-green-600 text-white cursor-pointer p-4 rounded shadow-md text-lg font-semibold hover:bg-green-700"
          >
            📚 Books
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
