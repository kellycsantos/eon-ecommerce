import './footer.scss'

import Button from "../../components/Button"
import visa from '../../assets/images/card icons/visa.png'
import mastercard from '../../assets/images/card icons/mastercard.png'
import pix from '../../assets/images/card icons/pix.png'

import raSeal from '../../assets/images/seals/reclame_aqui.png'
import ebit from '../../assets/images/seals/ebit.png'
import ssl from '../../assets/images/seals/ssl.png'

import facebook from '../../assets/icons/social media/facebook.svg'
import github from '../../assets/icons/social media/github.svg'
import help from '../../assets/icons/social media/help.svg'
import linkedin from '../../assets/icons/social media/linkedin.svg'


import { Categories, AboutUs } from '../../constants'

const payment_form = [
    { name: 'Visa', icon: visa },
    { name: 'Mastercard', icon: mastercard },
    { name: 'Pix', icon: pix },
]
const seals = [
    { name: 'Reclame aqui', icon: raSeal },
    { name: 'Ebit Excelente', icon: ebit },
    { name: 'SSL Certificado', icon: ssl },
]
const socialMedia = [
    { name: 'Reclame aqui', icon: linkedin },
    { name: 'Ebit Excelente', icon: github },
    { name: 'SSL Certificado', icon: facebook },
    { name: 'SSL Certificado', icon: help }
]
export default function Footer() {

    return (
        <footer>
            <section className="links-rapidos">
                <h4>Links rápidos</h4>
                <div className="buttons_container">

                    <Button text="Suporte" />
                    <Button text="Minhas compras" />
                    <Button text="Meu perfil" />
                </div>
            </section>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>

                <div>
                    <section>
                        <h4>Forma de pagamento</h4>
                        <div className="payment-forms_container">

                            {
                                payment_form.map((form) =>
                                    <img src={form.icon} alt={form.name} key={form.name} />
                                )
                            }
                        </div>
                    </section>
                    <section>
                        <h4>Selos</h4>
                        <div className="seals_container">

                            {
                                seals.map((seal) =>
                                    <img src={seal.icon} alt={seal.name} key={seal.name} />
                                )
                            }
                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <h4>Categorias</h4>
                        {
                            Categories.map((category, index) => <li key={index}>{category.categoryName}</li>)
                        }
                    </section>
                </div>
                <div>
                    <section>
                        <h4>Sobre nós</h4>
                        {
                            AboutUs.map((link, id) =>
                                <li key={id}>{link.title}</li>
                            )
                        }
                    </section>
                </div>
                <div>
                    <section>
                        <h4>Nossa sede</h4>
                        <p>Shayera Hall, 2810 <br />
                            Faria Lima <br />
                            São Paulo - SP</p>
                    </section>
                    <section>
                        <h4>Nossas redes</h4>
                        {
                            socialMedia.map((media, index) =>
                                <img src={media.icon} alt={media.name} key={index} />
                            )
                        }
                    </section>
                </div>
            </div>
        </footer>
    )
}