import Banner from "../components/Banner"
import OfferImage from '../assets/images/banner/principal_banner.png'
import Categories from "../components/Categories/Categories"
export default function HomeView(){
    return(
        <>
          <Banner style='gradient' image={OfferImage}/>
          <Categories/>
        </>
    )
}