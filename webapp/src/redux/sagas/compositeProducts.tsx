import { all, fork, put, takeEvery } from "redux-saga/effects";

import { getCompositeProducts } from '../../apis/compositeProducts';
import {
    GET_COMPOSITE_PRODUCTS_REQUEST,
    GET_COMPOSITE_PRODUCTS_SUCCESS,
    GET_COMPOSITE_PRODUCTS_FAILED
} from "../../constants/ActionTypes";


function* getCompositeProductsRequest() {
    try {
        const response = yield getCompositeProducts();

        yield put({ type: GET_COMPOSITE_PRODUCTS_SUCCESS, compositeProducts: response });
    } catch (error) {
        console.error(error.message);
        yield put({ type: GET_COMPOSITE_PRODUCTS_FAILED });
        return;
    }
}

function* watchGetCompositeProductsRequest() {
    yield takeEvery(GET_COMPOSITE_PRODUCTS_REQUEST, getCompositeProductsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetCompositeProductsRequest),
    ]);
}