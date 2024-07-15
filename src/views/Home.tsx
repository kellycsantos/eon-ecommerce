import Banner from "../components/Banner"
import OfferImage from '../assets/images/banner/principal_banner.png'
export default function HomeView(){
    return(
        <>
          <Banner style='gradient' image={OfferImage}/>
        </>
    )
}