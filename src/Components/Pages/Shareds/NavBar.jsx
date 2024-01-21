import React, { useState } from "react";
import { FaCaretRight, FaGreaterThan } from "react-icons/fa";
import DeskTop from "./NavItem/DeskTop";

import NavTemplate from "./NavItem/NavTemplate";

import Components from "./NavItem/Components";


const NavBar = () => {
  // ========================== to do ================
  // # use of navlink in all menu items
  // # make all h1 to dropdown menu
  // # make hover effect on all text to red
  // -------------- dropdown jsons ------------------
  const MonitorJson = [
    { value: "Dell", path: "monitor/Dell" },
    { value: "Asus", path: "monitor/Asus" },
    { value: "Samsung", path: "monitor/Samsung" },
    { value: "BenQ", path: "monitor/BenQ" },
    { value: "ViewSonic", path: "monitor/ViewSonic" },
    { value: "All", path: "monitor" },
    
  ];
  const LaptopJson = [
    { value: "Dell", path: "laptop/Dell" },
    { value: "Asus", path: "laptop/Asus" },
    { value: "Lenovo", path: "laptop/Lenovo" },
    { value: "MSI", path: "laptop/MSI" },
    { value: "Hp", path: "laptop/Hp" },
    { value: "All", path: "laptop" },
    
  ];
  const PhoneJson = [
    { value: "Dell", path: "laptop/Dell" },
    { value: "Asus", path: "laptop/Asus" },
    { value: "Lenovo", path: "laptop/Lenovo" },
    { value: "MSI", path: "laptop/MSI" },
    { value: "Hp", path: "laptop/Hp" },
    { value: "All", path: "laptop" },
    
  ];
  const GPUJson = [
    { value: "Nvidia", path: "gpu/Nvidia" },
    { value: "Asus", path: "gpu/Asus" },
    { value: "Gigabyte", path: "gpu/Gigabyte" },
    { value: "AMD", path: "gpu/AMD" },
    { value: "MSI", path: "gpu/MSI" },
    { value: "Zotak", path: "gpu/Zotak" },
    { value: "All", path: "gpu" },
    
  ];
  const RamJson = [
    { value: "Nvidia", path: "gpu/Nvidia" },
    { value: "Asus", path: "gpu/Asus" },
    { value: "Gigabyte", path: "gpu/Gigabyte" },
    { value: "AMD", path: "gpu/AMD" },
    { value: "MSI", path: "gpu/MSI" },
    { value: "Zotak", path: "gpu/Zotak" },
    { value: "All", path: "gpu" },
    
  ];
  
  const AccessoriesJson = [
    { value: "Headphone", path: "Headphone" },
    { value: "Mouse", path: "mouse" },
    { value: "Keyboard", path: "keyboard" },
    { value: "All", path: "accessories" },
    
  ];



  return (
    <div className=" px-20 z-40 py-3 shadow-md sticky flex justify-around gap-x-8">
      

      <DeskTop />8888
      <NavTemplate element={LaptopJson} header={{value:'Laptop',path:'laptop'}}/>8888
      <NavTemplate element={MonitorJson} header={{value:'Phone',path:'phone'}}/>
      <Components />8888
      <NavTemplate element={MonitorJson} header={{value:'Monitor',path:'monitor'}}/>8888
      <NavTemplate element={GPUJson} header={{value:'Graphics Card',path:'gpu'}}/>8888
      <NavTemplate element={GPUJson} header={{value:'RAM',path:'ram'}}/>88
      <NavTemplate element={GPUJson} header={{value:'MotherBoard',path:'mother'}}/>88
      <NavTemplate element={GPUJson} header={{value:'Speaker',path:'gpu'}}/>88
      <NavTemplate element={GPUJson} header={{value:'SSD',path:'ssd'}}/>88
      <NavTemplate element={GPUJson} header={{value:'UPS',path:'ups'}}/>88
      <NavTemplate element={AccessoriesJson} header={{value:'Accessories',path:'accessories'}}/>8888
    </div>
  );
};

export default NavBar;
