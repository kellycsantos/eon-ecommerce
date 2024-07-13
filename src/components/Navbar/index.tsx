import { useState } from 'react'
import eonWhiteIcon from '../../assets/eon-white.svg'
import searchIcon from '../../assets/icons/icon _search.svg'
import cartIcon from '../../assets/icons/icon _cart.svg'
import menuIcon from '../../assets/icons/user_circle_alt.svg'
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
                {/* <button className='menu-icon' onClick={showMenu}>E</button> */}
                <a href='#' className='menu-icon'>
                    <img src={eonWhiteIcon} />
                </a>
                <menu className={`${hideMenu ? 'showNav' : 'hideNav'}`}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </menu>
                <section>
                    <button style={{backgroundImage: `url(${searchIcon})`}} onClick={showMenu}></button>
                    <button style={{backgroundImage: `url(${cartIcon})`}} onClick={showMenu}></button>
                    <button style={{backgroundImage: `url(${menuIcon})`}} onClick={showMenu}></button>
                </section>
            </nav>

        </>
    )
}