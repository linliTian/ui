import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Radio } from '../Radio';

describe('Radio', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Radio name="radio">
        <Radio.Item itemKey="item1">Item 1</Radio.Item>
        <Radio.Item itemKey="item2">Item 2</Radio.Item>
        <Radio.Item itemKey="item3" disabled>
          Item 3
        </Radio.Item>
      </Radio>
    );

    expect(wrapper.exists('RadioItem')).toBe(true);
  });

  it('calls onSelect with correct itemKey', () => {
    const onSelectMock = jest.fn();

    const wrapper = mount(
      <Radio name="radio" onSelect={(itemKey) => onSelectMock(itemKey)}>
        <Radio.Item itemKey="item1">Item 1</Radio.Item>
        <Radio.Item itemKey="item2">Item 2</Radio.Item>
        <Radio.Item itemKey="item3" disabled>
          Item 3
        </Radio.Item>
      </Radio>
    );

    wrapper.find('input').first().simulate('click');

    expect(onSelectMock).toBeCalledWith('item1');
  });
});
