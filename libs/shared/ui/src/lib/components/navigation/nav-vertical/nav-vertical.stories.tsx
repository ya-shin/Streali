import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavVertical } from './nav-vertical';

export default {
  component: NavVertical,
  title: 'Navigation/Vertical',
} as ComponentMeta<typeof NavVertical>;

const Template: ComponentStory<typeof NavVertical> = (args) => (
  <NavVertical {...args} />
);

const navigation = [
  {
    icon: 'home-line',
    link: '/',
  },
  {
    icon: 'search-line',
    link: '/search',
  },
  {
    icon: 'heart-line',
    link: '/favorites',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  navigation: navigation,
};
