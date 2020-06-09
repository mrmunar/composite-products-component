import {
    GET_PRODUCTS_REQUEST
} from '../../constants/ActionTypes';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    };
};