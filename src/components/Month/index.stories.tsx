import type { Meta, StoryObj } from '@storybook/react'

import { Month } from '.'

const meta: Meta<typeof Month> = {
  title: 'Example/Month',
  component: Month,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Month>

export const Default: Story = {
  args: {},
}
