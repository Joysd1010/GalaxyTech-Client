import React, { useState } from "react";
import { FaCaretRight, FaGreaterThan } from "react-icons/fa";
import DeskTop from "./NavItem/DeskTop";

import NavTemplate from "./NavItem/NavTemplate";

import Components from "./NavItem/Components";


const NavBar = () => {
  // ========================== to do ================
 
  // -------------- dropdown json ------------------
  const MonitorJson = [
    { value: "Dell", path: "monitor/Dell" },
    { value: "Asus", path: "monitor/Asus" },
    { value: "Samsung", path: "monitor/Samsung" },
    { value: "BenQ", path: "monitor/BenQ" },
    { value: "ViewSonic", path: "monitor/ViewSonic" },
    { value: "All", path: "monitor" },
    
  ];
  const LaptopJson = [
    { value: "Dell", path: "laptop",param:'Dell' },
    { value: "Asus", path: "laptop",param:'Asus' },
    { value: "Lenovo", path: "laptop",param:'Lenovo' },
    { value: "MSI", path: "laptop", param:'MSI'},
    { value: "Hp", path: "laptop", param:'HP'},
    { value: "All", path: "laptop",param:'All' },
    
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
  const MotherJson = [
    { value: "Asus", path: "mother/Asus" },
    { value: "MSI", path: "mother/MSI" },
    { value: "GigaByte", path: "mother/GigaByte" },
    { value: "ASRock", path: "mother/ASRock" },
    { value: "BioStar", path: "mother/BioStar" },
    { value: "EVGA", path: "mother/EVGA" },
    { value: "All", path: "mother" },
    
  ];
  const PhoneJson = [
    { value: "Apple", path: "phone/Adata" },
    { value: "Samsung", path: "phone/CorsAir" },
    { value: "Redmi", path: "phone/G.Skill" },
    { value: "Realme", path: "phone/Team" },
    
    { value: "All", path: "phone" },
    
  ];
  const ComponentJson = [
    { value: "Processor", path: "processor" },
    { value: "Ram", path: "ram" },
    { value: "Storage (SSD) ", path: "ssd" },
    { value: "Storage (HDD) ", path: "hdd" },
    { value: "Monitor", path: "monitor" },
    { value: "Graphics Card", path: "gpu" },
    { value: "Casing", path: "casing" },
    { value: "Casing Cooler", path: "casingCooler" },
    { value: "CPU Cooler", path: "cpuCooler" },
    { value: "MotherBoard", path: "mother" },
    { value: "PSU", path: "psu" },
    { value: "All", path: "AllComponent" },
    
  ];
  const SSDJson = [
    { value: "Adata", path: "ssd/Adata" },
    { value: "Samsung", path: "ssd/Samsung" },
    { value: "Hp", path: "ssd/Hp" },
    { value: "WesternDigital", path: "ssd/WesternDigital" },
    { value: "Sandisk", path: "ssd/Sandisk" },    
    { value: "All", path: "ssd" },
    
  ];
  const SpeakerJson = [
    { value: "JBL", path: "speaker/JBL" },
    { value: "Razer", path: "speaker/Razer" },
    { value: "Sony", path: "speaker/Sony" },
    { value: "Logitech", path: "speaker/Logitech" },
    { value: "All", path: "speaker" }
    
  ];
  const UpsJson = [
    { value: "CyberPower", path: "ups/CyberPower" },
    { value: "ARC", path: "ups/ARC" },
    { value: "Tripple Lite", path: "ups/tripple" },   
    { value: "All", path: "ups" },
    
  ];
  const RamJson = [
    { value: "Adata", path: "ram/Adata" },
    { value: "CorsAir", path: "ram/CorsAir" },
    { value: "G.Skill", path: "ram/G.Skill" },
    { value: "Team", path: "ram/Team" },
    { value: "Kingston", path: "ram/Kingston" },
    { value: "Crucial", path: "ram/Crucial" },
    { value: "All", path: "ram" },
    
  ];
  
  const AccessoriesJson = [
    { value: "Headphone", path: "Headphone" },
    { value: "Mouse", path: "mouse" },
    { value: "Keyboard", path: "keyboard" },
    { value: "All", path: "accessories" },
    
  ];



  return (
    <div className=" px-20 z-40 py-3 shadow-md sticky flex justify-around gap-x-8">
      

      <DeskTop />
      <NavTemplate element={LaptopJson} header={{value:'Laptop',path:'laptop',param:'All'}}/>
      <NavTemplate element={PhoneJson} header={{value:'Phone',path:'phone'}}/>
      <NavTemplate element={ComponentJson} header={{value:'Components',path:'AllComponent'}}/>      
      <NavTemplate element={MonitorJson} header={{value:'Monitor',path:'monitor'}}/>
      <NavTemplate element={GPUJson} header={{value:'Graphics Card',path:'gpu'}}/>
      <NavTemplate element={RamJson} header={{value:'RAM',path:'ram'}}/>
      <NavTemplate element={MotherJson} header={{value:'MotherBoard',path:'mother'}}/>
      <NavTemplate element={SpeakerJson} header={{value:'Speaker',path:'speaker'}}/>
      <NavTemplate element={SSDJson} header={{value:'SSD',path:'ssd'}}/>
      <NavTemplate element={UpsJson} header={{value:'UPS',path:'ups'}}/>
      <NavTemplate element={AccessoriesJson} header={{value:'Accessories',path:'accessories'}}/>
    </div>
  );
};

export default NavBar;
