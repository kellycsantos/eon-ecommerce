import './categories.scss'
import  eletrodomestico from '../../assets/icons/categories/eletrodomestico.svg?react'
import  fitness from '../../assets/icons/categories/fitness.svg?react'
import  gadget from '../../assets/icons/categories/gadget.svg?react'
import  informatica from '../../assets/icons/categories/informatica.svg?react'
import  multimedia from '../../assets/icons/categories/multimedia.svg?react'
import  notebook from '../../assets/icons/categories/notebook.svg?react'
import  smarthome from '../../assets/icons/categories/smarthome.svg?react'
import  smartphone from '../../assets/icons/categories/smartphone.svg?react'
import  videogame from '../../assets/icons/categories/video-game.svg?react'
import  tv from '../../assets/icons/categories/tv.svg?react'
import { useState } from 'react'

export default function Categories(){
    const categorias = [
        {icon: eletrodomestico, title: 'Eletrodomesticos'},
        {icon: fitness, title: 'Fitness'},
        {icon: gadget, title: 'Gadges'},
        {icon: informatica, title: 'Informática'},
        {icon: multimedia, title: 'Audio e video'},
        {icon: notebook, title: 'Notebook'},
        {icon: smarthome, title: 'Casa inteligente'},
        {icon: tv, title: 'Tv'},
        {icon: smartphone, title: 'Smartphones'},
        {icon: videogame, title: 'Video-game'}
    ]
    const [activeCategory, setCategory] = useState(Number || undefined)

    function getCategory(id : number ){
      setCategory(id)
    }
    return(
        <section className="categories" role="group">
          {
            categorias.map((categoria, index) => 
            
            <div key={index} className={activeCategory == index ? 'active' : ''} onClick={() => getCategory(index)}>
              {categoria.icon()}
   
                <p >{categoria.title}</p>
            </div>
            
            )
          }
          
        </section>
    )

}