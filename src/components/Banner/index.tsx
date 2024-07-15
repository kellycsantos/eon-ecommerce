import Ibanner from "../../interfaces/Ibanner"
import './banner.scss'
export default function Banner({ style, image }: Ibanner) {
    return (
        <>
            <section className={`principal_banner ${style}`} 
                     style={{ background: `url('${image}'), linear-gradient(#2b2b2b, #898989)` }} >
            </section>
        </>
    )
}