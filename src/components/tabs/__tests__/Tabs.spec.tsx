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

  it('has the correct display names', () => {
    const onTabClickMock = jest.fn();

    const wrapper = shallow(
      <div>
        <Tabs onTabClick={onTabClickMock}>
          <Tabs.Item title={<div id="1" />} itemKey="1" />
        </Tabs>
      </div>
    );

    expect(wrapper.find('Tabs')).toExist();
    expect(wrapper.find('TabsItem')).toExist();
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

  it('sets the selectedItem prop', () => {
    const onTabClickMock = jest.fn();

    const wrapper = mount(
      <Tabs onTabClick={onTabClickMock} defaultSelectedItem="1">
        <Tabs.Item title={<div id="1" />} itemKey="1" />
        <Tabs.Item title={<div id="2" />} itemKey="2" />
        <Tabs.Item title={<div id="3" />} itemKey="3" />
      </Tabs>
    );

    wrapper.setProps({ selectedItem: '2' });

    expect(wrapper.find('Tabs').prop('selectedItem')).toBe('2');
  });

  it('sets the title prop on Tabs.Item', () => {
    const onTabClickMock = jest.fn();

    const wrapper = mount(
      <Tabs onTabClick={onTabClickMock} defaultSelectedItem="1">
        <Tabs.Item title={<div id="tab-1">Tab 1</div>} itemKey="1" />
        <Tabs.Item title={<div id="tab-2">Tab 2</div>} itemKey="2" />
        <Tabs.Item title={<div id="tab-3">Tab 3</div>} itemKey="3" />
      </Tabs>
    );

    expect(wrapper.exists('#tab-2')).toBe(true);
  });

  it('calls onTabClick with itemKey', () => {
    const onTabClickMock = jest.fn();

    const wrapper = mount(
      <Tabs onTabClick={(key) => onTabClickMock(key)} defaultSelectedItem="1">
        <Tabs.Item title={<div id="1" />} itemKey="1" />
        <Tabs.Item title={<div id="2" />} itemKey="2" />
        <Tabs.Item title={<div id="3" />} itemKey="3" />
      </Tabs>
    );

    wrapper.find('TabsItem').at(1).simulate('click');

    expect(onTabClickMock).toBeCalledWith('2');
  });
});
