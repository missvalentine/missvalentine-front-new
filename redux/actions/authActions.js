export const setUserAuthAction = (_userAndToken) => async (dispatch) =>
  dispatch({
    type: 'SET_USER_AUTH',
    payload: _userAndToken,
  })
export const setUserAction = (_user) => async (dispatch) =>
  dispatch({
    type: 'SET_USER',
    payload: _user,
  })
export const clearUserAction = () => async (dispatch) =>
  dispatch({
    type: 'CLEAR_USER',
  })
