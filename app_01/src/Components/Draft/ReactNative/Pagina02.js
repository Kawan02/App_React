import React from "react"

export default function Pagina02() {

    const LinksPaginas = (pagina) => {
        if (pagina == 0) {
            window.open("http://localhost:3000/", "_self")
        }
    }

    return (
        <>
            <div>
                <h1>Página 02</h1>
                <h3>Estudando React</h3>
            </div>

            <div className = "Teste">
                <button onClick = {() => LinksPaginas(0)}>
                    Voltar para página principal
                </button>
            </div>
        </>
    )
}