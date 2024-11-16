import { useState } from "react";

const PlaceOrder = () => {
  const [selectedOption, setSelectedOption] = useState("Order Summary Hidden"); // Default state

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 bg-zinc-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-zinc-200 px-4 py-3 rounded shadow-md">
        <select
          onChange={handleSelectChange}
          className="text-txtGray font-normal bg-transparent outline-none text-sm"
        >
          <option value="Order Summary Hidden">Hide Order Summary</option>
          <option value="Order Summary Shown">Show Order Summary</option>
        </select>
        <p className="font-bold text-lg">$835</p>
      </div>

      {/* Order Summary Content */}
      {selectedOption === "Order Summary Shown" && (
        <div className="bg-white mt-2 p-4 rounded shadow-md">
          <h2 className="font-semibold text-txtGray  mb-2">Order Summary</h2>
          <ul className="list-disc ml-5">
            <li>Item 1 - $400</li>
            <li>Item 2 - $300</li>
            <li>Taxes - $135</li>
          </ul>
        </div>
      )}

      {/* Form Section */}
      <form className="bg-zinc-100 mt-4 p-6 rounded ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-txtGray  font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="storeName" className="block text-txtGray  font-bold">
            Store Name
          </label>
          <input
            type="text"
            id="storeName"
            placeholder="Enter your store name"
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-txtGray  font-bold">
            City / Town
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city / town"
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-txtGray  font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coupon" className="block text-txtGray  font-bold">
            Coupon Code <span className="text-sm text-txtGray">(optional)</span>
          </label>
          <input
            type="text"
            id="coupon"
            placeholder="Enter your coupon code"
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-bgBlue text-white py-2 sm:w-[90%] flex justify-center items-center sm:mx-auto rounded-lg font-semibold"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
