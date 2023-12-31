import './assets/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, name, price}

        addItem(item, quantity)
    }

    return(
        <article className='CardItem card'>
            <header className='Header card-header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture className='card-img-top'>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section className='card-body'>
                <p className='Info card-text'>Categoria: {category}</p>
                <p className='Info card-text'>Descripción: {description}</p>
                <p className='Info card-text'>Precio: ${price}</p>
                <p className='Info card-text'>Stock: {stock}</p>
            </section>
            <footer className='ItemFooter card-footer'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='AddButtom'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
