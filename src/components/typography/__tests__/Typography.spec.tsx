import * as React from 'react';

import { shallow } from 'enzyme';

import { Typography } from '../Typography';

describe('Typography', () => {
  it('has the correct display names', () => {
    const wrapper = shallow(
      <div>
        <Typography.Title>Title</Typography.Title>
        <Typography.Subtitle>Subtitle</Typography.Subtitle>
        <Typography.Body>Body</Typography.Body>
        <Typography.Description>Description</Typography.Description>
        <Typography.Label>Label</Typography.Label>
      </div>
    );

    expect(wrapper.find('Body')).toExist();
    expect(wrapper.find('Description')).toExist();
    expect(wrapper.find('Label')).toExist();
    expect(wrapper.find('Subtitle')).toExist();
    expect(wrapper.find('Title')).toExist();
  });

  it('renders Title', () => {
    const wrapper = shallow(<Typography.Title>Title</Typography.Title>);

    expect(wrapper.exists('StyledTitle')).toBe(true);
  });

  it('sets the level prop', () => {
    const wrapper = shallow(
      <Typography.Title level={2}>Title</Typography.Title>
    );

    expect(wrapper.find('StyledTitle').prop('level')).toEqual(2);
  });

  it('renders Subtitle', () => {
    const wrapper = shallow(
      <Typography.Subtitle>Subtitle</Typography.Subtitle>
    );

    expect(wrapper.exists('StyledSubtitle')).toBe(true);
  });

  it('renders Body', () => {
    const wrapper = shallow(<Typography.Body>Body</Typography.Body>);

    expect(wrapper.exists('StyledBody')).toBe(true);
  });

  it('renders Description', () => {
    const wrapper = shallow(
      <Typography.Description>Description</Typography.Description>
    );

    expect(wrapper.exists('StyledDescription')).toBe(true);
  });

  it('renders Label', () => {
    const wrapper = shallow(<Typography.Label>Label</Typography.Label>);

    expect(wrapper.exists('StyledLabel')).toBe(true);
  });
});
