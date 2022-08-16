import React from "react";

function ListaNumeros (props) {
    const RecebeNumeros = props.numeros
    const list_Numeros = RecebeNumeros.map(
        (n)=> <li key = {n.toString()}>{n}</li>
    )

    return (<ul>{list_Numeros}</ul>)
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Key() {
    return (
        <>
            <ListaNumeros numeros = {lista}/>
        </>
    )
}