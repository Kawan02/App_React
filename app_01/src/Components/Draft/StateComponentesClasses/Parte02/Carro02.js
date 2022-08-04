import React from 'react'
import './StyleCarro.css'

export default class Carro02 extends React.Component {
    //Método construtor
    constructor(props) {
        super(props)
        this.modelo = "Civic"
        this.state = {ligado: false, velocidadeAtual: 0}
    }

    ligarDesligar() {
        // Maneira mais segura
        this.setState(
            (state) => (
                { ligado: !state.ligado } 
                )
        )
    }  

    acelerar() {
        this.setState(
            (state, props) => (
                {velocidadeAtual: state.velocidadeAtual + props.fator}
            )
        )
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
                <button className='acelerar' onClick={() => this.acelerar()}>Acelerar</button>
            </>
        )
    }
}
