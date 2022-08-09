import React from "react";
import './Res.css'

export default class Resultado extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <strong>
                    <p className = "botao">Resultado: {this.props.r.toFixed(2)}</p>
                </strong>
            </div>
        )
    }
}