import React from 'react';
import TestRenderer from 'react-test-renderer';
import Welcome from '../components/Welcome';

it('renders correctly', () => {
  const renderer = TestRenderer.create(<Welcome />).toJSON();
  expect(renderer).toMatchSnapshot();
});
