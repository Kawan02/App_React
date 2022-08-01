import React, {useState} from 'react'
import Led from './Components/Led'


export default function App() {

//Elementos de formularios com React
  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('')

  return(
    <>
     <label>Digite seu nome </label>
     <input
        type="text" 
        name="nome"
        value = {nome}
        onChange = {(e) => setNome(e.target.value)}
      />
     <p>Nome digitado: {nome}</p>
     <label>Selecione um carro </label>
     <select value = {carro} onChange = {(e) => setCarro(e.target.value)}>
      <option value="HRV">HRV</option>
      <option value="BMW X6">BMW X6</option>
      <option value="Golf">Golf</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  )
}

//export default App()