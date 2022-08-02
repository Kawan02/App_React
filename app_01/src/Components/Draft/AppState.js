import React, {useState} from 'react'

export default function AppState() {

  // Manipulando objetos com State
  const [form, setForm] = useState({
    "nome": "",
    "curso": "",
    "ano": "",
  })
  
  const manipulador = (e) => {
    if (e.target.getAttribute("name") == "nome") {
      setForm ({
        "nome" : e.target.value,
        "curso" : form.curso,
        "ano" : form.ano,
      })
    } else if (e.target.getAttribute("name") == "curso") {
      setForm ({
        "nome" : form.nome,
        "curso" : e.target.value,
        "ano" : form.ano,
      })
    } if (e.target.getAttribute("name") == "ano") {
      setForm ({
        "nome" : form.nome,
        "curso" : form.curso,
        "ano" : e.target.value,
      })
    }
    
  }
  
  return(
    <>  
      <label>Digite seu nome </label>
      <input type = "text" name = "nome" value = {form.nome} onChange = {(e) => manipulador(e)}/><br/>
      <label>Curso </label>
      <input type = "text" name = "curso" value = {form.curso} onChange = {(e) => manipulador(e)}/><br/>
      <label>Ano </label>
      <input type = "text" name = "ano" value = {form.ano} onChange = {(e) => manipulador(e)}/><br/>

      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  )
}

//export default App()