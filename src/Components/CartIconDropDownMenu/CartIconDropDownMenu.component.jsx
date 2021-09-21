import { connect } from "react-redux";
import ReuseableButton from "../ReusableButton/ResuableButton.component";
import "./CartIconDropDownMenu.styles.scss";
import CartItem from "../CartItem/CartItem.component";
import { useHistory } from "react-router";

const CartIconDropDownMenu = ({ currCartItems }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {currCartItems.length ? (
          currCartItems.map((currItem) => {
            return <CartItem key={currItem.id} item={currItem} />;
          })
        ) : (
          <span className="empty-message">
            <b>Your cart is empty</b>
          </span>
        )}
      </div>
      <ReuseableButton onClick={() => history.push("/checkout")}>
        Checkout!
      </ReuseableButton>
    </div>
  );
};

const mapStateToProps = (currState) => {
  return {
    currCartItems: currState.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartIconDropDownMenu);
