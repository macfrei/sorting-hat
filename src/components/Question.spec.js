import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Question from './Question'

const noop = () => {}

describe('Question', () => {
  it('should render a question and options', () => {
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        onChange={noop}
      />
    )
    expect(
      screen.getByRole('group', { name: /dusk or dawn/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Dusk')).toBeInTheDocument()
    expect(screen.getByLabelText('Dawn')).toBeInTheDocument()
  })

  it('should call onChange', () => {
    const handleChange = jest.fn()
    render(
      <Question
        question="Dusk or Dawn?"
        options={['Dusk', 'Dawn']}
        onChange={handleChange}
      />
    )
    userEvent.click(screen.getByLabelText('Dusk'))
    expect(handleChange).toHaveBeenCalled()
  })
})
