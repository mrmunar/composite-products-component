import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { render, cleanup } from '@testing-library/react';
import AddEdit from './';

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

const invalidTestData = {
    id: 'efd0dab3-4813-44f0-98bc-ea3366582498',
    name: '',
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
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

// Mocking GenerateRecursiveComponentForm component. Will test this in isolation
jest.mock('../../../components/compositeProducts/generateRecursiveComponentForm', () => () => 'GenerateRecursiveComponentForm');

const mockUseDispatch = useDispatch as jest.Mock;
const mockUseSelector = useSelector as jest.Mock;
const mockDispatch = jest.fn();

mockUseDispatch.mockImplementation(() => mockDispatch);
mockUseSelector.mockImplementation(state => testData);

test('should take a snapshot', () => {
    const { baseElement } = render(<AddEdit
        match={{ params: { id: 'some-test-id' } }}
    />);
    expect(baseElement).toMatchSnapshot();
});

test('validation message should appear if input data is invalid', () => {
    mockUseSelector.mockImplementation(state => invalidTestData);
    const { getByTestId } = render(<AddEdit
        onChange={() => { }}
        match={{ params: { id: 'some-test-id' } }}
    />);
    expect(getByTestId('add-edit-container')).toHaveTextContent('Please fill up all required fields');
});

test('validation message should be hidden if input data is valid', () => {
    mockUseSelector.mockImplementation(state => testData);

    const { getByTestId } = render(<AddEdit
        match={{ params: { id: 'some-test-id' } }}
    />);
    expect(getByTestId('add-edit-container')).not.toHaveTextContent('Please fill up all required fields');
});