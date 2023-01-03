import styled from 'styled-components'
import questions from './assets/questions.json'
import Form from './components/Form'
import findHouse from './services/findHouse'

function App() {
  return (
    <PageLayout>
      <Form questions={questions} onSaveHouse={saveHouse} />
    </PageLayout>
  )

  function saveHouse(data) {
    const house = findHouse(data, questions)
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
