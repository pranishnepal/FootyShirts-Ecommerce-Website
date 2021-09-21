const initialState = {
  currUser: null,
};

export const userReducer = (currState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURR_USER":
      return {
        ...currState,
        currUser: payload,
      };
    default:
      return currState;
  }
};
