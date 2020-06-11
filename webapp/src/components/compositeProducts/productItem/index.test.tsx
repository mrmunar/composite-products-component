import React from 'react';
import * as redux from 'react-redux';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import ProductItem from './';

afterEach(cleanup);

const testData = {
    type: 'PRODUCT',
    quantity: 1,
    productId: 'ba7a0995-4193-4589-8150-54a3cef5f2c6'
};

const productTestData = [{
    id: 'ba7a0995-4193-4589-8150-54a3cef5f2c6',
    type: 'PRODUCT',
    name: 'Table Top Birch 1600x700'
}, {
    id: '94daaf0b-ec73-4052-aba0-9b0c5d502417',
    type: 'PRODUCT',
    name: 'Table Leg Birch 60x60x700'
}, {
    id: '990650ee-ee52-449c-b53e-b55260ff8734',
    type: 'PRODUCT',
    name: 'Stainless Bolt M12x80 Hex'
}];

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

const mockUseDispatch = redux.useDispatch as jest.Mock;
const mockUseSelector = redux.useSelector as jest.Mock;
const mockDispatch = jest.fn();

mockUseDispatch.mockImplementation(() => mockDispatch);
mockUseSelector.mockImplementation(state => productTestData);

test('should take a snapshot', () => {
    const { baseElement } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
    />);
    expect(baseElement).toMatchSnapshot();
});

test('should render testData', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
    />);

    expect(getByTestId('select-container')).toHaveTextContent('Table Top Birch 1600x700');
    expect(getByTestId('select-container')).toHaveTextContent('Table Leg Birch 60x60x700');
    expect(getByTestId('select-container')).toHaveTextContent('Stainless Bolt M12x80 Hex');
});

test('quantity input to have default value of 1', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onNumberChange={() => { }}
    />);
    expect(getByTestId('number-input')).toHaveValue(1);
});

test('quantity input cannot have negative input', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onNumberChange={() => { }}
    />);
    fireEvent.change(screen.getByTestId('number-input'), {
        target: { value: '-999' },
    });
    expect(getByTestId('number-input')).not.toHaveValue('-999');
});

test('quantity input cannot have non-integer characters', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onNumberChange={() => { }}
    />);
    fireEvent.change(screen.getByTestId('number-input'), {
        target: { value: 'abc' },
    });
    expect(getByTestId('number-input')).not.toHaveValue('abc');

    fireEvent.change(screen.getByTestId('number-input'), {
        target: { value: '@#$!#%^^' },
    });
    expect(getByTestId('number-input')).not.toHaveValue('@#$!#%^^');
});

test('validation message should appear if input data is invalid', () => {
    const { getByTestId } = render(<ProductItem
        defaultQuantity={testData.quantity}
    />);
    expect(getByTestId('validation-container')).toHaveTextContent('Please choose a Product');
});

test('validation message should be hidden if input data is valid', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
    />);
    expect(getByTestId('validation-container')).not.toHaveTextContent('Please choose a Product');
});

test('delete button is clickable', done => {
    function handleClick() {
        done();
    }
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onProductDelete={handleClick}
    />);
    const node = getByTestId('button');
    fireEvent.click(node);
});

test('can select a valid product', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onSelectChange={() => { }}
    />);
    fireEvent.change(screen.getByTestId('select'), {
        target: { value: 'ba7a0995-4193-4589-8150-54a3cef5f2c6' },
    });
    expect(getByTestId('select')).toHaveValue('ba7a0995-4193-4589-8150-54a3cef5f2c6');

    fireEvent.change(screen.getByTestId('select'), {
        target: { value: '990650ee-ee52-449c-b53e-b55260ff8734' },
    });
    expect(getByTestId('select')).toHaveValue('990650ee-ee52-449c-b53e-b55260ff8734');
});

test('cannot select a invalid product', () => {
    const { getByTestId } = render(<ProductItem
        defaultItemValue={testData.productId}
        defaultQuantity={testData.quantity}
        onSelectChange={() => { }}
    />);
    fireEvent.change(screen.getByTestId('select'), {
        target: { value: 'some-invalid-value' },
    });
    expect(getByTestId('select')).not.toHaveValue('some-invalid-value');
});

