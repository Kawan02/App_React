import React, { useEffect, useState } from "react";
import './Res.css'
// import CalcularIMC from "../Calcular/CalcularIMC";



// function Teste() {

//     const [teste, setTeste] = useState(0)

//     useEffect(()=> {
//         this.componentDidUpdate = `${teste}`
//     })
// }

export default class Resultado extends React.Component {
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
                <strong>
                    <p className = "botao" onClick = {this.Teste}>Resultado: {this.props.r.toFixed(2)}</p>
                </strong>

                <div> 
                    <button className = "bot" onClick = {this.calc}>Calcular</button>
                </div>
            </div>

            
        )
    }
}