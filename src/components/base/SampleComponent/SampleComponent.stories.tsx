import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SampleComponent from './SampleComponent';

export default {
  title: 'base/SampleComponent',
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>;

const Template: ComponentStory<typeof SampleComponent> = (args) => (
  <SampleComponent {...args} />
);

export const True = Template.bind({});
True.args = {
  onClick: () => {},
  selected: true,
};

export const False = Template.bind({});
False.args = {
  onClick: () => {},
  selected: false,
};

export const OtherExample = () => {
  const [isTrue, setTrue] = useState<boolean>(false);
  return (
    <SampleComponent
      onClick={() => setTrue((prev) => !prev)}
      selected={isTrue}
    />
  );
};
