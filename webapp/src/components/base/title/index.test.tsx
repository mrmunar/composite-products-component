import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Title from './';

afterEach(cleanup);

test('should take a snapshot', () => {
    const { baseElement } = render(<Title />);
    expect(baseElement).toMatchSnapshot();
});

test('can have a value', () => {
    const { getByTestId } = render(<Title>Test Title</Title>);
    expect(getByTestId('title')).toHaveTextContent('Test Title');
});