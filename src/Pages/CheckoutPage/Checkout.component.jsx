import React from "react";
import { connect } from "react-redux";
import CheckOutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import "./Checkout.styles.scss";
import StripePaymentButton from "../../Components/StripePaymentButton/StripePaymentButton.component";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>
      <div className="test-warning">
        <i>
          <b>
            <u>Please use the following test-payment credentials:</u>
          </b>
        </i>
        <br />
        <b>
          {" "}
          <i>Card number: </i> <u>5555 5555 5555 4444</u>, <i>Expiry Date: </i>{" "}
          <u>01/25</u>, <i>CVC: </i> <u>123</u>
        </b>
      </div>
      <StripePaymentButton totalPrice={totalPrice} />
    </div>
  );
};

const mapStateToProps = (currState) => {
  return {
    cartItems: currState.cart.cartItems,
    totalPrice: currState.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(CheckoutPage);
