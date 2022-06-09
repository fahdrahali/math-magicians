import React from 'react';
import TestRenderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const renderer = TestRenderer.create(<Calculator />).toJSON();
  expect(renderer).toMatchSnapshot();
});
