import React from "react";
import './Pes.css'

export default class Peso extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p className = "peso">Peso: <td/>
                    <input placeholder = "Digite seu peso aqui" type = "text" value = {this.props.peso} onChange = {(e)=> this.props.setPeso(e.target.value)}/>
                </p>
            </div> 
        )
    }
}