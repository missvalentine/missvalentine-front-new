
export const addItemToCart = (product) => async (dispatch) => dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
export const removeItemToCart = (productId) => async (dispatch) => dispatch({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });