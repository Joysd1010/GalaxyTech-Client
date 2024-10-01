import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const GpuCard = ({ state }) => {
  const {
    
    modelName,brand,
    ramSize,romSize,
    batterySize,rearCameraSpecification,
    displayQuality,frontCameraSpecification,
    processorChipsetSize,
    processorChipsetName,
  } = state.keyFeatures;
  // console.log(state)
  const { size } = state.displayInfo;
  const { chargerType } = state.battery;
  const { romType } = state.memory;
const {user}=useAuth()
// console.log(user)
   const getRandomIndex = (max) => Math.floor(Math.random() * max);
  const getRandomData = () => {
    const randomIndex = getRandomIndex(state.image.length);
    return state.image[randomIndex];
  };
  const image = getRandomData();
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login to  Continue!",
        showConfirmButton: false,
        timer: 2500,
      });

      navigate("/login", { state: { from: location.pathname } });
    } else {
      navigate("/buynow", {
        state: {
          from: "/",
          prop: [
            {
              price: state.price.discountPrice,
              name: ` ${brand} ${modelName} (${ramSize}/${romSize})  `,
              image: image,
              quantity: state.quantity,
              id: state._id,
              collection: "Phone",
            },
          ],
        },
      });
    }
  };
  const addToCartHandler = () => {
    const newData = {
      price: state.price.discountPrice,
      name: ` ${brand} ${modelName} (${ramSize}/${romSize})  `,
      image: image,
      quantity: state.quantity,
      id: state._id,
      collection: "Phone",
      email: user?.email,
    };
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login to  Continue!",
        showConfirmButton: false,
        timer: 2500,
      });

      navigate("/login", { state: { from: location.pathname } });
    } else {
      fetch("https://galaxytechserver.onrender.com/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data)
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className=" bg-white flex flex-col justify-between rounded-md px-3">
      <div className=" my-5 w-full mx-auto overflow-hidden">
        <img
          src={image}
          alt="drive image "
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div>
        <hr className=" " />
        <div >
          <h1 className=" font-extrabold py-2 text-sm hover:underline hover:text-red-600 duration-200">
            {brand} {modelName} ({ramSize}/{romSize})  
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-2 pt-2 pb-4 text-sm text-[#666767]">
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            {" "}
            Display :{" "}
            {size} {' '}{displayQuality}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>
          <h1>
            {" "}
            Processor : {processorChipsetName} ({processorChipsetSize})
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            Camera :{" "}
            {rearCameraSpecification} at rear  / {frontCameraSpecification}
          </h1>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-xs">■</p>{" "}
          <h1>
            Features:{" "}
            {batterySize},{chargerType},{romType}
          </h1>
        </div>
      </div>
      <div className="py-5">
        <hr />
        <h1 className=" text-xl text-center font-extrabold py-3  text-[#F04B22]">
          {state.price.discountPrice} $
        </h1>
        <div onClick={handleNavigate} className="cursor-pointer rounded-md flex justify-around bg-indigo-50  text-blue-700 hover:text-white hover:bg-blue-700 transition duration-500">
          <div className=" flex gap-2  text-sm py-2   ">
            <IoMdCart size={20} /> <h1> Buy Now</h1>
          </div>
        </div>
        <div onClick={addToCartHandler} className="cursor-pointer flex justify-around rounded-md mt-2 text-[#666767] hover:bg-slate-100 duration-500">
          <div className=" flex gap-2  text-sm py-2  ">
            <FaCartPlus size={20} /> <h1> Add to Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GpuCard;
