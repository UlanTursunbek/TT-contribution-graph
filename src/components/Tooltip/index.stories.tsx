import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from '.'

const meta: Meta<typeof Tooltip> = {
  title: 'Example/Tooltip',
  component: Tooltip,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: { children: <div>anchor</div> },
}
