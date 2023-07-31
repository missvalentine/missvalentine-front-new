import { callApi } from '../../utils/callApi'

export const addItemToCart = ({ productId, quantity, size, color }) => async (
  dispatch,
) => {
  try {
    const { data } = await callApi({
      method: 'post',
      url: `cart/add-product`,
      data: {
        productId: productId,
        quantity: quantity,
        size,
        color,
      },
    })
    if (data && data.success) {
      dispatch({
        type: 'SET_CART',
        payload: data.cart,
      })
    }
  } catch (err) {
    console.log({ err })
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
export const removeItemToCart = ({ productId, size, color }) => async (
  dispatch,
) => {
  try {
    await callApi({
      method: 'delete',
      url: `cart/remove-product`,
      data: {
        productId: productId,
        size,
        color,
      },
    })
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { productId, size, color },
    })
  } catch (err) {
    console.log({ err })
  }
}
