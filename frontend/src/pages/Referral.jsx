import React from "react";
import ImageWithText from "../components/ImageWithText";

const Referral = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 ">
      <ImageWithText text={"Referral Program"} />
      <div className="px-4  py-20  ">
        <div className="flex justify-around items-center gap-4  bg-white rounded-2xl ">
          <div className="relative ">
            <img
              src={"/assets/test1.png"}
              alt="test"
              className="w-[250px] h-[350px] rounded-2xl "
            />
            <button>
              <img
                src={"/assets/video-icon.png"}
                alt="video"
                className=" absolute top-[35%] right-[30%] sm:right-[20%]"
              />
            </button>
          </div>
          <p className=" text-xl pr-3 ">Rockspace machines in one place</p>
        </div>
        <div className="bg-white rounded-2xl mt-10 px-2 py-3 flex flex-col gap-2 font-medium">
          <span>
            We’re excited to introduce our new Referral Program, designed to
            help you recover the cost of your cutting machine! Here’s how it
            works:
          </span>
          <span>
            1. Get Your Referral Code: One month after your purchase, you will
            receive a unique referral code.
          </span>
          <span>
            2. Share and Save: Share this code with other mobile store owners.
            When they use your code to purchase a cutting machine, they get a
            $25 discount, and you receive a $50 credit.
          </span>
          <span>
            3. Use Up to Three Times: Your referral code can be used up to three
            times, allowing you to earn up to $150 in credits!
          </span>
          <span>
            This program is designed to help you return a signicant portion of
            your investment in the cutting machine. By referring others, you’re
            not only spreading the word about a great product but also earning
            credits that can be used for future purchases.
          </span>
          <span>
            Start sharing yourcode after your first month and watch the savings
            add up.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Referral;
