import React, {useEffect, useState} from "react"

export default function Fetch() {

    const [carros, setCarros] = useState([])

    useEffect(()=> {
        fetch('https://API.kawanmessias.repl.co')
            .then(resultado => resultado.json())
            .then(
                (resultado)=> {
                    setCarros(resultado)
                }
            )
    })

        
    

        return (
            <div>
                {carros.map(
                    carro => <li key ={carro.id}> {carro.id} - {carro.marca} - {carro.modelo}</li> 
                )}
            </div>
        )
} 