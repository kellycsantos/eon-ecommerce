import macbook from '../../assets/images/products/macbook.png'
export default function Card(){
    return(
        <section>
            <img src={macbook} alt="Macbook pro" />
            <p>Macbook Pro '13 Cinza espacial</p>
            <p>R$ 6.900.00</p>
        </section>
    )
}