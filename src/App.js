import questions from './assets/questions.json'
import Form from './components/Form'

function App() {
  return <Form questions={questions} onSaveHouse={saveHouse} />

  function saveHouse(data) {
    console.log(data)
  }
}

export default App
