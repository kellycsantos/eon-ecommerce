import Banner from "../components/Banner"
import OfferImage from '../assets/images/banner/principal_banner.png'
import Categories from "../components/Categories"
import echodot from '../assets/images/products/echodot.png'
import iphone from '../assets/images/products/iphone.png'
import macbook from '../assets/images/products/macbook.png'
import playstation from '../assets/images/products/playstation.png'
import smart_watch from '../assets/images/products/smart_watch.png'
import Card from "../components/ProductCard"
import Container from "../components/Container"

const products = [
  { img: echodot, name: 'Echo Dot 2.0', price: '327,40' },
  { img: iphone, name: 'Iphone 14 Plus', price: '4.889' },
  { img: macbook, name: "Macbook Pro '13 Cinza espacial", price: '6.799' },
  { img: playstation, name: 'Playstation 5 Slim 1 TB', price: '3499' },
  { img: smart_watch, name: 'SmartWatch', price: '356' },
]
export default function HomeView() {
  return (
    <>
      <Banner style='gradient' image={OfferImage} />
      <Categories />
      <Container title="Mais vendidos essa semana">
        {
          products.map((product, index) => <Card key={index} name={product.name} price={product.price} img={product.img} />)
        }
      </Container>

    </>
  )
}