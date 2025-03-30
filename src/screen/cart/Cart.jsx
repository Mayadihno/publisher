import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "../../assets/icons/emptycart.jpg";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <div className="my-10">
        {cartItems?.length === 0 ? (
          <div className="md:w-1/2 w-full mx-auto mt-10 bg-[#FEFFFE] shadow-lg">
            <div className=" flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[200px] h-[250px] rounded-full my-3">
                  <img
                    src={image}
                    alt="empty cart image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="md:text-lg text-base font-medium">
                  Your cart is empty!
                </h4>
                <h5 className="newsreader md:text-base text-sm font-normal pt-5">
                  Browse our store and discover our best book for you!
                </h5>
                <div className="my-10">
                  <button className="bg-[#B10C62] py-3 text-white px-10">
                    <Link to={"/store"}>Start Shopping</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CartItems />
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;

