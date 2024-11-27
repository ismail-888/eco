import React from "react";

const Tutorials = ({ image, title, subtitle }) => {
  return (
    <div className="bg-white  rounded-xl  flex items-center gap-5 p-3 w-full max-w-4xl mx-auto mb-4">
      {/* Video Section */}
      <div className="w-[20%] md:h-[160px] h-full relative">
        {/* Video Thumbnail */}
        <a href="/target-page" className="block">
          <div className="w-full md:h-[160px] h-full">
            <img
              src={image}
              alt="Video Thumbnail"
              className="w-full h-full object-fill "
            />
          </div>
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/assets/video-icon.png"
              alt="video-icon"
              className="h-20 "
            />
          </div>
        </a>
      </div>

      {/* Text Section */}
      <div className="flex flex-1 flex-col ">
        <h2 className="text-xl font-bold text-txtGray">{title}</h2>
        <p className="text-sm  text-txtGray">{subtitle}</p>
      </div>
    </div>
  );
};

export default Tutorials;
