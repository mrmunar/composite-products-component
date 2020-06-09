import {
    GET_PRODUCTS_REQUEST
} from '../../constants/ActionTypes';

export const getProducts = () => {
    console.log('action');
    return {
        type: GET_PRODUCTS_REQUEST
    };
};