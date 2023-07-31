const initialState = {
  allProducts: {},
  isDefaultProductLoaded: false,
  product: null,
  recentlyViewed: [],
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'SET_PRODUCTS': {
      const productsMap = {}
      payload.forEach((element) => {
        productsMap[element._id] = element
      })
      return {
        ...state,
        allProducts: productsMap,
        isDefaultProductLoaded: true,
      }
    }
    case 'ADD_TO_ALL_PRODUCTS': {
      const productsMap = { ...state.allProducts }
      productsMap[payload._id] = payload
      return {
        ...state,
        allProducts: productsMap,
      }
    }
    case 'SET_PRODUCT':
      return {
        ...state,
        product: payload,
      }

    case 'CLEAR_PRODUCT':
      return {
        ...state,
        product: null,
      }

    case 'SET_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: payload,
      }
    case 'ADD_TO_RECENTLY_VIEWD': {
      if (state.recentlyViewed.findIndex((x) => x._id == payload._id) === -1)
        state.recentlyViewed.unshift(payload)

      return {
        ...state,
        recentlyViewed: state.recentlyViewed,
      }
    }
    case 'CLEAR_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: null,
      }

    default:
      return state
  }
}
