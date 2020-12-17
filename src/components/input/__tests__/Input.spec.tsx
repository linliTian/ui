import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Input } from '../Input';

describe('Input', () => {
  it('renders input', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('Container')).toExist();
  });

  it('has the correct display name', () => {
    const wrapper = shallow(
      <div>
        <Input />
      </div>
    );

    expect(wrapper.find('Input')).toExist();
  });

  it('sets the placeholder', () => {
    const wrapper = mount(<Input placeholder="test" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().placeholder).toBe('test');
  });

  it('sets the name and id for formik', () => {
    const wrapper = mount(<Input name="test" id="test-id" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().name).toBe('test');

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().id).toBe('test-id');
  });

  it('sets the borderType prop to none', () => {
    const wrapper = shallow(<Input borderType="none" />);

    expect(wrapper.find('StyledInput').prop('borderType')).toBe('none');
  });

  it('sets the borderType prop to bottom', () => {
    const wrapper = shallow(<Input borderType="bottom" />);

    expect(wrapper.find('StyledInput').prop('borderType')).toBe('bottom');
  });

  it('sets the disabled prop', () => {
    const wrapper = mount(<Input disabled />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().disabled).toBe(true);
  });

  it('sets the label prop', () => {
    const wrapper = shallow(<Input label="label" />);

    expect(
      wrapper
        .find('Label')
        .children()
        .first()
        .text()
    ).toBe('label');
  });

  it('sets the description prop', () => {
    const wrapper = shallow(<Input description="description" />);

    expect(
      wrapper
        .find('Description')
        .children()
        .first()
        .text()
    ).toBe('description');
  });

  it('sets the htmlType prop', () => {
    const wrapper = mount(<Input htmlType="password" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().type).toBe('password');
  });

  it('renders a text area tag when set by htmlType', () => {
    const wrapper = mount(<Input htmlType="textarea" />);
    expect(wrapper.find('textarea')).toExist();
  });

  it('sets the inputSize prop', () => {
    const wrapper = shallow(<Input size="large" />);

    expect(wrapper.find('StyledInput').prop('inputSize')).toBe('large');
  });

  it('sets the value prop', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<Input value="test" onChange={onChangeMock} />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('sets the defaultValue prop', () => {
    const wrapper = mount(<Input defaultValue="test" />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().value).toBe('test');
  });

  it('sets the readOnly prop', () => {
    const wrapper = mount(<Input readOnly />);

    // @ts-ignore
    expect(wrapper.find('input').getDOMNode().readOnly).toBe(true);
  });

  it('calls onBlur handler', () => {
    const onBlurMock = jest.fn();
    const wrapper = mount(<Input onBlur={onBlurMock} />);

    wrapper.find('input').simulate('blur');
    expect(onBlurMock).toBeCalled();
  });

  it('calls onFocus handler', () => {
    const onFocusMock = jest.fn();
    const wrapper = mount(<Input onFocus={onFocusMock} />);

    wrapper.find('input').simulate('focus');
    expect(onFocusMock).toBeCalled();
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<Input onClick={onClickMock} />);

    wrapper.find('input').simulate('click');
    expect(onClickMock).toBeCalled();
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn(e => e);
    const wrapper = mount(<Input onChange={onChangeMock} value="value" />);

    wrapper.find('input').simulate('change');

    expect(onChangeMock.mock.results[0].value.target.value).toBe('value');
  });
});
