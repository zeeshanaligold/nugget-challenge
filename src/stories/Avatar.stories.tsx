import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Avatar, IAvatarProps } from '../components'

export default {
  title: 'Design System/Avatar',
  component: Avatar,
} as Meta

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({})

Basic.args = {
  size: '64px',
  source:
    'https://buywptemplates.com/demo/construction-realestate-wordpress-theme/wp-content/uploads/sites/8/2019/03/testimonials2.jpeg',
  alt: 'Zeeshan',
}
