import { validateCompositeProduct } from './validateCompositeProduct';

const compositeProductTestData = {
    type: 'GROUP',
    label: 'Legs',
    components: [{
        type: 'PRODUCT',
        quantity: 4,
        productId: '94daaf0b-ec73-4052-aba0-9b0c5d502417'
    }, {
        type: 'GROUP',
        label: 'Fasteners',
        components: [{
            type: 'PRODUCT',
            quantity: 12,
            productId: '990650ee-ee52-449c-b53e-b55260ff8734'
        }, {
            type: 'PRODUCT',
            quantity: 12,
            productId: '172cc52d-8259-461d-bcf0-72b8e1390450'
        }]
    }]
};

const compositeProductInvalidTestData = {
    type: 'GROUP',
    label: '',
    components: [{
        type: 'PRODUCT',
        quantity: 4,
        productId: ''
    }, {
        type: 'GROUP',
        label: 'Fasteners',
        components: [{
            type: 'PRODUCT',
            quantity: 12,
            productId: ''
        }, {
            type: 'PRODUCT',
            quantity: 12,
            productId: ''
        }]
    }]
};


describe('validate composite product function', () => {
    test('data should be valid', () => {
        const result = validateCompositeProduct(compositeProductTestData);
        expect(result).toBeTruthy();
    });

    test('data should be valid', () => {
        const result = validateCompositeProduct(compositeProductInvalidTestData);
        expect(result).toBeFalsy();
    });
});