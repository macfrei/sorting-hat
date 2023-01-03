export default function findHouse(quizResults, questionArray) {
  const houseQuizAnswers = Object.entries(quizResults)

  if (!houseQuizAnswers.length)
    return 'Something is wrong with your data, Muggle!'

  const listOfHousesAccordingToAnswers = houseQuizAnswers.flatMap(
    answerArray => {
      const associatedQuestion = questionArray.find(
        el => el.question === answerArray[0]
      )
      const possibleAnswers = Object.entries(associatedQuestion.answers) // [[house, answer], ...]

      const houses = possibleAnswers
        .filter(answer => {
          // Because answer could be an array of multiple possibilities
          if (answer.filter(e => e.includes(answerArray[1])).length > 0) {
            return answer
          }

          return answer.includes(answerArray[1])
        })
        .map(possibleAnswer => possibleAnswer[0]) // Corresponding house

      return houses
    }
  )

  const house = Object.entries(
    listOfHousesAccordingToAnswers.reduce((acc, cur) => {
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
