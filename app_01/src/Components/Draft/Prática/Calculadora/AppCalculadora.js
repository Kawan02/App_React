import React, { useState } from "react"
import TabelaIMC from "./Tabela/TabelaIMC"
import Peso from "./Peso/Peso"
import Altura from "./Altura/Altura"
import CalcularIMC from "./Calcular/CalcularIMC"
import Resultado from "./Resultado/Resultado"

export default function AppCalculadora() {

    const [peso, setPeso] =  useState()
    const [altura, setAltura] = useState()
    const [resultado, setResultado] = useState(0)

    return (
        <>
            <Peso peso ={peso} setPeso ={setPeso}/>
            <Altura altura ={altura} setAltura ={setAltura}/>
            <CalcularIMC p ={peso} a ={altura} r ={setResultado}/>
            <Resultado r ={resultado}/>
            <TabelaIMC/>
        </>
    )
}