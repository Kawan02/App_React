import React, {useState, useEffect} from "react"
import Pagina01 from "./Pagina01"
import Pagina02 from "./Pagina02"

export default function EntreTelas() {

    const [pagina, setPagina] = useState(0)

    useEffect(
        () => {
            const url = window.location.href
            const res = url.split("?")
            setPagina(res[1])
        }
    )

    const LinksPaginas = (pagina) => {
        if(pagina == 1) {
            window.open("http://localhost:3000/?1", "_self")
        } else if(pagina == 2) {
            window.open("http://localhost:3000/?2", "_self")
        } else if(pagina == 0) {
            window.open("http://localhost:3000/", "_self")
        }
    }

    const retornaPagina =() => {
        if(pagina == 1) {
            return <Pagina01/>
        } else if(pagina == 2) {
            return <Pagina02/>
        } else {
            return <div>
                        <button onClick = {() => LinksPaginas(1)}>Pagina 01</button>
                        <button onClick = {() => LinksPaginas(2)}>Pagina 02</button>
                    </div>
        }
    }

    return (
        <>
            <div>
                <h2>Seja bem vindo ao nosso portal!</h2>
            </div>
            {retornaPagina()}
        </>
    )
}