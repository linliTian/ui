import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { Accordion } from '../Accordion';

describe('Accordion', () => {
  it('renders all children', () => {
    const wrapper = shallow(
      <Accordion>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    expect(wrapper.exists(Accordion.Item)).toBe(true);
  });

  it('has the correct display name Accordion', () => {
    const wrapper = shallow(
      <div>
        <Accordion>child</Accordion>
      </div>
    );

    expect(wrapper.find('Accordion')).toExist();
  });

  it('has the correct display name for Item', () => {
    const wrapper = shallow(
      <div>
        <Accordion>
          <Accordion.Item itemKey="1">item</Accordion.Item>
        </Accordion>
      </div>
    );

    expect(wrapper.find('AccordionItem')).toExist();
  });

  it('opens every clicked item', () => {
    const mockOnChange = jest.fn();
    const wrapper = mount(
      <Accordion onChange={mockOnChange}>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    // target the headers to click
    const accordionItemHeader = wrapper.find('StyledHeader');

    // click items 1 and 2
    accordionItemHeader.at(0).simulate('click');
    expect(mockOnChange).toBeCalledWith('1');
    accordionItemHeader.at(1).simulate('click');
    expect(mockOnChange).toBeCalledWith('2');

    const accordionItem = wrapper.find('Collapse');

    expect(accordionItem.at(0).prop('expanded')).toBe(true);
    expect(accordionItem.at(1).prop('expanded')).toBe(true);

    // cleanup
    wrapper.unmount();
  });

  it('opens one item at a time', () => {
    const wrapper = mount(
      <Accordion classic>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    // target the headers to click
    const accordionItemHeader = wrapper.find('StyledHeader');

    // click items 1 and 2
    accordionItemHeader.at(0).simulate('click');
    accordionItemHeader.at(1).simulate('click');

    const accordionItem = wrapper.find('Collapse');

    expect(accordionItem.at(0).prop('expanded')).toBe(false);
    expect(accordionItem.at(1).prop('expanded')).toBe(true);
  });

  it('opens item 1 by default', () => {
    const wrapper = mount(
      <Accordion defaultExpandedItems={['1']}>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    expect(
      wrapper
        .find('Collapse')
        .at(0)
        .prop('expanded')
    ).toBe(true);
  });

  it('opens items that are passed in as external props', () => {
    const wrapper = mount(
      <Accordion defaultExpandedItems={['1']}>
        <Accordion.Item itemKey={'1'}>Accordion Item 1</Accordion.Item>
        <Accordion.Item itemKey={'2'}>Accordion Item 2</Accordion.Item>
        <Accordion.Item itemKey={'3'}>Accordion Item 3</Accordion.Item>
      </Accordion>
    );

    wrapper.setProps({ expandedItems: ['2'] });

    expect(
      wrapper
        .find('Collapse')
        .at(0)
        .prop('expanded')
    ).toBe(false);
    expect(
      wrapper
        .find('Collapse')
        .at(1)
        .prop('expanded')
    ).toBe(true);
  });
});
