import React from "react";
import renderer from "react-test-renderer";
import LegendItem from "../LegendItem";

const props = {
  name: "Food",
  value: 10,
  color: "red"
};

jest.unmock("../LegendItem");

it("LegendItem renders correctly", () => {
  const tree = renderer.create(<LegendItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("LegendItem should not render if value is 0", () => {
  const tree = renderer.create(<LegendItem {...props} value={0} />).toJSON();
  expect(tree).toBeNull();
});
