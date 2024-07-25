import './gallery.scss'
import iphone from '../../assets/images/gallery/iphone.png'
import headset from '../../assets/images/gallery/headset.png'
import notebook from '../../assets/images/gallery/notebook.png'
import aspirador from '../../assets/images/gallery/aspirador.png'
import amazon from '../../assets/images/gallery/smart_amazon.png'
export default function GridImages(){
    return(
        <div className='gallery'>
            

                <img src={iphone} className='first'/>
                <img src={headset} className='second'/>
                <img src={notebook} className='third'/>
                <img src={aspirador} className='fourth'/>
                <img src={amazon} className='fifth'/>
           
        </div>
    )
}