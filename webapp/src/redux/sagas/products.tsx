import { all, fork, put, takeEvery } from "redux-saga/effects";

import { getProducts } from '../../apis/products';
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from "../../constants/ActionTypes";


function* getProductsRequest() {
    try {
        const response = yield getProducts();

        yield put({ type: GET_PRODUCTS_SUCCESS, products: response });
    } catch (error) {
        console.error(error.message);
        yield put({ type: GET_PRODUCTS_FAILED });
        return;
    }
}

function* watchGetProductsRequest() {
    yield takeEvery(GET_PRODUCTS_REQUEST, getProductsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetProductsRequest),
    ]);
}