import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { render, cleanup } from '@testing-library/react';
import GenerateRecursiveComponentForm from './';

afterEach(cleanup);

const testData = {
    id: 'efd0dab3-4813-44f0-98bc-ea3366582498',
    name: 'Example 1',
    components: [{
        type: 'PRODUCT',
        quantity: 1,
        productId: 'ba7a0995-4193-4589-8150-54a3cef5f2c6'
    }, {
        type: 'GROUP',
        label: 'Test Group',
        components: []
    }]
};

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}));

// Mocking ProductItem component. Will test this in isolation
jest.mock('../productItem', () => () => 'ProductItem');

const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

mockUseDispatch.mockImplementation(() => mockDispatch);

test('should take a snapshot', () => {
    const { baseElement } = render(<GenerateRecursiveComponentForm
        compositeProduct={testData}
        onChange={() => { }}
    />);
    expect(baseElement).toMatchSnapshot();
});

test('should render testData', () => {
    const { getByTestId } = render(<GenerateRecursiveComponentForm
        compositeProduct={testData}
        onChange={() => { }}
    />);
    expect(getByTestId('group-container')).toHaveTextContent('Group Label');
});