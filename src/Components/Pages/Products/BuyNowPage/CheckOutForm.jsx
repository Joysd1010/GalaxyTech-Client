import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

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
          postal_code: e.target.zip.value
        }
      }
    });

    if (error) {
      setMessage(error.message);
      setIsProcessing(false);
    } else {
      setMessage(`Payment successful, ${paymentMethod.id}`);
      setIsProcessing(false);
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

      <button type="submit" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Pay now"}
      </button>

      {message && <div>{message}  <LineWave
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
  /></div>}

    </form>
  );
};

export default CheckOutForm;
