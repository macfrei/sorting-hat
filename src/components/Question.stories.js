import Question from './Question'

export default {
  title: 'Question',
  component: Question,
}

const Template = args => <Question {...args} />

export const WithNextButton = Template.bind({})
WithNextButton.args = {
  question: 'Dusk or Dawn?',
  options: ['Dusk', 'Dawn'],
  currentStep: 0,
  steps: 0,
  totalSteps: 1,
}

export const WithSubmitButton = Template.bind({})
WithSubmitButton.args = {
  question: 'Dusk or Dawn?',
  options: ['Dusk', 'Dawn'],
  currentStep: 0,
  steps: 0,
  totalSteps: 0,
}
