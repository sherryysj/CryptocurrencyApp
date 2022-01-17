jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/Headers/Header';

test('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});