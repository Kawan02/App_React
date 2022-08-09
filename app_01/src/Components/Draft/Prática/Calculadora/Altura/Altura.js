import React from "react";
import './Alt.css'


export default class Altura extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p className = "altura">Altura: <td/>
                    <input placeholder = "Digite sua altura aqui" type = "text" value = {this.props.altura} onChange = {(e)=> this.props.setAltura(e.target.value)}/>
                </p>
            </div>
        )
    }
}