import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import InputText from './';

afterEach(cleanup);

test('should take a snapshot', () => {
    const { baseElement } = render(<InputText />);
    expect(baseElement).toMatchSnapshot();
});

test('can set a value', () => {
    const { getByTestId } = render(<InputText value="Test Value" />);
    expect(getByTestId('input-text')).toHaveValue('Test Value');
});

test('can change a value', () => {
    const { getByTestId } = render(<InputText onChange={() => {}} value="Test Value" />);
    fireEvent.change(getByTestId('input-text'), { target: { value: '23' } })
    expect(getByTestId('input-text')).toHaveValue('23');
});


