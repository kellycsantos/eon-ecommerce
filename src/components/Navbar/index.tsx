import { useState } from 'react'
import eonWhiteIcon from '../../assets/eon-white.svg'
import './navbar.scss'
export default function Header() {
/*
    classe transparente só vai ser ativada quando:
    - estiver na home
    - valor do scroll for menor que o banner
*/

const [visibleMenu, setVisibleMenu ] = useState(false)

function showMenu(){
    setVisibleMenu(!visibleMenu)
}


    return (
        <>
            <nav className={'principalNav'}>
                <a href='#'>
                <img className='menu-icon' src={eonWhiteIcon} />
                </a>
                <menu style={{display: `${visibleMenu ? 'flex' : 'none'}`}}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </menu>

                <section>
                    <li></li>
                    <li></li>
                    <li></li>
                </section>


                <button onClick={showMenu}>X</button>
            </nav>

        </>
    )
}