import React from "react"
import Globais from "./Globais"

export default function Info() {
    return (
        <>
            <p>{"Pessoa: " + Globais.pessoa}</p>
            <p>{"Curso: " + Globais.curso}</p>
            <p>{"Ano: " + Globais.ano}</p>
        </>
    )
}