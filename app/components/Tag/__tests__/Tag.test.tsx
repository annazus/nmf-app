import React from "react";
import renderer from "react-test-renderer";
import Tag from "../Tag";

jest.unmock("../Tag.tsx");

let props;

beforeEach(() => {
  props = {
    selected: false,
    title: "Transport",
    onPress: () => {
      // do nothing.
    },
  };
});

/* TEXT ONLY */

it("Tag renders correctly with no icon", () => {
  const tree = renderer.create(<Tag {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with no icon and selected", () => {
  const tree = renderer.create(<Tag {...props} selected />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* WITH ICON */

it("Tag renders correctly with airplane icon", () => {
  const tree = renderer.create(<Tag {...props} icon="md-airplane" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with airplane icon and selected", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-airplane" selected />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with restaurant icon", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-restaurant" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with restaurant icon and selected", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-restaurant" selected />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with build icon", () => {
  const tree = renderer.create(<Tag {...props} icon="md-build" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with build icon and selected", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-build" selected />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with md-play-circle icon", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-play-circle" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tag renders correctly with md-play-circle icon and selected", () => {
  const tree = renderer
    .create(<Tag {...props} icon="md-play-circle" selected />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
