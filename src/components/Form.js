import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React from 'react'
import Question from './Question'
import useAdvanceStep from '../hooks/useAdvanceStep'
import Button from './Button'

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

  const { currentStep, advanceStep, ref } = useAdvanceStep()

  const totalSteps = questions.length - 1
  const { question, options, id } = questions[currentStep]

  const buttonIsDisabled = !formData[id]

  return (
    <FormStyled onSubmit={handleSubmit} aria-label="Hogwarts House Quiz">
      <Question
        question={question}
        options={options}
        onChange={event => handleChange(event, id)}
        ref={ref}
      />
      {currentStep !== totalSteps && (
        <Button type="button" onClick={advanceStep} disabled={buttonIsDisabled}>
          Next Question
        </Button>
      )}
      {currentStep === totalSteps && (
        <Button type="submit" disabled={buttonIsDisabled}>
          Reveal Hogwarts house!
        </Button>
      )}
    </FormStyled>
  )

  function handleChange(event, id) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [id]: {
        id,
        question: name,
        answer: value,
      },
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSaveHouse(formData)
  }
}

const FormStyled = styled.form`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 60px;
  gap: 12px;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`
