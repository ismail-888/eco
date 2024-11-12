import React from "react";
import ImageWithText from "../components/ImageWithText";
import ReviewsPart from "../helper/ReviewsPart";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  return (
    <div>
      <ImageWithText text={"Reviews"} />
      <div className="w-full min-h-screen bg-zinc-100 ">
        {/* --------------------------------- */}
        <ReviewsPart />
        {/* -------------------------------------------------- */}

        <div className="flex justify-center items-center">
          <button className="bg-bgBlue font-bold text-white w-[50%] h-[45px] md:w-[80%] text-xl rounded-lg mb-10">
            Write Your Review
          </button>
        </div>

        {[1, 2, 3, 4, 5].map((i) => (
          <ReviewCard key={i} />
        ))}

        <p className="px-3 pt-3 pb-10 w-[90%] mx-auto text-bgBlue font-bold text-lg cursor-pointer max-w-[1200px]">See all reviews (50)</p>
      </div>
    </div>
  );
};

export default Reviews;
