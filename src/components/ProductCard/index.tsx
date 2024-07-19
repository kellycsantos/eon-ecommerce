import './product-card.scss'
import macbook from '../../assets/images/products/macbook.png'
export default function Card(){
    return(
        <section className='product-card'>
            <img src={macbook} alt="Macbook pro" />
            <h5>Macbook Pro '13 Cinza espacial</h5>
            <h6>R$ 6.900.00</h6>
        </section>
    )
}