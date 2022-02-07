import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResetButton from './ResetButton';

export default {
  title: 'base/ResetButton',
  component: ResetButton,
} as ComponentMeta<typeof ResetButton>;

const Template: ComponentStory<typeof ResetButton> = ({
  children,
  ...args
}) => {
  return <ResetButton {...args}>{children}</ResetButton>;
};

export const Default = Template.bind({});
Default.args = {
  children: '필터링 리셋',
};
