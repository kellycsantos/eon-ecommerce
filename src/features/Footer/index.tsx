import Button from "../../components/Button"
import Container from "../../components/Container"
Container
Button
export default function Footer() {
    return (
        <footer>
            <section>
                <h4>Links rápidos</h4>
                <Button />
                <Button />
                <Button />
            </section>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '64px'}}>

            <div>
                <section>
                    <h4>Forma de pagamento</h4>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
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