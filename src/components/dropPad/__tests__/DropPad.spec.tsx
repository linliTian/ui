import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { DropPad } from '../DropPad';

describe('DropPad', () => {
  it('renders', () => {
    const wrapper = shallow(<DropPad />);

    expect(wrapper.exists('DropPad__Container')).toBe(true);
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <DropPad>
        <div id="children">children</div>
      </DropPad>
    );

    expect(wrapper.exists('#children')).toBe(true);
  });

  it('hides the droppad when hideDroppad prop is true', () => {
    const wrapper = mount(<DropPad hideDroppad />);

    expect(wrapper.exists('DropPad__DropPadContainer')).toBe(false);
  });
});

describe('DropPad.File', () => {
  it('renders', () => {
    const wrapper = shallow(
      <DropPad.File name="name" itemKey="1" percentUploaded={0} />
    );
    expect(wrapper.exists('DropPadFile__Container')).toBe(true);
  });

  it('calls onDelete callback with the itemKey', () => {
    const handleDeleteMock = jest.fn();

    const wrapper = shallow(
      <DropPad.File
        name="name"
        itemKey="1"
        percentUploaded={0}
        onDelete={key => handleDeleteMock(key)}
      />
    );

    wrapper.find('DropPadFile__StyledTrashIcon').simulate('click');

    expect(handleDeleteMock).toHaveBeenCalledWith('1');
  });
});
