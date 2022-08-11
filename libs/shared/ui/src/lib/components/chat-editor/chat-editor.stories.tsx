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
      <span className="p-2 bg-black border border-white relative z-10 inline-block">
        viewer_1
      </span>
    ),
    posX: 50,
    posY: 30,
  },
  {
    element: (
      <span className="p-2 bg-black border border-white relative z-10 inline-block">
        This is the message content
      </span>
    ),
    posX: 50,
    posY: 80,
  },
];

export const Primary = Template.bind({});
Primary.args = {
  elements: elements,
  height: 500,
};
