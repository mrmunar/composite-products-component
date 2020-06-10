import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should take a snapshot', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toMatchSnapshot();
});
