import Question from './Question'

export default {
  title: 'Question',
  component: Question,
}

const Template = args => <Question {...args} />

export const DefaultQuestion = Template.bind({})
DefaultQuestion.args = {
  question: 'Dusk or Dawn?',
  options: ['Dusk', 'Dawn'],
}
