import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const MonitorCard = ({ state }) => {
  
  const {
    price,
    modelname,
    resolution,
    portsDetails,
    features,
  } = state.key;
  const { size, type,  refreshRate,  } = state.display;
 
   const getRandomIndex = (max) => Math.floor(Math.random() * max);
  const getRandomData = () => {
    const randomIndex = getRandomIndex(state.imageLinks.length);
    return state.imageLinks[randomIndex];
  };
  const image = getRandomData();

  return (
    <div className=" bg-white flex flex-col justify-between rounded-md px-3">
      <div className=" my-5 w-full mx-auto overflow-hidden">
      <img src={image}
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div>
        <hr className=" " />
        <Link to={`/laptopId/${state._id}`}>
        <h1 className=" font-extrabold py-2 text-sm hover:underline hover:text-red-600 duration-200">
          {modelname} {size} {refreshRate} {resolution === '2560x1440'
    ? 'QHD'
    : resolution === '3440x1440'
    ? '4K'
    : resolution === '1920x1440'
    ? '2K'
    : 'FHD'} Monitor
        </h1></Link>
      </div>
      <div className=" flex flex-col gap-2 pt-2 pb-4 text-sm text-[#666767]">
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1> Resolution : {" "}
  {resolution === '2560x1440'
    ? 'QHD'
    : resolution === '3440x1440'
    ? '4K'
    : resolution === '1920x1440'
    ? '2K'
    : 'FHD'}
</h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>
          <h1>
            {" "}
            Display : {type}, {refreshRate}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            
            Ports : {portsDetails.map((port, index) => (
    <span key={index}>
      {port}
      {index < portsDetails.length - 1 ? ', ' : ''}
    </span>
  ))}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
  Features: {features.map((feature, index) => (
    <span key={index}>
      {feature}
      {index < features.length - 1 ? ', ' : ''}
    </span>
  ))}
</h1>
        </div>
      </div>
      <div className="py-5">
        <hr />
        <h1 className=" text-xl text-center font-extrabold py-3  text-[#F04B22]">
          {price.discount} $
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




export default MonitorCard;