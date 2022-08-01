import React, {useState} from 'react'
import Led from './Components/Led'


// Metodo Map
export default function App() {

  const carros = [
      {categoria: "SUV", preço: "80.000,00", modelo: "HRV"}, 
      {categoria: "SUV", preço: "50.000,00", modelo: "CRV"},
      {categoria: "Esporte", preço: "60.000,00", modelo: "Honda Civic"},
      {categoria: "Utilitario", preço: "50.000,00", modelo: "Honda Fit"},
      {categoria: "Utilitario", preço: "48.000,00", modelo: "Onix"},
      {categoria: "Esporte", preço: "58.000,00", modelo: "Golf"},
      {categoria: "SUV", preço: "90.000,00", modelo: "Nissan Kicks"},
      {categoria: "Esporte", preço: "130.000,00", modelo: "BMW X6"}
  ]
  const ListaCarros = carros.map(
    (carro, i)=> 
      <li key={i}>{i} - {carro.categoria} - {carro.modelo} - R${carro.preço}</li>
    
  )

  return(
    <>
     <ul> {ListaCarros} </ul>
    </>
  )
}

//export default App()