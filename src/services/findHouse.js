export default function findHouse(quizResults, questionArray) {
  const houseQuizResults = Object.values(quizResults)

  if (!houseQuizResults.length) {
    console.error('Something is wrong with your data, Muggle!')
    return undefined
  }

  const houses = houseQuizResults.flatMap(quizResult => {
    const associatedQuestion = questionArray.find(
      question => question.id === quizResult.id
    )
    const house = associatedQuestion.answers[quizResult.answer]

    return house
  })

  return getHighestOccurrence(houses)
}

function getHighestOccurrence(houses) {
  const house = Object.entries(
    houses.reduce((acc, cur) => {
      if (cur in acc) {
        acc[cur]++
      } else {
        acc[cur] = 1
      }
      return acc
    }, {})
  ).sort((a, b) => b[1] - a[1])[0][0]

  return house
}
