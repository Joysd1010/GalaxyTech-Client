import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const LapTopCard = ({ state }) => {
  
  const {
    discountedPrice,
    ramType,
    generation,
    modelname,
    display,
    storage,
    ram,
    specialFeatures,
  } = state.keyFeatures;
  const { brand, model, clockSpeed, cache, core, thread } = state.processor;
  const { storageType, storageSize } = state.memory;
  // const image = state.imageLinks[1]
  const image = "https://i.ibb.co/k5n3DVg/Lenovo3.png";
  return (
    <div className=" bg-white flex flex-col justify-between rounded-md px-3">
      <div className=" my-5 w-44 mx-auto overflow-hidden">
        <Link to={`laptop/${state._id}`}><img
          src={image}
          alt="drive image "
          className="transition duration-300 ease-in-out hover:scale-110"
        /></Link>
        
      </div>
      <div>
        <hr className=" " />
        <h1 className=" font-extrabold py-2 text-sm">
          {modelname} {brand} {model} {display}
        </h1>
      </div>
      <div className=" flex flex-col gap-2 pt-2 pb-4 text-sm text-[#666767]">
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            {" "}
            Processor : {brand} {model} {generation}gen ({core}C/{thread}T,{" "}
            {clockSpeed}MHz,{cache}MB L3)
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>
          <h1>
            {" "}
            RAM : {ram} GB {ramType} , Storage:{" "}
            {storageSize > 2 ? `${storageSize} MB ` : `${storageSize} TB `}{" "}
            {storageType}{" "}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            {" "}
            Display : {display} GB {ramType}{" "}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            {" "}
            Features : {specialFeatures[1]}, {specialFeatures[0]}{" "}
          </h1>
        </div>
      </div>
      <div className="py-5">
        <hr />
        <h1 className=" text-xl text-center font-extrabold py-3  text-[#F04B22]">
          {discountedPrice} $
        </h1>
        <div className=" flex gap-2 px-16 text-sm py-2 rounded-md  text-blue-700 hover:text-white hover:bg-blue-700 transition duration-500 bg-indigo-50">
          <IoMdCart size={20} /> <h1> Buy Now</h1>
        </div>
        <div className=" flex gap-2 px-14 text-sm py-2 rounded-md mt-2 text-[#666767] hover:bg-slate-100 duration-500 ">
          <FaCartPlus size={20} /> <h1> Add to Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default LapTopCard;
