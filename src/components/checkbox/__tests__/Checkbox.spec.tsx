import * as React from 'react';

import { shallow } from 'enzyme';

import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders', () => {
    const wrapper = shallow(<Checkbox />);

    expect(wrapper.exists('Container')).toBe(true);
  });

  it('sets the checked prop', () => {
    const wrapper = shallow(<Checkbox checked />);

    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('calls the onChange callback with the correct args', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(
      <Checkbox name="test" onChange={(args) => onChangeMock(args)} />
    );

    wrapper
      .find('input')
      .simulate('change', { target: { checked: true, name: 'test' } });

    expect(onChangeMock).toBeCalledWith({ name: 'test', checked: true });
  });

  it('sets the disabled prop', () => {
    const wrapper = shallow(<Checkbox name="test" disabled />);

    expect(wrapper.find('Container').prop('disabled')).toBe(true);
  });
});
