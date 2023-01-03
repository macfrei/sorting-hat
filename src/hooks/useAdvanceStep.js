import { useState } from 'react'

function useAdvanceStep() {
  const [currentStep, setCurrentStep] = useState(0)

  const scrollTop = () => window.scrollTo({ x: 0 })
  const changeTitle = title => (document.title = title)
  const setFocus = () => {
    setTimeout(() => {
      const focusTarget = document.getElementById('focus-target')
      focusTarget.setAttribute('tabindex', '-1')
      focusTarget.focus()
      focusTarget.removeAttribute('tabindex')
    }, 0)
  }

  function advanceStep() {
    setCurrentStep(steps => steps + 1)
    scrollTop()
    changeTitle(`Question ${currentStep + 1}`)
    setFocus()
  }

  return {
    currentStep,
    advanceStep,
  }
}

export default useAdvanceStep
