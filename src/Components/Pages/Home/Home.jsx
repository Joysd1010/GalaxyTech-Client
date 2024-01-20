import React from "react";
import Slider from "./Slider";
import Transition from "./Transition";
import Timer from "./Timer";

const Home = () => {
  return (
    <div>
      <div className="flex gap-2 mx-5">
        <div className="w-2/3">
          <Slider />
        </div>
        <div className=" w-full">
          <img
            className="h-52"
            src="https://img.freepik.com/premium-vector/cyber-monday-sale-banner-template_7087-895.jpg"
            alt=""
          />
          <h1 className="text-white bg-blue-700 text-2xl text-center rounded-lg my-3 py-3 mr-3">
            -:Offers time left:-
          </h1>
          <Timer />
          <img
            className=" w-[420px]"
            src="https://i.postimg.cc/pV3k6vvj/new-items.png"
            alt=""
          />
        </div>
      </div>
      <Transition/>
    </div>
  );
};

export default Home;
