import { all, fork, put, takeEvery } from "redux-saga/effects";

import { 
    getCompositeProducts, 
    getCompositeProduct, 
    addCompositeProducts,
    editCompositeProduct 
} from '../../apis/compositeProducts';
import {
    GET_COMPOSITE_PRODUCTS_REQUEST,
    GET_COMPOSITE_PRODUCTS_SUCCESS,
    GET_COMPOSITE_PRODUCTS_FAILED,
    GET_COMPOSITE_PRODUCT_REQUEST,
    GET_COMPOSITE_PRODUCT_SUCCESS,
    GET_COMPOSITE_PRODUCT_FAILED,
    ADD_COMPOSITE_PRODUCTS_REQUEST,
    ADD_COMPOSITE_PRODUCTS_SUCCESS,
    ADD_COMPOSITE_PRODUCTS_FAILED,
    EDIT_COMPOSITE_PRODUCTS_REQUEST,
    EDIT_COMPOSITE_PRODUCTS_SUCCESS,
    EDIT_COMPOSITE_PRODUCTS_FAILED
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

function* getCompositeProductRequest(data: any) {
    try {
        const response = yield getCompositeProduct(data.id);

        yield put({ type: GET_COMPOSITE_PRODUCT_SUCCESS, compositeProduct: response });
    } catch (error) {
        console.error(error.message);
        yield put({ type: GET_COMPOSITE_PRODUCT_FAILED });
        return;
    }
}

function* addCompositeProductRequest(data: any) {
    try {
        const response = yield addCompositeProducts(data.data);

        yield put({ type: ADD_COMPOSITE_PRODUCTS_SUCCESS, compositeProduct: response });
        yield getCompositeProductsRequest();
    } catch (error) {
        console.error(error.message);
        yield put({ type: ADD_COMPOSITE_PRODUCTS_FAILED });
        return;
    }
}

function* editCompositeProductRequest(data: any) {
    console.log('saga-data', data);
    try {
        const response = yield editCompositeProduct(data.id, data.data);

        yield put({ type: EDIT_COMPOSITE_PRODUCTS_SUCCESS });
        yield getCompositeProductsRequest();
    } catch (error) {
        console.error(error.message);
        yield put({ type: EDIT_COMPOSITE_PRODUCTS_FAILED });
        return;
    }
}

function* watchGetCompositeProductsRequest() {
    yield takeEvery(GET_COMPOSITE_PRODUCTS_REQUEST, getCompositeProductsRequest);
}

function* watchGetCompositeProductRequest() {
    yield takeEvery(GET_COMPOSITE_PRODUCT_REQUEST, getCompositeProductRequest);
}

function* watchAddCompositeProductsRequest() {
    yield takeEvery(ADD_COMPOSITE_PRODUCTS_REQUEST, addCompositeProductRequest);
}

function* watchEditCompositeProductsRequest() {
    yield takeEvery(EDIT_COMPOSITE_PRODUCTS_REQUEST, editCompositeProductRequest);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetCompositeProductsRequest),
        fork(watchGetCompositeProductRequest),
        fork(watchAddCompositeProductsRequest),
        fork(watchEditCompositeProductsRequest),
    ]);
}