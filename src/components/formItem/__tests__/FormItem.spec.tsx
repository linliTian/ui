import * as React from 'react';

import { shallow } from 'enzyme';

import { FormItem } from '../FormItem';
import { FormItemIcon } from '../FormItemIcon';

describe('FormItem', () => {
  it('renders', () => {
    const wrapper = shallow(
      <FormItem>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('Container')).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <FormItem>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('#test')).toBe(true);
  });

  it('renders message when set', () => {
    const wrapper = shallow(
      <FormItem status="error" message="this is a message">
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('StatusMessage')).toBe(true);
  });

  it('sets the status prop', () => {
    const wrapper = shallow(
      <FormItem status="warning" message="this is a message">
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.find('FormItemIcon').prop('status')).toBe('warning');
  });

  it('sets the hasIcon', () => {
    const wrapper = shallow(
      <FormItem status="warning" message="this is a message" hasIcon={false}>
        <div id="test" />
      </FormItem>
    );

    expect(wrapper.exists('FormItemIcon')).toBe(false);
  });
});

describe('FormItemIcon', () => {
  it('renders', () => {
    const wrapper = shallow(<FormItemIcon status="error" />);

    expect(wrapper.exists('IconContainer')).toBe(true);
  });

  it('renders with error status', () => {
    const wrapper = shallow(<FormItemIcon status="error" />);

    expect(wrapper.exists('IconContainer')).toBe(true);
    expect(wrapper.exists('TimesCircle')).toBe(true);
  });

  it('renders with warning status', () => {
    const wrapper = shallow(<FormItemIcon status="warning" />);

    expect(wrapper.exists('IconContainer')).toBe(true);
    expect(wrapper.exists('ExclamationCircle')).toBe(true);
  });

  it('renders with success status', () => {
    const wrapper = shallow(<FormItemIcon status="success" />);

    expect(wrapper.exists('IconContainer')).toBe(true);
    expect(wrapper.exists('CheckCircle')).toBe(true);
  });

  it('renders with loading status', () => {
    const wrapper = shallow(<FormItemIcon status="loading" />);

    expect(wrapper.exists('IconContainer')).toBe(true);
    expect(wrapper.exists('Loading')).toBe(true);
  });
});
