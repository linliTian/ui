import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Panel } from '../Panel';

describe('Panel', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Panel>
        <div id={'test1'} />
      </Panel>
    );

    expect(wrapper.find('#test1').exists()).toBe(true);
  });

  it('removes margin when hasMargin is false', () => {
    const wrapper = shallow(
      <Panel hasMargin={false}>
        <div id={'test1'} />
      </Panel>
    );

    expect(wrapper.find('Container').prop('margin')).toBe(undefined);
    expect(wrapper.find('Container')).toHaveStyleRule('position', 'relative');
  });

  it('sets the title prop', () => {
    const wrapper = mount(
      <Panel title="Title" titleLevel={3}>
        <div id={'test1'} />
      </Panel>
    );

    expect(wrapper.exists('Title')).toBe(true);
    expect(wrapper.find('Title')).toHaveStyleRule('top', '-15px');
  });

  it('sets the titleLevel prop', () => {
    const wrapper = shallow(
      <Panel title="Title" titleLevel={5}>
        <div id={'test1'} />
      </Panel>
    );

    expect(wrapper.find('Title').prop('level')).toBe(5);
  });

  it('has the correct display name', () => {
    const wrapper = shallow(
      <div>
        <Panel>
          <div id={'test1'} />
        </Panel>
      </div>
    );

    expect(wrapper.find('Panel')).toExist();
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Panel onClick={onClickMock}>
        <div id={'test1'} />
      </Panel>
    );

    wrapper.simulate('click');

    expect(onClickMock).toBeCalled();
  });
});
