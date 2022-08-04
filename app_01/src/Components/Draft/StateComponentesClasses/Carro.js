import React from "react"

export default class Futebol extends React.Component {
    //Método construtor
    constructor(props) {
        super(props)
        this.modelo = "Civic"
        this.state = {ligado: false, velocidadeAtual: 0}
    }

    ligarDesligar() {
        //this.state.ligado = true 

        // Maneira correta para renderizar
        this.setState({ligado: !this.state.ligado})

    }

    render() {
        return(
            <>
                <h1>Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>velocidade atual: {this.state.velocidadeAtual}</p>
                <button onClick={() => this.ligarDesligar()}>
                    {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
                </button>
            </>
        )
    }
}
