import React from 'react'
import Header from './Components/Header'
import Corpo from './Components/Corpo'
import './App_01.css'
import Relogio from './Components/Relogio'

export default function App() {
  
  return(
    <>
      <section className='caixa'>
        <Relogio/>
        <Header/>
        <Corpo/>
      </section>
    </>
  )
}

//export default App()