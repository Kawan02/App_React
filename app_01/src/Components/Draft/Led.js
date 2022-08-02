import React, {useState} from 'react'
import LedGreen from './imgs/led_verde.jpg'
import LedRed from './imgs/led_red.png'

export default function Led(props) {

  //const [ligado, setLigado] =useState(false)

  return(
    <>
     <img style={{width: '50px'}} src={props.ligado? LedGreen: LedRed}/>
     <button onClick={()=> props.setLigado(!props.ligado)}>{props.ligado? 'Desligar': 'Ligar'}</button>
    </>
  )
}