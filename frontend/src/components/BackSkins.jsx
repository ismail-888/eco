import React from "react";
import { useNavigate } from "react-router-dom";

const BackSkins = ({ image, title, price, pack, size, designs, id }) => {
  const navigate = useNavigate();
  return (
    <div className="px-3 md:w-full w-[80%] mx-auto  bg-white border rounded-lg mb-4 ">
      <div className="relative flex w-full md:justify-between justify-around items-center ">
        <div className="w-28 h-32">
          <img
            src={image}
            alt="BackSkins"
            className="w-full h-full object-scale-down mix-blend-multiply"
          />
        </div>
        {/* <img
          src={"/assets/new.png"}
          alt="newProduct"
          className={`absolute w-[60px] h-[60px] -right-5 -top-1 ${
            newP ? "block" : "hidden"
          }`}
        /> */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[16px] font-bold text-txtGray">{title}</h1>
          <div className="flex justify-center items-center gap-2 flex-wrap ">
            <span className=" text-[14px] text-txtGray font-bold">
              ${price}
            </span>

            <span className=" text-[14px] text-txtGray">Pack: {pack}</span>
            <span className=" text-[14px] text-txtGray">
              Designs: {designs}
            </span>
            <span className=" text-[14px] text-txtGray">Size: {size}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/backskinsDetails/${id}`)}
          className="bg-bgBlue font-bold text-white w-[80px] h-[30px] rounded-lg text-sm "
        >
          VIEW
        </button>
      </div>
    </div>
  );
};

export default BackSkins;
