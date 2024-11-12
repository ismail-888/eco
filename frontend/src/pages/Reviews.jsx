import React, { useState, useEffect } from "react";
import ImageWithText from "../components/ImageWithText";
import ReviewsPart from "../helper/ReviewsPart";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "./ReviewForm";


const Reviews = () => {
  const [activeModal, setActiveModal] = useState(false);  // Modal state
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("no-scroll");
      setFade(true);
    } else {
      setFade(false);
      setTimeout(() => document.body.classList.remove("no-scroll"), 300);
    }
  }, [activeModal]);

  const closeModal = () => setActiveModal(false);

  const handleReviewSubmit = (reviewData) => {
    console.log("Review Submitted:", reviewData);
    // Handle your review submission logic here (e.g., API call)
  };

  return (
    <div>
      <ImageWithText text={"Reviews"} />
      <div className="w-full min-h-screen bg-zinc-100">
        <ReviewsPart />

        <div className="flex justify-center items-center">
          <button
            className="bg-bgBlue font-bold text-white w-[50%] h-[45px] md:w-[80%] text-xl rounded-lg mb-10"
            onClick={() => setActiveModal(true)}  // Open modal
          >
            Write Your Review
          </button>
        </div>

        {[1, 2, 3, 4, 5].map((i) => (
          <ReviewCard key={i} />
        ))}

        <p className="px-3 pt-3 pb-10 w-[90%] mx-auto text-bgBlue font-bold text-lg cursor-pointer max-w-[1200px]">
          See all reviews (50)
        </p>

        {/* Review Modal */}
        {activeModal && (
          <div
            className={`fixed inset-0 bg-zinc-100 text-white z-50 flex justify-center items-center md:items-baseline px-5 py-10 ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            <ReviewForm onClose={closeModal} onSubmit={handleReviewSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
