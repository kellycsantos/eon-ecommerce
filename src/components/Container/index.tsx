import './container.scss'
import { IContainer } from '../../interfaces/Icontainer'
export default function Container({children, title}: IContainer){
    return(
        <section className='Container'>
            <h2 className='title'>{title}</h2>
            <div className='body-content'>

            {children}
            </div>
        </section>
    )
}