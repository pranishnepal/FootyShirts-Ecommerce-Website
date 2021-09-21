import { ReactComponent as CartPicture } from "./CartIcon.svg";
import "./CartIcon.styles.scss";
import { toggleIsCartHidden } from "../../Redux/CartState/Cart.action";
import { connect } from "react-redux";

const CartIcon = ({ toggleIsCartHidden, cartItemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleIsCartHidden}>
      <CartPicture />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIsCartHidden: () => dispatch(toggleIsCartHidden()),
  };
};

const mapStateToProps = (currState) => {
  return {
    cartItemCount: currState.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
