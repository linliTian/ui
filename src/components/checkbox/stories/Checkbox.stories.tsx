/* eslint-disable */

import * as React from 'react';

import { Checkbox } from '../Checkbox';

// @ts-ignore
import mdx from './Checkbox.mdx';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <>
    <Checkbox name="tiger">Tiger</Checkbox>
    <Checkbox name="lion">Lion</Checkbox>
    <Checkbox name="bear">Bear</Checkbox>
    <Checkbox name="fox" disabled>
      Fox
    </Checkbox>
    <Checkbox name="no-content" />
  </>
);

export const change = () => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = React.useCallback(({ name, checked }) => {
    if (checked) {
      setSelected((currentState) => [...currentState, name]);
    } else {
      setSelected((currentState) => currentState.filter((n) => n !== name));
    }
  }, []);

  return (
    <>
      <Checkbox name="tiger" onChange={handleChange}>
        Tiger
      </Checkbox>
      <Checkbox name="lion" onChange={handleChange}>
        Lion
      </Checkbox>
      <Checkbox name="bear" onChange={handleChange}>
        Bear
      </Checkbox>
      <Checkbox name="fox" disabled>
        Fox
      </Checkbox>
      Checked Items:
      <div>
        {selected.map((name) => (
          <span key={name}>{name} &nbsp;</span>
        ))}
      </div>
    </>
  );
};
