import styled from 'styled-components'
import questions from './assets/questions.json'
import Form from './components/Form'

function App() {
  return (
    <PageLayout>
      <Form questions={questions} onSaveHouse={saveHouse} />
    </PageLayout>
  )

  function saveHouse(data) {
    const houseQuizAnswers = Object.entries(data)
    const listOfHousesAccordingToAnswers = houseQuizAnswers.flatMap(
      answerArray => {
        const associatedQuestion = questions.find(
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

    console.log(house)
  }
}

const PageLayout = styled.div`
  min-height: 100vh;
  background-color: black;

  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 40px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 30px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`

export default App
