import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import useReview from "../../../Hooks/useReview";
import { TbReportSearch } from "react-icons/tb";
import useAuth from "../../../Hooks/useAuth";

const LaptopReview = ({ state }) => {
    
  const [Rating, setRating] = useState(0);
  const [Review, refetch] = useReview(state);
  const {user} = useAuth();
  console.log("review", Review);
  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(newRating);
  }; 

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.inputText.value;

    const newReview = {
      userImage: user?.photoURL,
      email: user?.email,
      Review: inputValue,
      userName: user?.displayName,
      Product:state,
      Rating: Rating,
    };  
    console.log(newReview);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          document.getElementById("my_modal_3").close();
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks for your Review",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className=" bg-white px-5 rounded-md">
      <section className="bg-white rounded-md py-5 px-5 mt-5">
        <div className="flex justify-between items-center pb-3">
          <div>
            <h1 className="text-xl font-semibold">Reviews ({Review.length})</h1>
            <p className=" text-slate-600">All reviews of Consumers</p>
          </div>
          <button
            className="bg-white duration-500 border-2 border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md px-3 py-2 "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          > 
            Place Review
          </button>
        </div>
        <hr />
        <div className="py-5">
          {Review.length == 0 ? (
            <div>
              <div className="w-36 h-36 bg-blue-50 mx-auto  rounded-full flex flex-col justify-around">
                <TbReportSearch
                  size={70}
                  color="#3649BA"
                  className="mx-auto my-auto"
                />
              </div>
              <h1 className="text-slate-600 text-center pt-4">
                This item has no Review. Be first to Place a Review.
              </h1>
            </div>
          ) : (
            <div>
              {Review.map((item, index) => (
                <div key={index}>
                  <div className="py-3 flex gap-5">
                    <img
                      src={item.userImage}
                      className="border-2 w-14 rounded-full p-1"
                      alt="User Photo"
                    />
                    <div className="">
                      <h1 className="font-bold">✥ {item.Review} ?</h1>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---------------------modal------------------------------ */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Place a Review!</h3>
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                required={true}
                name="inputText"
                placeholder="Express  your thoughts for this product here..."
                className="py-4 border-2 rounded-xl my-3 px-3 w-full border-blue-400 outline-none"
              />
              <h1>Give a rating </h1>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* ------------------------------modal---------------------------- */}
      </section>
    </div>
  );
};

export default LaptopReview;
