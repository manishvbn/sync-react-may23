// Reducer is a Pure Function
// A reducer is a function that determines changes to an application's state.
// It uses the action it receives via dispatcher, to determine this change. 

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const productReducer = (state = initialState.productsData, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS_REQUESTED:
        case actionTypes.LOAD_PRODUCTS_FAILED:
            return {
                products: [...state.products],
                status: action.payload.message,
                flag: action.payload.flag
            };
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                products: [...action.payload.data],
                status: action.payload.message,
                flag: action.payload.flag
            };
        default:
            return state;
    }
}

export default productReducer;