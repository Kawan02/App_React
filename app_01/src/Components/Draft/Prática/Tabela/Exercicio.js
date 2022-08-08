import { useState } from "react"

const carros = [
    {categoria: "Esporte", preco: 50000, modelo: "Golf Sportline"},
    {categoria: "Esporte", preco: 60000, modelo: "Golf GTI"},
    {categoria: "Esporte", preco: 50000, modelo: "Honda Civic"},
    {categoria: "Esporte", preco: 180000, modelo: "BMW X6"},
    {categoria: "SUV", preco: 80000, modelo: "HRV"},
    {categoria: "SUV", preco: 70000, modelo: "T-Cross"},
]

const Retorno = (cat) =>{
    const li = []
    carros.forEach(
        (carro) => {
            if(carro.categoria.toUpperCase() == cat.toUppperCase() || cat.toUppperCase() == ""){
                li.push(
                    <tr>
                        <td>{carro.categoria}</td>
                        <td>{carro.preco}</td>
                        <td>{carro.modelo}</td>
                    </tr>
                )
            }
        }
    )
        return li
}

const TabelaCarros = (cat) =>{
    return (
        <table className = "tabela" border = "1" style = {{borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>Categoria:</th> <th>Preço: </th> <th>Modelo: </th>
                </tr>
            </thead>
            <tbody>
                {Retorno(cat)}
            </tbody>
        </table>
    )
}

const Pesquisa = (cat, sCat) => {
    return (
        <div>
            <label>Digite um categoria</label>
            <input type = "text" value = {cat} onChange = {(e)=> sCat(e.target.value)}/>
        </div>
    )
}
export default function Exercicio() {

    const [categoria, setCategoria] = useState("")

    return (
        <>
            {Pesquisa(categoria, setCategoria)}
        <br/>
            {TabelaCarros()}
        </>
    )
}