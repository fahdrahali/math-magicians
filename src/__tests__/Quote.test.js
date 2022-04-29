import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const renderer = TestRenderer.create(<Quote />).toJSON();
  expect(renderer).toMatchSnapshot();
});
