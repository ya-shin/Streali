import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FontSelect } from './font-select';

export default {
  component: FontSelect,
  title: 'Forms/Font Select',
} as ComponentMeta<typeof FontSelect>;

const Template: ComponentStory<typeof FontSelect> = (args) => (
  <FontSelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: (fontName: string, variants: string[]) => {
    console.log({fontName, variants});
  }
};
