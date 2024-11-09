import React from "react";

const CardBundle = ({ text, subtext, image, price }) => {
  return (
    <div className="relative flex flex-col justify-center items-center px-3 pt-4 pb-5 md:w-full w-[500px] mx-auto bg-white  rounded-2xl mb-4 my-5 ">
      <h1 className="font-bold text-txtGray text-xl">{text}</h1>
      <p className="font-light text-txtGray ">
        {subtext} <span className="font-bold">(${price})</span>
      </p>
      <img src={image} alt="bundle" className="bg-white w-[400px] h-[400px]" />
      <button className="absolute bottom-3 bg-bgBlue font-bold text-white p-4 rounded-lg text-[20px]">
        SHOP NOW
      </button>
    </div>
  );
};

export default CardBundle;
