import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  onUpdateSteps: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default function Question({
  question,
  options,
  currentStep,
  totalSteps,
  steps,
  onUpdateSteps,
  onChange,
}) {
  if (steps !== currentStep) return null
  return (
    <>
      <QuestionStyled>
        <legend>{question}</legend>
        {options.map(option => (
          <label key={option}>
            {option}
            <input
              type="radio"
              name={question}
              value={option}
              onChange={onChange}
            />
          </label>
        ))}
      </QuestionStyled>
      {currentStep !== totalSteps ? (
        <button type="button" onClick={onUpdateSteps}>
          Next
        </button>
      ) : (
        <button>Submit</button>
      )}
    </>
  )
}

const QuestionStyled = styled.fieldset`
  display: flex;
  gap: 16px;
  border: none;
  justify-content: space-evenly;
`
