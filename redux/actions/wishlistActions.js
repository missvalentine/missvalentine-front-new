import { callApi } from '../../utils/callApi'

export const addItemToWishlist = (productId) => async (dispatch) => {
  try {
    const { data, status } = await callApi({
      method: 'post',
      url: `user/add-item-to-wishist`,
      data: {
        productId: productId,
      },
    })
    if (data && status)
      dispatch({
        type: 'ADD_ITEM_TO_WISHLIST',
        payload: productId,
      })
    else {
      dispatch({
        type: 'SHOW_MESSAGE',
        payload: { message: 'cant add', type: 'Error' },
      })
    }
  } catch (err) {
    console.log({ err })
    dispatch({
      type: 'SHOW_MESSAGE',
      payload: { message: err.response.status.message, type: 'Error' },
    })
  }
}

export const getAllCartItem = () => async (dispatch) => {
  try {
    const { data } = await callApi({
      method: 'get',
      url: `cart`,
    })
    if (data && data.success) {
      dispatch({
        type: 'SET_CART',
        payload: data.data,
      })
    }
  } catch (err) {
    console.log({ err })
  }
}
export const removeItemToCart = (productId) => async (dispatch) => {
  try {
    await callApi({
      method: 'delete',
      url: `cart/remove-product`,
      data: {
        productId: productId,
      },
    })
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    })
  } catch (err) {
    console.log({ err })
  }
}
