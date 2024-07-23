import './container.scss'

export default function Container({children, title}){
    return(
        <section className='Container'>
            <h2 className='title'>{title}</h2>
            <div className='body-content'>

            {children}
            </div>
        </section>
    )
}