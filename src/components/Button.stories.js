import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Next',
}

export const DisabledButton = Template.bind({})

DisabledButton.args = {
  disabled: true,
  children: 'Next',
}
