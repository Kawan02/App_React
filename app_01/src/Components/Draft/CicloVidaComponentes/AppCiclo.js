import React from 'react'
import './Estilo.css'

export default class AppCiclo extends React.Component {
    //Método construtor
    constructor(props) {
        super(props)
        this.modelo = "Civic"
        this.state = {ligado: false, velocidadeAtual: 0}

        // Bind é basicamente uma ligação/conexão
        this.liga = this.ligarDesligar.bind(this)
        this.acelera = this.acelerar.bind(this)
        this.desacelera = this.desacelerar.bind(this)
    }


    ligarDesligar() {
        // Maneira mais segura
        this.setState(
            (state) => (
                {ligado: !state.ligado} 
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
    
    desacelerar() {
        this.setState (
            (state, props) => (
                {velocidadeAtual: state.velocidadeAtual - props.freia}
            )
        )
    }

    componentDidMount() {
        console.log("O carro foi criado")
    }

    componentDidUpdate() {
        console.log("O carro foi atualizado")
    }

    componentWillUnmount() {
        console.log("O carro foi removido")
    }

    render() {
        return(
            <>
                <h1>Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>velocidade atual: {this.state.velocidadeAtual}</p>
                <button onClick = {this.liga}>
                    {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
                </button>
                <button className = 'acelerar' onClick = {this.acelera}>Acelerar</button>
                <button className = 'acelerar' onClick = {this.desacelera}>Desacelerar</button>
            </>
        )
    }
}
