import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Question from './Question'

describe('Question', () => {
  it('should render a question, options and a button', () => {
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        currentStep={0}
        steps={0}
        totalSteps={1}
      />
    )
    expect(screen.getByText('Dusk or Dawn?')).toBeInTheDocument()
    expect(screen.getByLabelText('Dusk')).toBeInTheDocument()
    expect(screen.getByLabelText('Dawn')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('should return nothing, if the current step does not equal the step', () => {
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        currentStep={2}
        steps={0}
        totalSteps={1}
      />
    )
    expect(screen.queryByText('Dusk or Dawn?')).not.toBeInTheDocument()
  })

  it('should render a submit button, if the current step equals total steps', () => {
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        currentStep={0}
        steps={0}
        totalSteps={0}
      />
    )
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should call handleUpdateSteps when clicking on next button', () => {
    const handleUpdateSteps = jest.fn()
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        currentStep={0}
        steps={0}
        totalSteps={1}
        onUpdateSteps={handleUpdateSteps}
      />
    )
    const nextButton = screen.getByRole('button', { name: /next/i })
    userEvent.click(nextButton)
    expect(handleUpdateSteps).toHaveBeenCalled()
  })
})
