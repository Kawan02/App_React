import React from "react";
import './Alt.css'


export default function Altura (props) {
    return (
        <div>
            <p className = "altura">Altura: <td/>
                <input placeholder = "Digite sua altura aqui" type = "text" value = {props.altura} onChange = {(e)=> props.setAltura(e.target.value)}/>
            </p>
        </div>
    )
}