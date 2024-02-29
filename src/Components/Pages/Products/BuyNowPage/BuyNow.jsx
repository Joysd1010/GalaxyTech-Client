import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PK);
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { LineWave } from "react-loader-spinner";
import useAuth from "../../../Hooks/useAuth";
import ConfettiExplosion from "react-confetti-explosion";

const CheckOutForm = ({ Price,parameters, setCompleted }) => {
  console.log(Price);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [ClientSecret, setSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    useAxiosPublic()
      .post("/payment", { Price })
      .then((res) => setSecret(res.data.clientSecret));
  }, []);

  const ProductUpdate=async()=>{
 

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        address: {
          postal_code: e.target.zip.value,
        },
      },
    });

    const { error: confirmError, PaymentIntent } =
      await stripe.confirmCardPayment(ClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.name,
            email: user?.email,
            address: {
              postal_code: e.target.zip.value,
            },
          },
        },
      });

    if (confirmError) {
      setMessage(confirmError.message);
    }

    if (error) {
      setMessage(error.message);
      setIsProcessing(false);
    } else {
      setMessage(`Payment successful, ${paymentMethod.id}`);
      console.log(paymentMethod);
      setIsProcessing(false);
      setCompleted(true);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <label>
        Card Number
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </label>

      <label>
        Zip Code
        <input type="text" name="zip" required />
      </label>

      {!isProcessing ? (
        <button
          type="submit"
          className="bg-blue-600 px-3 py-2 rounded-md"
          disabled={!stripe || !ClientSecret}
        >
          {"Pay now"}
        </button>
      ) : (
        <div>
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
          <p>Processing Payment</p>
        </div>
      )}

      {message && <div>{message}</div>}
    </form>
  );
};

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const State = location.state;
  const from = State ? State.from : "/";
  const [completed, setCompleted] = useState(false);

  const totalPrice = State.prop.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return (
    <div className="bg-blue-100 px-10">
      <div className="grid grid-cols-2 w-full py-10 gap-5">
        <div id="detail" className=" pt-10 pb-5  bg-white rounded-md ">
          <h1 className="text-blue-700 text-xl font-bold  text-center">
            Products detail
          </h1>
          <hr className=" border-2 my-3" />
          <div className="grid px-5 grid-cols-4">
            <div className="px-3 text-center">
              {" "}
              <h1> Image </h1>
              <hr className=" border-2 my-3" />
            </div>
            <div className="px-3 col-span-2 text-center">
              {" "}
              <h1> Name </h1>
              <hr className=" border-2 my-3" />
            </div>
            <div className="px-3 text-center">
              {" "}
              <h1> Price </h1>
              <hr className=" border-2 my-3" />
            </div>
          </div>
          {State.prop.map((item) => (
            <div key={item.id} className="grid px-5 items-center grid-cols-4">
              {console.log(item.product)}
              <img src={item.image} className=" w-24 mx-auto" alt="" />
              <h1 className=" text-center col-span-2 px-3">{item.name}</h1>
              <h1 className=" text-center text-blue-700 px-3">{item.price}$</h1>
            </div>
          ))}
          <hr className=" border-2 my-3" />
          <div className="grid grid-cols-4 px-5">
            <h1 className=" col-span-3 text-end">Total Price : </h1>{" "}
            <p className=" text-xl text-center font-bold text-red-700">
              {totalPrice} $
            </p>
          </div>
          <div className="flex justify-around pt-3">
            <div
              onClick={() => {
                navigate(from);
              }}
              className="btn mx-auto bg-red-600 text-white hover:text-red-600 hover:border-red-600 shadow-lg border-2"
            >
              Cancel & Go Back
            </div>
          </div>
        </div>
        {/* -------------------------------------Payment--------------------------------------------- */}
        <div id="detail" className=" pt-10 pb-5  bg-white rounded-md ">
          <h1 className="text-blue-700 text-xl font-bold  text-center">
            Payment Process
          </h1>
          <hr className=" border-2 my-3" />

          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm Price={totalPrice} parameters={State.prop} setCompleted={setCompleted} />
            </Elements>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" ml-[600px]">
        {completed && (
          <ConfettiExplosion
            force={0.9}
            duration={2500}
            particleSize={20}
            particleCount={500}
            width={1600}
          />
        )}
      </div>
    </div>
  );
};

export default BuyNow;
