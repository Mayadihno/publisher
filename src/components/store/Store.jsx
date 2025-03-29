import React, { useState } from "react";
import { Link } from "react-router-dom";
import { discoveryData } from "../discovery/data";

const Store = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = discoveryData.filter((book) =>
    book.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="bg-[#000] py-10 text-center text-white">
        <h3 className="text-5xl">Available Books</h3>
      </div>
      <div className="md:w-[80%] w-[90%] my-5 mx-auto">
        <div className="py-10">
          <input
            type="search"
            className="py-3 px-4 bg-[#f4f4f4] w-full rounded-md outline-none"
            placeholder="Search for books here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-7">
            {filteredBooks.map((item) => (
              <div className="bg-[#f4f4f4] md:py-2" key={item.id}>
                <Link
                  to={`/book-details/${item.id}`}
                  className="cursor-pointer shadow-md"
                >
                  <div className="w-full md:h-[250px] h-[460px]">
                    <img
                      src={item.image}
                      alt={`book image ${item.id}`}
                      className="w-full h-full md:object-contain object-cover transition-transform md:shadow-sm shadow-2xl duration-300 ease-in-out transform perspective-3000 md:rotate-y-30 hover:rotate-y-3"
                    />
                  </div>
                  <div className="bg-[#f4f4f4] p-3 rounded-md">
                    <h4 className="text-base font-[500]">{item.title}</h4>
                    <div className="pt-3">
                      <p className="text-sm font-[400]">
                        Author: <span>{item.author}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No books found.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Store;
