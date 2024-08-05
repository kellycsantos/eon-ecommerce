import './footer.scss'

import Button from "../../components/Button"
import visa from '../../assets/images/card icons/visa.png'
import mastercard from '../../assets/images/card icons/mastercard.png'
import pix from '../../assets/images/card icons/pix.png'

const payment_form = [
    {name: 'Visa', icon: visa},
    {name: 'Mastercard', icon: mastercard},
    {name: 'Pix', icon: pix},
]

export default function Footer() {
    
    return (
        <footer>
            <section className="links-rapidos">
                <h4>Links rápidos</h4>
                <div className="button-row">

                <Button text="Suporte"/>
                <Button text="Minhas compras"/>
                <Button text="Meu perfil"/>
                </div>
            </section>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '64px'}}>

            <div>
                <section>
                    <h4>Forma de pagamento</h4>
                    {
                        payment_form.map((form) => 
                         <img src={form.icon} alt={form.name}/>
                        )
                    }
                </section>
                <section>
                    <h4>Selos</h4>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </section>
            </div>
            <div>
                <section>
                    <h4>Categorias</h4>
                    <p>Lorem, ipsum</p>
                    <p>Ipsum</p>
                    <p>Lorem, ipsum</p>
                    <p>Ipsum</p>
                    <p>Lorem, ipsum</p>
                    <p>Ipsum</p>
                    <p>Lorem, ipsum</p>
                    <p>Ipsum</p>
                    <p>Ipsum</p>

                </section>
            </div>
            <div>
                <section>
                    <h4>Sobre nós</h4>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </section>
            </div>
            <div>
                <section>
                    <h4>Nossa sede</h4>
                    <p>Shayera Hall, 2810
                        Faria Lima
                        São Paulo (SP)</p>
                </section>
                <section>
                    <h4>Nossas redes</h4>
                    <p>Shayera Hall, 2810
                        Faria Lima
                        São Paulo (SP)</p>
                </section>
            </div>
            </div>
        </footer>
    )
}