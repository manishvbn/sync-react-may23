import * as actionTypes from './actionTypes';
import productAPIClient from '../services/product-api-client';

function loadProductsRequested(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_REQUESTED,
        payload: { message: msg, flag: false }
    };
}

function loadProductsSuccess(products, msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_SUCCESS,
        payload: { data: products, message: msg, flag: true }
    };
}

function loadProductsFailed(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED,
        payload: { message: msg, flag: true }
    };
}

export function loadProducts() {
    return function (dispatch) {
        dispatch(loadProductsRequested("Products Request Started...."));

        productAPIClient.getAllProducts().then(products => {
            dispatch(loadProductsSuccess(products, "Products Request Completed Successfully...."));
        }).catch(eMsg => {
            dispatch(loadProductsFailed(eMsg));
        });
    };
}