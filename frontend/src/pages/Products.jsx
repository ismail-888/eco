import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ImageWithText from "../components/ImageWithText";
import FrontFilmsCard from "../components/FrontFilmsCard";
import BackSkins from "../components/BackSkins";
import Machines from "../components/Machines";

const Products = () => {
  const [activeComponent, setActiveComponent] = useState("FrontFilmsCard");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const slideIndex = swiper.activeIndex;
    if (slideIndex === 0) setActiveComponent("FrontFilmsCard");
    else if (slideIndex === 1) setActiveComponent("BackSkins");
    else if (slideIndex === 2) setActiveComponent("Machines");
  };

  const handleButtonClick = (component, index) => {
    setActiveComponent(component);
    swiperInstance.slideTo(index);
  };

  return (
    <div>
      <ImageWithText text={"Products"} />
      <div className="w-full min-h-screen bg-zinc-100 ">
        <div className="px-5 py-2">
          <div className="flex justify-between items-center p-4 font-bold text-txtGray text-lg">
            <button
              className={
                activeComponent === "FrontFilmsCard"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("FrontFilmsCard", 0)}
            >
              Front Films
            </button>
            <button
              className={
                activeComponent === "BackSkins"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("BackSkins", 1)}
            >
              Back Skins
            </button>
            <button
              className={
                activeComponent === "Machines"
                  ? "border-b-2 border-cyan-600 text-bgBlue"
                  : ""
              }
              onClick={() => handleButtonClick("Machines", 2)}
            >
              Machines
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
                <Machines
                  key={i}
                  image={"assets/machine.png"}
                  price={"350"}
                  title={"Smart Plotter ZC1-Max"}
                  subtitle={"on-Demand front and back films cutter"}
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
