import React from "react"
import Dados from './Dados'

export default function Corpo() {
    const Pessoa =()=> {
        return ' Kawan '
    }
    const Cidade = ' São Paulo'
    const Curso = ' React.js'

    return (
    <>
        <section className="caixa">
            <h3>Curso de React</h3>
        </section>
            <Dados
                Pessoa = {Pessoa} 
                Cidade = {Cidade} 
                Curso = {Curso} 
            />
    </>
    )
}

