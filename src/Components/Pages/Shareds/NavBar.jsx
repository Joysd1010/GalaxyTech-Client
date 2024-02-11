import React, { useState } from "react";
import { FaCaretRight, FaGreaterThan } from "react-icons/fa";
import DeskTop from "./NavItem/DeskTop";
import NavTemplate from "./NavItem/NavTemplate";

const NavBar = () => {
  // ========================== to do ================

  // -------------- dropdown json ------------------
  const MonitorJson = [
    { value: "Dell", path: "monitor", param: "Dell" },
    { value: "Asus", path: "monitor", param: "Asus" },
    { value: "Samsung", path: "monitor", param: "Samsung" },
    { value: "BenQ", path: "monitor", param: "BenQ" },
    { value: "ViewSonic", path: "monitor", param: "ViewSonic" },
    { value: "All", path: "monitor", param: "All" },
  ];
  const LaptopJson = [
    { value: "Dell", path: "laptop", param: "Dell" },
    { value: "Asus", path: "laptop", param: "Asus" },
    { value: "Lenovo", path: "laptop", param: "Lenovo" },
    { value: "MSI", path: "laptop", param: "MSI" },
    { value: "Hp", path: "laptop", param: "HP" },
    { value: "All", path: "laptop", param: "All" },
  ];
  const GPUJson = [
    { value: "Asus", path: "gpu", param:'Asus' },
    { value: "Nvidia", path: "gpu", param:'Nvidia' },
    { value: "Gigabyte", path: "gpu", param:'Gigabyte' },
    { value: "AMD", path: "gpu", param:'AMD' },
    { value: "MSI", path: "gpu", param:'MSI' },
    { value: "Zotak", path: "gpu", param:'Zotak' },
    { value: "All", path: "gpu" ,param:'All'},
  ];
  const PhoneJson = [
    { value: "Apple", path: "phone" ,param:'Apple' },
    { value: "Samsung", path: "phone" ,param:'Samsung' },
    { value: "Redmi", path: "phone" ,param:'Redmi' },
    { value: "Realme", path: "phone" ,param:'Realme' },

    { value: "All", path: "phone",param:'All' },
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
  const ComponentJson = [
    { value: "Processor", path: "All", param: "Processor" },
    { value: "Ram", path: "All", param: "Ram" },
    { value: "Storage (SSD) ", path: "All", param: "SSD " },
    { value: "Storage (HDD) ", path: "All", param: "HDD " },
    { value: "Graphics Card", path: "All", param: "Card" },
    { value: "Casing", path: "All", param: "Casing" },
    { value: "Casing Cooler", path: "All", param: "Cooler" },
    { value: "CPU Cooler", path: "All", param: "CpuCooler" },
    { value: "MotherBoard", path: "All", param: "MotherBoard" },
    { value: "PSU", path: "All", param: "PSU" },
    { value: "All", path: "All", param: "All Components" },
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
    { value: "All", path: "speaker" },
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
      <NavTemplate
        element={LaptopJson}
        header={{ value: "Laptop", path: "laptop", param: "All" }}
      />
      <NavTemplate
        element={PhoneJson}
        header={{ value: "Phone", path: "phone", param: "All" }}
      />
      <NavTemplate
        element={ComponentJson}
        header={{
          value: "Components",
          path: "AllComponent",
          param: "All Components",
        }}
      />
      <NavTemplate
        element={MonitorJson}
        header={{ value: "Monitor", path: "monitor", param: "All" }}
      />
      <NavTemplate
        header={{ value: "Graphics Card", path: "gpu", param: "All" }}
        element={GPUJson}
      />
      <NavTemplate element={RamJson} header={{ value: "RAM", path: "ram" }} />
      <NavTemplate
        element={MotherJson}
        header={{ value: "MotherBoard", path: "mother" }}
      />
      <NavTemplate
        element={SpeakerJson}
        header={{ value: "Speaker", path: "speaker" }}
      />
      <NavTemplate element={SSDJson} header={{ value: "SSD", path: "ssd" }} />
      <NavTemplate element={UpsJson} header={{ value: "UPS", path: "ups" }} />
      <NavTemplate
        element={AccessoriesJson}
        header={{ value: "Accessories", path: "accessories" }}
      />
    </div>
  );
};

export default NavBar;
