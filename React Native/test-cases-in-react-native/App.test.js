import App from './App';
import React from "react";
import renderer from "react-test-renderer";


it('should ', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree);
});