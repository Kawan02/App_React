import React, {useState} from 'react'
import Led from './Components/Led'


// Renderização condicional
export default function App() {

  const [log, setLog] = useState(false)

  const msgLog =() => {
    return 'Usuário logado'
  }

  const msgSetLog =() => {
    return 'Favor Logar'
  }

  const comprimento=() => {
    const hora = new Date().getHours()
    if (hora >= 0 && hora < 13) {
      return <p>Bom dia!</p>
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  } 


  return(
    <>
      {comprimento()}
      <p>{log? msgLog(): msgSetLog()}</p>
      <button onClick={(() => setLog(!log))}>{log? 'Logoff': 'Login'}</button>
    </>
  )
}

//export default App()



