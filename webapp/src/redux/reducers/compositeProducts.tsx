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
    EDIT_COMPOSITE_PRODUCTS_FAILED,
} from '../../constants/ActionTypes';

const INIT_STATE = {
    records: [],
    record: null,
    isLoading: false,
    add: {
        isSaving: false,
        isSaved: false
    }
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
        case GET_COMPOSITE_PRODUCT_REQUEST:
            newState.isLoading = true;
            break;
        case GET_COMPOSITE_PRODUCT_SUCCESS:
            newState.record = action.compositeProduct;
            newState.isLoading = false;
            break;
        case GET_COMPOSITE_PRODUCT_FAILED:
            newState.isLoading = false;
            break;
        case ADD_COMPOSITE_PRODUCTS_REQUEST:
        case EDIT_COMPOSITE_PRODUCTS_REQUEST:
            newState.add.isSaving = true;
            newState.add.isSaved = false;
            break;
        case ADD_COMPOSITE_PRODUCTS_SUCCESS:
        case EDIT_COMPOSITE_PRODUCTS_SUCCESS:
            newState.add.isSaving = false;
            newState.add.isSaved = true;
            break;
        case ADD_COMPOSITE_PRODUCTS_FAILED:
        case EDIT_COMPOSITE_PRODUCTS_FAILED:
            newState.add.isSaving = false;
            newState.add.isSaved = false;
            break;
        default:
            return newState;
    }

    return newState;
}
