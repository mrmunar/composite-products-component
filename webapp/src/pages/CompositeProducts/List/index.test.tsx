import { createMemoryHistory } from 'history';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import List from './';

afterEach(cleanup);

const testData = [{
    id: 'efd0dab3-4813-44f0-98bc-ea3366582498',
    name: 'Example 1',
    components: [{
        type: 'PRODUCT',
        quantity: 1,
        productId: 'ba7a0995-4193-4589-8150-54a3cef5f2c6'
    }]
}, {
    id: '0ddaf224-92d0-48c4-b3c3-3c991ff8dd01',
    name: 'Example 2',
    components: [{
        type: 'GROUP',
        label: 'Nut and Bolt set',
        components: [{
            type: 'PRODUCT',
            quantity: 1,
            productId: '990650ee-ee52-449c-b53e-b55260ff8734'
        }, {
            type: 'PRODUCT',
            quantity: 1,
            productId: '172cc52d-8259-461d-bcf0-72b8e1390450'
        }]
    }]
}, {
    id: 'fdb6b185-2844-429d-888b-f7aa9e714dab',
    name: 'Example 3',
    components: [{
        type: 'PRODUCT',
        quantity: 1,
        productId: 'ba7a0995-4193-4589-8150-54a3cef5f2c6'
    }, {
        type: 'PRODUCT',
        quantity: 4,
        productId: '7d5350b9-65d9-4c0f-9ebb-cc18103325a8'
    }, {
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
    }]
}];

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

const mockUseDispatch = useDispatch as jest.Mock;
const mockUseSelector = useSelector as jest.Mock;
const mockDispatch = jest.fn();

mockUseDispatch.mockImplementation(() => mockDispatch);
mockUseSelector.mockImplementation(state => testData);

test('should take a snapshot', () => {
    const { baseElement } = render(<BrowserRouter><List /></BrowserRouter>);
    expect(baseElement).toMatchSnapshot();
});

test('should render Loader if no data has been received yet', () => {
    mockUseSelector.mockImplementation(state => []);
    const { getByTestId } = render(<BrowserRouter><List /></BrowserRouter>);
    expect(getByTestId('list-container')).toHaveTextContent('Loading...');
});

test('can go to edit page if list item link is clicked', () => {
    mockUseSelector.mockImplementation(state => testData);

    const history = createMemoryHistory();

    const { container, getByText } = render(
        <Router history={history}><List /></Router>
    );
    expect(history.location.pathname).toBe('/');

    fireEvent.click(getByText(/Example 1/i));
    expect(history.location.pathname).toBe('/efd0dab3-4813-44f0-98bc-ea3366582498');

    fireEvent.click(getByText(/Example 2/i));
    expect(history.location.pathname).toBe('/0ddaf224-92d0-48c4-b3c3-3c991ff8dd01');

    fireEvent.click(getByText(/Example 3/i));
    expect(history.location.pathname).toBe('/fdb6b185-2844-429d-888b-f7aa9e714dab');
});