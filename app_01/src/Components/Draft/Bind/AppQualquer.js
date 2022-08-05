import React, {useState} from 'react'
import CarroBind from './CarroBind'


export default function AppQualquer() {

    const [carro, setCarro] = useState()

     const Ocultar = () => {
      setCarro(!carro)

     }
    return (
        <>
            <h1>Curso de React</h1>
            <CarroBind freia = {10} fator = {10}/>
        </>
    )
}