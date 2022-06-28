const initialState = {
  user: {},
  isLoggedIn: false,
  authToken: null,
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
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

    default:
      return state
  }
}
