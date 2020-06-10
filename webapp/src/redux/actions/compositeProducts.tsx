import {
    GET_COMPOSITE_PRODUCTS_REQUEST,
    ADD_COMPOSITE_PRODUCTS_REQUEST
} from '../../constants/ActionTypes';

export const getCompositeProducts = () => {
    return {
        type: GET_COMPOSITE_PRODUCTS_REQUEST
    };
};

export const addCompositeProducts = (data: any) => {
    return {
        type: ADD_COMPOSITE_PRODUCTS_REQUEST,
        data
    };
};