import React, {useState} from "react"
import Globais from "./Globais"
import Info from "./Info"

export default function AppStatic() {

    const [resumo, setResumo] = useState(Globais.resumo)

    const gravarResumo = () => {
        Globais.resumo = resumo;
     }


     const verResumo = () => {
        alert(Globais.resumo)
     }

    return (
        <>
            <Info/>
            <hr/>
            <p>{"Pessoa: " + Globais.pessoa}</p>
            <p>{"Curso: " + Globais.curso}</p>
            <p>{"Ano: " + Globais.ano}</p>
            <hr/>
            <input type = "text" value = {resumo} onChange = {(r)=> setResumo(r.target.value)}></input>
            <br/>
            <button onClick = {()=> gravarResumo()}>Gravar Resumo</button>
            <button style = {{margin: "10px"}} onClick = {() => verResumo()}>Ver Resumo </button>
           
            
        </>
    )
}