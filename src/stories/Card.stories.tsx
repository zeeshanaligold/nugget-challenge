import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Card, ICardProps } from '../components'

export default {
  title: 'Design System/Card',
  component: Card,
} as Meta

const Template: Story<ICardProps> = (args) => <Card {...args} />

export const MemberCard = Template.bind({})

MemberCard.args = {
  name: 'Zeeshan Ali',
  email: 'zeeshanaligold@gmail.com',
  avatarProps: {
    size: '135px',
    shape: 'circle',
  },
  avatar:
    'https://buywptemplates.com/demo/construction-realestate-wordpress-theme/wp-content/uploads/sites/8/2019/03/testimonials2.jpeg',
}
