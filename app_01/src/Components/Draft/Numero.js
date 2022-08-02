import React from "react"

export default function Numero(props) {
    return (
        <p>
            <p>Valor do state num em Numero: {props.num}</p>
            <button onClick={()=>props.SetNum(props.num + 10)}>Soma 10</button>
        </p>
    )
}