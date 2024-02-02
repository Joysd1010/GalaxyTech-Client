import React, { useState } from "react";
import { RxTriangleRight } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
const NavTemplate = ({ element, header }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpen = () => {
    setIsDropdownOpen(true);
  };
  const handleClose = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <div className="dropdown dropdown-hover ">
        <label
          tabIndex={0}
          className={` hover:text-[#FF0303] ${
            !isDropdownOpen ? " text-black" : "text-[#FF0303]"
          } text-base font-semibold`}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <NavLink to={header.path} state={header.param}>
            {header.value}
          </NavLink>
        </label>
        <div
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          tabIndex={0}
          className="dropdown-content z-[1]  flex flex-col   shadow-md bg-base-100 border-t-4 border-t-[#FF0303] w-36"
        >
          {element.map((item, index) => (
            <Link key={index} to={item.path} state={item.param}>
              {" "}
              <div
                
                className=" hover:text-white text-sm hover:bg-[#FF0303] py-1 px-3"
              >
                {item.value}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavTemplate;