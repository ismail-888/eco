import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ImageWithText from "../components/ImageWithText";
import FrontFilmsCard from "../components/FrontFilmsCard";
import BackSkins from "../components/BackSkins";
import Tutorials from "../components/Tutorials";

const Video = () => {
  const [activeComponent, setActiveComponent] = useState("FrontFilmsCard");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const slideIndex = swiper.activeIndex;
    if (slideIndex === 0) setActiveComponent("FrontFilmsCard");
    else if (slideIndex === 1) setActiveComponent("BackSkins");
    else if (slideIndex === 2) setActiveComponent("Tutorials");
  };

  const handleButtonClick = (component, index) => {
    setActiveComponent(component);
    swiperInstance.slideTo(index);
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      <ImageWithText text={"Videos"} />
      <div className="md:w-full w-[80%] mx-auto ">
        <div className="px-5 py-2">
          <div className="flex md:justify-between justify-around items-center p-4 font-bold text-txtGray text-lg">
            <button
              className={
                activeComponent === "FrontFilmsCard"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("FrontFilmsCard", 0)}
            >
              ZC1-Max
            </button>
            <button
              className={
                activeComponent === "BackSkins"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("BackSkins", 1)}
            >
              Skin Printer
            </button>
            <button
              className={
                activeComponent === "Tutorials"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("Tutorials", 2)}
            >
              Tutorials
            </button>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance} // Save swiper instance to control it programmatically
          >
            <SwiperSlide>
              <>
                <FrontFilmsCard
                  image={"assets/machine.png"}
                  price={"35"}
                  title={"UV Privacy Glass-Like Film"}
                  pack={"10pcs"}
                  thickness={"0.28mm"}
                  size={"XL"}
                  btxt={"ADD"}
                />
                <FrontFilmsCard
                  image={"assets/machine.png"}
                  price={"35"}
                  title={"UV Privacy Glass-Like Film"}
                  pack={"10pcs"}
                  thickness={"0.28mm"}
                  size={"XL"}
                  newP={true}
                  btxt={"ADD"}
                />
                <FrontFilmsCard
                  image={"assets/machine.png"}
                  price={"35"}
                  title={"UV Privacy Glass-Like Film"}
                  pack={"10pcs"}
                  thickness={"0.28mm"}
                  size={"XL"}
                  discount={true}
                  newPrice={20}
                  btxt={"ADD"}
                />
                <FrontFilmsCard
                  image={"assets/machine.png"}
                  price={"35"}
                  title={"UV Privacy Glass-Like Film"}
                  pack={"10pcs"}
                  thickness={"0.28mm"}
                  size={"XL"}
                  btxt={"ADD"}
                />
              </>
            </SwiperSlide>

            <SwiperSlide>
              {[1, 2, 3, 4].map((i) => (
                <BackSkins
                  key={i}
                  id={i}
                  image={"assets/machine.png"}
                  price={"5"}
                  title={"Leather-Like Series 1"}
                  pack={"5pcs"}
                  designs={"4"}
                  size={"S"}
                />
              ))}
            </SwiperSlide>

            <SwiperSlide>
              {[1, 2, 3, 4].map((i) => (
                <Tutorials
                  key={i}
                  id={i}
                  image={"/assets/10.jpg"}
                  title={"1.Pain points"}
                  subtitle={"Problems all mobile stores are facing"}
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Video;
