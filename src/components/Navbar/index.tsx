import eonWhiteIcon from '../../assets/eon-white.svg'
import './navbar.scss'
export default function Header() {

    return (
        <>
            <nav className='principalNav'>
                <a href=''>
                <img src={eonWhiteIcon} />

                </a>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </nav>

        </>
    )
}