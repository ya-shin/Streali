import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CodeEditor } from './code-editor';

export default {
  component: CodeEditor,
  title: 'CodeEditor',
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => (
  <div className="h-screen">
    <CodeEditor {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
