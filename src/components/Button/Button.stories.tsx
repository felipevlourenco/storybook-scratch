import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  size: 'medium'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  primary: false,
  label: 'Secondary'
}
