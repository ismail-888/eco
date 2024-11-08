import React from "react";

const AgentCard = ({ image, title, subtitle }) => {
  return (
    <div className="px-3 w-full  bg-white border rounded-2xl mb-4 ">
      <div className="flex w-full justify-start items-center ">
        <img src={image} alt="frontFilms" className="w-[100px] h-[150px] " />

        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[16px] font-bold text-txtGray">{title}</h1>
          <p className="text-txtGray text-xs">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
