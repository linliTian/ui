import * as React from 'react';

import { shallow, mount, ReactWrapper } from 'enzyme';

import { act } from 'react-dom/test-utils';

import { Floater } from '../Floater';

describe('Floater', () => {
  const test = document.createElement('div');
  let anchorElement = document.createElement('div');
  anchorElement.setAttribute('id', 'anchor');
  anchorElement.style.width = '100px';
  anchorElement.style.height = '100px';

  const defaultProps: {
    anchorElement: HTMLElement | null;
    children: React.ReactChild;
    position: string[];
  } = {
    anchorElement,
    children: <div>Hello Floater</div>,
    position: ['tl', 'br'],
  };

  beforeEach(() => {
    test.appendChild(anchorElement);
  });

  it('has the correct display name Floater', () => {
    const wrapper = shallow(
      <div>
        <Floater {...defaultProps} open={true} />
      </div>
    );

    expect(wrapper.find('Floater')).toExist();
  });

  it('sets the open prop to true', async () => {
    const wrapper = mount(<Floater {...defaultProps} open={true} />);

    expect(wrapper.exists('Portal')).toBe(true);
  });

  it('sets the open prop to false', async () => {
    const wrapper = mount(<Floater {...defaultProps} open={true} />);

    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.setProps({ open: false });
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('Floater'));
      }, 400);
    });

    let floater: ReactWrapper;
    await act(async () => {
      floater = await promise;
    });

    // @ts-ignore
    expect(floater.exists('Portal')).toBe(false);
  });
});
