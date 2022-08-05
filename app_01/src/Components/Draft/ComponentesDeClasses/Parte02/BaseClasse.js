import React from "react";

export default class BaseClasse extends React.Component() {
    constructor(props) {
        super(props)
        this.state = {
            pessoa : "Kawan",
            curso : "React",
            ativo: true,
        }

        //Bindagem
        let ad = this.ativarDesativar.bind(this)
    }

    ativarDesativar() {
        this.setState(
            state => ({
               ativo : !state.ativo
            })
        )
    }

    componentDidMount() {
        console.log("O componente foi criado")
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado")
    }

    componentWillUnmount() {
        console.log("O componente foi removido")
    }

    render() {
        return(
            <>
                <h1>Componente de classe</h1>
                <button onClick = {this.ad}>Ativar Desativar</button>
            </>
        )
    }
}