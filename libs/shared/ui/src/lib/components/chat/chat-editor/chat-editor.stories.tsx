import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatEditor } from './chat-editor';

export default {
  component: ChatEditor,
  title: 'Chat/ChatEditor',
} as ComponentMeta<typeof ChatEditor>;

const Template: ComponentStory<typeof ChatEditor> = (args) => (
  <ChatEditor {...args} />
);

const elements = [
  {
    element: (
      <span className="p-2 bg-warning-500 text-black relative z-10 block">
        This is the message content
      </span>
    ),
    posX: 200,
    posY: 80,
    fullWidth: true,
  },
  {
    element: (
      <span className="p-2 bg-error-500 border-white relative z-10 block">
        viewer_1
      </span>
    ),
    posX: 50,
    posY: 30,
    fullWidth: false,
  },
];

export const Primary = Template.bind({});
Primary.args = {
  elements: elements,
  height: 500,
};
