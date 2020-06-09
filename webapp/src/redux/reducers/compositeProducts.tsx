import {
    GET_COMPOSITE_PRODUCTS_REQUEST,
    GET_COMPOSITE_PRODUCTS_SUCCESS,
    GET_COMPOSITE_PRODUCTS_FAILED,
} from '../../constants/ActionTypes';

const INIT_STATE = {
    records: [],
    isLoading: false
};

export default (state = INIT_STATE, action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case GET_COMPOSITE_PRODUCTS_REQUEST:
            newState.isLoading = true;
            break;
        case GET_COMPOSITE_PRODUCTS_SUCCESS:
            newState.records = action.compositeProducts;
            newState.isLoading = false;
            break;
        case GET_COMPOSITE_PRODUCTS_FAILED:
            newState.isLoading = false;
            break;
        default:
            return newState;
    }

    return newState;
}
