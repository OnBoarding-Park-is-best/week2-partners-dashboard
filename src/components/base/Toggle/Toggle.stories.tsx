import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: 'base/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const True = Template.bind({});
True.args = {
  onClick: () => {},
  active: true,
};

export const False = Template.bind({});
False.args = {
  onClick: () => {},
  active: false,
};

export const onClick = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Toggle onClick={() => setIsActive((prev) => !prev)} active={isActive} />
  );
};
