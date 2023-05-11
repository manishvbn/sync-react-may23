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

// ----------------------------- INSERT
function insertProductSuccess(product, msg) {
    return {
        type: actionTypes.INSERT_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function insertProduct(product, navigateCB) {
    return function (dispatch) {
        // TO DO - Insert Requested

        productAPIClient.insertProduct(product).then(insertedProduct => {
            dispatch(insertProductSuccess(insertedProduct, "Product Created Successfully...."));
            navigateCB();
        }).catch(eMsg => {
            // TO DO - Insert Failed
        });
    };
}

// ----------------------------- UPDATE
function updateProductSuccess(product, msg) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function updateProduct(product, navigateCB) {
    return function (dispatch) {
        // TO DO - Update Requested

        productAPIClient.updateProduct(product).then(updatedProduct => {
            dispatch(updateProductSuccess(updatedProduct, "Product Updated Successfully...."));
            navigateCB();
        }).catch(eMsg => {
            // TO DO - Update Failed
        });
    };
}