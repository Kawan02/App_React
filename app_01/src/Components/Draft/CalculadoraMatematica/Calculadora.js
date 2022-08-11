import React, {useState} from "react";
import './StyleCalculadora.css'

export default function Calculadora() {

    const [valorTela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)

    //Componentes
    const Tela = (valor, res) => {
        return(
            <div style = {div}>
                <span style = {spanOper}>{valor}</span>
                <span style = {spanRes}>{res}</span>
            </div>
        )
    }

    const Botao = (label, clica) => {
        return (
            <button style ={botao} onClick = {clica}>{label}</button>
        )
    }

    //Funções
    const addDigitoTela = (d) => {
        if((d == '+' || d == '-' || d == '*' || d == '/') && operado) {
            console.log("+-*/")
            setOperado(false)
            setValorTela(resultado + d)
            return
        }

        if(operado) {
            setValorTela(d)
            setOperado(false)
            return
        }

        const valorDigitadoTela = valorTela + d
        setValorTela(valorDigitadoTela)
    }

    const LimparTela = () => {
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }

    const Operacao = (oper) => {
        if(oper == '<-') {
            let vtela = valorTela
            vtela = vtela.substring(0, (vtela.length - 1))
            setValorTela(vtela)
            setOperado(false)
            return
        }

        try{
            const r = eval(valorTela) // Cálculo
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        } catch {
            setResultado('Error')
        }
    }

    //Estilos
    const div ={
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor : '#82877c',
        flexDirection : 'column',
        width: 260,
    }

    const spanOper = {
        fontSize: 25,
        color: '#fff',
        height: 20,
    }

    const spanRes = {
        fontSize: 50,
        color: '#fff',
    }

    const botao = {
        fontSize: 30,
        height: 75,
        width: 75,
        padding: 20,
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#82877c',
        textAlign: 'center',
        outline: 'none',
        // borderRadius: '1em'
    }

    const conteiner = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        border: '1px solid #000',
    }

    const botoes = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#000',
    }

    return (
        <>
            <div style = {conteiner}>
                <h3>Calculadora Matemática Simples</h3>
                {Tela(valorTela, resultado)}
                    <div style = {botoes}>
                        {Botao('AC', LimparTela)}
                        {Botao('(', ()=>addDigitoTela('('))}
                        {Botao(')', ()=>addDigitoTela(')'))}
                        {Botao('/', ()=>addDigitoTela('/'))}
                        {Botao('7', ()=>addDigitoTela('7'))}
                        {Botao('8', ()=>addDigitoTela('8'))}
                        {Botao('9', ()=>addDigitoTela('9'))}
                        {Botao('*', ()=>addDigitoTela('*'))}
                        {Botao('4', ()=>addDigitoTela('4'))}
                        {Botao('5', ()=>addDigitoTela('5'))}
                        {Botao('6', ()=>addDigitoTela('6'))}
                        {Botao('-', ()=>addDigitoTela('-'))}
                        {Botao('1', ()=>addDigitoTela('1'))}
                        {Botao('2', ()=>addDigitoTela('2'))}
                        {Botao('3', ()=>addDigitoTela('3'))}
                        {Botao('+', ()=>addDigitoTela('+'))}
                        {Botao('0', ()=>addDigitoTela('0'))}
                        {Botao('.', ()=>addDigitoTela('.'))}
                        {Botao('<-', ()=>Operacao('<-'))}
                        {Botao('=', ()=>Operacao('='))}
                    </div>
            </div>
        </>
    )
}