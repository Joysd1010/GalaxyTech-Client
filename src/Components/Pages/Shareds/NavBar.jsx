import React, { useState } from "react";
import { FaCaretRight, FaGreaterThan } from "react-icons/fa";
import DeskTop from "./NavItem/DeskTop";
import Laptop from "./NavItem/Laptop";
import Monitor from "./NavItem/Monitor";
import Phone from "./NavItem/Phone";
import Components from "./NavItem/Components";
// import NavLinks from './Navlink';

const NavBar = () => {
  // ========================== to do ================
  // # use of navlink in all menu items 
  // # make all h1 to dropdown menu
  // # make hover effect on all text to red
  // -------------- dropdown activated style handler ------------------
  
  return (
    <div className=" px-20 py-3 shadow-md sticky flex gap-x-10">
    {/* ******************************* Desktop navigation *************************** */}
    <DeskTop/>
    <Laptop/>
    <Components/>
    <Phone/>
    
    <Monitor/>
  </div>
);
};

export default NavBar;