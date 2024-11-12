// src/components/ReviewForm.jsx
import React, { useState } from "react";
import { Rating, Button } from "@mui/material";

const ReviewForm = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0); // Rating state
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { name, rating, review };
    onSubmit(reviewData); // Pass data back to parent
    onClose(); // Close the modal after submission
  };

  return (
    <div className="relative w-full max-w-xl bg-zinc-100 text-txtGray px-4 py-3 rounded-lg mt-0">
      <button
        onClick={onClose}
        className="absolute top-1 right-4 text-4xl font-semibold text-gray-600"
      >
        &times; {/* This is the "X" close button */}
      </button>
      <h2 className="text-2xl font-bold mb-4 mt-3 text-txtGray">
        Write Your Review
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-txtGray text-xl px-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2   rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Rating using MUI Rating component */}
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-txtGray text-xl px-1"
            htmlFor="rating"
          >
            Rating
          </label>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            precision={0.5}
            sx={{
              "& .MuiRating-icon": {
                fontSize: "3rem",
                borderColor: "#30b0c0",
              },
              "& .MuiRating-iconFilled": {
                color: "#30b0c0",
              },
              "& .MuiRating-iconEmpty": {
                color: "#30b0c0",
              },
            }}
          />
        </div>

        {/* Review Textarea */}
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-txtGray text-xl px-1"
            htmlFor="review"
          >
            Review
          </label>
          <textarea
            id="review"
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Your experience with Rock space"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-[150px]"
            sx={{
              backgroundColor: "#30b0c0",
              "&:hover": {
                backgroundColor: "#249fa0",
              },
            }}
          >
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
