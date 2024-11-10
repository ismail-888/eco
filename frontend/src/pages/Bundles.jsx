import React from "react";
import ImageWithText from "../components/ImageWithText";
import CardBundle from "../components/CardBundle";

// testing
const bundleData = [
  {
    id: 1,
    text: "UV Bundle",
    subtext: "Free UV Machine",
    price: "30",
    image: "/assets/bundle.png",
    pack: "5pcs",
    size: "S",
    desc: [
      "1 Box UV Clear (20pcs): $35",
      "1 Box UV Matte (20pcs): $40",
      "UV Machine: $30 (Included for FREE)",
    ],
  },
  {
    id: 2,
    text: "Another Bundle",
    subtext: "Discounted Price",
    price: "25",
    image: "/assets/bundle.png",
    pack: "10pcs",
    size: "M",
    desc: [
      "1 Box UV Clear (20pcs): $35",
      "1 Box UV Matte (20pcs): $40",
      "UV Machine: $30 (Included for FREE)",
    ],
  },
];

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
          {bundleData.map((bundle) => (
            <CardBundle
              key={bundle.id}
              {...bundle}
             
            />
          ))}
          {/* <CardBundle
            text={"Flexible Films Top version Bundle"}
            subtext={"Shop Now and get a FREE Matte Box"}
            price={"25"}
            image={"/assets/bundle.png"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Bundles;
