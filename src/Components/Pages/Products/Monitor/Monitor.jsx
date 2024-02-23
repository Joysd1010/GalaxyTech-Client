import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import MonitorCard from "./MonitorCard";
import { FaHome } from "react-icons/fa";

const Monitor = () => {
  const axiosPoint = useAxiosPublic();
  const location = useLocation();
  const [AllMonitor, setMonitor] = useState([]);
  const [UseMonitor, setUseMonitor] = useState([]);
  const [Range, setRange] = useState(0);
  const [MinPrice, setMinPrice] = useState(0);
  const [CurrentPage, setPage] = useState(1);
  const postPerPage = 12;
  const [MaxPrice, setMaxPrice] = useState(0);
  const param = location.state;

  //   console.log(location);

  const setCurrentPost = () => {
    const start = (CurrentPage - 1) * postPerPage;
    const end = postPerPage * CurrentPage;
    setUseMonitor(AllMonitor.slice(start, end));
  };

  const handlePageChange = (newPage) => {
    // console.log("this page", newPage);
    setPage(newPage);
  };

  useEffect(() => {
    // console.log("Current page", CurrentPage);
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

  const getAllMonitor = async () => {
    try {
      const response = await axiosPoint.get("/monitor");
      setMonitor(response.data);
      setUseMonitor(response.data.slice(0, 12));
      setMinPrice(
        Math.min(...response.data.map((item) => item.key.price.discount))
      );
      setMaxPrice(
        Math.max(...response.data.map((item) => item.key.price.discount))
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };

  const getMonitorByBrand = async (parameter) => {
    try {
      const response = await axiosPoint.get(`/monitor/${parameter}`);

      setMonitor(response.data);
      setUseMonitor(response.data.slice(0, 12));
      setMinPrice(
        Math.min(...response.data.map((item) => item.key.price.discount))
      );
      setMaxPrice(
        Math.max(...response.data.map((item) => item.key.price.discount))
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };

  //------------------------Price filter-----------------
  const handleOnchange = (value) => {
    setRange(value);
    setUseMonitor(
      AllMonitor?.filter((item) => item.key.price.discount <= value).slice(
        0,
        12
      )
    );
  };
  //-------------------------UserDefinedFilter--------------------
  const HandleChoice = (attribute, value) => {
    setUseMonitor(
      AllMonitor.filter((item) => item.display[attribute] == value)
    );
  };
  //-------------------------Shorting------------------------------------

  const handleSortByPrice = async (event) => {
    const sortBy = parseInt(event.target.value);

    switch (sortBy) {
      case 2:
        const sortedByPriceAsc = await shortingAsc(UseMonitor);
        setUseMonitor(sortedByPriceAsc);
        break;
      case 3:
        const sortedByPriceDesc = shortingDesc(UseMonitor);
        setUseMonitor(sortedByPriceDesc);
        break;
      default:
        break;
    }
  };

  const shortingAsc = async (laptop) => {
    const filterMonitor = [...laptop].sort(
      (a, b) => a.key.price.discount - b.key.price.discount
    );
    return filterMonitor;
  };

  const shortingDesc = (laptop) => {
    const filterMonitor = [...laptop].sort(
      (a, b) => b.key.price.discount - a.key.price.discount
    );
    return filterMonitor;
  };

  //-----------------------fetching data-------------------------
  useEffect(() => {
    if (param === "All") {
      getAllMonitor();
    } else {
      getMonitorByBrand(param);
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
            <h1>{Range} $</h1>
          </div>
        </div>

        {/*-----------------------------resolution Filter---------------------------------- */}
        <div className=" bg-white rounded-md ">
          <h1 className=" text-lg font-medium py-2 px-5 "> Resolution</h1>
          <hr />
          <div className="px-5 py-2 flex flex-col gap-2">
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="pexel1"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("resolution", "1920x1080")}
                className="w-5    "
                value=""
                id="pexel1"
              />{" "}
              <p> FHD</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="pexel2"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("resolution", "2560x1440")}
                className="w-5"
                value=""
                id="pexel2"
              />{" "}
              <p> QHD</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="pexel3"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("resolution", "3840x2160")}
                className="w-5"
                value=""
                id="pexel3"
              />{" "}
              <p> 4K</p>
            </label>
            
          </div>
        </div>
        {/* ------------------------------Panel type------------------------ */}
        <div className=" bg-white rounded-md ">
          <h1 className=" text-lg font-medium py-2 px-5 "> Panel Type</h1>
          <hr />
          <div className="px-5 py-2 flex flex-col gap-2">
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="core1"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("type", "VA")}
                className="w-5    "
                value=""
                id="core1"
              />{" "}
              <p> VA Panel</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="core2"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("type", "IPS")}
                className="w-5"
                value=""
                id="core2"
              />{" "}
              <p> IPS</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="core3"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("type", "TN")}
                className="w-5"
                value=""
                id="core3"
              />{" "}
              <p> TN</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="core4"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("type", "QLED")}
                className="w-5"
                value=""
                id="core4"
              />{" "}
              <p> QLED</p>
            </label>
          </div>
        </div>

        {/*-----------------------------Refresh Rate---------------------------------- */}
        <div className=" bg-white rounded-md ">
          <h1 className=" text-lg font-medium py-2 px-5 "> Refresh Rate</h1>
          <hr />
          <div className="px-5 py-2 flex flex-col gap-2">
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="refresh1"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("refreshRate", "60Hz")}
                className="w-5    "
                value=""
                id="refresh1"
              />{" "}
              <p> 60 Hz</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="refresh2"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("refreshRate", "75Hz")}
                className="w-5"
                value=""
                id="refresh2"
              />{" "}
              <p> 75 Hz</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="refresh3"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("refreshRate", "144Hz")}
                className="w-5"
                value=""
                id="refresh3"
              />{" "}
              <p> 144 Hz</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="refresh4"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("refreshRate", "165Hz")}
                className="w-5"
                value=""
                id="refresh4"
              />{" "}
              <p> 165 Hz</p>
            </label>
            <label
              className="flex hover:cursor-pointer gap-2 hover:bg-indigo-50 p-1 rounded-sm"
              htmlFor="refresh5"
            >
              <input
                type="checkbox"
                onChange={() => HandleChoice("refreshRate", "240Hz")}
                className="w-5"
                value=""
                id="refresh5"
              />{" "}
              <p> 240 Hz</p>
            </label>
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
        {UseMonitor?.length > 1 ? (
          <div className=" grid grid-cols-4 gap-3 pt-2 ">
            {UseMonitor.map((item) => (
              <MonitorCard key={item._id} state={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-md my-2 mx-auto ">
            {" "}
            <h1 className="text-3xl text-center py-10 font-semibold text-gray-600">
              Looking For your Monitor
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
          {generatePageNumbers(
            Math.ceil(AllMonitor.length / postPerPage),
            CurrentPage
          )}
        </div>
      </div>
    </div>
  );
};

export default Monitor;
