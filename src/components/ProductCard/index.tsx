import './product-card.scss'
import macbook from '../../assets/images/products/macbook.png'
export default function Card({name,price, img}){
    return(
        <section className='product-card'>
            <img src={img} alt="Macbook pro" />
            <h5>{name}</h5>
            <h6>R$ {price}.00</h6>
        </section>
    )
}