import { useState } from 'react'
import styled from 'styled-components'
import questions from './assets/questions.json'
import Form from './components/Form'
import findHouse from './services/findHouse'
import findHouseColor from './services/findHouseColor'
import Button from './components/Button'

function App() {
  const [navigation, setNavigation] = useState('home')
  const [house, setHouse] = useState('')

  const houseColors = findHouseColor(house)

  return (
    <PageLayout>
      {navigation === 'home' && (
        <Section>
          <Headline>Welcome to the sorting hat!</Headline>
          <Text>
            Take the quiz to find out in which Hogwarts house you belong to!
          </Text>
          <Button
            onClick={() => {
              setNavigation('quiz')
              document.title = 'Question 1'
            }}
          >
            Click here to start your sorting ceremony!
          </Button>
        </Section>
      )}
      {navigation === 'quiz' && (
        <Form questions={questions} onSaveHouse={saveHouse} />
      )}
      {navigation === 'result' && (
        <Section houseColors={houseColors}>
          <Background>
            {house}!
            <Button onClick={() => setNavigation('home')}>
              Go back to the start!
            </Button>
          </Background>
        </Section>
      )}
    </PageLayout>
  )

  function saveHouse(data) {
    const house = findHouse(data, questions)
    setHouse(house)
    setNavigation('result')
  }
}

const PageLayout = styled.main`
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

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  background: ${props =>
    props.houseColors?.bgColor &&
    `repeating-linear-gradient(45deg, ${props.houseColors.bgColor} 50px, ${props.houseColors.color} 600px)`};
`

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: black;
  border-radius: 8px;
  padding: 24px;
  text-transform: uppercase;
  font-size: 180%;
  text-align: center;
  color: var(--gryffindor-gold);
`

const Text = styled.p`
  text-align: center;
  color: var(--gryffindor-gold);
  font-size: 120%;
`

const Headline = styled.h1`
  margin: 0;
  text-align: center;
  color: var(--gryffindor-gold);
`

export default App
