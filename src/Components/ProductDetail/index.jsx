import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import "./styles.css"
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    //Para ver si esta listando los productos 
    //console.log('PRODUCT TO SHOW: ', context.productToShow); 
    
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="size-6 text-black-500 cursor-pointer"
                    onClick={() =>context.CloseProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                className="w-full h-full rounded-lg" 
                src={context.productToShow.images?.[0]} 
                alt={context.productToShow.tittle}  />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>S/.{context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail