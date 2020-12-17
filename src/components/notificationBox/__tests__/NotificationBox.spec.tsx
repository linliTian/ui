import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { NotificationBox } from '../NotificationBox';

describe('NotificationBox', () => {
  it('renders', () => {
    const wrapper = shallow(
      <NotificationBox itemKey="1" notificationType="info" />
    );

    expect(wrapper.exists('Container')).toBe(true);
  });

  it('sets the notificationType prop', () => {
    const wrapper = shallow(
      <NotificationBox itemKey="1" notificationType="success" />
    );

    expect(wrapper.find('Container').prop('notificationType')).toStrictEqual(
      'success'
    );
  });

  it('hides the close button', () => {
    const wrapper = shallow(
      <NotificationBox
        itemKey="1"
        notificationType="success"
        allowClose={false}
      />
    );

    expect(wrapper.exists('CloseIcon')).toBe(false);
  });

  it('calls the onClose callback when closeIcon is clicked', () => {
    const onCloseMock = jest.fn();

    const wrapper = mount(
      <NotificationBox
        itemKey="1"
        notificationType="error"
        onClose={onCloseMock}
      />
    );

    wrapper.find('CloseIcon').simulate('click');

    expect(onCloseMock).toBeCalledTimes(1);
  });
});
