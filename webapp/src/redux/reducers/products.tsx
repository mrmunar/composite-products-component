import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
} from '../../constants/ActionTypes';

const INIT_STATE = {
    records: [],
    isLoading: false
};

export default (state = INIT_STATE, action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            newState.isLoading = true;
            break;
        case GET_PRODUCTS_SUCCESS:
            newState.records = action.products;
            newState.isLoading = false;
            break;
        case GET_PRODUCTS_FAILED:
            newState.isLoading = false;
            break;
        default:
            return newState;
    }

    return newState;
}
