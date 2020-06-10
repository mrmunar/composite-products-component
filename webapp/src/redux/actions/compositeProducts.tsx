import {
    GET_COMPOSITE_PRODUCTS_REQUEST,
    GET_COMPOSITE_PRODUCT_REQUEST,
    ADD_COMPOSITE_PRODUCTS_REQUEST,
    EDIT_COMPOSITE_PRODUCTS_REQUEST
} from '../../constants/ActionTypes';

export const getCompositeProducts = () => {
    return {
        type: GET_COMPOSITE_PRODUCTS_REQUEST
    };
};

export const getCompositeProduct = (id: string) => {
    return {
        type: GET_COMPOSITE_PRODUCT_REQUEST,
        id
    };
};

export const addCompositeProducts = (data: any) => {
    return {
        type: ADD_COMPOSITE_PRODUCTS_REQUEST,
        data
    };
};

export const editCompositeProduct = (id: string, data: any) => {
    return {
        type: EDIT_COMPOSITE_PRODUCTS_REQUEST,
        id,
        data
    };
};