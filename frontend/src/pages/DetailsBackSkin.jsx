import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const imageArray = [
  "/assets/tab.jpg",
  "/assets/tab1.jpg",
  "/assets/tab2.jpg",
  "/assets/tab3.jpg",
  "/assets/tab2.jpg",
];

const DetailsBackSkin = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mainSwiperRef = useRef(null); // Reference for the main Swiper

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.slideTo(index); // Manually slide the main Swiper
    }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <div className="flex flex-col items-center">
        <h1 className="text-txtGray text-xl font-bold mt-5">
          Leather-Like Series 1
        </h1>

        {/* Main Image Swiper */}
        <Swiper
          ref={mainSwiperRef} // Assign ref to the main Swiper
          initialSlide={activeImageIndex} // Set initial slide based on the active index
          onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)} // Update active index on slide change
          pagination={{ clickable: true }}
          className="my-5 w-[300px] h-[300px]  lg:w-96 lg:h-96 md:w-[300px] md:h-[300px]  rounded-3xl"
        >
          {imageArray.map((imgURL, i) => (
            <SwiperSlide key={i} className="bg-zinc-100  ">
              <img
                src={imgURL}
                alt={`slide-${i}`}
                className="h-full w-full object-scale-down mix-blend-multiply"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Progress Indicator */}
        <div className="flex gap-2 ">
          {imageArray.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 ${i === activeImageIndex ? "bg-bgBlue" : "bg-white"}`}
              style={{ transform: "skew(20deg)" }}
            />
          ))}
        </div>
        
        <p className="mt-5 font-bold text-red-700 text-lg">OUT OF STOCK</p>
      </div>

      {/* Thumbnail Swipeable Slider */}
      <div className="mt-1 w-[50%] sm:w-[100%] md:w-[70%] lg:w-[50%] xl:w-[50%] mx-auto">
        <h2 className="font-bold text-txtGray text-xl p-3 mx-3">Select Design:</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          className="overflow-hidden"
        >
          {imageArray.map((imgURL, i) => (
            <SwiperSlide key={i} onClick={() => handleThumbnailClick(i)}>
              {/* ring-1 ring-blue-300 */}
              <div
                className={`h-[150px] w-[100px] lg:w-[100px] xl:w-[120px] xs:w-[90px] bg-white rounded p-1 mx-3 
                     ${activeImageIndex === i ? "" : ""} 
                `}
              >
                <img
                  src={imgURL}
                  className="w-full h-full object-cover mix-blend-multiply cursor-pointer"
                  alt={`thumbnail-${i}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col">
          <div className="flex md:justify-between justify-evenly p-3 mx-3">
            <div className="flex items-center gap-5 font-thin text-lg">
              <p>Pack: 5pcs</p>
              <p>Designs: 4</p>
              <p>Size: S</p>
            </div>
            <p className="font-bold text-xl mr-2">$5</p>
          </div>
          <button className="bg-bgBlue font-bold text-white w-[400px] mx-auto p-3 rounded-xl  md:w-[380px] xs:w-[200px] xs:mb-3 ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBackSkin;
