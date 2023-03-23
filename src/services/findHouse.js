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
  const houseCount = houses.reduce((countedHousesAsObject, currentHouse) => {
    if (currentHouse in countedHousesAsObject) {
      countedHousesAsObject[currentHouse]++
    } else {
      countedHousesAsObject[currentHouse] = 1
    }

    return countedHousesAsObject
  }, {})

  const highestOccuringHouse = Object.entries(houseCount).sort(
    (a, b) => b[1] - a[1]
  )[0][0]

  return highestOccuringHouse
}
