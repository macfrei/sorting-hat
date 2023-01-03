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
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 12px;
  border: none;
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 8px;
  overflow-y: auto;

  legend {
    width: 100%;
    text-align: center;
    color: var(--gryffindor-gold);
    font-size: 120%;
  }

  legend::first-letter {
    font-size: 130%;
    font-family: serif;
  }

  label {
    position: relative;
    padding: 12px;
    display: block;
    display: grid;
    place-items: center;
    width: inherit;
    height: inherit;
    border-radius: 8px;
    background-color: var(--slytherin-silver);
    color: white;
    transition: color 2s, background-color 2s;
  }

  label:focus-within {
    background: var(--gryffindor-gold);
    color: white;
  }

  input[type='radio']:checked + label {
    background: var(--gryffindor-gold);
    color: white;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`
