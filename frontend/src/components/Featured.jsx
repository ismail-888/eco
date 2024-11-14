import React from "react";

const Featured = ({ text, image }) => {
  return (
    <div className="flex flex-col justify-center px-3 bg-white rounded-2xl mx-auto my-5 w-[90%]">
    {/* Text alignment adjusted for small screens */}
    <p className="text-txtGray font-bold text-lg sm:text-[16px] sm:text-left text-center  pt-3 px-3">{text}</p>
  
    {/* Image size adjusted for small screens */}
    <div className="w-full h-[300px] md:h-[250px] sm:h-[300px] sm:w-full overflow-hidden flex justify-center sm:px-5">
      <img
        src={image}
        alt="featured"
        className="object-contain md:object-cover  w-full h-full sm:w-[95%] sm:h-[95%] mix-blend-multiply"
      />
    </div>
  </div>
  );
};

export default Featured;
