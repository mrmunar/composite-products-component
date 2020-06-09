import { PRODUCTS_URL } from '../constants/ApiEndpoints';

export const getProducts = async () => {
    const response = await fetch(`${PRODUCTS_URL}`, {
        method: 'GET' 
    })
    .then(response => response)
    .catch(error => error);
        
    return response.json();
}