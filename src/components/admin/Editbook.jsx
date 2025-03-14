import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import AdminNavbar from "./Header";

const Editbook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    publisher: "",
    yearOfPublishing: "",
    numberOfPages: "",
    isbn: "",
    format: "",
    author: "",
    categories: "",
    price: "",
    genre: "",
    language: "",
    description: "",
    image: null,
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const docRef = doc(db, "books", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBook(docSnap.data());
        } else {
          setError("Book not found");
        }
      } catch (err) {
        console.log(err);
        setError("Error fetching book details");
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.publisher) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, "books", id);
      const updatedBook = { ...book };
      await updateDoc(docRef, updatedBook);
      navigate("/admin-books");
    } catch (err) {
      console.log(err);
      setError("Error updating book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="md:p-6 p-3 my-6">
        <h1 className="md:text-3xl text-xl text-center font-bold mb-6">
          Edit Book
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded shadow-md md:w-[70%] w-full mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "title", placeholder: "Title" },
              { name: "publisher", placeholder: "Publisher" },
              {
                name: "yearOfPublishing",
                placeholder: "Year of Publishing",
                type: "number",
              },
              {
                name: "numberOfPages",
                placeholder: "Number of Pages",
                type: "number",
              },
              { name: "isbn", placeholder: "ISBN" },
              { name: "format", placeholder: "Format" },
              { name: "author", placeholder: "Author" },
              { name: "categories", placeholder: "Categories" },
              { name: "price", placeholder: "Price" },
              { name: "genre", placeholder: "Genre" },
              { name: "language", placeholder: "Language" },
            ].map(({ name, placeholder, type = "text" }) => (
              <input
                key={name}
                type={type}
                name={name}
                value={book[name] || ""}
                placeholder={placeholder}
                className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                onChange={handleChange}
                required
              />
            ))}
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={book.description || ""}
            className="w-full h-[150px] mt-6 p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4]"
            onChange={handleChange}
            required
          ></textarea>

          {book.image && (
            <div className="w-[150px] h-[150px] my-3">
              <img
                src={book.image}
                alt="Book Cover"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`mt-4 cursor-pointer text-white py-2 px-20 rounded ${
                loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Book"}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Editbook;
