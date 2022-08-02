import React from "react"
import Dados from './Dados'

export default function Corpo() {
    const Pessoa = ' Kawan '
    const Cidade = ' São Paulo'
    const Curso = ' React.js'

    return (
    <>
        <section className="caixa">
            <h3>Formulário</h3>
        </section>
            <Dados
                Pessoa = {Pessoa} 
                Cidade = {Cidade} 
                Curso = {Curso} 
            />
            <a  className="a" href="https://www.trescon.com.br/" target="blank">3CON</a>
    </>
    )
}

