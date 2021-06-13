import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Form.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number,
    })
  ).isRequired,
  onSaveHouse: PropTypes.func.isRequired,
}

export default function Form({ questions, onSaveHouse }) {
  const [formData, setFormData] = useState({})

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(({ question, options, id }) => (
        <fieldset key={id}>
          <legend>{question}</legend>
          {options.map(option => (
            <label key={option}>
              {option}
              <input
                type="radio"
                name={question}
                value={option}
                onChange={handleChange}
              />
            </label>
          ))}
        </fieldset>
      ))}
      <button>Submit</button>
    </form>
  )

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSaveHouse(formData)
  }
}
