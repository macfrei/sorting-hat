import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React from 'react'
import Question from './Question'

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
  const [currentStep, setCurrentStep] = useState(0)

  const totalSteps = questions.length - 1
  const { question, options } = questions[currentStep]

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Question question={question} options={options} onChange={handleChange} />
      {currentStep !== totalSteps && (
        <button type="button" onClick={advanceStep}>
          Next
        </button>
      )}
      {currentStep === totalSteps && <button>Submit</button>}
    </FormStyled>
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

  function advanceStep() {
    setCurrentStep(steps => steps + 1)
  }
}

const FormStyled = styled.form`
  max-width: 800px;
  padding: 20px;
`
