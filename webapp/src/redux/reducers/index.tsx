import { combineReducers } from "redux";
import products from './products';
import compositeProducts from './compositeProducts';

const reducers = combineReducers({
    products,
    compositeProducts
});

export default reducers;