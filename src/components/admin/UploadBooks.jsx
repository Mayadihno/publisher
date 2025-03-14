import React, { useState } from "react";
import AdminNavbar from "./Header";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const UploadBooks = () => {
  const [bookData, setBookData] = useState({
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
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storage = getStorage();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookData.image) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);
    try {
      const storageRef = ref(
        storage,
        `images/${bookData.image.name + uuidv4()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, bookData.image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Upload Progress: ${progress}%`);
        },
        (error) => {
          console.error("Upload Error:", error);
          toast.error(error.message);
          setLoading(false);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "books"), {
            ...bookData,
            image: imageUrl,
            timestamp: Date.now(),
          });

          toast.success("Book uploaded successfully!");
          setLoading(false);
          navigate("/admin-dashboard", { replace: true });
        }
      );
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Error uploading book");
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="md:p-6 p-3 my-6">
        <h1 className="md:text-3xl text-xl text-center font-bold mb-6">
          Upload a Book
        </h1>
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
                placeholder={placeholder}
                className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
                onChange={handleChange}
                required
              />
            ))}
            <input
              type="file"
              name="image"
              accept=".jpeg,.png,.jpg"
              className="p-4 outline-none cursor-pointer rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            className="w-full h-[150px] mt-6 p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4]"
            onChange={handleChange}
            required
          ></textarea>

          {bookData.image && (
            <div className="w-[150px] h-[150px] my-3">
              <img
                src={URL.createObjectURL(bookData.image)}
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
              {loading ? "Uploading..." : "Upload Book"}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadBooks;
