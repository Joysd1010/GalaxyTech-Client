import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LapTopCard from "./GpuCard";
import { FaHome } from "react-icons/fa";
import GpuCard from "./GpuCard";

const Gpu = () => {
  const axiosPoint = useAxiosPublic();
  const location = useLocation();
  const [AllGpu, setGpu] = useState([]);
  const [UseGpu, setUseGpu] = useState([]);
  const [Range, setRange] = useState(0);
  const [MinPrice, setMinPrice] = useState(0);
  const [CurrentPage, setPage] = useState(1);
  const postPerPage = 12;
  const [filterState, setStateNumber] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(0);
  const param = location.state;
  const gpuType = ["GDDR5", "GDDR6", "GDDR6X"];
  const gpuMemorySize = [4, 6, 8, 10, 12, 16, 24];

  const setCurrentPost = () => {
    const start = (CurrentPage - 1) * postPerPage;
    const end = postPerPage * CurrentPage;

    setUseGpu(AllGpu.slice(start, end));
  };

  const handlePageChange = (newPage) => {
    console.log("this page", newPage);
    setPage(newPage);
  };

  useEffect(() => {
    setCurrentPost();
  }, [CurrentPage]);

  const generatePageNumbers = (totalPages, currentPage) => {
    const pageNumbers = [];

    if (currentPage > 1) {
      pageNumbers.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="prev-btn underline hover:text-red-600"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      );
    } else {
      pageNumbers.push(
        <button key="prev" className="prev-btn btn-disabled text-gray-400">
          Previous
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            i === currentPage
              ? "active text-white px-3 bg-red-600 rounded-md"
              : ""
          }
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <button
          key="next"
          onClick={() => {
            let pageNow = CurrentPage + 1;
            handlePageChange(pageNow);
          }}
          className="next-btn underline hover:text-red-600"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      );
    } else {
      pageNumbers.push(
        <button key="next" className="next-btn btn-disabled text-gray-400">
          Next
        </button>
      );
    }

    return pageNumbers;
  };
  const getAllGpu = async () => {
    try {
      const response = await axiosPoint.get("/gpu");

      setGpu(response.data);
      setUseGpu(response.data.slice(0, 12));
      setMinPrice(
        Math.min(
          ...response.data.map((item) => item.keyFeatures.price.discount)
        )
      );
      setMaxPrice(
        Math.max(
          ...response.data.map((item) => item.keyFeatures.price.discount)
        )
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };

  const getGpuByBrand = async (parameter) => {
    try {
      const response = await axiosPoint.get(`/gpu/${parameter}`);
      console.log(response.data);
      setGpu(response.data);
      setUseGpu(response.data.slice(0, 12));
      setMinPrice(
        Math.min(
          ...response.data.map((item) => item.keyFeatures.price.discount)
        )
      );
      setMaxPrice(
        Math.max(
          ...response.data.map((item) => item.keyFeatures.price.discount)
        )
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };
  //------------------------Price filter-----------------
  const handleOnchange = (value) => {
    setRange(value);
    setUseGpu(
      AllGpu.filter((item) => item.keyFeatures.price.discount <= value).slice(
        0,
        12
      )
    );
  };
  //-----------------------------Finding the chipSet filtered gpu---------------------------------
  const handleChip = (chip) => {
    setUseGpu(
      AllGpu.filter((item) => item.keyFeatures.chipset.startsWith(chip))
    );
  };

  //-------------------------UserDefinedFilter--------------------

  const HandleChoice = (e, container, attribute, value) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      setStateNumber(filterState + 1);
      const filteredArray = AllGpu.filter(
        (item) => item[container][attribute] == value
      );
      setUseGpu([...filteredArray]);
      console.log(filterState);
    } else {
      setStateNumber(filterState - 1);
      setUseGpu(AllGpu);
      console.log(filterState);
    }
  };

  useEffect(() => {
    console.log(filterState);
    setStateNumber(filterState);
  }, [filterState]);
  //-------------------------Shorting------------------------------------
  console.log(filterState);
  const handleSortByPrice = async (event) => {
    const sortBy = parseInt(event.target.value);

    switch (sortBy) {
      case 2:
        const sortedByPriceAsc = await shortingAsc(UseGpu);
        setUseGpu(sortedByPriceAsc);
        break;
      case 3:
        const sortedByPriceDesc = shortingDesc(UseGpu);
        setUseGpu(sortedByPriceDesc);
        break;
      default:
        break;
    }
  };

  const shortingAsc = async (laptop) => {
    const filterGpu = [...laptop].sort(
      (a, b) => a.keyFeatures.price.discount - b.keyFeatures.price.discount
    );
    return filterGpu;
  };

  const shortingDesc = (laptop) => {
    const filterGpu = [...laptop].sort(
      (a, b) => b.keyFeatures.price.discount - a.keyFeatures.price.discount
    );
    return filterGpu;
  };

  //-----------------------fetching data-------------------------
  useEffect(() => {
    if (param === "All") {
      getAllGpu();
    } else {
      getGpuByBrand(param);
    }
    setCurrentPost();
  }, [param]);

  return (
    <div className="bg-indigo-100 px-10 py-5 grid grid-cols-5 gap-2">
      <div className=" flex flex-col gap-2">
        {/*-------------------------- Price range adjuster-------------------------------- Intel*/}

        <div className=" bg-white rounded-md">
          <h1 className=" text-lg font-medium py-2 px-5 "> Price Range</h1>
          <hr />
          <div className="px-5 py-3">
            <div className=" flex justify-between px-2">
              <p>{MinPrice}$</p>
              <p>{MaxPrice}$</p>
            </div>
            <input
              onChange={(event) => handleOnchange(event.target.value)}
              type="range"
              min={MinPrice}
              max={MaxPrice}
              defaultValue={MaxPrice}
              className="range border-2 bg-white  range-error "
            />
          </div>

          <div className="px-5 pb-2 text-center">
            <h1> {Range == 0 ? "Set Range" : "Under"}</h1>
            <hr className="mx-2/3" />
            <h1> {Range}</h1>{" "}
          </div>
        </div>

        {/*-----------------------------Processor Filter---------------------------------- */}
        <div className=" bg-white rounded-md  ">
          <h1 className=" text-lg font-medium py-2 px-5 "> ChipSet</h1>
          <hr />
          <div className=" px-5 py-2 class-name flex-wrap flex gap-2">
            <button
              onClick={() => handleChip("NVIDIA")}
              className=" px-3  bg-blue-700 text-white btn btn-active hover:bg-blue-700 "
            >
              NVIDIA
            </button>
            <button
              onClick={() => handleChip("AMD")}
              className=" px-3 bg-red-600 text-white btn  hover:bg-red-600 "
            >
              AMD Radeon
            </button>
          </div>
        </div>
        {/* ------------------------------Memory size------------------------ */}
        <div className=" bg-white rounded-md ">
          <h1 className=" text-lg font-medium py-2 px-5 "> Memory Size</h1>
          <hr />
          <div className="px-5 py-2 flex flex-col gap-2">
            {gpuMemorySize.map((size) => {
              return(<label
                key={size}
                className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
                htmlFor={size}
              >
                <input
                  type="checkbox"
                 
                  onChange={(e) =>
                    HandleChoice(e, "keyFeatures", "memorySize", size)
                  }
                  className="w-5 "
                  id={size}
                />{" "}
                <p> {size} GB</p>
              </label>)
             
            })}
          </div>
        </div>

        {/*-----------------------------graphics---------------------------------- */}
        <div className=" bg-white rounded-md ">
          <h1 className=" text-lg font-medium py-2 px-5 "> Memory Type</h1>
          <hr />
          <div className="px-5 py-2 flex flex-col gap-2">
          {gpuType.map((type,index) => {
              return(<label
                key={index}
                className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
                htmlFor={index}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    HandleChoice(e, "keyFeatures", "memoryType", type)
                  }
                  className="w-5 "
                  id={index}
                />{" "}
                <p> {type} </p>
              </label>)})}
             
          </div>
        </div>
      </div>

      <div className=" col-span-4 ">
        <div className=" px-5 py-3 bg-white items-center  flex justify-between  rounded-md">
          <div className="font-semibold text-lg flex items-center gap-1">
            <Link to={"/"}>
              <FaHome />
            </Link>{" "}
            {location.pathname.toUpperCase()}/{param.toUpperCase()}
          </div>
          <div className=" flex items-center gap-2">
            <p className=" text-gray-500">Sort By : </p>{" "}
            <div>
              <select
                onChange={handleSortByPrice}
                className="bg-slate-200 w-42 rounded-md px-3 py-2 outline-none"
              >
                <option value="1">Default</option>
                <option value="2">Price (low to high)</option>
                <option value="3"> Price (high to low)</option>
              </select>
            </div>
          </div>
        </div>
        {UseGpu?.length > 0 ? (
          <div className=" grid grid-cols-4 gap-3 pt-2 ">
            {UseGpu.map((item) => (
              <GpuCard key={item._id} state={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-md my-2 mx-auto ">
            {" "}
            <h1 className="text-3xl text-center py-10 font-semibold text-gray-600">
              Looking For your Gpu
            </h1>{" "}
            <hr className=" border-2" />{" "}
            <img
              className="mx-auto w-1/4"
              src="https://i.postimg.cc/kXqSBhC4/Untitleddesign-ezgif-com-optimize-1.gif"
              alt=""
            />
          </div>
        )}

        <div className="pagination flex gap-6 py-6 ">
          {filterState == 0
            ? generatePageNumbers(
                Math.ceil(AllGpu.length / postPerPage),
                CurrentPage
              )
            : generatePageNumbers(
                Math.ceil(UseGpu.length / postPerPage),
                CurrentPage
              )}
        </div>
      </div>
    </div>
  );
};

export default Gpu;
