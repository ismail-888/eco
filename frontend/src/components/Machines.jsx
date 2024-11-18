import React from "react";
import { useNavigate } from "react-router-dom";

const Machines = ({ image, price, title, subtitle,id }) => {
  const navigate=useNavigate()
  return (
    <div className="px-3 w-full  bg-white border rounded-lg mb-4 ">
      <div className="relative flex w-full justify-between items-center ">
        <div className="w-28 h-32">
          <img
            src={image}
            alt="BackSkins"
            className="w-full h-full object-scale-down mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[16px] font-bold text-txtGray">{title}</h1>
          <p className="text-txtGray text-xs">{subtitle}</p>
          <span className=" text-[14px] text-txtGray font-bold">${price}</span>
        </div>

        <button
        onClick={() => navigate(`/detailsmachine/${id}`)}
         className="bg-bgBlue font-bold text-white w-[80px] h-[30px] rounded-lg text-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Machines;
