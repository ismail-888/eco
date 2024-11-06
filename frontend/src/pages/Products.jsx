import React, { useState } from "react";
import ImageWithText from "../helper/ImageWithText";
import FrontFilmsCard from "../components/FrontFilmsCard";
import BackSkins from "../components/BackSkins";
import Machines from "../components/Machines";

const Products = () => {
  const [activeComponent, setActiveComponent] = useState("FrontFilmsCard");
  return (
    <div className="w-full h-full bg-zinc-100 " >
      <ImageWithText text={"Products"} />
      <div className="px-5  py-2">
        <div className="flex justify-between items-center p-4 font-bold text-txtGray text-lg">
          <button
            className={` ${
              activeComponent === "FrontFilmsCard"
                ? "border-b-2 border-cyan-600 text-bgBlue"
                : ""
            }`}
            onClick={() => setActiveComponent("FrontFilmsCard")}
          >
            Front Films
          </button>
          <button
            className={
              activeComponent === "BackSkins"
                ? "border-b-2 border-cyan-600 text-bgBlue"
                : ""
            }
            onClick={() => setActiveComponent("BackSkins")}
          >
            Back Skins
          </button>
          <button
            className={
              activeComponent === "Machines"
                ? "border-b-2 border-cyan-600 text-bgBlue"
                : ""
            }
            onClick={() => setActiveComponent("Machines")}
          >
            Machines
          </button>
        </div>

        {activeComponent === "Machines" && (
          <Machines
            image={"assets/machine.png"}
            price={"350"}
            title={"Smart Plotter ZC1-Max"}
            subtitle={"on-Demand front and back films cutter"}
          />
        )}

        {activeComponent === "FrontFilmsCard" && (
          <>
            <FrontFilmsCard
              image={"assets/machine.png"}
              price={"35"}
              title={"UV Privacy Glass-Like Film"}
              pack={"10pcs"}
              thickness={"0.28mm"}
              size={"XL"}
            />
            <FrontFilmsCard
              image={"assets/machine.png"}
              price={"35"}
              title={"UV Privacy Glass-Like Film"}
              pack={"10pcs"}
              thickness={"0.28mm"}
              size={"XL"}
              newP={true}
            />
            <FrontFilmsCard
              image={"assets/machine.png"}
              price={"35"}
              title={"UV Privacy Glass-Like Film"}
              pack={"10pcs"}
              thickness={"0.28mm"}
              size={"XL"}
              discount={true}
              newPrice={20}
            />
            <FrontFilmsCard
              image={"assets/machine.png"}
              price={"35"}
              title={"UV Privacy Glass-Like Film"}
              pack={"10pcs"}
              thickness={"0.28mm"}
              size={"XL"}
            />
          </>
        )}

        {activeComponent === "BackSkins" && (
          <>
            {[1, 2, 3, 4].map((i) => (
              <BackSkins
                key={i}
                image={"assets/machine.png"}
                price={"5"}
                title={"Leather-Like Series 1"}
                pack={"5pcs"}
                designs={"4"}
                size={"S"}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
