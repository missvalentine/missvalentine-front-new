import { callApi } from '../../utils/callApi'

export const addItemToCart = (product, quantity, userId) => async (
  dispatch,
) => {
  try {
    const { data } = await callApi({
      method: 'post',
      url: `cart/add-product/${userId}`,
      data: {
        productId: product._id,
        quantity: quantity,
      },
    })
    if (data && data.success) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: product,
      })
    }
  } catch (err) {
    console.log({ err })
  }
}
export const removeItemToCart = (productId) => async (dispatch) =>
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  })
