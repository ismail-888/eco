import React from "react";

const VideoCard = ({ image, text, vButton }) => {
  return (
    <div className="w-[50%] mx-auto md:w-full flex justify-evenly items-center gap-4 px-2 bg-white rounded-2xl mb-2">
      <div className="relative  h-[350px]">
        <img
          src={image}
          alt="test"
          className="w-[350px] p-3 h-full py-5  rounded-[10%] object-fill "
        />
        <button>
          <img
            src={vButton}
            alt="video"
            className={`${
              vButton ? "" : "hidden"
            } absolute top-[35%] right-[33%] sm:right-[20%] `}
          />
        </button>
      </div>
      <p className=" text-xl ">{text}</p>
    </div>
  );
};

export default VideoCard;
