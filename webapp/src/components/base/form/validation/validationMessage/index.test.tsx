import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import ValidationMessage from './';

afterEach(cleanup);

test('should take a snapshot', () => {
    const { baseElement } = render(<ValidationMessage />);
    expect(baseElement).toMatchSnapshot();
});

test('return null if valid', () => {
    const { queryAllByTestId } = render(<ValidationMessage valid={true} />);
    expect(screen.queryByTestId('validation-msg')).toBeNull()
});

test('return null if valid', () => {
    const { queryAllByTestId } = render(<ValidationMessage valid={false} />);
    expect(screen.queryByTestId('validation-msg')).not.toBeNull()
});

test('can have a message value', () => {
    const { getByTestId } = render(<ValidationMessage valid={false} message="Test Message" />);
    expect(getByTestId('validation-msg')).toHaveTextContent('Test Message');
});


