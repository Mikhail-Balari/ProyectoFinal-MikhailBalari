import './assets/Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        let totalQuantity = 0;

        for (const item of cart) {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
        }

        return { total, totalQuantity };
    };

    const { total, totalQuantity } = calculateTotal();

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el Carrito</h1>
                <Link to='/' className='AddButtom'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="AddButtom">Limpiar Carrito</button>
            <br></br>
            <Link to='/checkout' className='AddButtom'>Checkout</Link>
        </div>
    )
}

export default Cart