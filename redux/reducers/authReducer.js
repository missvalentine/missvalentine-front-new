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
        isLoggedIn: false,
      }

    default:
      return state
  }
}
