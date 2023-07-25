import type { Meta, StoryObj } from '@storybook/react'

import { Timeline } from '.'

const meta: Meta<typeof Timeline> = {
  title: 'Example/Timeline',
  component: Timeline,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  args: {},
}
