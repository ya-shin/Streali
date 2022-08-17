import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spacing } from './spacing';

export default {
  component: Spacing,
  title: 'Forms/Spacing',
} as ComponentMeta<typeof Spacing>;

const Template: ComponentStory<typeof Spacing> = (args) => (
  <Spacing {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Inner Spacing',
};
