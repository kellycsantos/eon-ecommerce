import { useState } from 'react'

import './App.scss'
import Navbar from './components/Navbar'
let y = window.screen.height


// function menuStyle(e : any){
//   // console.log('Tamanho telaaa', x )
//   console.log('Tamanho do dispo', window.innerHeight)
//   console.log('scroll', e)
//   console.log('scroll prima', e.target?.scrollingElement.scrollTop)
//   console.log('Tamanho do scroll', e.target?.scrollingElement.scrollHeight)
// }
// // window.addEventListener("resize", onresize);
// window.addEventListener("resize",menuStyle)
// window.addEventListener( "scroll",menuStyle)



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div id='home-banner' className='gradient' style={{height: '100vh', position: 'relative'}}>
    </div>
     <p>rotas</p>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>
     <h4>Titulo 4</h4>
     <h5>Titulo 5</h5>
     <h1>Titulo 1</h1>
     <h2>Titulo 2</h2>
     <h3>Titulo 3</h3>

    </>
  )
}

export default App
