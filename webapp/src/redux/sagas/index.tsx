import { all } from "redux-saga/effects";
import productSagas from "./products";
import compositeProductSagas from "./compositeProducts";

export default function* rootSaga(getState: any) {
    yield all([
        productSagas(),
        compositeProductSagas(),
    ]);
}
