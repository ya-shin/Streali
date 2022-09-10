import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Milliseconds } from '@streali/shared/types';
import { TimelineElement } from './timeline-element';

export default {
  component: TimelineElement,
  title: 'Timeline/Timeline Element',
} as ComponentMeta<typeof TimelineElement>;

const Template: ComponentStory<typeof TimelineElement> = (args) => (
  <TimelineElement {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  title: 'Text 1',
  duration: 743 as Milliseconds,
  startTime: 1500 as Milliseconds,
  totalTime: 5000 as Milliseconds,
};
