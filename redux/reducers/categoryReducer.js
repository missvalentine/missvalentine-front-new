const initialState = {
  categories: [],
  isDefaultProductLoaded: false,
  subcategories: [],
  categoriesData: {},
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      }

    case 'CLEAR_CATEGORIES':
      return {
        ...state,
        categories: [],
      }

    case 'SET_SUBCATEGORIES':
      return {
        ...state,
        subcategories: payload,
      }

    case 'CLEAR_SUBCATEGORIES':
      return {
        ...state,
        subcategories: [],
      }

    case 'ADD_CATEGORY_DATA':{
      let newCategoriesData= {...state.categoriesData};
      const key= payload.slug;
      // newCategoriesData[key]= payload;
      Object.assign(newCategoriesData, { [key] : payload});

      console.log("payload", payload );
      console.log("key", key ,newCategoriesData );
      return {
        ...state,
        categoriesData: newCategoriesData,
      }
    }

    case 'REMOVE_CATEGORY_DATA':
      return {
        ...state,
        categoriesData: [],
      }

    default:
      return state
  }
}
