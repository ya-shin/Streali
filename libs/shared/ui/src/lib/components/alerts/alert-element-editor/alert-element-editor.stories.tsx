import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pixels } from '@streali/shared/types';
import { AlertElementEditor } from './alert-element-editor';

export default {
  component: AlertElementEditor,
  title: 'Alert/Alert Element Editor',
} as ComponentMeta<typeof AlertElementEditor>;

const Template: ComponentStory<typeof AlertElementEditor> = (args) => (
  <AlertElementEditor {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 500 as Pixels,
  height: 500 as Pixels,
};
