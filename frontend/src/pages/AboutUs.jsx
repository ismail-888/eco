import React from "react";
import ImageWithText from "../components/ImageWithText";
import VideoCard from "../components/VideoCard";

const AboutUs = () => {
  return (
    <div>
      <ImageWithText text={"About us"} />
      <div className="w-full min-h-screen bg-zinc-100">
        <div className="p-3">
          <h1 className=" py-4 px-3 font-bold text-txtGray text-2xl">
            Showroom
          </h1>
          <VideoCard
            image={"/assets/test1.png"}
            text={"Rockspace machines in one place"}
            vButton={"/assets/video-icon.png"}
          />
          <h1 className=" p-3 m-1 font-bold text-txtGray text-2xl">Mission</h1>
          <div className="bg-white flex flex-col p-4 gap-5 rounded-3xl">
            <p className="tracking-tighter text-md leading-tight ">
              asd asdsk scsj sh nsa dhavi ndav daivna sddn vaid nvidsfn ivnfds
              in ida idsn isdn fsd id f ibfsn ifn ifds d din
            </p>
            <p className="tracking-tighter text-md leading-tight">
              asd asdsk scsj sh nsa dhavi ndav daivna sddn vaid nvidsfn ivnfds
              in ida idsn isdn fsd id f ibfsn ifn ifds d din
            </p>
          </div>
          <h1 className=" p-3 m-1 font-bold text-txtGray text-2xl">Location</h1>

          <div className="p-4 bg-white rounded-3xl w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26324.86188286135!2d35.855022633019594!3d34.43671775862421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1731185215517!5m2!1sen!2slb"
              className="w-full h-[200px]  rounded-3xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h1 className=" p-3 m-1 font-bold text-txtGray text-2xl">
            Customers
          </h1>
          <VideoCard
            image={"/assets/lebanon-map.png"}
            text={"100+happy customers all around Lebanon"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
