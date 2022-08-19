import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatDemo } from './chat-demo';

export default {
  component: ChatDemo,
  title: 'Chat/Chat Demo',
} as ComponentMeta<typeof ChatDemo>;

const Template: ComponentStory<typeof ChatDemo> = (args) => (
  <ChatDemo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
