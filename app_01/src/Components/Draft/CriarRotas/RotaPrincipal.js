import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Rota01 from './Rota01'
import Rota02 from './Rota02'
import Rota03 from './Rota03'
import JogoV from '../JogoDaVelha/JogoV'
import Calculadora from '../CalculadoraMatematica/Calculadora'
// import './TesteEstilo.css'

// const css 

export default function RotaPrincipal() {

  return(
    <> 
        <header>
            <ul style = {{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",   
                }}>
                <li>
                    <Link to = "/">Home</Link>
                </li>
            </ul>
            <ul>
                <li style = {{
                    marginTop: "-40px"
                }}><Link to = "/jogo">Jogo da Velha</Link></li>
                <br/>
                <li style = {{
                    marginTop: "-20px"
                }}><Link to = "/calculadora">Calculadora</Link></li>
                <br/>
                {/* <li><Link to = "/Rota01">Página 1</Link></li>
                <br/>
                <li><Link to = "/Rota02">Página 2</Link></li>
                <br/>
                <li><Link to = "/Rota03">Página 3</Link></li> */}
            </ul>
        </header>
        <main>
            <Routes>
            <Route path = "/calculadora" element = {<Calculadora/>}/>
                <Route path = "/jogo" element = {<JogoV/>}/>
                <Route path = "/Rota01" element={<Rota01/>}/>
                <Route path = "/Rota02" element = {<Rota02/>}/>
                <Route path = "/Rota03" element = {<Rota03/>}/>
            </Routes>
        </main>
    </>
  )
}

