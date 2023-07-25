import type { Meta, StoryObj } from '@storybook/react'

import { Cell } from '.'

const meta: Meta<typeof Cell> = {
  title: 'Example/Cell',
  component: Cell,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Cell>

export const Default: Story = {
  args: {},
}
