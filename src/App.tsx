import { useState } from 'react'

import './App.scss'
import Navbar from './components/Navbar'
let y = window.screen.height
window.addEventListener('scroll', (e) =>{
  console.log('Tamanho telaaa', y )
  console.log('scroll', e)
  console.log('scroll prima', e.target?.scrollingElement.scrollTop)
  console.log('Tamanho do scroll', e.target?.scrollingElement.scrollHeight)

  
  // console.log('scroll duo', e.scrollingElement.scrollHeight )
})
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div style={{height: '100vh', backgroundImage: 'linear-gradient(#e66465, #9198e5)', position: 'relative'}}>
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
