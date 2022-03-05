const initialState = {
  cart: [],
  cartLength: 0,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'SET_CART':
      return {
        ...state,
        cart: payload,
        cartLength : payload.lenght,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, payload],
        cartLength : state.cartLength +1 ,

      };
    case 'REMOVE_FROM_CART':
      {
        const newCart =[...state.cart].filter((item)=> item._id!=payload);
        return {
        ...state,
        cart: newCart,
        cartLength : state.cartLength -1,

      };
    }
    case 'CLEAR_CLEAR':
      return {
        ...state,
        cart: [],
        cartLength : 0,
      };

    default:
      return state;
  }
}