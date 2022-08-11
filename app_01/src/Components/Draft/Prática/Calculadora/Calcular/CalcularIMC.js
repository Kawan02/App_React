import React, { useEffect } from "react";
import './Cal.css'


export default class CalcularIMC extends React.Component {
    constructor(props) {
        super(props)
        this.calc = this.calc.bind(this)
    }


    calc = () => {
        this.props.r (this.props.p/(this.props.a * this.props.a))
    }


    render() {
        return (
            <div> 
                <button className = "bot" onClick = {this.calc}>Calcular</button>
            </div>
        )
    }
}