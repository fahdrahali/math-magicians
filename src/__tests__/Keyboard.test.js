import React from 'react';
import TestRenderer from 'react-test-renderer';
import Keyboard from '../components/Keyboard';

it('renders correctly', () => {
  const renderer = TestRenderer.create(<Keyboard />).toJSON();
  expect(renderer).toMatchSnapshot();
});
