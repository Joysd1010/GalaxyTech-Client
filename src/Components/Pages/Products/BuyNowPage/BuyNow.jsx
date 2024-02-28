import React from 'react';
import { useLocation } from "react-router-dom";
import CheckOutForm from './CheckOutForm.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise=loadStripe(import.meta.env.VITE_PK)

const BuyNow = () => {
  

  return (
    <div className="bg-blue-50 px-10">


      <div className="flex w-full gap-10">
        <div className="grid h-20 flex-grow card bg-white rounded-md place-items-center">
          content
        </div>
{/* -------------------------------------Payment--------------------------------------------- */}
        <div className="grid h-20 flex-grow card bg-white rounded-md place-items-center">
       
        
        </div>
      </div>
      <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
    </div>
  );
};

export default BuyNow;
