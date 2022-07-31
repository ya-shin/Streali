import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  component: Textarea,
  title: 'Textarea',
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
