import findHouse from './findHouse'

const data = {
  'Dawn or dusk?': 'Dawn',
  'Which of the following do you find most difficult to deal with?':
    'Loneliness',
}

const questionArray = [
  {
    id: 6,
    question: 'Which of the following do you find most difficult to deal with?',
    options: ['Hunger', 'Cold', 'Loneliness', 'Boredom'],
    answers: {
      Gryffindor: 'Loneliness',
      Ravenclaw: 'Hunger',
      Hufflepuff: 'Cold',
      Slytherin: 'Boredom',
    },
  },
  {
    id: 1,
    question: 'Dawn or dusk?',
    options: ['Dawn', 'Dusk'],
    answers: {
      Gryffindor: 'Dawn',
      Ravenclaw: 'Dawn',
      Hufflepuff: 'Dusk',
      Slytherin: 'Dusk',
    },
  },
]

describe('findHouse function', () => {
  it('reveices an object and returns a string', () => {
    const result = findHouse(data, questionArray)

    expect(result).toBe('Gryffindor')
  })

  it('returns an error message if no correct data is received', () => {
    const result = findHouse({}, questionArray)

    expect(result).toBe('Something is wrong with your data, Muggle!')
  })
})
