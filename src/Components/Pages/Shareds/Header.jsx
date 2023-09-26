import React from "react";
import logo from "./../../../assets/Tech shop2.png";
import { BsSearch } from "react-icons/bs";
import { FaGift, FaUser } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Header = () => {



// ======================= to do ==============================
// # make all the link connected
// # Account will be conditional with user name 
// # Implementing search 


  return (
    <div className="px-10 py-3 bg-[#270722]">
      <div className="flex items-center justify-around">
        <img src={logo} className=" w-36" />
        <div >
          <input
            type="text"
            placeholder=" Search"
            className=" w-[400px] inset-x-0 inset-y-0 dark:shadow-gray-800 outline-none shadow-inner rounded-lg pl-3 py-2 "
          />
          <button className="relative right-7">
            <BsSearch />
          </button>
        </div>
        <div className=" flex items-center gap-3">
          <FaGift color="red" size={25} />
          <Link>
            <h1 className="text-lg font-bold text-white">Offers</h1>
            <p className=" text-xs text-white">Latest Offers</p>
          </Link>
        </div>
        <div className=" flex items-center gap-3">
          <div class="animate-pulse">
            <AiTwotoneThunderbolt color="red" size={25} />
          </div>

          <Link>
            <h1 className="text-lg font-bold text-white">Flash Sell</h1>
            <p className=" text-xs text-white">Special deals</p>
          </Link>
        </div>
        <div className=" flex items-center gap-3">
          <FaUser color="red" size={25} />

          <div>
            {" "}
            <h1 className="text-lg font-bold text-white">Account</h1>
            <div className="flex gap-1">
              <Link>
                {" "}
                <p className=" hover:text-red-400 text-xs text-white">Log in</p>
              </Link>
              <p className=" text-xs text-white"> Or</p>
              <Link>
                {" "}
                <p className=" hover:text-red-400 text-xs text-white">Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
        <Link>
          <button className="group relative px-5 py-2.5 inline-flex justify-center items-center  rounded-md bg-gradient-to-r from-blue-800 via-red-500 to-violet-800 tracking-wide text-base text-white font-medium antialiased overflow-hidden active:top-0.5 focus:outline-none">
            {/* button::before */}
            <span className="absolute top-1/2 left-0 w-full opacity-0 transition-all duration-300 ease-in-out transform -translate-x-full -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0">
              Custom PC
            </span>
            <span className="transition-all duration-500 ease-in-out transform group-hover:opacity-0 group-hover:translate-x-full group-hover:translate-y-0">
              PC Builder
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
