import Form from './Form'

export default {
  title: 'Form',
  component: Form,
}

const Template = args => <Form {...args} />

export const DefaultForm = Template.bind({})
DefaultForm.args = {
  questions: [
    {
      options: ['Dawn', 'Dusk'],
      question: 'Dawn or dusk?',
      id: 1,
    },
  ],
}

export const MultipleQuestionsForm = Template.bind({})
MultipleQuestionsForm.args = {
  questions: [
    {
      id: 1,
      question: 'Dawn or dusk?',
      options: ['Dawn', 'Dusk'],
    },
    {
      id: 2,
      question: 'Forest or river?',
      options: ['Forest', 'River'],
    },
  ],
}
