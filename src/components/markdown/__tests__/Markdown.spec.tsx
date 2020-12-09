import * as React from 'react';

import { shallow } from 'enzyme';

import { Markdown } from '../Markdown';

const MD_TEXT = `
# Title

- some list
- of stuff
`;

describe('Markdown', () => {
  it('renders child text nodes as HTML', () => {
    const html = shallow(<Markdown>{MD_TEXT}</Markdown>).render();
    expect(html.find('h1')).toHaveLength(1);
    expect(html.find('li')).toHaveLength(2);
  });

  it('renders non-text children unchanged', () => {
    const wrapper = shallow(
      <Markdown>
        <div>This is test</div>
      </Markdown>
    );
    expect(wrapper.childAt(0).type()).toEqual('div');
    expect(wrapper.render().find('h1')).toHaveLength(0);
  });
});
