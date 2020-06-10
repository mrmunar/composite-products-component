import { COMPOSITE_PRODUCTS_URL } from '../constants/ApiEndpoints';

export const getCompositeProducts = async () => {
    const response = await fetch(`${COMPOSITE_PRODUCTS_URL}`, {
        method: 'GET' 
    })
    .then(response => response)
    .catch(error => error);
        
    return response.json();
}

export const addCompositeProducts = async (data: any) => {
    const response = await fetch(`${COMPOSITE_PRODUCTS_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    .then(response => response)
    .catch(error => error);
        
    return response.json();
}