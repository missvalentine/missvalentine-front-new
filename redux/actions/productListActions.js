import { callApi } from '../../utils/callApi'

export const setAllProducts = (products) => async (dispatch) =>
  dispatch({
    type: 'SET_PRODUCTS',
    payload: products,
  })

export const addProductToRecent = (productId) => async (dispatch) =>
  dispatch({
    type: 'ADD_TO_RECENTLY_VIEWD',
    payload: productId,
  })
export const addProductToAllProducts = (product) => async (dispatch) =>
  dispatch({
    type: 'ADD_TO_ALL_PRODUCTS',
    payload: product,
  })

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await callApi({
      method: 'GET',
      url: 'product/all',
    })
    if (data && data.success) {
      dispatch({
        type: 'SET_PRODUCTS',
        payload: data.data,
      })
    }
  } catch (err) {
    console.log({ err })
  }
}
