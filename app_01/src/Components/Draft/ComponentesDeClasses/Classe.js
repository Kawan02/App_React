import React from "react"

export default class Classe extends React.Component {
    //Método construtor
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <h1>Primeiro Componente de Classe</h1>
                <p>Estudo: {this.props.estudo}</p>
            </>
        )
    }
}
