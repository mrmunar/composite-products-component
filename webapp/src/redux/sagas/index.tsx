import { all } from "redux-saga/effects";
import productSagas from "./products";;

export default function* rootSaga(getState: any) {
    yield all([
        productSagas(),
    ]);
}
