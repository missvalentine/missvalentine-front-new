const initialState = {
  cartLength: 0,
  products: [],
  status: 'active',
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'SET_CART':
      return {
        ...state,
        products: payload.products,
        cartLength: payload.products.length,
        status: payload.status,
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        products: [...state.cart, payload],
        cartLength: state.cartLength + 1,
      }
    case 'REMOVE_FROM_CART': {
      const newCart = [...state.products].filter(
        (item) =>
          item.product._id !== payload.productId ||
          item.color !== payload.color ||
          item.size !== payload.size,
      )
      return {
        ...state,
        products: newCart,
        cartLength: state.cartLength - 1,
      }
    }
    case 'CLEAR_CLEAR':
      return {
        ...state,
        products: [],
        cartLength: 0,
      }

    default:
      return state
  }
}
