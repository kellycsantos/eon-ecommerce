import { useState } from 'react'
import eonWhiteIcon from '../../assets/eon-white.svg'
import searchIcon from '../../assets/icons/icon _search.svg'
import cartIcon from '../../assets/icons/icon _cart.svg'
import userIcon from '../../assets/icons/icon_user_circle.svg'
// import menuIcon from '../../assets/icons/icon_menu.svg'
// import menuCloseIcon from '../../assets/icons/icon_menu-close.svg'
import './navbar.scss'
export default function Header() {

    const [hideMenu, sethideMenu] = useState(false)

    function showMenu() {
        const body = document.querySelector('body')
        const menu = document.querySelector('#links_container')
        sethideMenu(!hideMenu)
        if (hideMenu === true) {
            body?.classList.remove('scrollBlock')
        } else {
            body?.classList.add('scrollBlock')
        }
    }


    return (
        <>
            <nav className={'principalNav'}>
                {/* <p style={{color: 'yellow'}}>{visibleMenu ? 'Ola' : 'Tchau'}</p>   */}
                {/* <button className='menu-icon' onClick={showMenu}>E</button> */}
                <a href='#' className='menu-icon'>
                    <img src={eonWhiteIcon} />
                </a>
                <menu id='links_container' className={`${hideMenu ? 'showNav' : 'hideNav'}`}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </menu>
                <section className='menu_buttons'>
                    <button style={{ backgroundImage: `url(${searchIcon})` }}></button>
                    <button style={{ backgroundImage: `url(${cartIcon})` }} ></button>
                    <button className={`menu_icon ${hideMenu ? 'menuCloseIcon' : 'menuOpenIcon'}`}
                        onClick={showMenu}></button>
                    {/* <button className='menu_icon' 
                        style={{ backgroundImage: `url(${hideMenu ? menuCloseIcon : menuIcon})` }} 
                        onClick={showMenu}></button> */}
                    <button className='user_icon' style={{ backgroundImage: `url(${userIcon})` }} onClick={showMenu}></button>
                </section>
            </nav>
        </>
    )
}