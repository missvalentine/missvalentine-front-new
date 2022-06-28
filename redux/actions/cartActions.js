import { callApi } from '../../utils/callApi'

export const addItemToCart = (product, quantity) => async (dispatch) => {
  try {
    const { data } = await callApi({
      method: 'post',
      url: `cart/add-product`,
      data: {
        productId: product._id,
        quantity: quantity,
      },
    })
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
