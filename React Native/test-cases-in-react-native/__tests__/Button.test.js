import React from "react";
import renderer from "react-test-renderer";
import Button from '../screens/Button';
it('renders correctly across screens', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});