export const setCurrUser = (newUser) => {
  return {
    type: "SET_CURR_USER",
    payload: newUser,
  };
};
