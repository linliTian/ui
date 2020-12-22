import * as React from 'react';

import { shallow, mount, ReactWrapper } from 'enzyme';

import { act } from 'react-dom/test-utils';

import { Tooltip } from '../Tooltip';

describe('Tooltip', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Tooltip placement="bottom">
        <div id="test"></div>
      </Tooltip>
    );

    expect(wrapper.find('#test')).toExist();
  });

  it('sets the placement prop', () => {
    const wrapper = shallow(
      <Tooltip placement="bottom">
        <div id="test"></div>
      </Tooltip>
    );

    expect(wrapper.find('Floater').prop('position')).toStrictEqual([
      'bc',
      'tc',
    ]);
  });

  it('sets the gap prop', () => {
    const wrapper = shallow(
      <Tooltip gap="20" placement="bottom">
        <div id="test"></div>
      </Tooltip>
    );

    expect(wrapper.find('TooltipContainer').prop('gap')).toStrictEqual('20');
  });

  it('renders the overlay', async () => {
    const wrapper = mount(
      <Tooltip placement="bottom" overlay={<div id="overlay"></div>} visible>
        <div id="test"></div>
      </Tooltip>
    );
    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('Floater'));
      }, 400);
    });

    let tooltip: ReactWrapper;
    await act(async () => {
      tooltip = await promise;
    });

    // @ts-ignore
    expect(tooltip.find('#overlay')).toExist();
  });
});
