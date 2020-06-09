export const validateCompositeProduct = (currentNode: any): any => {
    if (currentNode.components && currentNode.components.length === 0) {
        return true;
    } else {
        let result = true;

        for (let item of currentNode.components) {
            if (item.productId === '') {
                return false;
            }

            if (item.components && item.components.length > 0) {
                result = validateCompositeProduct(item);
            }

            return result;
        }

        return true;
    }
}