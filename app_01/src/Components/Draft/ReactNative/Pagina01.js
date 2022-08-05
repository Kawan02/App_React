import React from "react"
import './EsStyle.css'

export default function Pagina01() {

    const LinksPaginas = (pagina) => {
        if (pagina == 0) {
            window.open("http://localhost:3000/", "_self")
        }
    }

    return (
        <>
          <div class="login__container">
                <h1 class="login__title">Login</h1>
                <input class="login__input" type="email" placeholder = "e-mail" required></input>
                <span class="login__input-border"></span>
                <input class="login__input" type="password" placeholder = "senha" required></input>
                <span class="login__input-border"></span><br/>
                <button class="submit">Login</button>
           </div>
                <br/>
            <div className = "Teste">
                <button onClick = {() => LinksPaginas(0)}>
                    Voltar para página principal
                </button>
            </div>
        </>
    )
}