import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextAlign } from './text-align';

export default {
  component: TextAlign,
  title: 'Forms/Text Align',
} as ComponentMeta<typeof TextAlign>;

const Template: ComponentStory<typeof TextAlign> = (args) => (
  <TextAlign {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text Align',
};
