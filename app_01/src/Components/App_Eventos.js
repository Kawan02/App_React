//Eventos 

import React, {useState} from 'react'
import Led from './Components/Led'

export default function App() {

  const [ligado, setLigado] = useState(false)

  const cancelar = (cancela) =>{
    return cancela.preventDefault()
  }

  return(
    <>
      <Led 
        ligado = {ligado} 
        setLigado = {setLigado}
      />
      <a 
        href='https://www.trescon.com.br/'
        target= 'blank'
        onClick={(e)=> cancelar(e)}
      >
        3CON IT & DIGITAL
      </a>
    </>
  )
}
