
import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types";
export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) =>{
    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0)

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = () =>setIsProductDetailOpen(true)
    const CloseProductDetail = () =>setIsProductDetailOpen(false)

    //  Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    //  Shopping Cart  . Add Productos to cart 
    const [cartProducts, setCartProducts] = useState([])

    //Checkout Side Menu  . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const OpenCheckoutSideMenu = () =>setIsCheckoutSideMenuOpen(true)
    const CloseCheckoutSideMenu = () =>setIsCheckoutSideMenuOpen(false)

    //Shopping Cart . Order
    const [order, setOrder] = useState([])

    //Get products 
    const [items, setItems] = useState(null)
    useEffect (() =>{
        fetch('https://api.escuelajs.co/api/v1/products') // la onformación viene en tipo promesa
        .then(response =>response.json()) // uso then para resolver esa promesa
        .then(data =>setItems(data))
      },[])

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            OpenProductDetail,
            CloseProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            OpenCheckoutSideMenu,
            CloseCheckoutSideMenu,
            order,
            setOrder,
            items, 
            setItems



        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };