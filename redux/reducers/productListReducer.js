import { GET_AUTHOR_SUCCESS } from '../actions/types';
import { Map } from 'immutable';

const initialState = {
  allProducts: [],
  product:null
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        allProducts: payload,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      };
    case 'SET_SUBCATEGORIES':
      return {
        ...state,
        subcategories: payload,
      };

    case 'SET_PRODUCT':
      return {
        ...state,
        product: payload,
      };

    case 'CLEAR_PRODUCT':
      return {
        ...state,
        product: null,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: payload,
      };
    case 'CLEAR_CATEGORY':
      return {
        ...state,
        category: null,
      };
    case 'SET_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: payload,
      };
    case 'ADD_TO_RECENTLY_VIEWD':
      let tempRecentlyViewed = state.recentlyViewed;
      if (tempRecentlyViewed.findIndex((x) => x._id === payload._id) === -1)
        tempRecentlyViewed.push(payload);

      return {
        ...state,
        recentlyViewed: tempRecentlyViewed,
      };

    case 'CLEAR_RECENTLY_VIEWD':
      return {
        ...state,
        recentlyViewed: null,
      };

    default:
      return state;
  }
}