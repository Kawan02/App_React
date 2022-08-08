import React from "react";
import './Res.css'

export default function Resultado (props) {
    return (
        <div>
            <strong>
                <p className = "botao">Resultado: {props.r.toFixed(2)}</p>
            </strong>
        </div>
    )
}