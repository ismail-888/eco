import React from "react";
import ImageWithText from "../components/ImageWithText";
import AgentCard from "../components/AgentCard";

const WhyUs = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <ImageWithText text={"Why choose us"} />

    <div className="">
    <div className="px-5 py-2">
        <h1 className="font-bold text-txtGray text-2xl p-3">6 Reasons To Choose Us</h1>

        {[1,2,3,4,5,6].map((i)=>(
            <AgentCard
            key={i}
              image={"/assets/agent.jpg"}
              title={"Exclusive Agent"}
              subtitle={"chouesmo shouesmo shouesmo nusa hdsa j vkdhkm"}
            />
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhyUs;
