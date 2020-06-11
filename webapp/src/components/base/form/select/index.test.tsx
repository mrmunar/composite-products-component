import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Select from './';

afterEach(cleanup);

const testData = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
];

test('should take a snapshot', () => {
    const { baseElement } = render(<Select data={testData} />);
    expect(baseElement).toMatchSnapshot();
});

test('initial value is blank', () => {
    const { getByTestId } = render(<Select data={testData} />);
    expect(getByTestId('select')).toHaveValue('');
});

test('can change a value', () => {
    const { getByTestId } = render(<Select data={testData} onChange={() => { }} value="Test Value" />);
    fireEvent.change(screen.getByTestId('select'), {
        target: { value: 2 },
      });
    expect(getByTestId('select')).toHaveValue('2');
});

test('cannot select an item thats not on the list', () => {
    const { getByTestId } = render(<Select data={testData} onChange={() => { }} value="Test Value" />);
    fireEvent.change(screen.getByTestId('select'), {
        target: { value: 10 },
      });
    expect(getByTestId('select')).not.toHaveValue(10);
});

