import findHouse from './findHouse'

const quizResults = {
  1: {
    id: 1,
    answer: 'Dawn',
    question: 'Dawn or dusk?',
  },
  6: {
    id: 6,
    answer: 'Loneliness',
    question: 'Which of the following do you find most difficult to deal with?',
  },
}

const questionArray = [
  {
    id: 6,
    question: 'Which of the following do you find most difficult to deal with?',
    options: ['Hunger', 'Cold', 'Loneliness', 'Boredom'],
    answers: {
      Loneliness: ['Gryffindor'],
      Hunger: ['Ravenclaw'],
      Cold: ['Hufflepuff'],
      Boredom: ['Slytherin'],
    },
  },
  {
    id: 1,
    question: 'Dawn or dusk?',
    options: ['Dawn', 'Dusk'],
    answers: {
      Dawn: ['Gryffindor', 'Ravenclaw'],
      Dusk: ['Hufflepuff', 'Slytherin'],
    },
  },
]

describe('findHouse function', () => {
  it('reveices an object and returns a string', () => {
    const result = findHouse(quizResults, questionArray)

    expect(result).toBe('Gryffindor')
  })

  it('returns undefined if no correct data is received', () => {
    const result = findHouse({}, questionArray)

    expect(result).toBe(undefined)
  })
})
