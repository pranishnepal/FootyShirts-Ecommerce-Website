import { CartActionTypes } from "./Cart.action";
import { addNewItemToCart } from "./CartUtils";

const initialCartState = {
  hideCartOnThisPage: true,
  cartItems: [],
};

const shoppingCartReducer = (currState = initialCartState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currState,
        hideCartOnThisPage: !currState.hideCartOnThisPage,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...currState,
        cartItems: addNewItemToCart(currState.cartItems, payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...currState,
        cartItems: currState.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    default:
      return currState;
  }
};

export default shoppingCartReducer;
