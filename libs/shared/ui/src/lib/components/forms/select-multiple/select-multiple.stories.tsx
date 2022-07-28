import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectMultiple } from './select-multiple';

export default {
  component: SelectMultiple,
  title: 'Forms/Select Multiple',
} as ComponentMeta<typeof SelectMultiple>;

const Template: ComponentStory<typeof SelectMultiple> = (args) => (
  <SelectMultiple {...args} />
);

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
];

export const Primary = Template.bind({});
Primary.args = {
  options: options,
};
