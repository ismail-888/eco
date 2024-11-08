import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // "mx-auto container px-4"

  return (
    <footer className="w-full px-4 pb-4 bg-bgBlue text-white relative">
      <div className="relative z-10">
        <p className="text-2xl py-4 font-bold">Follow Rock Space Lebanon</p>
        <div className="flex justify-start items-center gap-4 mb-4">
          <img
            src={"/assets/f_whats.png"}
            alt="whats-image"
            className="w-[40px]"
          />
          <img
            src={"/assets/f_insta.png"}
            alt="instagram-image"
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
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <Link to={"/aboutus"}>
            <span className="font-bold">About us</span>
          </Link>
          <Link to={"/reviews"}>
            <span className="font-bold">Reviews</span>
          </Link>
          <Link to={"/whyus"}>
            <span className="font-bold">Why choose us</span>
          </Link>
          <Link to={"/warranty"}>
            <span className="font-bold">Warranty</span>
          </Link>
        </div>
      </div>
      <div className="absolute top-16 right-2 z-0">
        <img
          src="/assets/f-logo.png"
          alt="footer-logo"
          className="w-[200px] h-[180px] object-contain" // Adjust the size as needed
        />
      </div>
    </footer>
  );
};

export default Footer;
