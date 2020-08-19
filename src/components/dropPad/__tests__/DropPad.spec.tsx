import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { DropPad } from '../DropPad';

// Support for more tests for this using enzyme are gated by this: https://github.com/enzymejs/enzyme/issues/2011
describe('DropPad', () => {
  it('renders', () => {
    const wrapper = shallow(<DropPad uploadUrl="" />);

    expect(wrapper.exists('DropPad__Container')).toBe(true);
  });

  it('hides the droppad when hideDroppad prop is true', () => {
    const wrapper = mount(<DropPad uploadUrl="" hideDroppad />);

    expect(wrapper.exists('DropPad__DropPadContainer')).toBe(false);
  });
});
