jest.useFakeTimers()

import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../src/Contents/Search';
import { useState } from 'react';

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test onChangeSearch