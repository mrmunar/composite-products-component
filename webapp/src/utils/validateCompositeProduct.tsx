export const validateCompositeProduct = (currentNode: any): any => {
    if (currentNode.components && currentNode.components.length === 0) {
        return true;
    } else {
        let result = true;

        for (let item of currentNode.components) {
            console.log('item', item);
            if (item.productId === '') {
                result = false;
            }

            if (item.components && item.components.length > 0) {
                result = validateCompositeProduct(item);
            }
        }

        return result;
    }
}