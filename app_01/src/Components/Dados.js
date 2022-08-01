import React from "react"

export default function Dados(props) {
    const Pessoa =()=> {
        return ' Kawan '
    }
    const Cidade = ' São Paulo'
    const Curso = ' React.js'

    return (
        <section>
            <p>Resposável:{props.Pessoa}</p>
            <p>Cidade:{props.Cidade}</p>
            <p>Curso:{props.Curso}</p>
        </section>
    )
}