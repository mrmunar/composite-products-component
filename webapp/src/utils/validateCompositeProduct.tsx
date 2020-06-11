/**
 * Validates a composite product object and traverses the object recursively.
 * It tries to find productId key where there is no value and returns false to 
 * indicate that the composite product object is invalid.
 */
export const validateCompositeProduct = (currentNode: any): any => {
    if (currentNode.components && currentNode.components.length === 0) {
        return true;
    }
    
    let result = true;

    for (let item of currentNode.components) {
        if (item && item.productId === '') {
            result = false;
        }

        if (item && item.components && item.components.length > 0) {
            result = validateCompositeProduct(item);
        }
    }

    return result;
}