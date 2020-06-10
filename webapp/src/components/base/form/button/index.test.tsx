import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from './';

afterEach(cleanup);

test('should take a snapshot', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toMatchSnapshot();
});

test('to have defined label', () => {
    const { getByTestId } = render(<Button label="Test Label" />);
    expect(getByTestId('button')).toHaveTextContent("Test Label");
});

test('button is clickable', done => {
    function handleClick() {
        done();
    }
    const { getByTestId } = render(
        <Button onClick={handleClick} />
    );
    const node = getByTestId('button');
    fireEvent.click(node);
});