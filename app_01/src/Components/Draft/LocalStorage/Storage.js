import React, {useState} from 'react'

export default function Storage() {

    const [nome, setNome] = useState()

    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor)
    }

    const consultar = (chave) => {
        alert (localStorage.getItem(chave))
    }

    const apagar = (chave) => {
        localStorage.removeItem(chave)
    }
    
    return (
        <>
            <label>Digite um nome: </label><br/>    
            <input type = "text" value = {nome} onChange = {(e)=> setNome(e.target.value)}></input><br/>
            <button onClick = {() => armazenar("nome", nome)}>Gravar nome</button>
            <button onClick = {() => consultar("nome", nome)}>Consultar nome</button>
            <button onClick = {() => apagar("nome", nome)}>Apagar nome</button>
        </>
    )
}