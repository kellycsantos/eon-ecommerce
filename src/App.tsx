import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Navbar from './components/Navbar'
import HomeView from './views/Home'
import Footer from './features/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>

      <p>rotas</p>
      <h1>Titulo 1</h1>
      <h2>Titulo 2</h2>
      <h3>Titulo 3</h3>
      <h4>Titulo 4</h4>
      <h5>Titulo 5</h5>
      <Footer/>

      {/* 
  -nav
  pages
  -footer
*/}
    </>
  )
}

export default App
