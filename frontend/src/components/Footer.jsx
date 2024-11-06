import React from "react";

const Footer = () => {
  // "mx-auto container px-4"

  return (
    <footer className="w-full px-4 pb-4 bg-bgBlue text-white bg-cover bg-center" style={{backgroundImage:"url('/assets/f-bg.png')"}} >
      <div>
        <p className="text-2xl py-4 font-bold">Follow Rock Space Lebanon</p>
        <div className="flex justify-start items-center gap-4 mb-4 ">
          <img
            src={"/assets/f_whats.png"}
            alt="whats-image"
            className="w-[40px]"
          />
          <img
            src={"/assets/f_facebook.png"}
            alt="facebook-image"
            className="w-[40px]"
          />
          <img
            src={"/assets/f_tiktok.png"}
            alt="tiktok-image"
            className="w-[40px]"
          />
          <img
            src={"/assets/f_insta.png"}
            alt="instagram-image"
            className="w-[40px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <span className="font-bold">About us</span>
          <span className="font-bold">Reviews</span>
          <span className="font-bold">Why choose us</span>
          <span className="font-bold">Warranty</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
