import StripeCheckout from "react-stripe-checkout";

const StripePaymentButton = ({ totalPrice }) => {
  const priceInCents = totalPrice * 100;
  const stripePublishableKey =
    "pk_test_51JbeBxAUrRsM9UhaTCwTJ8R2nuFmSrvGuKeynA6KW9lznVJrUN95yoOztejmvWBna89JZQcXTfIO10kGHYYnoEGx00K7V96Xfo";

  const onSuccessFulPayment = (customerToken) => {
    console.log(customerToken);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Footy Shirts"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${totalPrice}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onSuccessFulPayment}
      stripeKey={stripePublishableKey}
    />
  );
};

export default StripePaymentButton;
