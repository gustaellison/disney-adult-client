import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import People from './components/People'
import Client from './assets/services/api'
import './App.css'

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const getPeople = async () => {
      let res = await Client.get('/people')
      setPeople(res.data)
    }
    getPeople()
  }, [])

  return (
      <div>
              <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<People people={people}/>} />
        </Routes>
      </main>
      <footer></footer>
      </div>
  )
}

export default App
