import React from "react";
import './Pes.css'

export default function Peso(props) {
    return (
        <div>
            <p className = "peso">Peso: <td/>
                <input placeholder = "Digite seu peso aqui" type = "text" value = {props.peso} onChange = {(e)=> props.setPeso(e.target.value)}/>
            </p>
        </div> 
    )
}