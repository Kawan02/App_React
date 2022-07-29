import React from "react"

export default function Dados(props) {
    return (
        <section>
            <p>Resposável:{props.Pessoa()}</p>
            <p>Cidade:{props.Cidade}</p>
            <p>Curso:{props.Curso}</p>
        </section>
    )
}