import { useCallback } from 'react'
import { useRef, useState } from 'react'

const scrollTop = () => window.scrollTo({ x: 0 })

const changeTitle = title => (document.title = title)

function useAdvanceStep() {
  const ref = useRef(null)

  const [currentStep, setCurrentStep] = useState(0)

  const setFocus = useCallback(() => {
    setTimeout(() => {
      ref.current.setAttribute('tabindex', '-1')
      ref.current.focus()
      ref.current.removeAttribute('tabindex')
    }, 0)
  }, [])

  const advanceStep = () => {
    setCurrentStep(steps => steps + 1)
    scrollTop()
    changeTitle(`Question ${currentStep + 2}`)
    setFocus()
  }

  return {
    currentStep,
    advanceStep,
    ref,
  }
}

export default useAdvanceStep
