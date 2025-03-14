import React, { useEffect, useState } from "react";
import AdminNavbar from "./Header";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const q = query(collection(db, "books"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const booksData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const confirmDelete = async () => {
    if (selectedBook) {
      try {
        await deleteDoc(doc(db, "books", selectedBook.id));
        setBooks(books.filter((book) => book.id !== selectedBook.id));
        toast.success("Book delete successfully");
        setSelectedBook(null);
      } catch (error) {
        console.error("Error deleting book:", error);
        toast.error("Error deleting book");
      }
    }
  };

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="bg-gray-100 min-h-screen py-6 px-5">
        <h1 className="md:text-3xl text-xl font-bold my-6 text-center">
          All Books
        </h1>
        <div className="md:w-[85%] w-[98%] mx-auto mt-10">
          {books.length > 0 ? (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-md p-4"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-60 object-contain rounded-md"
                  />

                  <div className="mt-3 newsreader">
                    <h2 className="text-lg font-bold">{book.title}</h2>
                    <p className="text-gray-600">
                      <span className="font-semibold">Author:</span>{" "}
                      {book.author}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Publisher:</span>{" "}
                      {book.publisher}
                    </p>

                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => navigate(`/admin-edit-book/${book.id}`)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6">No books available</p>
          )}
        </div>
        {selectedBook && (
          <div className="fixed inset-0 bg-[#00000035] bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-lg font-semibold">Confirm Deletion</h2>
              <p className="text-gray-600 mt-2 text-center">
                Are you sure you want to delete
                <strong className="pl-2">{selectedBook.title}</strong>?
              </p>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedBook(null)}
                  className="px-4 cursor-pointer  py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 cursor-pointer py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Books;
