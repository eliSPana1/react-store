import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import {totalPrice} from '../../Utils'
import "./styles.css"


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    //Para ver si esta listando los productos 
    //console.log('PRODUCT TO SHOW: ', context.productToShow); 
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products : context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice:  totalPrice(context.cartProducts)

        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-main flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                    className="size-6 text-black-500 cursor-pointer"
                    onClick={() =>context.CloseCheckoutSideMenu()}>
                    </XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id = {product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price} 
                            handleDelete ={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total</span>
                    <span className="font-medium text-2xl">S/. {totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-black py-3 w-full text-white rounded ' onClick={() =>handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu