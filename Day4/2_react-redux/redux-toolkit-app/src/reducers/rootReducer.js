import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    productsData: productReducer
});

export default rootReducer;