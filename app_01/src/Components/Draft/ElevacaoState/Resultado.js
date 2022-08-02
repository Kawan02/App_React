import React from "react"

export default function Resultado(props) {
    return (
        <div>
            <p>Soma das notas: {props.SomaNotas}</p>
            <p>{props.SomaNotas >= 60 ? "Aprovado": "Reprovado"}</p>
        </div>
    )
}