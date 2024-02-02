import React from "react";

const LapTopCard = ({ state ,sl}) => {
  const {
    discountedPrice,
    ramType,
    generation,
    modelname,
    display,
    storage,
    ram,
    specialFeatures,
  } = state.keyFeatures;
  const { brand, model, clockSpeed, cache } = state.processor;
  const { storageType } = state.memory;
  // const image = state.imageLinks[1]
  const image = "https://i.ibb.co/DRQswNQ/Lenevo.png";
  return (
    <div className=" bg-white rounded-md">
      <div className=" w-44 mx-auto overflow-hidden">
        <img
          src={image}
          alt="drive image "
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h1 className=" font-extrabold ">
        {modelname} {brand} {model} {display}
      </h1>
      {sl+1}
    </div>
  );
};

export default LapTopCard;
