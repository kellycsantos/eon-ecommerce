import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import eonWhiteIcon from '../../assets/eon-white.svg'
import searchIcon from '../../assets/icons/icon _search.svg'
import cartIcon from '../../assets/icons/icon _cart.svg'
import userIcon from '../../assets/icons/icon_user_circle.svg'
// import menuIcon from '../../assets/icons/icon_menu.svg'
// import menuCloseIcon from '../../assets/icons/icon_menu-close.svg'
import './navbar.scss'
export default function Header() {

    const [hideMenu, sethideMenu] = useState(false)
    const links = [
        { title: 'Inicio', url: '/' },
        { title: 'Produtos', url: '/produtos' },
        { title: 'Suporte', url: '/suporte' },
    ]

    function showMenu() {
        const body = document.querySelector('body')
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
                <a href='#' className='menu-icon'>
                    <img src={eonWhiteIcon} />
                </a>
                <menu id='links_container' className={`${hideMenu ? 'showNav' : 'hideNav'}`}>
                    {
                        links.map((link, index) =>
                            <NavLink to={link.url} key={index}>{link.title}</NavLink>
                        )
                    }
                </menu>
                <section className='menu_buttons'>
                    <button style={{ backgroundImage: `url(${searchIcon})` }}></button>
                    <button style={{ backgroundImage: `url(${cartIcon})` }} ></button>
                    <button className={`menu_icon ${hideMenu ? 'menuCloseIcon' : 'menuOpenIcon'}`}
                        onClick={showMenu}></button>
                    <button className='user_icon' style={{ backgroundImage: `url(${userIcon})` }} onClick={showMenu}></button>
                </section>
            </nav>
        </>
    )
}