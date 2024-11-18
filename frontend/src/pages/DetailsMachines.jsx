import React, { useState } from "react";

const DetailsMachines = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col">
      <div className="flex flex-col justify-center items-center py-5 gap-20">
        <h1 className="font-bold text-txtGray text-2xl ">
          Smart Plotter ZC1-Max
        </h1>
        <div className="w-[300px] h-[300px]">
          <img
            src={"/assets/printer.png"}
            className="w-full h-full object-contain"
            alt="machine"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-around items-center w-[90%] gap-5 mx-auto">
        <p className="text-txtGray font-extralight text-sm">
          On-Demand front and back films cutter
        </p>
        <p className="text-txtGray font-bold text-xl">$350</p>
      </div>

      <button className="bg-bgBlue text-white w-[500px] md:w-[85%]  p-2 flex justify-center items-center mx-auto rounded-md font-bold mt-3">
        ADD TO CART
      </button>

      <div className="flex flex-col  justify-center items-start px-10 gap-10 my-10">
        {/* Benefits */}
        <div className="">
          <h1 className="font-bold text-xl text-zinc-800">Benefits:</h1>
          <ol className="list-decimal ml-4 text-txtGray">
            <li>Increase Sales</li>
            <li>Reduce Inventory</li>
            <li>Save Space</li>
            <li>Minimize Waste</li>
            <li>Time Efficiency</li>
          </ol>
        </div>
        {/* Specifications */}
        <div>
          <h1 className="font-bold text-xl text-zinc-800">Specifications:</h1>
          <ol className="list-decimal ml-4 text-txtGray">
            <li>
              Cuts protections up to 16 inches (watches, phones, tablets and
              laptops)
            </li>
            <li>Built-in touch screen.</li>
            <li>Automatically updates with the latest devices.</li>
            <li> Uses less than 0.5A.</li>
          </ol>
        </div>
      </div>

      <div
        style={{ border: "none" }}
        className="bg-white w-[50%] md:w-[96%] h-[300px] mx-auto my-3 rounded-2xl overflow-hidden"
      >
        <iframe
          src={`https://www.youtube.com/embed/0oaCkVIZHl8${
            isPlaying ? "?autoplay=1" : ""
          }`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col justify-center items-center w-[90%] mx-auto my-5">
        <p className="text-txtGray px-3">
          <span className="text-txtGray font-bold text-lg">Note:</span> To learn
          more details, watch the videos explaining the cutting machine by
          clicking the “Watch Now” button below.
        </p>
        <button
          onClick={handlePlayVideo}
          className="bg-bgBlue text-white w-[500px] md:w-full  p-2 flex justify-center items-center mx-auto rounded-md font-bold mt-3"
        >
          WATCH NOW
        </button>
      </div>
    </div>
  );
};

{
  /* <video
          src="/assets/bleeding.mp4"
          controls
          type="video/mp4"
          className="w-full h-full object-cover rounded-2xl"
        /> */
}
export default DetailsMachines;
