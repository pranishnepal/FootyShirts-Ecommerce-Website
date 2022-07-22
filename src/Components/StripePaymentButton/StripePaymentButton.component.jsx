import StripeCheckout from "react-stripe-checkout";
import { connect, useDispatch } from "react-redux";
import {
  clearItemFromCart,
  toggleIsCartHidden,
} from "../../Redux/CartState/Cart.action";

const StripePaymentButton = ({ totalPrice, cartItems }) => {
  const priceInCents = totalPrice * 100;
  const stripePublishableKey =
    "pk_test_51JbeBxAUrRsM9UhaTCwTJ8R2nuFmSrvGuKeynA6KW9lznVJrUN95yoOztejmvWBna89JZQcXTfIO10kGHYYnoEGx00K7V96Xfo";

  const dispatch = useDispatch();
  const onSuccessFulPayment = (customerToken) => {
    console.log(customerToken);
    alert("Payment Successful");
    clearAllItemsFromCart();
  };

  const clearAllItemsFromCart = () => {
    cartItems.map((currItem) => {
      dispatch(clearItemFromCart(currItem));
    });
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
