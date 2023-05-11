import * as actionTypes from './actionTypes';

// Action Creator
export function incCounter(interval = 1) {
    // Create and Return an Action Object
    return {
        type: actionTypes.INCREMENT_COUNTER,
        payload: interval
    };
}

// Action Creator
export function decCounter(interval = 1) {
    // Create and Return an Action Object
    return {
        type: actionTypes.DECREMENT_COUNTER,
        payload: interval
    };
}