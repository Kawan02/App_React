import React, { useState, useEffect} from "react"
import './Tabela_01/Table.css'
import './Resultado/Res.css'
import './Peso/Pes.css'
import './Altura/Alt.css'
import './Calcular/Cal.css'

const TabelaIMC =() => {
    return(
        <table className = "tabela" border = "1" style = {{borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>
                        Classificação
                    </th>
                    <th>
                        IMC
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 a 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 a 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 30,4</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Mórbida</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
        
    )
}

const Peso = (p, sp) => {
    return (
        <div>
            <p className = "peso">Peso: <td/>
                <input placeholder = "Digite seu peso aqui" type = "text" value = {p} 
                    onChange = {(e)=> {sp(e.target.value)}}
                />
            </p>
        </div> 
    )
}

const Altura = (altura, set) => {
    return (
        <div>
            <p className = "altura">Altura: <td/>
                <input placeholder = "Digite sua altura aqui" type = "text" value = {altura} 
                    onChange = {(e)=> {set(e.target.value)}}
                />
            </p>
        </div>
    )
}

// const calcular = (p, a, sr) => {
//     const calc = () => {
//         sr(p/(a*a))
//     }
//     return (
//         <div> 
//             <button className = "bot" onClick = {calc}>Calcular</button>
//         </div>
//     )
// }

const Resultado = (r) => {
    return (
        <div>
            <p className = "botao">Resultado: {r.toFixed(2)}</p>
        </div>

        
    )
}



export default function Calc() {
   
    const [peso, setPeso] =  useState()
    const [altura, setAltura] = useState()
    const [resultado, setResultado] = useState(0)


   
    useEffect(() => {
        document.title = "CalculadoraIMC"
    })

    useEffect(() => {
        setResultado(()=> (peso/(altura * altura)))

    }, [peso, altura])

    
    return (
        <>
            {Peso(peso, setPeso)}
            {Altura(altura, setAltura)}
            {/* {calcular(peso, altura, setResultado)} */}
            {Resultado(resultado)}
            {TabelaIMC()}

            {/* <input type = "text" value = {resultado.toFixed(2)} 
            onChange = {(e) => setResultado(e.target.value)} required/> */}
        </>
    )
}