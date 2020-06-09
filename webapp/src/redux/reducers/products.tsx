import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS
} from '../../constants/ActionTypes';

const INIT_STATE = {
    products: [],
    isLoading: false
};

export default (state = INIT_STATE, action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            newState.isLoading = true;
            break;
        case GET_PRODUCTS_SUCCESS:
            newState.products = action.products;
            newState.isLoading = false;
            break;
        default:
            return newState;
    }

    return newState;
}
