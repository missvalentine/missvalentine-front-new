
export const setAllCategories = (_categories) => async (dispatch) => dispatch({
    type: "SET_CATEGORIES",
    payload: _categories,
  });

export const clearAllCategories = () => async (dispatch) => dispatch({
    type: "CLEAR_CATEGORIES",
  });

export const addCategoryData = (_category) => async (dispatch) => dispatch({
    type: "ADD_CATEGORY_DATA",
    payload: _category,
  });

export const removeCategoryData = (_categoryId) => async (dispatch) => dispatch({
    type: "REMOVE_CATEGORY_DATA",
    payload: _categoryId,
  });