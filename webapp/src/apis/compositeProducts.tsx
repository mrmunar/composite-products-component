import { COMPOSITE_PRODUCTS_URL } from '../constants/ApiEndpoints';

export const getCompositeProducts = async () => {
    const response = await fetch(`${COMPOSITE_PRODUCTS_URL}`, {
        method: 'GET' 
    })
    .then(response => response)
    .catch(error => error);
        
    return response.json();
}