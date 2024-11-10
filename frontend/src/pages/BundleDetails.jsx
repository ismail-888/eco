// import { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";

import FrontFilmsCard from "../components/FrontFilmsCard";

const BundleDetails = () => {
  //   const { id } = useParams();
  // const [bundleData, setBundleData] = useState(null);

  // useEffect(() => {
  //     const fetchData = async () => {
  //       // Fetch data based on the ID
  //       const response = await fetch(`/api/bundles/${id}`);
  //       const data = await response.json();
  //       setBundleData(data);
  //     };

  //     fetchData();
  //   }, [id]);

  return (
    <div className="w-full min-h-screen bg-zinc-100 p-2 ">
      <div className="flex flex-col px-4 ">
        <div className="flex flex-col justify-center items-center m-5 mx-4  ">
          <h1 className="text-txtGray font-bold text-2xl mb-2">UV BUNDLE</h1>
          <div className="bg-white w-[400px]  md:w-full rounded-2xl pb-2">
            <img
              src="/assets/bundle.png"
              alt="bundle"
              className="w-full h-[300px] object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mx-5 py-3 md:justify-end">
          <span className="relative text-gray-900">
            $105
            <span className="absolute inset-0 h-[2px] bg-red-500 top-1/2 transform -translate-y-1/2"></span>
          </span>
          <span className="font-bold text-txtGray">$75</span>
        </div>
        <button className=" bg-bgBlue mx-auto font-bold w-[400px] text-white py-3  rounded-xl md:w-full">
          ADD TO CART
        </button>

        <div className="my-7">
          <h2 className="font-bold mb-3">Description:</h2>
          <ul className="list-disc pl-5">
            <li>1 Box UV Clear (20pcs): $35</li>
            <li>1 Box UV Matte (20pcs): $40</li>
            <li>UV Machine: $30 (Included for FREE)</li>
          </ul>
        </div>
        <h2 className="font-bold text-txtGray text-lg mb-3">Bundle content:</h2>
      </div>
      <FrontFilmsCard
        image={"/assets/test1.png"}
        price={"35"}
        title={"UV Privacy Glass-Like Film"}
        pack={"10pcs"}
        thickness={"0.28mm"}
        size={"XL"}
        btxt={"VIEW"}
      />
      <FrontFilmsCard
        image={"/assets/test1.png"}
        price={"35"}
        title={"UV Privacy Glass-Like Film"}
        pack={"10pcs"}
        thickness={"0.28mm"}
        size={"XL"}
        btxt={"VIEW"}
      />
      <FrontFilmsCard
        image={"/assets/test1.png"}
        price={"35"}
        title={"UV Privacy Glass-Like Film"}
        pack={"10pcs"}
        thickness={"0.28mm"}
        size={"XL"}
        btxt={"VIEW"}
      />
    </div>
  );
};

export default BundleDetails;
