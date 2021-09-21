export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
};

export const toggleIsCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItemToCart = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
