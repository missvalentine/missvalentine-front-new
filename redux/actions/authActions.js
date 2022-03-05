
export const setUserAction = (_user) => async (dispatch) => dispatch({
    type: "SET_USER",
    payload: _user,
  });
export const clearUserAction = () => async (dispatch) => dispatch({
    type: "CLEAR_USER",
  });