import React, { useState } from "react";
import { Link } from "react-router-dom";
import { discoveryData } from "../discovery/data";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../redux/slice";
import toast from "react-hot-toast";
import { formatCurrency } from "../../static/currencyConverter/format";

const Store = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const filteredBooks = discoveryData.filter((book) =>
    book.title.toLowerCase().includes(search.trim().toLowerCase())
  );
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      qty: 1,
      yearOfPublishing: item.yearOfPublishing,
      format: item.format,
      language: item.language,
      author: item.author,
    };
    dispatch(addProductToCart(cartItem));
    localStorage.setItem("cart", JSON.stringify([...cartItems, cartItem]));
    toast.success("Item added to cart successfully");
  };

  const handleRemove = (id) => {
    dispatch(removeProductFromCart(id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((product) => product.id !== id))
    );
  };

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
            {filteredBooks.map((item) => {
              const isExisting = cartItems.some(
                (cartItem) => cartItem.id === item.id
              );
              return (
                <div className="bg-[#f4f4f4]" key={item.id}>
                  <Link
                    to={`/book-details/${item.id}`}
                    key={item.id}
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
                      <div className="pt-3 flex justify-between items-center">
                        <p className="text-sm font-[400]">
                          Author: <span>{item.author}</span>
                        </p>
                        <p className="text-sm font-[400]">
                          Price: <span>{formatCurrency(item.price)}</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="pt-3">
                    {isExisting ? (
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="bg-[#DC143C] w-full rounded-md cursor-pointer py-2 px-4 text-white"
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-[#000] w-full rounded-md cursor-pointer py-2 px-4 text-white"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">No books found.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Store;
