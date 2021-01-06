import * as React from 'react';

import { shallow, mount } from 'enzyme';

import { Select } from '../Select';
import { components } from 'react-select';

describe('Select', () => {
  it('renders', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const wrapper = shallow(
      <Select
        selectProps={{
          options,
        }}
      />
    );

    // ForwardRef is the internal name of WindowedSelect
    expect(wrapper.exists('ForwardRef')).toBe(true);
  });

  it('show the options when menuIsOpen is true', () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    const wrapper = mount(
      <Select
        selectProps={{
          options,
          menuIsOpen: true,
        }}
      />
    );

    expect(wrapper.find('SelectIcon')).toExist();
    expect(wrapper.find('ForwardRef.rtk__option').length).toBe(options.length);
  });
});
