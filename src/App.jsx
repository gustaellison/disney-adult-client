import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import People from './components/People'
import Client from './assets/services/api'
import './App.css'
import PeopleDetails from './components/PeopleDetails'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const getPeople = async () => {
      let res = await Client.get('/')
      setPeople(res.data)
    }
    getPeople()
  }, [])  

  return (
      <div>
        <header>
          <Nav />
        </header>
      <main>
        <Routes>
          <Route path = '/about' element={<About />} />
          <Route path="/" element={<People people={people}/>}/>
          <Route path="/:id" element={<PeopleDetails />} />
        </Routes>
      </main>
      <footer></footer>
      </div>
  )
}

export default App
