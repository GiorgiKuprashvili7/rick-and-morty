import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CharacterDetails from './components/characterDetails/CharacterDetails'
import CharactersList from './components/charactersList/CharactersList'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  )
}

export default App
