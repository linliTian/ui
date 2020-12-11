import * as React from 'react';

import { shallow } from 'enzyme';

import { Select } from '../Select';

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
});
