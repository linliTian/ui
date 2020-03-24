import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Tabs } from '../Tabs';

describe('Tabs', () => {
  it('renders with children', () => {
    const onTabClickMock = jest.fn();

    const wrapper = shallow(
      <Tabs onTabClick={onTabClickMock}>
        <Tabs.Item title={<div id="1" />} itemKey="1" />
      </Tabs>
    );

    expect(wrapper.exists('TabsItem')).toBe(true);
  });

  it('sets the defaultSelectedItem prop', () => {
    const onTabClickMock = jest.fn();

    const wrapper = mount(
      <Tabs onTabClick={onTabClickMock} defaultSelectedItem="1">
        <Tabs.Item title={<div id="1" />} itemKey="1" />
        <Tabs.Item title={<div id="2" />} itemKey="2" />
        <Tabs.Item title={<div id="3" />} itemKey="3" />
      </Tabs>
    );

    expect(wrapper.find('Tabs').prop('defaultSelectedItem')).toBe('1');
  });

  it('calls onTabClick with itemKey', () => {
    const onTabClickMock = jest.fn();

    const wrapper = mount(
      <Tabs onTabClick={key => onTabClickMock(key)} defaultSelectedItem="1">
        <Tabs.Item title={<div id="1" />} itemKey="1" />
        <Tabs.Item title={<div id="2" />} itemKey="2" />
        <Tabs.Item title={<div id="3" />} itemKey="3" />
      </Tabs>
    );

    wrapper
      .find('TabsItem__Container')
      .at(1)
      .simulate('click');

    expect(onTabClickMock).toBeCalledWith('2');
  });
});
