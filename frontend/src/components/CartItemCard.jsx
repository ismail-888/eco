import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartItemCard = ({ image, title, price, size, pack, handleCheckout }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <div className="relative flex justify-center   w-full bg-white  p-2 mb-4   rounded-xl ">
        <div className=" flex w-full  items-center">
          {/* Product Image */}
          <div className="w-28 h-32">
            <img
              src={image}
              alt="frontFilms"
              className="w-full h-full object-scale-down mix-blend-multiply"
            />
          </div>

          {/* Product Info */}
          <div className="px-4 py-2 ">
            <div
              className="absolute right-2 top-1 text-red-600 rounded-full p-2 text-2xl hover:bg-red-600 hover:text-white cursor-pointer"
              //   onClick={() => {}}
            >
              <MdDelete />
            </div>

            <div className="flex flex-col ">
              <h2 className="text-md font-bold text-txtGray text-ellipsis line-clamp-1 ">
                {title}
              </h2>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                <span className="text-[14px] text-txtGray">Size: {size}</span>
                <span className="text-[14px] text-txtGray">Pack: {pack}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantity Selector and Price */}
        <div className="flex justify-center gap-3 items-end absolute right-0 bottom-0 p-2">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 mt-1">
            <button
              className="border border-zinc-900  hover:bg-zinc-500 hover:text-white  w-7 h-7 flex justify-center items-center rounded "
              onClick={handleDecrement}
            >
              <FiMinus />
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              className="border border-zinc-900  hover:bg-zinc-500 hover:text-white w-7 h-7 flex justify-center items-center rounded "
              onClick={handleIncrement}
            >
              <FiPlus />
            </button>
            {/* Total Price */}
            <span className="font-semibold text-txtGray text-lg">
              {/* ${(price * quantity).toFixed(2)} */}${price * quantity}
            </span>
          </div>
        </div>
      </div>

      <div className="border border-b-1 border-black my-5"></div>
      {/* Summary  */}
      <div className="flex justify-evenly items-center">
        <div className="h-full w-40">
          <img
            src={"/assets/cart-logo.png"}
            alt="cart"
            className="w-full h-[200px]  mix-blend-multiply"
          />
        </div>
        <div className=" text-txtGray ">
          <div className="flex  justify-between items-center gap-5">
            <span>Sub-Total</span>
            <span>$835</span>
          </div>

          <div className="flex  justify-between items-center gap-5">
            <span>Delivery</span>
            <span>$3</span>
          </div>

          <div className="border border-b-1 border-black my-1"></div>

          <div className="flex  justify-between items-center gap-5 font-bold text-lg ">
            <span>Total</span>
            <span>$835</span>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-bgBlue font-bold text-white px-5 py-2 w-full rounded-lg text-lg mt-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
