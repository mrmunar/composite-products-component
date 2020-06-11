import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Main from './';

afterEach(cleanup);

test('should take a snapshot', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toMatchSnapshot();
});

test('can have a value', () => {
    const { getByTestId } = render(<Main>Test Content</Main>);
    expect(getByTestId('main-container')).toHaveTextContent('Test Content');
});