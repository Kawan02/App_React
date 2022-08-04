import React, {useState} from 'react'
import AppCiclo from './AppCiclo'

export default function Ciclo() {

    const [carro, setCarro] = useState()

    const Ocultar = () => {
        setCarro(!carro)
    }

    return (
        <>
            <h1>Componentes de Classes</h1>
            {carro ?  <AppCiclo freia = {10} fator = {10}/> : ""}
            <button onClick = {() => Ocultar()}>Ocultar</button>
    
        </>
    )
}