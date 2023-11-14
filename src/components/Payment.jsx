import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const PaymentForm = () => {
  const publishableKey = "pk_live_51MdRFvSJ5jesS69FTXo6GQnZQbhFxHxwlZPXTXP0P5FxADTWu756n71pMJUW8nQdHJZmjMvJpKmp2cV4q9QHVpEc00dIW9WPcd";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("http://localhost:8001/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Go Premium" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="https://www.vidhub.co" //Pop-in header image
      billingAddress={false}
    />
  );
};
export default PaymentForm;