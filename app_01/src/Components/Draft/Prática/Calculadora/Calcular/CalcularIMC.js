import React from "react";
import './Cal.css'

export default function CalcularIMC(props) {
    
    const calc = () => {
        props.r (props.p/(props.a*props.a))
    }

    return (
        <div> 
            <button className = "bot" onClick = {calc}>Calcular</button>
        </div>
    )
}