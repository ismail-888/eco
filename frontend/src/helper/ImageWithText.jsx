import React from 'react'

const ImageWithText = ({text }) => {
    return (
        <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
      {/* Background image */}
      <img
        src={'/assets/photoHeader.jpg'}
        alt="background"
        className="w-full h-full object-cover"
      />
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40 ">
          <span className="text-white text-[150px] xs:text-5xl sm:text-6xl md:text-5xl font-bold text-opacity-60 mt-5 ">{text}</span>
        </div>
      </div>
    );
  };

export default ImageWithText