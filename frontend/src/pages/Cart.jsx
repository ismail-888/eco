// import React, { useState } from "react";
import CartItemCard from "../components/CartItemCard";
// import { MdDelete } from "react-icons/md";

const Cart = ({ closeModal }) => {
    // const [data, setData] = useState([3]);

    // const increaseQty = async (id, qty) => {
    //     const response = await fetch(SummaryApi.updateCartProduct.url, {
    //       method: SummaryApi.updateCartProduct.method,
    //       credentials: "include",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         _id: id,
    //         quantity: qty + 1,
    //       }),
    //     });
    //     const responseData = await response.json();
    
    //     if (responseData.success) {
    //       fetchData();
    //     }
    //   };
    

    //   const decraseQty = async (id, qty) => {
    //     if (qty >= 2) {
    //       const response = await fetch(SummaryApi.updateCartProduct.url, {
    //         method: SummaryApi.updateCartProduct.method,
    //         credentials: "include",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           _id: id,
    //           quantity: qty - 1,
    //         }),
    //       });
    //       const responseData = await response.json();
    
    //       if (responseData.success) {
    //         fetchData();
    //       }
    //     }
    //   };

    // const deleteCartProduct = async (id) => {
    //     const response = await fetch(SummaryApi.deleteCartProduct.url, {
    //       method: SummaryApi.deleteCartProduct.method,
    //       credentials: "include",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         _id: id,
    //       }),
    //     });
    
    //     const responseData = await response.json();
    
    //     if (responseData.success) {
    //       fetchData();
    //       context.fetchUserAddToCart();
    //     }
    //   };

    // const totalQty = data.reduce(
    //     (prevValue, currentValue) => prevValue + currentValue.quantity,
    //     0
    //   );
      
    //   const totalPrice = data.reduce(
    //     (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    //     0
    //   );

  return (
    <div className="text-txtGray w-full">
      {/* Cart Header */}
      <div className="flex justify-between items-center w-full mb-3">
        <h1 className="font-bold text-3xl flex-grow text-center text-txtGray">
          Your Cart
        </h1>
        <button
          className="absolute top-6 right-4 text-txtGray text-5xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>

      {/* Cart Summary */}
      <div className="flex justify-between items-center py-3">
        <p className="font-bold px-3">3 items</p>
        <button className="bg-bgBlue font-bold text-white p-2 mr-1 rounded-lg text-sm">
          Add More
        </button>
      </div>

      {/* Cart Items */}
      <CartItemCard
        image={"assets/test1.png"}
        price={"335"}
        title={"UV Privacy Glass-Like Film "}
        pack={"5pcs"}
        size={"S"}
      />
      {/* <CartItemCard
        image={"assets/printer.png"}
        price={"150"}
        title={"UV Privacy Glass-Like Film"}
        pack={"10pcs"}
        size={"L"}
      /> */}
    </div>
  );
};

export default Cart;
