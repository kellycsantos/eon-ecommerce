import './button.scss'
import { IButton } from '../../interfaces/Ibutton'
export default function Button({text, click} : IButton){
    return(
        <button className='btn-component' onClick={click}>{text ? text : 'Clique me'}</button>
    )
}