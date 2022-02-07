import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'base/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  children: '요청 내역 보기',
};

export const NonPrimary = Template.bind({});
NonPrimary.args = {
  isPrimary: false,
  children: '채팅하기',
};
