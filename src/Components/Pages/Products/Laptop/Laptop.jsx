import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LapTopCard from "./LapTopCard";

const Laptop = () => {
  const axiosPoint = useAxiosPublic();
  const location = useLocation();
  const [AllLaptop, setLaptop] = useState([]);
  const [UseLaptop, setUseLaptop] = useState([]);
  const [Range, setRange] = useState(0);
  const [MinPrice, setMinPrice] = useState(0);
  const [CurrentPage, setPage] = useState(1);
  const [postPerPage, setPost] = useState(12);
  const [MaxPrice, setMaxPrice] = useState(0);
  const param = location.state;

  const indexOfFirstCard = (currentPage) => (currentPage - 1) * postPerPage;
  const indexOfLastCard = (currentPage) => currentPage * postPerPage;

 

  const setCurrentPost = () => {
    const start = indexOfFirstCard(CurrentPage);
    const end = indexOfLastCard(CurrentPage);
    setUseLaptop(AllLaptop.slice(start, end));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setCurrentPost();
  };

  const generatePageNumbers = (totalPages, currentPage) => {
    const pageNumbers = [];
  
    if (currentPage > 1) {
      pageNumbers.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="prev-btn"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      );
    } else {
      pageNumbers.push(
        <button
          key="prev"
          className="prev-btn btn-disabled text-gray-400"
        >
          Previous
        </button>
      );
    }
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? "active text-white px-3 bg-red-600 rounded-md" : ""}
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
          onClick={() => handlePageChange(currentPage + 1)}
          className="next-btn"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      );
    } else {
      pageNumbers.push(
        <button
          key="next"
          className="next-btn btn-disabled text-gray-400"
        >
          Next
        </button>
      );
    }
  
    return pageNumbers;
  };
  const getAllLaptop = async () => {
    try {
      const response = await axiosPoint.get("/laptop");
      console.log(response.data);
      setLaptop(response.data);
      setUseLaptop(response.data.slice(0,12) );
      setMinPrice(
        Math.min(
          ...response.data.map((item) => item.keyFeatures.discountedPrice)
        )
      );
      setMaxPrice(
        Math.max(
          ...response.data.map((item) => item.keyFeatures.discountedPrice)
        )
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };

  const getLaptopByBrand = async (parameter) => {
    try {
      const response = await axiosPoint.get(`/laptop/${parameter}`);
      console.log(response.data);
      setLaptop(response.data);
      setUseLaptop(response.data);
      setMinPrice(
        Math.min(
          ...response.data.map((item) => item.keyFeatures.discountedPrice)
        )
      );
      setMaxPrice(
        Math.max(
          ...response.data.map((item) => item.keyFeatures.discountedPrice)
        )
      );
    } catch (error) {
      console.error("Error fetching laptop data:", error);
    }
  };
  useEffect(() => {
    if (param === "All") {
      getAllLaptop();
    } else {
      getLaptopByBrand(param);
    }
    setCurrentPost();
  }, [param]);
  return (
    <div className="bg-slate-100 px-20 py-5 grid grid-cols-4 gap-5">
      <div>
        {/*-------------------------- Price range adjuster-------------------------------- */}
        <div>
          <div className=" bg-white rounded-md">
            <h1 className=" text-lg font-medium py-2 px-5 "> Price Range</h1>
            <hr />
            <div className="px-5 py-3">
              <div className=" flex justify-between px-2">
                <p>{MinPrice}$</p>
                <p>{MaxPrice}$</p>
                {console.log(MinPrice, MaxPrice)}
              </div>
              <input
                onChange={(event) => handleOnchange(event.target.value)}
                type="range"
                min={MinPrice}
                max={MaxPrice}
                defaultValue={MaxPrice}
                // value={Range}
                className="range border-2 bg-white range-error "
              />
            </div>

            <div className="px-5 pb-2 text-center">
              <h1> Under</h1>
              <hr className="mx-2/3" />
              <h1>{Range} $</h1>
            </div>
          </div>
        </div>
        {/*-----------------------------Processor Filter---------------------------------- */}
        <div></div>
      </div>

      <div className=" col-span-3 ">
        <div className=" p-3 bg-white font-semibold text-lg  rounded-md">
          <h1>{param.toUpperCase()}</h1>
        </div>
        <div className=" grid grid-cols-3 gap-5 pt-4 ">
        {UseLaptop.map((item,index) => (
        <LapTopCard key={item._id} state={item} sl={index} />
      ))} 
        </div>
      <div className="pagination flex gap-6 py-6">
        {generatePageNumbers(
          Math.ceil(AllLaptop.length / postPerPage),
          CurrentPage
        )}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
