const initialState = {
  user: {},
  isLoggedIn: false,
  authToken: null,
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    // Auth-User
    case 'SET_USER_AUTH':
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
        authToken: payload.authToken,
      }
    case 'SET_USER':
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      }
    case 'CLEAR_USER':
      return {
        ...state,
        user: {},
        authToken: null,
        isLoggedIn: false,
      }

    //Address
    case 'ADD_ADDRESS': {
      let userAddresses = state.user.addresses
      userAddresses.push(payload)
      return {
        ...state,
        user: { ...state.user, addresses: userAddresses },
      }
    }
    case 'UPDATE_ADDRESS': {
      const userAddresses = state.user.addresses.map((address) =>
        address._id === payload._id ? payload : address,
      )
      return {
        ...state,
        user: { ...state.user, addresses: userAddresses },
      }
    }
    case 'DELETE_ADDRESS': {
      const userAddresses = state.user.addresses.filter((address) =>
        typeof address === 'string'
          ? address !== payload
          : address._id !== payload,
      )
      return {
        ...state,
        user: { ...state.user, addresses: userAddresses },
      }
    }

    // Wishlist
    case 'ADD_ITEM_TO_WISHLIST': {
      let userWishlist = [...state.user.wishlist]
      userWishlist.push(payload)
      return {
        ...state,
        user: { ...state.user, wishlist: userWishlist },
      }
    }
    case 'REMOVE_ITEM_FROM_WISHLIST': {
      const userWishlist = [...state.user.wishlist].filter(
        (item) => item != payload,
      )
      return {
        ...state,
        user: { ...state.user, wishlist: userWishlist },
      }
    }
    case 'CLEAR_WISHLIST': {
      return {
        ...state,
        user: { ...state.user, wishlist: [] },
      }
    }

    default:
      return state
  }
}
