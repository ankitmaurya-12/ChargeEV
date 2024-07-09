import React, { useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; // Import CardElement
import axios from "axios";

const stripePromise = loadStripe('pk_test_51P198DSAZFGKHJGRL5LsvuIkIzWpLWALQI3HvPkSNHU8ysxB4T6NoXt86hxWWx7LAafNuyJyK3gB8RWGSLhbDRyE00clq3tvfw'); // Replace with your Stripe publishable key

const PaymentForm = ({ stationName, bookingTime, bookingDate, clientSecret }) => {
  const [error, setError] = useState(null);
  const stripe = useStripe(); // Get stripe object
  const elements = useElements(); // Get elements object

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });
    if (result.error) {
      setError(result.error.message);
    } else {
      // Payment successful, handle accordingly
      window.location.href = "http://localhost:5173/dashboard/bookedstation";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Station Name: {stationName}</div>
      <div>Booking Time: {bookingTime}</div>
      <div>Booking Date: {bookingDate}</div>
      <CardElement /> {/* Include CardElement here */}
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe}>
        Pay $20.00
      </button>
    </form>
  );
};

const PaymentComponent = ({ stationName, bookingTime, bookingDate, fetchClientSecret }) => {
  const [clientSecret, setClientSecret] = useState(null);

  useCallback(() => {
    fetchClientSecret().then(secret => {
      setClientSecret(secret);
    });
  }, [fetchClientSecret]);

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm stationName={stationName} bookingTime={bookingTime} bookingDate={bookingDate} clientSecret={clientSecret} />
    </Elements>
  );
};

export default PaymentComponent;
