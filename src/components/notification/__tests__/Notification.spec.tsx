import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Notification } from '../Notification';

describe('Notification', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Notification notificationType="info" title="title" />
    );

    expect(wrapper.exists('StyledNotification__Container')).toBe(true);
    expect(wrapper.find('NotificationTitle').children()).toHaveText('title');
  });

  it('sets the notificationType prop', () => {
    const wrapper = shallow(
      <Notification notificationType="success" title="" />
    );

    expect(
      wrapper.find('StyledNotification__Container').prop('notificationType')
    ).toStrictEqual('success');
  });

  it('hides the close button', () => {
    const wrapper = shallow(
      <Notification notificationType="success" allowClose={false} title="" />
    );

    expect(wrapper.exists('CloseIcon')).toBe(false);
  });

  it('calls the onClose callback when closeIcon is clicked', () => {
    const onCloseMock = jest.fn();

    const wrapper = mount(
      <Notification notificationType="error" onClose={onCloseMock} title="" />
    );

    wrapper.find('CloseIcon__Container').simulate('click');

    expect(onCloseMock).toBeCalledTimes(1);
  });
});
