import React from "react";
import { MdLaptop } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { FaMemory } from "react-icons/fa6";
import { BsKeyboard, BsMotherboard } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";
import { PiMonitor, PiMouseLight } from "react-icons/pi";
import { BsGpuCard } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";

const Category = () => {
  return (
    <div className=" pt-5">
      <h1 className=" text-3xl text-center">Featured Category</h1>
      <h1 className=" text-xl text-center">Get Your Desired Product from Featured Category!</h1>
      <div className="pt-5 grid grid-cols-5 mx-28 gap-3">
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <MdLaptop size={50} />
          <h1 className="text-xl ">Laptop</h1>
        </div>
        <div
          className=' gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slateimport { ImHeadphones } from "react-icons/im";
border-slate-600 border-2 rounded-md'
        >
          <CiMobile3 size={50} />
          <h1 className="text-xl ">Phone</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <FaMemory size={50} />
          <h1 className="text-xl ">RAM</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <BsGpuCard size={50} />
          <h1 className="text-xl ">GPU</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <PiMonitor size={50} />
          <h1 className="text-xl ">Monitor</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <GrStorage size={50} />
          <h1 className="text-xl ">Storage</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <PiMouseLight size={50} />
          <h1 className="text-xl ">Mouse</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <BsKeyboard size={50} />
          <h1 className="text-xl ">KeyBoard</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <ImHeadphones size={50} />
          <h1 className="text-xl ">HeadPhone</h1>
        </div>
        <div className=" gap-1 flex flex-col items-center py-3 hover:scale-105 duration-500 bg-slate-200 border-slate-600 border-2 rounded-md">
          <BsMotherboard size={50} />
          <h1 className="text-xl ">MotherBoard</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
