import React, {useEffect, useState} from "react"
import axios from "axios"

export default function Funcional() {

    const [carros, setCarros] = useState([])

    useEffect(()=> {
        axios.get('https://API.kawanmessias.repl.co')
            .then(res => {
                const dadosCarros = res.data
                setCarros(dadosCarros)
            })
    })

        
    

        return (
            <div>
                {carros.map(
                    carro => <li key ={carro.id}> {carro.id} - {carro.marca} - {carro.modelo}</li> 
                )}
            </div>
        )
} 