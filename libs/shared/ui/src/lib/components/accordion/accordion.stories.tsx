import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './accordion';

export default {
  component: Accordion,
  title: 'Accordion',
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

const content = [
  {
    title: 'Title 1',
    content: 'Content 1',
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    disabled: true,
  },
  {
    title: 'Title 3',
    content: 'Content 3',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  content: content,
};
