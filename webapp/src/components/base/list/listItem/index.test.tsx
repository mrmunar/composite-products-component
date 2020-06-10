import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import ListItem from './';

afterEach(cleanup);

const testData = { id: 1, name: 'item1' };

test('should take a snapshot', () => {
    const { baseElement } = render(<ListItem item={testData} />);
    expect(baseElement).toMatchSnapshot();
});

test('should render an item', () => {
    const { getByTestId } = render(<ListItem item={testData} />);
    expect(getByTestId('list-item')).toHaveTextContent('item1');
});

test('should show item as link', () => {
    const { getByTestId } = render(<Router><ListItem item={testData} withLinks /></Router>);
    expect(getByTestId('list-item-link')).toHaveTextContent('item1');
});


