import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Page, IPageProps } from './Page'

export default {
  title: 'Design System/Page',
  component: Page,
} as Meta

const Template: Story<IPageProps> = (args) => <Page {...args} />

export const Team = Template.bind({})

Team.args = {}
