import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Featured from "../components/Featured";

const InvImages = [
  {
    imgURL: "/assets/invest/inv1.png",
    heading: "1. Profit",
    description: "Profit is the reward for taking risks in business.",
  },
  {
    imgURL: "/assets/invest/inv2.png",
    heading: "2. Growth",
    description: "Growth is essential for staying competitive.",
  },
  {
    imgURL: "/assets/invest/inv3.png",
    heading: "3. Sustainability",
    description: "Sustainability ensures long-term success.",
  },
  {
    imgURL: "/assets/invest/inv4.png",
    heading: "4. Innovation",
    description: "Innovation drives new opportunities and advancements.",
  },
  {
    imgURL: "/assets/invest/inv5.png",
    heading: "5. Teamwork",
    description: "Teamwork is key to achieving business goals efficiently.",
  },
];

const Home = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const FeaturedItems = [
    {
      text: "UV Privacy Glass-Like Film",
      image: "/assets/tab1.jpg",
    },
    {
      text: "Anti-Glare Screen Protector",
      image: "/assets/tab2.jpg",
    },
    {
      text: "Tempered Glass Screen Protector",
      image: "/assets/tab3.jpg",
    },
    {
      text: "Matte Finish Screen Guard",
      image: "/assets/tab1.jpg",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-100 ">
      <div className="h-[20px] bg-custom-gradient-180   "></div>
      {/* kenet ta7ti md:h[80vh] */}
      <div className="h-[90vh] md:h-full  bg-custom-gradient  ">
        {/* --------------------------------- */}
        {/* <div className="relative w-full h-[200px]  ">
          <div className="flex justify-start items-center h-full">
            <div className="w-[60%] h-full  flex flex-col gap-5  pl-5 pt-3">
              <p className="text-white text-xl text-wrap font-bold ">
                SCREEN <br /> PROTECTOR <br />
                CUTTING <br />
                MACHINE
              </p>
              <span className="text-white text-sm">
                30 SEC CUTTING ON DEMAND
              </span>
            </div>
            <div className="">
              {/* <img src={'/assets/logoRight.png'} className="absolute -top-36 right-1" alt="logo"/> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>  */}
        {/* ---------------------------------------- */}

        {/* image and button section */}
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto gap-20 sm:gap-0">
          <img
            src={"/assets/machine.png"}
            className="h-[430px] w-full object-cover -mt-10"
            alt="machine"
          />
          <div className="flex w-full justify-around items-center -mt-14 mb-40 ">
            <button
              className="bg-red-800 font-semibold text-white h-[30px] w-[150px] flex items-center justify-center"
              style={{ transform: "skew(20deg)" }}
            >
              <span style={{ transform: "skew(-20deg)" }}>Shop Now</span>
            </button>

            <button
              className="bg-white font-semibold text-black h-[30px] w-[150px] flex items-center justify-center"
              style={{ transform: "skew(20deg)" }}
            >
              <span style={{ transform: "skew(-20deg)" }}>Bundles</span>
            </button>
          </div>
        </div>
      </div>

      {/* Why to invest part */}
      <div className=" relative flex justify-center items-center w-[450px] md:w-[400px] xs:w-full  mx-auto -mt-20 mb-10  ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-txtGray text-3xl font-bold">WHY TO INVEST</p>
          <span className="text-txtGray ">IN A CUTTING MACHINE</span>
        </div>
        <span className="absolute -top-26 right-12 xs:right-0 text-[#30b0c0] text-[150px]">
          ?
        </span>
      </div>

      <div className="w-[80%] h-full mx-auto pt-1">
        <div>
          {/* Dynamic Heading and Paragraph */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-txtGray text-lg">
              {InvImages[activeImageIndex]?.heading}
            </h1>
            <p>{InvImages[activeImageIndex]?.description}</p>
          </div>

          {/* Swiper Component */}
          <div className="flex flex-col items-center my-10">
            <Swiper
              initialSlide={activeImageIndex} // Initial slide based on activeImageIndex
              onSlideChange={(swiper) =>
                setActiveImageIndex(swiper.activeIndex)
              } // Update activeIndex on slide change
              pagination={{ clickable: true }} // Pagination with clickable bullets
              className="my-5 w-[300px] h-[300px] lg:w-96 lg:h-96 md:w-[300px] md:h-[300px] rounded-3xl"
            >
              {InvImages.map((item, i) => (
                <SwiperSlide key={i} className="bg-zinc-50">
                  <img
                    src={item.imgURL}
                    alt={`slide-${i}`}
                    className="h-full w-full object-scale-down mix-blend-multiply"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Progress Indicator */}
            <div className="flex gap-2">
              {InvImages.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-8 ${
                    i === activeImageIndex ? "bg-red-700" : "bg-bgBlue"
                  }`}
                  style={{ transform: "skew(20deg)" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video card */}
        <div>
          <div className="relative flex flex-col justify-center items-center px-3 pt-4 pb-5 md:w-full w-[500px] mx-auto bg-white  rounded-2xl mb-4 my-5 ">
            <h1 className="font-bold text-txtGray text-xl">KNOW EVERYTHING</h1>
            <p className="font-light text-txtGray ">ABOUT THE MACHINE</p>
            <img
              src={"/assets/test1.png"}
              alt="bundle"
              className="bg-white w-[400px] h-[400px] object-cover"
            />
            <button
              className="bg-bgBlue font-semibold text-white h-[30px] w-[200px] flex items-center justify-center my-3"
              style={{ transform: "skew(20deg)" }}
            >
              <span style={{ transform: "skew(-20deg)" }}>Watch Now</span>
            </button>
          </div>
        </div>

        {/* Featured swipe */}
        <div className="flex flex-col items-center py-5">
          <h1 className="text-txtGray text-xl font-bold">FEATURED ITEMS</h1>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 1.5,
                },
                1400: {
                  slidesPerView: 1.5,
                },
              }}
              onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)} // Update active slide index
              className="my-5"
            >
              {FeaturedItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <Featured text={item.text} image={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-2">
            {FeaturedItems.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 ${
                  i === activeImageIndex ? "bg-bgBlue" : "bg-white"
                }`}
                style={{ transform: "skew(20deg)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
