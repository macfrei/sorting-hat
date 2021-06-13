import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React from 'react'

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
  const [steps, setSteps] = useState(0)

  const totalSteps = questions.length - 1

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(({ question, options, id }, index) => {
        if (steps !== index) return null
        return (
          <div key={id}>
            <fieldset>
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
            {index !== totalSteps ? (
              <button onClick={updateSteps}>Next</button>
            ) : (
              <button>Submit</button>
            )}
          </div>
        )
      })}
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

  function updateSteps() {
    setSteps(steps => steps + 1)
  }
}
