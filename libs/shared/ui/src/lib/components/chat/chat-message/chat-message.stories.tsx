import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatMessage } from './chat-message';

export default {
  component: ChatMessage,
  title: 'Chat/Chat Message',
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <ChatMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
