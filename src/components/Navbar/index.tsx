import { useState } from 'react'
import eonWhiteIcon from '../../assets/eon-white.svg'
import './navbar.scss'
export default function Header() {
    /*
        classe transparente só vai ser ativada quando:
        - estiver na home
        - valor do scroll for menor que o banner
    */

    const [hideMenu, sethideMenu] = useState(false)

    function showMenu() {
        console.log('Valor', hideMenu)
        sethideMenu(!hideMenu)
        // criar uma classe e adicionar ela no 
        // body para impedir o scroll
        
        // hideMenu === true ?
        // document.body.style.overflowY = 'scroll' :
        // document.body.style.overflowY = 'hidden'
        console.log('Valor', hideMenu)
    }


    return (
        <>
            <nav className={'principalNav'}>
              {/* <p style={{color: 'yellow'}}>{visibleMenu ? 'Ola' : 'Tchau'}</p>   */}
                <a href='#'>
                    <img className='menu-icon' src={eonWhiteIcon} />
                </a>
                <menu className={`${hideMenu ? 'showNav' : 'hideNav'}`}>
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