import { callApi } from '../../utils/callApi'

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

export const getUserAction = (_user) => async (dispatch) => {
  // http://localhost:5000/api/
  try {
    const { data } = await callApi({
      method: 'get',
      url: `user/profile`,
    })
    if (data) {
      dispatch({
        type: 'SET_USER',
        payload: data.data,
      })
    }
  } catch (err) {
    console.log({ err })
  }
}
export const clearUserAction = () => async (dispatch) =>
  dispatch({
    type: 'CLEAR_USER',
  })

// -----------------------------------------------------------------------------------
// -----------------------        ADRESSS    -----------------------------------------
// -----------------------------------------------------------------------------------

export const addAddressAction = (_addressObj) => async (dispatch) =>
  dispatch({
    type: 'ADD_ADDRESS',
    payload: _addressObj,
  })
export const updateAddressAction = (_addressObj) => async (dispatch) =>
  dispatch({
    type: 'UPDATE_ADDRESS',
    payload: _addressObj,
  })
export const deleteAddressAction = (_addressId) => async (dispatch) => {
  try {
    const { data } = await callApi({
      method: 'delete',
      url: `user/delete-address?address_id=${_addressId}`,
    })
    if (data) {
      dispatch({
        type: 'DELETE_ADDRESS',
        payload: _addressId,
      })
    }
  } catch (err) {
    console.log({ err })
  }
}
