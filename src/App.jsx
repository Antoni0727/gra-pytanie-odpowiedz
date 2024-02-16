import React from 'react'
import './App.css'
import Points from './Points'
import Game from './Game'

function App() {

  return (
    <>
    <div className='app'>
      <h1>Gra Pytanie-<div className='odpowiedz'>Odpowiedz</div></h1>
      <Game/>
    </div>
    </>
  )
}

export default App