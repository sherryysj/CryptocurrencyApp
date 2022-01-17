jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../../src/Contents/Content';

test('renders correctly', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});