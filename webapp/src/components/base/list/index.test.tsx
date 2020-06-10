import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import List from './';

afterEach(cleanup);

const testData = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
];

test('should take a snapshot', () => {
    const { baseElement } = render(<List items={testData} />);
    expect(baseElement).toMatchSnapshot();
});

test('should render items', () => {
    const { getByTestId } = render(<List items={testData} />);
    expect(getByTestId('list')).toHaveTextContent('item1');
    expect(getByTestId('list')).toHaveTextContent('item2');
    expect(getByTestId('list')).toHaveTextContent('item3');
});


