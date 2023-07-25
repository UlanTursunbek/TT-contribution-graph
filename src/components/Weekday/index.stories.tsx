import type { Meta, StoryObj } from '@storybook/react'

import { Weekday } from '.'

const meta: Meta<typeof Weekday> = {
  title: 'Example/Weekday',
  component: Weekday,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Weekday>

export const Default: Story = {
  args: {},
}
