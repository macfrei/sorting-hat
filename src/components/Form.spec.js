import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

const noop = () => {}

describe('Form', () => {
  it('should render a form with a group of radio buttons and a button', () => {
    render(
      <Form
        questions={[
          {
            id: 1,
            question: 'Dawn or dusk?',
            options: ['Dawn', 'Dusk'],
          },
        ]}
        onSaveHouse={noop}
      />
    )
    expect(screen.getByLabelText('Hogwarts House Quiz')).toBeInTheDocument()
    expect(screen.getByLabelText('Dawn')).toBeInTheDocument()
    expect(screen.getByLabelText('Dusk')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reveal/i })).toBeInTheDocument()
  })

  it('should render a button with text "Reveal Hogwarts House" when at last question', () => {
    render(
      <Form
        questions={[
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
        ]}
        onSaveHouse={noop}
      />
    )
    const nextButton = screen.getByRole('button', { name: /next/i })
    userEvent.click(nextButton)

    const submitButton = screen.getByRole('button', { name: /reveal/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should call onSaveHouse with form data', () => {
    const saveHouse = jest.fn()
    render(
      <Form
        questions={[
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
        ]}
        onSaveHouse={saveHouse}
      />
    )
    userEvent.click(screen.getByLabelText('Dawn'))
    const nextButton = screen.getByRole('button', { name: /next/i })
    userEvent.click(nextButton)

    userEvent.click(screen.getByLabelText('River'))
    const submitButton = screen.getByRole('button', { name: /reveal/i })
    userEvent.click(submitButton)
    expect(saveHouse).toHaveBeenCalledWith({
      1: {
        answer: 'Dawn',
        id: 1,
        question: 'Dawn or dusk?',
      },
      2: {
        answer: 'River',
        id: 2,
        question: 'Forest or river?',
      },
    })
  })
})
