import React from "react";
import ImageWithText from "../components/ImageWithText";
import CardBundle from "../components/CardBundle";

const Bundles = () => {
  return (
    <div>
      <ImageWithText text={"Bundles"} />
      <div className="w-full min-h-screen bg-zinc-100">
        <div className="px-5 py-2 ">
          <div>
            <p className="font-bold text-txtGray">
              Note:{" "}
              <span className="font-light">
                These bundles are only available once
              </span>
            </p>
          </div>

          <CardBundle
            text={"UV Bundle"}
            subtext={"Shop Now and get a FREE UV  Machine"}
            price={"30"}
            image={"/assets/bundle.png"}
          />
          <CardBundle
            text={"Flexible Films Top version Bundle"}
            subtext={"Shop Now and get a FREE Matte Box"}
            price={"25"}
            image={"/assets/bundle.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Bundles;
