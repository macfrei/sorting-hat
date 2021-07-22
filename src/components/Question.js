import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default function Question({ question, options, onChange }) {
  return (
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
  )
}

const QuestionStyled = styled.fieldset`
  display: flex;
  gap: 16px;
  border: none;
  justify-content: space-evenly;

  label:focus-within {
    border: 2px solid navy;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`
