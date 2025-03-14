import React, { useState } from "react";
import AdminNavbar from "./Header";

const UploadBooks = () => {
  const [bookData, setBookData] = useState({
    image: "",
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
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Uploaded:", bookData);
  };
  return (
    <React.Fragment>
      <AdminNavbar />
      <div className="p-6 my-6">
        <h1 className="text-3xl text-center font-bold mb-6">Upload a Book</h1>
        <form
          onSubmit={handleSubmit}
          className=" p-6 rounded shadow-md w-[70%] mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="yearOfPublishing"
              placeholder="Year of Publishing"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="numberOfPages"
              placeholder="Number of Pages"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="format"
              placeholder="Format"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="categories"
              placeholder="Categories"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="p-4 outline-none rounded-md shadow-sm bg-[#F5F5F4] w-full"
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
          <button
            type="submit"
            className="mt-4 cursor-pointer bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Upload Book
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadBooks;
