import * as React from 'react';

import { mount, ReactWrapper, shallow } from 'enzyme';

import { Collapse } from '../Collapse';

import { act } from 'react-dom/test-utils';

describe('Collapse', () => {
  it('renders without children', () => {
    const wrapper = shallow(<Collapse itemKey={'test'} />);

    expect(wrapper.find('Content').children()).toHaveLength(0);
  });

  it('has the correct display name Collapse', () => {
    const wrapper = shallow(
      <div>
        <Collapse>child</Collapse>
      </div>
    );

    expect(wrapper.find('Collapse')).toExist();
  });

  it('renders with children', () => {
    const wrapper = shallow(<Collapse itemKey={'test'}>Content</Collapse>);

    expect(wrapper.find('CollapseContent').children()).toHaveLength(1);
  });

  it('renders header content', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} header={'Header'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('CollapseHeader').children()).toHaveLength(1);
  });

  it('renders footer and un-sets body radius', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} header={'Header'} footer={'Footer'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('CollapseContentFooter').children()).toHaveLength(1);
    expect(wrapper.find('CollapseContentBody')).toHaveProp('hasFooter', true);
  });

  it('does not render footer and sets body radius', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} header={'Header'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('CollapseContentFooter')).not.toExist();
    expect(wrapper.find('CollapseContentBody')).toHaveProp('hasFooter', false);
  });

  it('sets the defaultExpanded prop', () => {
    const onChangeMock = jest.fn();

    const wrapper = shallow(
      <Collapse
        onChange={onChangeMock}
        itemKey={'test'}
        header={'Header'}
        defaultExpanded
      >
        Content
      </Collapse>
    );

    expect(wrapper.find('CollapseHeader').prop('expanded')).toBe(true);
  });

  it('sets the disabled prop', () => {
    const wrapper = shallow(
      <Collapse disabled header={'Header'}>
        Content
      </Collapse>
    );

    expect(wrapper.find('Container').prop('disabled')).toBe(true);
    expect(wrapper.find('CollapseHeader').prop('disabled')).toBe(true);
  });

  it('should not call onChange when disabled', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <Collapse disabled onChange={() => onChangeMock} header={'Header'}>
        Content
      </Collapse>
    );

    wrapper.find('StyledHeader').simulate('click');
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('should not expand collapse via external control when disabled', () => {
    const wrapper = mount(
      <Collapse disabled expanded={false}>
        Content
      </Collapse>
    );

    wrapper.setProps({ expanded: true });

    expect(wrapper.find('CollapseHeader').prop('expanded')).toBe(false);
    expect(wrapper.find('ContentContainer').prop('animate')).toStrictEqual(
      'closed'
    );
  });

  it('sets the destroyOnClose prop', () => {
    const wrapper = shallow(
      <Collapse itemKey={'test'} header={'Header'} destroyOnClose>
        Content
      </Collapse>
    );

    expect(wrapper.find('ContentContainer').prop('destroyOnClose')).toBe(true);
  });

  it('destroys content on close', async () => {
    const wrapper = mount(
      <Collapse
        itemKey={'test'}
        header={'Header'}
        defaultExpanded
        destroyOnClose
      >
        Content
      </Collapse>
    );

    expect(wrapper.exists('CollapseContent')).toBe(true);

    // creating a promise with a setTimeout so we can wait for the animation of the collapse
    // closing to finish before checking the dom
    const promise = new Promise<ReactWrapper<any>>((resolve) => {
      wrapper.setProps({ expanded: false });
      wrapper.update();

      // wait for the animation to finish
      setTimeout(() => {
        wrapper.update();
        resolve(wrapper.find('ContentContainer'));
      }, 200);
    });

    let contentContainer: ReactWrapper;
    await act(async () => {
      contentContainer = await promise;
    });

    // @ts-ignore
    expect(contentContainer.exists('CollapseContent')).toBe(false);
  });

  it('calls onChange handler', () => {
    const onChangeMock = jest.fn();

    // need to mount to the DOM in order for event to propagate
    const wrapper = mount(
      <Collapse
        onChange={(key) => onChangeMock(key)}
        itemKey={'test'}
        header={'Header'}
      >
        Content
      </Collapse>
    );

    wrapper.find('CollapseHeader').simulate('click');
    expect(onChangeMock).toBeCalledWith('test');
    expect(wrapper.find('CollapseHeader').prop('expanded')).toBe(true);
  });
});
