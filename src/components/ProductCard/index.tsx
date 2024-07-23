import './product-card.scss'
import ICard from '../../interfaces/Icard'
export default function Card({ name, price, img }: ICard) {
    return (
        <section className='product-card'>
            <div className='img-wrapper'>
                <img src={img} alt="Macbook pro" />
            </div>
            <h5>{name}</h5>
            <h6>R$ {price}</h6>
        </section>
    )
}